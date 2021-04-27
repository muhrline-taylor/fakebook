const Groups = require("../models/group.model");

module.exports.findAllGroups = (req, res) => {
    Groups.find()
        .then(allGroups => res.json({Groups: allGroups}))
        .catch(err => res.json({message: "Something went wrong grabbing all the Groups", error: err}))
}

module.exports.findOneGroup = (req, res) => {
    Groups.findOne({_id: req.params._id})
        .then(oneGroup => res.json({Groups: oneGroup}))
        .catch(err => res.json({message: "Something went wrong grabbing the Group!", error: err}))
}

module.exports.findOneGroupByName = (req, res) => {
    Groups.findOne({name: req.params.name})
        .then(oneGroup => res.json({Groups: oneGroup}))
        .catch(err => res.json({message: "Something went wrong grabbing the group", error: err}))
}

module.exports.createOneGroup = (req, res) => {
    Groups.create(req.body)
        .then(addGroup => res.json({Groups: addGroup}))
        .catch(err => res.json({message: "Something went wrong creating the Group!", error: err}))
}

module.exports.updateOneGroup = (req, res) => {
    Groups.updateOne({_id: req.params._id}, req.body, {runValidators: true})
        .then(oneGroup => res.json({Groups: oneGroup}))
        .catch(err => res.json({message: "Something went wrong updating the Group!", error: err}))
}

module.exports.deleteOneGroup = (req, res) => {
    Groups.deleteOne({_id: req.params._id})
        .then(res.json({message: "Group deleted!"}))
        .catch(err => res.json({message: "Something went wrong deleting the Group!", error: err}))
}