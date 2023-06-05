import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mysqlConfig from "./config/mysql.config.js";

// routes
import userRoutes from "./routes/user.routes.js";
import authRoutes from "./routes/auth.routes.js";

dotenv.config();

const { connection } = mysqlConfig;

const app = express();
const port = process.env.PORT || 8001;

async function bootstrap() {
  app.use(cors());
  app.use(express.json());

  app.use("/user", userRoutes);
  app.use("/auth", authRoutes);

  connection.connect((err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Connected to db");
    }
  });
  app.listen(port, () => console.log(`Server running on ${port}`));
}

bootstrap();
