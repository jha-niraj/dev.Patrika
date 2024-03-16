// backend/schema/comment.js
import { Schema } from "zod";

const mongoose  = require("mongoose");

const commentSchema = mongoose.Schema({
    blog_id: {
        type: Schema.Types.ObjectId,
        requiered: true,
        ref: 'Blog'
    },
    blog_author: {
        type: Schema.Types.ObjectId,
        requiered: true,
        ref: "Blog"
    },
    comment: {
        type: String,
        requiere: true
    },
    children: {
        type: [Schema.Types.ObjectId],
        ref: "comments"
    },
    commented_by: {
        type: Schema.Types.ObjectId,
        requiered: true,
        ref: "User"
    },
    isReply: {
        type: Boolean
    },
    parent: {
        type: Boolean.Types.ObjectId,
        ref: "comments"
    }
}, {
    timestamps: {
        createdAt: 'commentedAt'
    }
})

const Comment = mongoose.model("Comment", commentSchema);

export default Comment;