// { userId password }

import authService from "../services/auth.service.js";
import userService from "../services/user.service.js";
import { validateHash } from "../utils/bcypt.utils.js";

const login = async (req, res) => {
  try {
    // weather a given user exists
    const user = await userService.findOne(req.body.emailID);

    if (user.length === 0) {
      return res.status(404).json({ message: "User not found!" });
    } else {
      const isMatch = await validateHash(req.body.password, user[0].password);
      if (!isMatch) {
        return res.status(400).json({ message: "Invalid credentials!" });
      } else {
        // token generation
        let jwtPayload = {
          emailID: user[0].emailID,
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
