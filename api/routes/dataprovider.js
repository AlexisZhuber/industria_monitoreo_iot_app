const express = require("express");
const router = express.Router();
const { checkAuth } = require("../middlewares/authentication.js");

//models import
import Data from "../models/data.js";

router.get("/get-last-data", async (req, res) => {
  try {
    const dId = req.query.dId;
    const name = req.query.name;

    const data = await Data.find({ name: name, dId: dId })
      .sort({ $natural: -1 })
      .limit(1);

    const response = {
      status: "success",
      data: data,
    };

    return res.json(response);
  } catch (error) {
    console.log(error);

    const response = {
      status: "error",
      error: error,
    };

    return res.json(response);
  }
});

router.get("/get-small-charts-data", async (req, res) => {
  try {
    const dId = req.query.dId;
    const name = req.query.name;
    const timeSelect = req.query.time;

    //day = 1440
    //month = (dia * 30) = 1440 * 30 = 43200
    //year = (dia * 365) = 1440 * 365 =  525600

    const timeAgoMs = Date.now() - timeSelect * 60 * 1000;

    const data = await Data.find({
      name: name,
      dId: dId,
      createdTime: { $gt: timeAgoMs },
    });

    const response = {
      status: "success",
      data: data,
    };

    return res.json(response);
  } catch (error) {
    console.log(error);

    const response = {
      status: "error",
      error: error,
    };

    return res.json(response);
  }
});

module.exports = router;
