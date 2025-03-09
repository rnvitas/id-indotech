const { default: sequelize } = require("@/lib/sequelize");
const { DataTypes } = require("sequelize");

const Blogs = sequelize.define(
  "blogs",
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
      type: DataTypes.STRING,
      allowNull: false,
    },
    img: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "blogs",
    timestamps: true,
  }
);

export default Blogs;
