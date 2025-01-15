//ไฟล์ที่ทำงานกับตารางใน Database
//ทำงานกับ tarvaller route
const Sequelize = require("sequelize");
const db = require("../db/db.js");

const Travel = sequelize.define(
  "travel_tb",
  {
    travellerId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      field: "travellerId",
    },
    travelPlace: {
      type: Sequelize.STRING(200),
      allowNull: false,
      field: "travelPlace",
    },
    travelStartDate: {
      type: Sequelize.STRING(200),
      allowNull: false,
      field: "travelStartDate",
    },
    travelEndDate: {
      type: Sequelize.STRING(200),
      allowNull: false,
      field: "travelEndDate",
    },
    travelCostTotal: {
      type: Sequelize.DOUBLE,
      allowNull: false,
      field: "travelCostTotal",
    },
    travellerId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      field: "travellerId",
    },
  },
  {
    tableName: "travel_tb",
    timestamps: false,
    freezeTableName: true,
  }
);

module.exports = Travel;
