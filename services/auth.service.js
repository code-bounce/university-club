import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const generateAccessToken = (jwtPayload) => {
  const accessToken = jwt.sign(jwtPayload, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "10m",
  });

  return accessToken;
};

const authService = { generateAccessToken };

export default authService;
