// { userId password }

import authService from "../services/auth.service.js";
import userService from "../services/user.service.js";

const login = async (req, res) => {
  try {
    // weather a given user exists
    const user = await userService.findOne(req.body.userId);

    if (user.length === 0) {
      return res.status(404).json({ message: "User not found!" });
    } else {
      if (user[0].password !== req.body.password) {
        return res.status(400).json({ message: "Invalid credentials!" });
      } else {
        // token generation
        let jwtPayload = {
          userId: user[0].userId,
          role: user[0].role,
        };

        const accessToken = authService.generateAccessToken(jwtPayload);

        return res.status(200).json({ accessToken });
      }
    }
  } catch (err) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

const authController = { login };

export default authController;
