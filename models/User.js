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

  static async AllDeathRecords() {
    return new Promise((resolve, reject) => {
      db.query("SELECT * FROM Death_Registration", (err, result) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  }

  // add new registration
  static async deathRegistration(data) {
    return new Promise((resolve, reject) => {
      db.query(
        "INSERT INTO Death_Registration (death_date,deceased_name,father_or_spouse_name,gender,age,place_of_death,cause_of_death,medical_facility_received,death_during_treatment,death_certified,disease_name,current_residence,permanent_residence,caste,nationality,occupation,female_death_condition,substance_type,substance_usage_duration,funeral_date_time,cremation_date_time,cremator_name,cremator_relation,informant_name,informant_relation, created_by) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
        [
          data.death_date,
          data.deceased_name,
          data.father_or_spouse_name,
          data.gender,
          data.age,
          data.place_of_death,
          data.cause_of_death,
          data.medical_facility_received,
          data.death_during_treatment,
          data.death_certified,
          data.disease_name,
          data.current_residence,
          data.permanent_residence,
          data.caste,
          data.nationality,
          data.occupation,
          data.female_death_condition,
          data.substance_type,
          data.substance_usage_duration,
          data.funeral_date_time,
          data.cremation_date_time,
          data.cremator_name,
          data.cremator_relation,
          data.informant_name,
          data.informant_relation,
          data.created_by,
        ],
        (err, result) => {
          if (err) reject(err);
          resolve(result);
        }
      );
    });
  }

  // delete registration
  static async deleteDeathRecordById(id) {
    return new Promise((resolve, reject) => {
      db.query("DELETE FROM Death_Registration WHERE id = ?", [id], (err, result) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  }
}
module.exports = User;
