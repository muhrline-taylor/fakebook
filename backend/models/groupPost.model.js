const mongoose = require("mongoose");

const Schema = mongoose.Schema;

var GroupPostSchema = new mongoose.Schema({
    userEmail: {
        type: String,
        required: true,
    },
    groupName: {
        type: String,
    },
    groupId: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: false,
    },
    pic: {
        type: String,
        required: false,
    },
    video: {
        type: String,
        required: false,
    },
    comments: {
        type: Array,
        required: true,
    },
    likes: {
        type: Array,
        required: true,
    },
}, {timestamps: true})

const GroupPost = mongoose.model("GroupPost", GroupPostSchema);

module.exports = GroupPost;