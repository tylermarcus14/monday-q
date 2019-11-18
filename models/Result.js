var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var ResultSchema = new Schema({
  // `title` is required and of type String
  position: {
    type: String,
  },
  // `link` is required and of type String
  name: {
    type: String,
  },
  thru: {
    type: String,
  },
  score: {
    type: String,
  }

});

// This creates our model from the above schema, using mongoose's model method
var Result = mongoose.model("Result", ResultSchema);

// Export the Result model
module.exports = Result;
