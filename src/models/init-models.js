import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _tasks from  "./tasks.js";
import _users from  "./users.js";

export default function initModels(sequelize) {
  const tasks = _tasks.init(sequelize, DataTypes);
  const users = _users.init(sequelize, DataTypes);

  tasks.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(tasks, { as: "user_tasks", foreignKey: "user_id"});

  return {
    tasks,
    users,
  };
}
