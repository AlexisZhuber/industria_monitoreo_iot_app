const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

//models import
import User from "../models/user.js";

//AUTH
router.post("/login", async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;

    var user = await User.findOne({ email: email });

    if (!user) {
      
      const toSend = {
        status: "error",
        error: "Invalid Credentials",
      };

      return res.status(401).json(toSend);
    }

    if (bcrypt.compareSync(password, user.password)) {
      //Eliminar contraseña
      user.set("password", undefined, { strict: false });

      const token = jwt.sign({ userData: user }, "securePasswordHere", {
        expiresIn: 60 * 60 * 24 * 30,
      });

      const toSend = {
        status: "success",
        token: token,
        userData: user,
      };

      return res.json(toSend);
    } else {
      const toSend = {
        status: "error",
        error: "Invalid Credentials",
      };

      return res.status(401).json(toSend);
    }
  } catch (error) {
    console.log(error);
  }
});

router.post("/register", async (req, res) => {
  try {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    const encryptedPassword = bcrypt.hashSync(password, 10);

    const newUser = {
      name: name,
      email: email,
      password: encryptedPassword,
    };

    const user = await User.create(newUser);

    console.log(user);

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

//USER CRUD

/*router.get("/new-user", async (req, res) => {
  try {
    const user = await User.create({
      name: "Juan",
      email: "juan@gmail.com",
      password: "123123",
    });
    res.json({ status: "success" });
  } catch (error) {
    console.log(error);
    res.json({ status: "fail" });
  }
});*/

module.exports = router;
