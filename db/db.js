//ไฟลฺ์นีใช้สําหรับใช้ติดต่อกับ database
const Sequelize = require("sequelize");
require("dotenv").config(); //เรียกใช่งาน .env
//สร้าง instance ของ sequelize
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT,
  }
);
sequelize
  .sync()
  .then(() => {
    console.log("Database connected.........");
  })
  .catch((err) => {
    console.log("Error: " + err);
  });

module.exports = sequelize;
