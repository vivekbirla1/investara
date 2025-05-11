const mongoose = require("mongoose");

const startupSchema = new mongoose.Schema({
  user: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
  pitchtitle: {
    type: String,
  },
  website: {
    type: String,
  },
  location: {
    type: String,
  },
  phone: {
    type: Number,
  },
  industry1: {
    type: String,
  },
  industry2: {
    type: String,
  },
  stage: {
    type: String,
  },
  investorRole: {
    type: String,
  },
  raising: {
    type: Number,
  },
  raised: {
    type: Number,
  },
  description: {
    type: String,
  },
  members: {
    type: [String],
  },
});

module.exports = mongoose.model("startups", startupSchema);
