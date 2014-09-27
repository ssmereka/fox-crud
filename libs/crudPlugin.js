// ~>Library
// ~A Scott Smereka

/* Fox CRUD
 */


/* ************************************************** *
 * ******************** Library Variables
 * ************************************************** */

module.exports = function(Schema, options) {
  if( ! Schema.methods["update"]) {
    Schema.methods.update = function() {

    };
  }

  if( ! Schema.methods["delete"]) {
    Schema.methods.delete = function() {

    };
  }

  if( ! Schema.methods["sanitize"]) {
    Schema.methods.sanitize = function() {
      
    };
  }
};
