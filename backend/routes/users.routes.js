const UsersController = require("../controllers/users.controller");
const Users = require("../models/user.model");

module.exports = app => {
    // GET ALL
    app.get("/api/users", UsersController.findAllUsers)
    // GET ONE BY ID
    app.get("/api/users/:_id", UsersController.findOneUser)
    // GET ONE BY USERNAME
    app.get("/api/users/username/:username", UsersController.findOneUserByUsername)
    // GET ONE BY EMAIL
    app.get("/api/users/email/:email", UsersController.findOneUserByEmail)
    // CREATE
    app.post("/api/users/new", UsersController.createOneUser)
    // UPDATE
    app.put("/api/users/update/:_id", UsersController.updateOneUser)
    // DELETE
    app.delete("/api/users/delete/:_id", UsersController.deleteOneUser)
}