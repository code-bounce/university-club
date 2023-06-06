import mysqlConfig from "../config/mysql.config";

const { connection } = mysqlConfig;

const create = async (club) => {
  return new Promise((resolve, reject) => {
    connection.query("INSERT INTO `club` SET ?", club, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};

const clubService = { create };

export default clubService;
