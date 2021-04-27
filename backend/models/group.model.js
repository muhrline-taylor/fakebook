const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const Schema = mongoose.Schema;

var GroupsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Group must have a title"],
        minlength: [3, "Group title must be at least 3 characters!"]
    },
    about: {
        type: String,
    },
    pfp: {
        type: String,
        required: [true, "Group must have a profile picture!"]
    },
    headerPic: {
        type: String,
    },
    privacy: {
        type: String,
        required: true
    },
    visibility: {
        type: String,
        required: true,
    },
    location: {
        type: String,
    },
    creatorEmail: {
        type: String,
        required: [true, "Group must have a creator"]
    }
})

GroupsSchema.plugin(uniqueValidator);

const Groups = mongoose.model("Groups", GroupsSchema);

module.exports = Groups;