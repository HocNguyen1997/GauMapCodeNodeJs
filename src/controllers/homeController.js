import db from "../models/index";
import CRUDService from "../services/CRUDService";
let getHomePage = async (req, res) => {
  try {
    let data = await db.User.findAll();
    return res.render("homepage.ejs", {
      data: JSON.stringify(data),
    });
  } catch (error) {
    return {
      code: 500,
      message: "Crash",
    };
  }
};

let getCRUD = async (req, res) => {
  try {
    return res.render("crud.ejs");
  } catch (error) {
    return {
      code: 500,
      message: "Error",
    };
  }
};

let postCRUD = async (req, res) => {
  let item = await CRUDService.createNewUser(req.body);
  console.log(item);
  return res.send("Post crud from server");
};

let displayGetCRUD = async (req, res) => {
  let userDocs = await CRUDService.getAllUser();
  console.log("userDocs:::::: " + userDocs);
  return res.render("displayCRUD.ejs", {
    dataTable: userDocs,
  });
};

module.exports = {
  getHomePage,
  getCRUD,
  postCRUD,
  displayGetCRUD,
};
