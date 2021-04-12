const PostsController = require("../controllers/posts.controller");
const Posts = require("../models/post.model");

module.exports = app => {
    // GET ALL
    app.get("/api/posts", PostsController.findAllPosts)
    // GET ONE BY ID
    app.get("/api/posts/:_id", PostsController.findOnePost)
    // CREATE
    app.post("/api/posts/new", PostsController.createOnePost)
    // UPDATE
    app.put("/api/posts/update/:_id", PostsController.updateOnePost)
    // DELETE
    app.delete("/api/posts/delete/:_id", PostsController.deleteOnePost)
}