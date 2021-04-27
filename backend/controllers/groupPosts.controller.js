const GroupPosts = require("../models/groupPost.model");

module.exports.findAllGroupPosts = (req, res) => {
    GroupPosts.find()
        .then(allGroupPosts => res.json({GroupPosts: allGroupPosts}))
        .catch(err => res.json({message: "Something went wrong grabbing all the group posts", error: err}))
}

module.exports.findOneGroupPost = (req, res) => {
    GroupPosts.findOne({_id: req.params._id})
        .then(oneGroupPost => res.json({GroupPosts: oneGroupPost}))
        .catch(err => res.json({message: "Something went wrong grabbing the group post!", error: err}))
}

module.exports.createOneGroupPost = (req, res) => {
    GroupPosts.create(req.body)
        .then(addGroupPost => res.json({GroupPosts: addGroupPost}))
        .catch(err => res.json({message: "Something went wrong creating the group post!", error: err}))
}

module.exports.updateOneGroupPost = (req, res) => {
    GroupPosts.updateOne({_id: req.params._id}, req.body, {runValidators: true})
        .then(oneGroupPost => res.json({GroupPosts: oneGroupPost}))
        .catch(err => res.json({message: "Something went wrong updating the group post!", error: err}))
}

module.exports.deleteOneGroupPost = (req, res) => {
    GroupPosts.deleteOne({_id: req.params._id})
        .then(res.json({message: "Group post deleted!"}))
        .catch(err => res.json({message: "Something went wrong deleting the group post!", error: err}))
}