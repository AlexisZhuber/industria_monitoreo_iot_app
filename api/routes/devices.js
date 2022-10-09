const express = require('express');
const router = express.Router();

const { checkAuth } = require("../middlewares/authentication.js");

//MODEL
import Device from '../models/device.js';

//API

router.get("/device", checkAuth, async (req, res) => {

    try{
        const userId = req.userData._id;

        const devices = await Device.find();
    
        const toSend = {
            status: "success",
            data: devices
        }
    
        return res.json(toSend);
    } catch(error){
        console.log("ERROR SEARCHING DEVICES...")
        console.log(error);

        const toSend = {
            status: "erorr",
            erorr: error
        }

        return res.status(500).json(toSend);
    }    
});



router.post("/device", checkAuth, async (req, res) => {

    try{
        const userId = req.userData._id;
        var newDevice = req.body.newDevice;
    
        newDevice.userId = userId;
        newDevice.createdTime = Date.now();
        newDevice.variableTime = "Day";
    
        console.log(newDevice);
    
        const device = await Device.create(newDevice);
    
        const toSend = {
            status: "success"
        }
    
        return res.json(toSend);
    }catch(error){
        console.log("ERROR CREATING DEVICE...")
        console.log(error);

        const toSend = {
            status: "erorr",
            erorr: error
        }

        return res.status(500).json(toSend);

    }

});

router.delete("/device",checkAuth, async (req, res) => {
    
    try{
        //const userId = req.userData._id;
        const dId = req.query.dId;
    
        const result = await Device.deleteOne({dId: dId});

        const toSend = {
            status: "success",
            data: result
        }
    
        return res.json(toSend);
    }catch(error){

        const toSend = {
            status: "erorr",
            erorr: error
        }

        return res.status(500).json(toSend);
    }
});

router.put("/device", (req, res) => {
    
});

module.exports = router;