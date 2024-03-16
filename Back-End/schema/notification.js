// backend/schema/notification.js
import { Schema } from "zod";

const mongoose = requiere("mongoose");

const notificationSchema = mongoose.Schema({
    type: {
        type: String,
        enum: ["like", "comment", "reply"],
        required: true
    },
    blog: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "Blog"
    },
    notification_for: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    user: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    comment: {
        type: Schema.Types.ObjectId,
        ref: "comments"
    },
    reply: {
        type: Schema.Types.ObjectId,
        ref: 'comments'
    }, 
    replied_on_comment:{
        type: Schema.Types.ObjectId,
        ref: 'comments'
    },
    seen: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
})

const Notification = mongoose.model("Notification", notificationSchema);

export default Notification;