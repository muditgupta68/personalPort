const express = require("express");
const { addAbout, getAbout } = require("../controllers/aboutController");
const aboutRouter = express.Router();

// About
aboutRouter.get("/", getAbout);
aboutRouter.post("/new", addAbout);

module.exports = aboutRouter;
