const travellerCtrl = require("./../controllers/traveller.controller.js");

//เรียกใช้งาน express เพือใช้งาน Roter ในการจัดการเดินทางเพื่อการเรียกใช้งาน
const express = require("express");
const router = express.Router();

//ในการกำหนดเส้นทางเป็นตามหลักการของ REST API
//เพิ่ม post(), แก้ไข put(), ลบ delete(), ค้นหา/ตรวจสอบ/ดึง/ดู get()

router.post("/", travellerCtrl.createTraveller);

router.put("/:travellerEmail/:travellerPassword",travellerCtrl.checkloginTraveller);

router.delete("/:travellerId", travellerCtrl.editTraveller);

//export router ออกไปเพื่อการเรียกใช้งาน
module.exports = router;
