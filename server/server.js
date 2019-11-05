// =================================================================
// get the packages we need ========================================
// =================================================================
const express = require("express");
const http = require("http");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const config = require("config"); // get our config require(file)
const session = require("express-session"); // we remove this require(later)
const MongoDb = require("@markab.io/orbital-api/MongoDb");
const userModel = require("@markab.io/orbital-api/MongoDb/models/user");
const settingsModel = require("@markab.io/orbital-api/MongoDb/models/settings");
const permissionsSchema = require("@markab.io/orbital-api/MongoDb/models/permissions");
const permissionsModel = mongoose.model("Permissions", permissionsSchema);
const kernelModel = require("@markab.io/orbital-api/MongoDb/models/kernel");
const formsSchema = require("@markab.io/orbital-api/MongoDb/models/forms");
const notificationsSchema = require("@markab.io/orbital-api/MongoDb/models/notifications");
const notificationsModel = mongoose.model("Notification", notificationsSchema);
const formsModel = mongoose.model("Forms", formsSchema);
const CMS = require("./src/cms/api");
const Ecommerce = require("./src/ecommerce/api");
const Chat = require("./src/chat/api");
const Kb = require("./src/knowledge-base/api");
const Ride = require("./src/rides/api");
const Game = require("./src/game/api");
const Site = require("./src/markab.io-site/api");
const SqlFlow = require("./src/sqlflow/api");
const WorthManifesto = require("./src/worth-manifesto/api");
const expressPrintRoutes = require("express-print-routes");
const path = require("path");

const getExpressApp = config => {
  // =================================================================
  // starting the server ================================================
  // =================================================================

  // =================================================================
  // App =============================================================
  // =================================================================
  const app = express();
  const port = config.get("server.port"); // used to create, sign, and verify tokens
  const ip = config.get("server.host");
  var server = http.createServer(app);
  server.listen(port);
  console.log(`Magic happens at ${ip}:${port}`);
  // =================================================================
  // configuration ===================================================
  // =================================================================
  app.set("superSecret", config.secret); // secret variable

  // required for passport session auth
  app.use(
    session({
      secret: "secrettexthere",
      saveUninitialized: true,
      resave: true
    })
  );

  //CORS
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });
  // use body parser so we can get info = POST and/or URL parameters
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json({ limit: "50mb", type: "application/json" }));
  // use morgan to log requests to the console
  app.use(morgan("dev"));
  return { server, app };
};

const getAllApis = ({
  server,
  app,
  exceptions: { disableChat, disableRides }
}) => {
  // Get all available end points
  const defaultProps = {
    permissionsModel,
    formsModel,
    settingsModel,
    kernelModel,
    notificationsModel,
    userModel,
    config
  };
  const {
    blogsApiRoutes,
    eventsApiRoutes,
    authApiRoutes,
    userApiRoutes,
    jwtApiRoutes,
    aclApiRoutes,
    formsApiRoutes,
    settingsApiRoutes,
    kernelApiRoutes,
    notificationsApiRoutes
  } = CMS({
    ...defaultProps
  });
  let chatApi;
  let ridesApi;
  if (!disableChat) {
    const { chatApiRoutes } = Chat({
      server,
      ...defaultProps
    });
    chatApi = chatApiRoutes;
  }
  const {
    productsApiRoutes,
    categoriesApiRoutes,
    cartsApiRoutes,
    ordersApiRoutes
  } = Ecommerce({
    app,
    ...defaultProps
  });
  const { knowledgeApiRoutes } = Kb({
    ...defaultProps
  });
  if (!disableRides) {
    const { ridesApiRoutes } = Ride({
      ...defaultProps
    });
    ridesApi = ridesApiRoutes;
  }
  const { gameApiRoutes } = Game({
    ...defaultProps
  });
  const { contactApiRoutes } = Site({
    ...defaultProps
  });
  const { sqlflowApiRoutes } = SqlFlow({
    ...defaultProps
  });
  const { volunteeringsApiRoutes } = WorthManifesto({
    ...defaultProps
  });
  return {
    authApiRoutes,
    userApiRoutes,
    jwtApiRoutes,
    aclApiRoutes,
    formsApiRoutes,
    settingsApiRoutes,
    chatApiRoutes: chatApi,
    kernelApiRoutes,
    notificationsApiRoutes,
    productsApiRoutes,
    categoriesApiRoutes,
    cartsApiRoutes,
    ordersApiRoutes,
    knowledgeApiRoutes,
    ridesApiRoutes: ridesApi,
    gameApiRoutes,
    contactApiRoutes,
    sqlflowApiRoutes,
    blogsApiRoutes,
    eventsApiRoutes,
    volunteeringsApiRoutes,
    ...defaultProps
  };
};

const registerAllRoutes = ({
  app,
  server,
  exceptions,
  authApiRoutes,
  userApiRoutes,
  jwtApiRoutes,
  aclApiRoutes,
  formsApiRoutes,
  settingsApiRoutes,
  chatApiRoutes,
  kernelApiRoutes,
  notificationsApiRoutes,
  productsApiRoutes,
  categoriesApiRoutes,
  cartsApiRoutes,
  ordersApiRoutes,
  knowledgeApiRoutes,
  ridesApiRoutes,
  gameApiRoutes,
  contactApiRoutes,
  sqlflowApiRoutes,
  eventsApiRoutes,
  volunteeringsApiRoutes,
  blogsApiRoutes,
  ...defaultProps
}) => {
  const { disableChat, disableRides, disableNotifications } = exceptions;
  // Register all end points
  // Markab routes
  app.use("/", authApiRoutes);
  app.use("/jwt", jwtApiRoutes);
  app.use("/users", ...userApiRoutes);
  app.use("/settings", ...settingsApiRoutes);
  app.use("/acl", jwtApiRoutes, ...aclApiRoutes);
  app.use("/forms", ...formsApiRoutes);
  app.use("/kernel", ...kernelApiRoutes);
  app.use("/events", ...eventsApiRoutes);
  if (!disableNotifications) {
    app.use("/notifications", ...notificationsApiRoutes);
  }
  // Markab CMS
  app.use("/events", ...eventsApiRoutes);
  app.use("/blogs", ...blogsApiRoutes);
  if (!disableChat) {
    // Markab Chat
    app.use("/chat", ...chatApiRoutes);
  }
  // Markab Ecommerce
  app.use("/events", ...eventsApiRoutes);
  app.use("/products", productsApiRoutes);
  app.use("/categories", categoriesApiRoutes);
  app.use("/carts", cartsApiRoutes);
  app.use("/orders", ordersApiRoutes);
  // Markab kb
  app.use("/knowledge", ...knowledgeApiRoutes);
  if (!disableRides) {
    //Markab Ride
    app.use("/rides", ...ridesApiRoutes);
  }
  //Markab Site
  app.use("/contacts", ...contactApiRoutes);
  //Markab Game
  app.use("/game", ...gameApiRoutes);
  //sqlflow
  app.use("/sqlflow", ...sqlflowApiRoutes);
  app.use("/volunteerings", ...volunteeringsApiRoutes);
};

// =================================================================
// printing all routes to a file =========================================
// =================================================================
const printAllRoutes = app => {
  let filepath = path.join(__dirname, "./docs/routes.md");
  expressPrintRoutes(app, filepath);
};

// =================================================================
// Setting up the database =========================================
// =================================================================

//models: mongoose models
//schemas: the schema of each model
// on DB initalization
const onDBInit = ({ app, server, models, schemas }) => {
  app.use("/schemas", (req, res, next) => {
    res.send(schemas);
  });
  printAllRoutes(app);
};

//if there is an error connecting to db, send an error back to the user
const onError = err => {
  //routes that don't require db connection
  app.use("/", (req, res, next) => {
    return res.status(500).send(err);
  });
};

const onDisconnect = () => {
  console.log("db disconnected");
  app.use("/", (req, res, next) => {
    return res.status(500).send("err: db disconnected");
  });
};

const main = ({ exceptions }) => {
  const { app, server } = getExpressApp(config);
  const dbConnection = MongoDb({
    config,
    onDBInit: (models, schemas) => onDBInit({ app, server, models, schemas }),
    onError,
    onDisconnect
  });
  const {
    authApiRoutes,
    userApiRoutes,
    jwtApiRoutes,
    aclApiRoutes,
    formsApiRoutes,
    settingsApiRoutes,
    chatApiRoutes,
    kernelApiRoutes,
    notificationsApiRoutes,
    productsApiRoutes,
    categoriesApiRoutes,
    cartsApiRoutes,
    ordersApiRoutes,
    knowledgeApiRoutes,
    ridesApiRoutes,
    gameApiRoutes,
    contactApiRoutes,
    sqlflowApiRoutes,
    eventsApiRoutes,
    blogsApiRoutes,
    ...defaultProps
  } = getAllApis({ app, server, exceptions });
  registerAllRoutes({
    app,
    server,
    exceptions,
    authApiRoutes,
    userApiRoutes,
    jwtApiRoutes,
    aclApiRoutes,
    formsApiRoutes,
    settingsApiRoutes,
    chatApiRoutes,
    kernelApiRoutes,
    notificationsApiRoutes,
    productsApiRoutes,
    categoriesApiRoutes,
    cartsApiRoutes,
    ordersApiRoutes,
    knowledgeApiRoutes,
    ridesApiRoutes,
    gameApiRoutes,
    contactApiRoutes,
    sqlflowApiRoutes,
    eventsApiRoutes,
    blogsApiRoutes,
    ...defaultProps
  });
  return { dbConnection, app, exceptions };
};
module.exports = main;
module.exports.getAllApis = getAllApis;
module.exports.registerAllRoutes = registerAllRoutes;
module.exports.getExpressApp = getExpressApp;
