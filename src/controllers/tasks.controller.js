import { taskService } from "../services/tasks.services.js";

export const getTaks = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await taskService.getAllTasks(id);
    res.json(result);
  } catch (error) {
    console.log(error);
  }
};
export const saveTask = async (req, res) => {
  try {
    const data = req.body;
    const result = await taskService.createdTask(data);
    res.json(result);
  } catch (error) {
    console.log(error);
  }
};
export const getTasksCount = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await taskService.tasksCount(id);
    res.json(result);
  } catch (error) {
    console.log(error);
  }
};
export const getTask = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await taskService.task(id);
    res.json(result);
  } catch (error) {
    console.log(error);
  }
};
export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await taskService.delete(id);
    console.log(result);
    if (result) {
      res.json({ message: "Delete Success" });
    } else {
      res.status(400).json("error");
    }
  } catch (error) {
    console.log(error);
  }
};
export const updateTask = async (req, res) => {
  try {
    const data = req.body;
    const result = await taskService.update(data);
    if (result) {
      res.json("update");
    }
  } catch (error) {
    console.log(error);
  }
};
