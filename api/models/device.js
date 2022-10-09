import mongoose from "mongoose";

const uniqueValidator = require("mongoose-unique-validator");

const Schema = mongoose.Schema;

const deviceSchema = new Schema({
    userId: { type: String, required: [true] },
    name:{type: String, require: [true]},
    dId: {type: String, unique: true, required: [true]},
    variableTime: {type: String, required: [true]},
    createdTime: { type: Number }
});

//Validator
deviceSchema.plugin(uniqueValidator, { message: 'Error, device already exists.'});

//schema to model
const Device = mongoose.model('Device', deviceSchema);

export default Device;