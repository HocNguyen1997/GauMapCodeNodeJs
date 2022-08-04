"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("users", [
      {
        email: "admin@gmail.com",
        password: "abcd1234",
        firstName: "Gấu",
        lastName: "Mập",
        address: "110 Chu Văn An, TT Phù Mỹ, Bình Định",
        gender: 1,
        typeRole: "ROLE",
        keyRole: "R1",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("users");
  },
};
