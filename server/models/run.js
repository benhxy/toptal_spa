var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var RunSchema = new Schema({
  date: {type: Date, required: true, default: Date.now},
  dist: {type: Number, required: true, max: 1000},
  time: {type: Number, required: true, max: 1440},
  user: {type: Schema.Types.ObjectId, ref:"User", required: true}
},{
  toObject: {virtuals: true},
  toJSON: {virtuals: true}
});

RunSchema.virtual("speed").get(function() {
  return this.dist / (this.time / 60);
});

module.exports = mongoose.model("Run", RunSchema, "run");
