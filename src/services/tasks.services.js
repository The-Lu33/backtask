import { tasks, users } from "../models/index.js";

export class taskService {
  static async getAllTasks(id) {
    try {
      const result = await users.findOne({
        where: {
          id: id,
        },
        include: {
          model: tasks,
          as: "user_tasks",
        },
        attributes: {
          exclude: ["password"],
        },
      });
      return result;
    } catch (error) {
      console.log(error);
    }
  }
  static async createdTask(data) {
    try {
      const { user_id, title, description } = data;
      const result = await tasks.create({
        user_id: user_id,
        title: title,
        description: description,
      });
      return result;
    } catch (error) {
      console.log(error.message);
      throw error;
    }
  }
  static async tasksCount(id) {
    try {
      const { user_tasks } = await users.findOne({
        where: {
          id: id,
        },
        include: {
          model: tasks,
          as: "user_tasks",
        },
        attributes: {
          exclude: ["password"],
        },
      });
      const count = user_tasks.length;
      console.log(count);
      return count;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  static async task(id) {
    try {
      const result = await tasks.findByPk(id);
      return result;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  static async delete(id) {
    try {
      const result = await tasks.destroy({
        where: {
          id: id,
        },
      });
      return result;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  static async update(data) {
    try {
      const { id, title, description } = data;
      const task = await tasks.findByPk(id);
      task.update({ title: title, description: description });

      return task;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
