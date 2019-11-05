find . -name '*.js' -not -path "*/node_modules/*" -print | xargs jscodeshift -t node_modules/@material-ui/codemod/lib/v4.0.0/top-level-imports.js
find . -name '*.js' -not -path "*/node_modules/*" -print | xargs jscodeshift -t node_modules/@material-ui/codemod/lib/v4.0.0/optimal-imports.js
find . -name '*.js' -not -path "*/node_modules/*" -print | xargs jscodeshift -t node_modules/@material-ui/codemod/lib/v1.0.0/import-path.js
find . -name '*.js' -not -path "*/node_modules/*" -print | xargs jscodeshift -t node_modules/@material-ui/codemod/lib/v1.0.0/color-imports.js
find . -name '*.js' -not -path "*/node_modules/*" -print | xargs jscodeshift -t node_modules/@material-ui/codemod/lib/v1.0.0/svg-icon-imports.js
