const SERVICES = ["@material-ui/core", "Templates"];
const COMPONENT_FOLDER = "./scripts/components";
const EXCLUSTION_LIST = {
  "@material-ui/core": [
    "Divider",
    "TablePagination",
    "FormControlLabel",
    "withStyles"
  ]
};
const fs = require("fs");
module.exports = function(file, api) {
  const j = api.jscodeshift;
  let root = j(file.source);
  const filePaths = file.path.split("/");
  //remove file name
  const TEMPLATE_FOLDER = filePaths
    .filter((p, i) => filePaths.length - 1 !== i)
    .join("/");
  const fileName = filePaths[filePaths.length - 2];
  let importStatements = "";
  root.find(j.ImportDeclaration).map(path => {
    importStatements = importStatements + "\n" + j(path).toSource();
  });
  root.find(j.ImportDeclaration).forEach(importPath => {
    //each import declaration
    let moduleList = {};
    const serviceIndex = SERVICES.indexOf(importPath.value.source.value);
    const componentLibrary = SERVICES[serviceIndex];
    SERVICES[serviceIndex] &&
      importPath.value.specifiers.map(mod => {
        //imported module
        const moduleName =
          (mod.imported && mod.imported.name) || (mod.local && mod.local.name);
        const componentLibraryName = SERVICES[serviceIndex];
        if (EXCLUSTION_LIST[componentLibraryName].indexOf(moduleName) !== -1) {
          return;
        }
        const componentLibraryLocation = `./node_modules/${componentLibrary}/${moduleName}/${moduleName}.js`;
        if (!fs.existsSync(componentLibraryLocation)) {
          return;
        }
        let component = fs.readFileSync(componentLibraryLocation, "utf8");
        let propTypes = "";
        if (SERVICES[serviceIndex] === "@material-ui/core") {
          propTypes = extractMaterialPropTypes(component, moduleName);
        }
        root.find(j.JSXElement).forEach(jsxElement => {
          const tagName = jsxElement.value.openingElement.name.name;
          // const componentSource = j(jsxElement).toSource();
          const scopePath = `${COMPONENT_FOLDER}/${fileName}`;
          let componentPath = `${COMPONENT_FOLDER}/${fileName}/${componentLibrary}`;
          createDirectory(scopePath);
          if (componentLibrary.split("/").length > 1) {
            let directories = componentLibrary.split("/");
            //allow only two levels of nesting
            const levelOne = `${COMPONENT_FOLDER}/${fileName}/${
              directories[0]
            }`;
            const levelTwo = `${COMPONENT_FOLDER}/${fileName}/${
              directories[0]
            }/${directories[1]}`;
            createDirectory(levelOne);
            createDirectory(levelTwo);
          } else {
            createDirectory(componentPath);
          }
          //write componentSource to a location
          const currentModuleList = moduleList[SERVICES[serviceIndex]];
          if (!Array.isArray(currentModuleList)) {
            moduleList[SERVICES[serviceIndex]] = [];
          }
          moduleList[SERVICES[serviceIndex]].push(moduleName);
          moduleList[SERVICES[serviceIndex]] = [
            ...new Set(moduleList[SERVICES[serviceIndex]])
          ];
          let styleFile = "";
          try {
            styleFile =
              tagName === moduleName &&
              fs.readFileSync(
                `${TEMPLATE_FOLDER}/${fileName}.styles.js`,
                "utf8"
              );
          } catch (err) {
            //make sure the file
            // console.error("ERROR reading styles file ...", err);
          }
          if (tagName === moduleName) {
            const hasStyleFileContent =
              styleFile.indexOf("export") !== -1 &&
              importStatements.indexOf("{styles}") !== -1;
            fs.writeFileSync(
              `${componentPath}/${moduleName}.js`,
              `
              ${importStatements}
              ${
                importStatements.indexOf("PropTypes") === -1
                  ? 'import PropTypes from "prop-types"'
                  : ""
              };
              const ${moduleName}Component = (props) => {
                return <${moduleName} {...props}><>${moduleName}</></${moduleName}>;
              }
              ${moduleName}Component.propList = ${propTypes}
              export default ${
                hasStyleFileContent ? "withStyles(styles)(" : ""
              }${moduleName}Component
              ${hasStyleFileContent ? ")" : ""}
              `
            );
            fs.writeFileSync(
              `${componentPath}/${fileName}.styles.js`,
              styleFile
            );
            if (!fs.existsSync(`${scopePath}/index.js`)) {
              fs.writeFileSync(`${scopePath}/index.js`);
            }
            if (!fs.existsSync(`${COMPONENT_FOLDER}/index.js`)) {
              fs.writeFileSync(`${COMPONENT_FOLDER}/index.js`);
            }
            const currentIndexFile = fs.readFileSync(
              `${scopePath}/index.js`,
              "utf8"
            );
            const mainIndexFile = fs.readFileSync(
              `${COMPONENT_FOLDER}/index.js`
            );
            if (currentIndexFile.indexOf(moduleName) === -1) {
              fs.appendFileSync(
                `${scopePath}/index.js`,
                `
                import ${moduleName} from "./${componentLibrary}/${moduleName}";
                export {${moduleName}};
                `
              );
            }
            if (mainIndexFile.indexOf(fileName) === -1) {
              fs.appendFileSync(
                `${COMPONENT_FOLDER}/index.js`,
                `
                import * as ${fileName} from "./${fileName}/";
                export {${fileName}};
                `
              );
            }
          }
        });
      });
  });
  function extractMaterialPropTypes(componentSource, moduleName) {
    const path = j(componentSource)
      .find(j.Comment)
      .forEach(path => {
        const comment = path.node.comments[0];
        comment.value = comment.value.replace(/.*/g, "");
        return path;
      })
      .toSource();
    let propTypes;
    j(path)
      .find(j.AssignmentExpression)
      .forEach(expression => {
        if (expression.value.left.property) {
          if (
            expression.value.left.property.name === "propTypes" &&
            expression.value.left.object.name === moduleName
          ) {
            //remove _utils too
            let formattedPropTypes = [];
            let t = j(expression.value.right.properties).forEach(prop => {
              if (prop.value.value.type !== "CallExpression") {
                formattedPropTypes.push(j(prop).toSource());
              }
            });
            propTypes = `{${formattedPropTypes.join(",\n")}}`;
          }
        }
      });
    return propTypes
      .replace(/_propTypes/g, "PropTypes")
      .replace(/\.default/g, "")
      .replace(/_unsupportedProp/, "PropTypes.string")
      .replace(/SPACINGS/, "[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]")
      .replace(
        /GRID_SIZES/,
        "['auto', true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]"
      )
      .replace(/_utils.refType/, "PropTypes.string")
      .replace(/_utils.*/, "PropTypes.string,")
      .split(",")
      .map(prop =>
        prop
          .replace(/PropTypes\./g, "")
          .replace(/\.isRequired/g, "")
          .split(":")
          .map((kv, i) => {
            const hasCurly = kv.match(/\}/g);
            if (hasCurly) {
              return `"${kv.replace("}", "").replace(/ /g, "")}"}`;
            }
            return i === 1 ? `"${kv.replace(/ /g, "")}"` : kv;
          })
          .join(":")
      )
      .join(",");
  }
};
function createDirectory(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }
}
