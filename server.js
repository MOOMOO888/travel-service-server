const express = require("express"); //เรียกใข้ express module
const bodyParse = require("body-parser");
const cors = require("cors");
const travellerRoute = require("./routes/traveller.route.js");
const travelRoute = require("./routes/travel.route.js");

require("dotenv").config(); //เรียกใช่งาน .env

const app = express(); //สร้าง server
const PORT = process.env.PORT || 4000; //สร้าง port

//ใช้งาน middleware
app.use(bodyParse.json());
app.use(cors());
app.use("/traveller", travellerRoute);
app.use("/travel", travelRoute);

//ใช้งาน router
app.get("/", (req, res) => {
  res.json({ message: "Hello World Na I Dog" });
});

//ใช้งาน router
app.listen(3000, () => {
  console.log("Server is running on port" + PORT + ".....");
});
