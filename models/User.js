const db = require("../config/db");
const bcrypt = require("bcryptjs");

class User {
  static async findByEmail(email) {
    return new Promise((resolve, reject) => {
      db.query("SELECT * FROM user WHERE email = ?", [email], (err, result) => {
        if (err) reject(err);
        resolve(result[0]);
      });
    });
  }
  static async createUser(name, email, password) {
    const hashedPassword = await bcrypt.hash(password, 10);
    return new Promise((resolve, reject) => {
      db.query(
        "INSERT INTO user (name, email, password) VALUES (?, ?, ?)",
        [name, email, hashedPassword],
        (err, result) => {
          if (err) reject(err);
          resolve(result);
        }
      );
    });
  }
}
module.exports = User;