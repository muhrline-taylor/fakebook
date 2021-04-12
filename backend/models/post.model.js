const mongoose = require("mongoose");

const Schema = mongoose.Schema;

var PostSchema = new mongoose.Schema({
    userFName: {
        type: String,
        required: true,
    },
    userLName: {
        type: String,
        required: true,
    },
    userEmail: {
        type: String,
        required: true,
    },
    userPfp: {
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
    comments: {
        type: Array,
        required: true,
    },
    likes: {
        type: Array,
        required: true,
    },
}, {timestamps: true})

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;