import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ruleSchema = new Schema({
  username: { type: String, required: [true] },
  password: { type: String, required: [true] }
});

/// conver to model
const Rule = mongoose.model('emqxauthrule', ruleSchema);

export default Rule;



