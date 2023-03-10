import { Router } from "express";
import {
  deleteTask,
  getTaks,
  getTask,
  getTasksCount,
  saveTask,
  updateTask,
} from "../controllers/tasks.controller.js";

const router = Router();

/**
 * @swagger
 * /all/{id}:
 *  get:
 *   sumary: get all tasks user
 *   tags: [all task]
 */

router.get("/all/:id", getTaks);

/**
 * @swagger
 * /save:
 *  post:
 *   sumary: get all tasks user
 *   tags: [Created task]
 */
router.post("/save", saveTask);

/**
 * @swagger
 * /count:
 *  get:
 *   sumary: get all tasks user
 *   tags: [task count]
 */
router.get("/count", getTasksCount);
/**
 * @swagger
 * /{id}:
 *  get:
 *   sumary: get all tasks user
 *   tags: [task]
 *
 */
router.get("/:id", getTask);
/**
 * @swagger
 * /update:
 *  put:
 *   sumary: get all tasks user
 *   tags: [update]
 */
router.put("/update", updateTask);
/**
 * @swagger
 * /all/{id}:
 *  delete:
 *   sumary: get all tasks user
 *   tags: [delete task]
 *
 */
router.delete("/:id", deleteTask);

export default router;
