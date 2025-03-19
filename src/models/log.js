import { DataTypes } from "sequelize";
import sequelize from "../lib/sequelize";
import Products from "./products";
const Log = sequelize.define(
  "Log",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    wa: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    productId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "products",
        key: "id",
      },
    },
  },
  {
    tableName: "log-order",
    timestamps: true,
  }
);

Log.belongsTo(Products, { foreignKey: "categoryId" });
Products.hasMany(Log, { foreignKey: "categoryId" });
export default Log;
