var assert = require('assert'),
    express = require('express'),
    mongoose = require('mongoose'),
    path = require("path");

var app = express();

var config = {
  env: (app.settings.env || "local"),
  debug: false,
  mongoose: {
    database: "fox-crud",
    host: "ds039880.mongolab.com",
    password: "pHTEr7LctAnaKAXvvhpfrueY",
    port: "39880",
    username: "admin"
  },
  paths: {
    foxCrudPlugin: path.resolve(__dirname, "../libs/crudPlugin.js"),
    modelsFolder: path.resolve(__dirname, "./models")
  },
  port: (process.env.PORT || 6543)
};

config.mongoose.uri = "mongodb://" + config.mongoose.username + ":" + config.mongoose.password + "@" + config.mongoose.host
+ ":" + config.mongoose.port + "/" + config.mongoose.database;

var log = function() {
  if(arguments && arguments.length) {
    if(config && config.debug) {
      console.log.apply(console, arguments);
    }
  }
}

var connectToDatabase = function(uri, cb) {
  mongoose.connect(uri, function(err) {
    if(err) {
      throw (new Error("Error connecting to the database."));
    }
  });

  mongoose.connection.once('open', function() {
    log("Database connected at %s:%s using the database %s.", mongoose.connection.host, mongoose.connection.port, mongoose.connection.name);
    cb();
  });
};

describe("Fox CRUD", function() {

  it("Start the server", function(done) {
    this.timeout(50000);
    connectToDatabase(config.mongoose.uri, function(){
      var model = require(config.paths.modelsFolder + "/model.js");

      app.listen(config.port);
      //log("Listening on port %d in %s mode with database %s.", config.port, config.env, config.mongoose.database);

      //require("./libs/get.js")(app, mongoose, config, log);

      done();
    });
  });
});
