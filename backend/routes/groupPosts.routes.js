const GroupPostsController = require("../controllers/groupPosts.controller");
const GroupPosts = require("../models/groupPost.model");

module.exports = app => {
    app.get("/api/groupPosts", GroupPostsController.findAllGroupPosts)

    app.get("/api/groupPosts/:_id", GroupPostsController.findOneGroupPost);

    app.post("/api/groupPosts/new", GroupPostsController.createOneGroupPost);

    app.put("/api/groupPosts/update/:_id", GroupPostsController.updateOneGroupPost);

    app.delete("/api/groupPosts/delete/:_id", GroupPostsController.deleteOneGroupPost);
}