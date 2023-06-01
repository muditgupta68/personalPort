const mongoose = require("mongoose");

const resumeSchema = new mongoose.Schema({
  Subject: {
    type: String,
    required: true,
  },
  Completion: {
    type: String,
    required: true,
  },
  From: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  tag: {
    type: String,
    required: true,
    enum: ["Education", "Award", "Certification"],
  },
});

const AboutModel = mongoose.model("About", resumeSchema);

module.exports = AboutModel;
