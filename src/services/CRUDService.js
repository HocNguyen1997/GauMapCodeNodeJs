import bcrypt from "bcryptjs";
import db from "../models";
const salt = bcrypt.genSaltSync(10);

let createNewUser = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      let hashPasswordFromBcrypt = await hashUserPassword(data.password);
      console.log(hashPasswordFromBcrypt);
      await db.User.create({
        email: data.email,
        password: hashPasswordFromBcrypt,
        firstName: data.firstName,
        lastName: data.lastName,
        phoneNumber: data.phoneNumber,
        address: data.address,
        gender: data.gender === "1" ? true : false,
        roleId: data.roleId,
      });
      resolve({
        code: 200,
        messge: "Success!"
      });
    } catch (error) {
      reject(error);
    }
  });
};

let hashUserPassword = (password) => {
  return new Promise(async (resolve, reject) => {
    try {
      let hashPassword = bcrypt.hashSync(password, salt);
      resolve(hashPassword);
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = {
  createNewUser,
};
