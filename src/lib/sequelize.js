import { Sequelize } from "sequelize";
import mysql from "mysql2";

const sequelize = new Sequelize({
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  // port: process.env.DB_PORT,
  benchmark: true,
  dialect: "mysql",
  dialectModule: mysql,
  logging: console.log,
});

// Cek koneksi saat aplikasi dimulai
(async () => {
  try {
    console.log("Attempting to connect to the database...");
    await sequelize.authenticate();
    console.log("Database connection successful");
    // await sequelize.sync({ alter: true });
    await sequelize.sync();
  } catch (error) {
    console.error("Database connection error:", error);
  }
})();

export default sequelize;
