import * as dotenv from "dotenv";
dotenv.config();
import nodemailer from "nodemailer";
// eslint-disable-next-line no-undef
const GPASSWORD = process.env.GPASSWORD;
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: "465",
  secure: true,
  auth: {
    user: "luiseducol13@gmail.com",
    pass: GPASSWORD,
  },
});

export default transporter;
