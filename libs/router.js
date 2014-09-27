
var pluralize = require('pluralize');

var getAllItems = function(schema) {
  return function(req, res, next) {

  }
};

var updateMultipleItems = function(schema) {
  return function(req, res, next) {

  }
};

var createNewItems = function(schema) {
  return function(req, res, next) {

  }
};

var deleteAllItems = function(schema) {
  return function(req, res, next) {

  }
};

var getItem = function(schema) {
  return function(req, res, next) {

  }
};


var updateItem = function(schema) {
  return function(req, res, next) {

  }
};

var deleteItem = function(schema) {
  return function(req, res, next) {

  }
};

var createRouter = function(baseUrl, schema) {
  var schemaName = schema;
  var schemaNamePlural = pluralize(schema);

  return function(cb) {
    var router = express.Router();

    router.route('/')
      .get(getAllItems(schema))
      .put(updateMultipleItems(schema))
      .post(createNewItems(schema))
      .delete(deleteAllItems(schema));

    router.route('/:id')
      .get(getItem(schema))
      .put(updateItem(schema))
      .post(updateItem(schema))
      .delete(deleteItem(schema));

    cb(undefined, {
      "router": router,
      "url": baseUrl + schemaNamePlural,
      "schema": schemaName
    });
  }
}


var useRoutes = function(app, routers) {
  for(var i = 0; i < routers.length; i++)
    app.use(routers[i].url, routers[i].router);
  }
}



/*app.param('id', function (req, res, next, id) {
  console.log('CALLED ONLY ONCE');
  next();
})*/

var cr;

cr.prototype.

module.exports
