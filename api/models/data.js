import mongoose from "mongoose";

const Schema = mongoose.Schema;

const dataSchema = new Schema({
    name:{type: String, require: [true]},
    dId: {type: String, required: [true]},
    data: { type: Number, require: [true]},
    createdTime: { type: Number }
});


//schema to model
const Data = mongoose.model('Data', dataSchema);

export default Data;