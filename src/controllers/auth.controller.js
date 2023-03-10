import { AuthServices } from "../services/auth.services.js";

export const register = async (req, res) => {
  try {
    const user = req.body;
    const result = await AuthServices.register(user);
    if (result) {
      res.status(201).json({ message: "user created" });
    } else {
      res.status(400).json({ message: "something wrong" });
    }
  } catch (error) {
    res.status(400).json(error.message);
  }
};
export const login = async (req, res) => {
  try {
    const { password, username } = req.body;
    if (!username && !password) {
      return res.status(400).json([
        {
          error: "missing data",
          message: "not email or password ",
        },
      ]);
    }
    const result = await AuthServices.login({ username, password });
    if (result.isValid) {
      const { username } = result.user;
      const userData = { username };
      const token = AuthServices.genToken(userData);
      result.user.token = token;
      res.json(result.user);
    } else {
      res.status(400).json({ message: "email or password invalid" });
    }
  } catch (error) {
    res.status(400).json({ message: "something wrong" });
  }
};
