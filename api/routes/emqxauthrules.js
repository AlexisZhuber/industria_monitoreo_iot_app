const express = require("express");
const router = express.Router();

//models import
import Rule from "../models/usermqtt.js";

router.post("/rule", async (req, res) => {
  try {
    const name = req.body.username;
    const password = req.body.password;

    const newRule = {
      username: name,
      password: password,
      subscribe: ["#"],
      publish: ["#"]
    };

    const emqxauthrule = await Rule.create(newRule);

    console.log(emqxauthrule);

    const toSend = {
      status: "success",
    };

    res.json(toSend);
  } catch (error) {
    console.log("ERROR - REGISTER ENDPOINT");
    console.log(error);

    const toSend = {
      status: "error",
      error: error,
    };

    res.status(500).json(toSend);
  }
});



module.exports = router;
