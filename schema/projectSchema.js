const mongoose = require('mongoose');

const reactSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  top: {
    type: Boolean,
    required: true
  },
  image:{
    type:String,
    required:true
  },
  Heading: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  Link: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  tag: {
    type: String,
    required: true,
    enum: ['Web', 'Data Science', 'BI Dashboards','Analyst']
  }
});

const ReactModel = mongoose.model('Projects', reactSchema);

module.exports = ReactModel;
