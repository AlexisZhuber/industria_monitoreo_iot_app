const express = require('express');
const router = express.Router();
const colors = require("colors"); //Para visualizar mejor la consola
const axios = require("axios");
var mqtt = require("mqtt");

//http://localhost:3001/api/saver-webhook
//Request Method: POST
//Resource ID: swr:663594

//MODEL
import Data from '../models/data.js';

var client;

//MQTT INICIO
function startMqttClient(){

    const options = {
        port: 1883,
        host: 'localhost',
        clientId: 'webhook_superuser' + Math.round(Math.random() * (0 - 10000) * -1),
        username: 'superuser',
        password: 'superpass',
        keepalive: 60,
        reconnectPeriod: 5000,
        protocolId: 'MQIsdp',
        protocolVersion: 3,
        clean: true,
        encoding: 'utf8'
    }

    client = mqtt.connect('mqtt://' + 'localhost', options);

    client.on('connect', function() {
        console.log("MQTT CONNECTION -> SUCCESS".bgMagenta);
        console.log("\n");
    });

    client.on('reconnect', (error) => {
        console.log('RECONNECTING MQTT');
        console.log(error);
    });

    client.on('error', (error) => {
        console.log("MQTT CONECTION FAIL -> ");
        console.log(error);
    });
}

router.post('/saver-webhook', async(req, res) => {
    const data = req.body;

    var json = JSON.parse(data.msg);

    json.createdTime = Date.now();

    try{

        //console.log(json);

        const data = await Data.create(json);
    
        const toSend = {
            status: "success"
        }
    
        return res.json(toSend);
    }catch(error){
        console.log("ERROR INSERT DATA...")
        console.log(error);

        const toSend = {
            status: "erorr",
            erorr: error
        }

        return res.status(500).json(toSend);

    }

});

/*setTimeout(() => {
    startMqttClient();
}, 3000);*/


module.exports = router;
