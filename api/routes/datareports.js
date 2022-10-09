const express = require("express");
const router = express.Router();
const { checkAuth } = require("../middlewares/authentication.js");

//models import
import Data from "../models/data.js";

router.get("/get-data-reports", async (req, res) => {
  try {
    const dId = req.query.dId;
    const name = req.query.name;
    const from = req.query.from;
    const to =   req.query.to;

    const data = await Data.find({
      name: name,
      dId: dId,
      createdTime: { $gte: from, $lt: to},
    });

    /*
    created_on: {
        $gte: new Date(2012, 7, 14), 
        $lt: new Date(2012, 7, 15)
    }
    */

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
