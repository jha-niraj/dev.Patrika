// backend/schema/blog.js
const mongoose = require("mongoose");

const blogSchema = mongoose.Schema({
    blog_id: {
        type: String,
        required: true,
        unique: true
    },
    title: {
        type: String,
        required: true
    },
    banner: {
        type: String,
        // required: true
    },
    desc: {
        type: String,
        // required: true
    },
    content: {
        type: [],
        // required: true
    },
    tags: {
        type: [String],
        // required: true
    },
    author: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "Users"
    },
    activity: {
        total_likes: {
            type: Number,
            default: 0
        },
        total_comments: {
            type: Number,
            default: 0
        },
        total_reads: {
            type: Number,
            default: 0
        },
        total_parent_comments: {
            type: Number,
            default: 0
        },
    },
    comments: {
        type: Boolean,
        default: false
    } 
},
{
    timestamps: {
        createdAt: 'publishedAt'
    }
}
)

const Blog = mongoose.model("Blog", blogSchema);

export default Blog;