import initModels from "./init-models.js";
import db from "../utils/db.js";
const models = initModels(db);

export const { users, tasks } = models;


