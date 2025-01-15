const Traveller = require("../models/traveller.model.js");

//ฟังช์ชั่นเพิ่มข้อมูลลงในตาราง traveller_tb
exports.createTraveller = async (req, res) => {
  try {
    const result = await Traveller.create(req.body);
    res.status(200).json({
      message: "Traveller created successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

//ฟังชั่นตรวจการเข้าใช้งานชองผู้ใช้กับตาราง traveller_tb
exports.checkloginTraveller = async (req, res) => {
  try {
    const result = await Travel.findone({
      where: {
        travellerId: req.params.traveller,
        travellerPassword: req.params.travellerPassword,
      },
    });
    if (result) {
      res.status(200).json({
        message: "Traveller login successfully",
        data: result,
      });
    } else {
      res.status(404).json({
        message: "Traveller not found",
        data: null,
      });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//ฟังชั่นแก้ไขข้อมูลส่วนตัวของผู้ใช้งานกับตาราง traveller_tb
exports.editTraveller = async (req, res) => {
  try {
    const result = await Traveller.update(req.body, {
      where: {
        travellerId: req.params.travellerId,
      },
    });
    res.status(200).json({
      message: "Traveller update successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
