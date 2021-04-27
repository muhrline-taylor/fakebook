const GroupsController = require("../controllers/groups.controller");
const Groups = require("../models/group.model");

module.exports = app => {
    app.get("/api/groups", GroupsController.findAllGroups);

    app.get("/api/groups/:_id", GroupsController.findOneGroup);

    app.get("/api/groups/name/:name", GroupsController.findOneGroupByName)

    app.post("/api/groups/new", GroupsController.createOneGroup);

    app.put("/api/groups/update/:_id", GroupsController.updateOneGroup);

    app.delete("/api/groups/delete/:_id", GroupsController.deleteOneGroup);
}