//ไฟล์ที่เขียนควบคุมการทำงาน table ใน Databasegit
const Travel = require("../models/travel.model.js");

exports.createTravel = async (req, res) => {
  try {
    const result = await Traveller.create(req.body);
    res.status(200).json({
      message: "Travel created successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.editTravel = async (req, res) => {
  try {
    const result = await Travel.update(req.body, {
      where: {
        travelId: req.params.travelId,
      },
    });
    res.status(200).json({
      message: "Travel update successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteTravel = async (req, res) => {
  try {
    const result = await Travel.destroy(req.body, {
      where: {
        travelId: req.params.travelId,
      },
    });
    res.status(200).json({
      message: "Travel delete successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//ฟังชั่นดึงข้อมูลการเดินทางทั้งหมดของนักเดินทางหนึ่งจากตาราง travel_tb
exports.getAllTravel = async (req, res) => {
  try {
    const result = await Traveller.findAll({
      where: {
        travellerId: req.params.travellerId,
      },
    });
    if (result) {
      res.status(200).json({
        message: "Travel get successfully",
        data: result,
      });
    } else {
      res.status(404).json({
        message: "Travel login failed",
        data: null,
      });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
