const Posts = require("../models/post.model");

//   ====== POSTS ============    //

module.exports.findAllPosts = (req, res) => {
    Posts.find()
        .then(allPosts => res.json({Posts: allPosts}))
        .catch(err => res.json({message: "Something went wrong grabbing all the posts", error: err}))
}

module.exports.findOnePost = (req, res) => {
    Posts.findOne({_id: req.params._id})
        .then(onePost => res.json({Posts: onePost}))
        .catch(err => res.json({message: "Something went wrong grabbing the post!", error: err}))
}

module.exports.createOnePost = (req, res) => {
    Posts.create(req.body)
        .then(addPost => res.json({Posts: addPost}))
        .catch(err => res.json({message: "Something went wrong creating the post!", error: err}))
}

module.exports.updateOnePost = (req, res) => {
    Posts.updateOne({_id: req.params._id}, req.body, {runValidators: true})
        .then(onePost => res.json({Posts: onePost}))
        .catch(err => res.json({message: "Something went wrong updating the post!", error: err}))
}

module.exports.deleteOnePost = (req, res) => {
    Posts.deleteOne({_id: req.params._id})
        .then(res.json({message: "Post deleted!"}))
        .catch(err => res.json({message: "Something went wrong deleting the post!", error: err}))
}


//   ====== END POSTS ============    //