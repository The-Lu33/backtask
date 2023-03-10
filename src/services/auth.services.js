import { users } from "../models/index.js";
import * as dotenv from "dotenv";
import { compareSync } from "bcrypt";
dotenv.config();
import JWT from "jsonwebtoken";
// eslint-disable-next-line no-undef
const secret = process.env.JWTSECRET;
export class AuthServices {
  static async register(dataUser) {
    try {
      const result = await users.create(dataUser);
      return result;
    } catch (error) {
      console.log(error.message);
      throw error;
    }
  }
  static async login(credentials) {
    try {
      const { username, password } = credentials;
      const user = await users.findOne({ where: { username } });
      console.log(user);
      if (user === null) {
        const isValid = false;
        return isValid;
      } else {
        const isValid = compareSync(password, user.password);
        return isValid ? { isValid, user } : { isValid };
      }
      // return { isValid: false };
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  static genToken(data) {
    try {
      const token = JWT.sign(data, secret, {
        expiresIn: "24hrs",
        algorithm: "HS512",
      });
      return token;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
