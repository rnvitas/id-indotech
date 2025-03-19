// models/products.js
import sequelize from "../lib/sequelize";
import Category from "./category";
const { DataTypes } = require("sequelize");

const Products = sequelize.define(
  "Products",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    desc: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    img: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    categoryId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "categories",
        key: "id",
      },
    },
  },
  {
    tableName: "products",
    timestamps: true,
  }
);

// Correct associations after both models are defined
Products.belongsTo(Category, { foreignKey: "categoryId" });
Category.hasMany(Products, { foreignKey: "categoryId" });

export default Products;
