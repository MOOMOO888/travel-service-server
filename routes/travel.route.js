const travelCtrl = require("./../controllers/travel.controller.js");

//เรียกใช้งาน express เพือใช้งาน Roter ในการจัดการเดินทางเพื่อการเรียกใช้งาน
const express = require("express");
const router = express.Router();

//ในการกำหนดเส้นทางเป็นตามหลักการของ REST API
//เพิ่ม post(), แก้ไข put(), ลบ delete(), ค้นหา/ตรวจสอบ/ดึง/ดู get()

router.post("/", travelCtrl.createTravel);

router.put("/:travelId", travelCtrl.editTravel);

router.get("/:travellerId", travelCtrl.getAllTravel);

router.delete("/:travelId", travelCtrl.deleteTravel);

//export router ออกไปเพื่อการเรียกใช้งาน
module.exports = router;
