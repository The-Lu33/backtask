import express from "express";
import cors from "cors";
import morgan from "morgan";
import db from "./utils/db.js";
import authRouter from "./routes/auth.routes.js";
import taskRouter from "./routes/tasks.routes.js";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUI from "swagger-ui-express";
import { options } from "./swaggerOption.js";
const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));

db.authenticate()
  .then(() => console.log("Base de datos autenticada"))
  .catch((error) => console.log(error));

app.get("/", (req, res) => {
  res.json({ message: "welcome to server" });
});

app.use("/api/auth", authRouter);
app.use("/api/task", taskRouter);

const specs = swaggerJSDoc(options);
app.use("/docs", swaggerUI.serve, swaggerUI.setup(specs));

export default app;
