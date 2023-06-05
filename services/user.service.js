import mysqlConfig from "../config/mysql.config.js";

const { connection } = mysqlConfig;

const create = (user) => {
  return new Promise((resolve, reject) => {
    connection.query("INSERT INTO `user` SET ?", user, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};

const findAll = () => {
  return new Promise((resolve, reject) => {
    connection.query("SELECT * FROM `user`", (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};

const findOne = (userId) => {
  return new Promise((resolve, reject) => {
    connection.query(
      "SELECT * FROM `user` WHERE `userId` = ?",
      [userId],
      (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      }
    );
  });
};

const userService = { create, findAll, findOne };

export default userService;
