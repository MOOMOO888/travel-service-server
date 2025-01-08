const express = require("express"); //เรียกใข้ express
require("dotenv").config();
const app = express(); //สร้าง server
const PORT = process.env.PORT || 4040;

app.get("/", (req, res) => {
  res.json({ message: "Hello World Na I Dog" });
});

app.listen(3030, () => {
  console.log("Server is running on port 3030");
});
