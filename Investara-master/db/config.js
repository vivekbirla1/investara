const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
mongoose.connect(
  "mongodb+srv://singhlakshya209:lakshyarajsingh@investara.2sdvtqp.mongodb.net/investara",
  { useNewUrlParser: true }
);
