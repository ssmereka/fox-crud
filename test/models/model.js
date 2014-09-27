module.exports = function(app, db, config, log) {

var mongoose = require("mongoose"),
    ObjectId = mongoose.Schema.ObjectId;

  var schema = mongoose.Schema({
    array: Array,
    arrayOfStrings: [String],
    boolean: { type: Boolean, default: false },
    date: { type: Date, default: Date.now },
    buffer: Buffer,
    mixed: mongoose.Schema.Types.Mixed,
    number: { type: Number, default: 0 },
    object: {
      nestedString: String
    },
    objectId: { type: ObjectId, default: function() { return new ObjectId() } },
    string: String
  });

  schema.virtual("virtualString").get(function() {
    return this.string;
  });

  schema.virtual("virtualString").set(function(value) {
    this.string = value;
  });

  schema.plugin(require(config.paths.foxCrudPlugin));

  mongoose.model("Schema", schema);
}
