import { users } from "../models/index.js";
import * as dotenv from "dotenv";
dotenv.config();

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
  //   static async login(credentials) {
  //     try {
  //       const { username, password } = credentials;
  //       const user = await Users.findOne({ where: { username } });
  //       console.log(user);
  //       if (user === null) {
  //         const isValid = false;
  //         return isValid;
  //       } else {
  //         isValid = compareSync(password, user.password);
  //         return isValid ? { isValid, user } : { isValid };
  //       }
  //       // return { isValid: false };
  //     } catch (error) {
  //       throw error;
  //     }
  //   }
  //   static genToken(data) {
  //     try {
  //       const token = jwt.sign(data, process.env.JWTSECRET, {
  //         expiresIn: "24hrs",
  //         algorithm: "HS512",
  //       });
  //       return token;
  //     } catch (error) {
  //       throw error;
  //     }
  //   }
}
