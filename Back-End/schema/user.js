// backend/database.js
const mongoose = require("mongoose");
mongoose.connect("Enter the url for the database");

// An API to get the image form the dicebear.com.
let profile_imgs_collections_list = ["notionists-neutral", "adventurer-neutral", "fun-emoji"];
let profile_imgs_name_list = ["Garfield", "Tinkerbell", "Annie", "Loki", "Cleo", "Angel", "Bob", "Mia", "Coco", "Gracie", "Bear", "Bella", "Abby", "Harley", "Cali", "Leo", "Luna", "Jack", "Felix", "Kiki"];

// Elegent Solution for Database using data validation inside the Database.js...
const userSchema = mongoose.Schema({
    personalInfo: {
        fullName: {
            type: String,
            required: true,
            maxLength: 30,
            trim: true,
        },
        username: {
            type: String,
            required: true,
            maxLength: 30,
            minLength: 10,
            trim: true,
            unique: true
        },
        password: {
            type: String,
            required: true,
            maxLength: 30,
            minLength: 5,
            trim: true,
            unique: true
        },
        bio: {
            type: String,
            maxLength: [200, 'Bio should not be more than 200'],
            default: ""
        },
        profileImg: {
            type: String,
            default: () => {
                return `https://api.dicebear.com/6.x/${profile_imgs_collections_list[Math.floor(Math.random() * profile_imgs_collections_list.length)]}/svg?seed=${profile_imgs_name_list[Math.floor(Math.random() * profile_imgs_name_list.length)]}`
            }
        }
    },
    socialLinks: {
        youtube: {
            type: String,
            default: ""
        },
        instagram: {
            type: String,
            default: ""
        },
        facebook: {
            type: String,
            default: ""
        },
        twitter: {
            type: String,
            default: ""
        },
        github: {
            type: String,
            default: ""
        }
    },
    accountInfo: {
        total_posts: {
            type: Number,
            default: 0
        },
        total_reads: {
            type: Number,
            default: 0
        }
    }
}, {
    timestamps: {
        createdAt: 'joinedAt'
    }
})

const User = mongoose.model("User", userSchema);
export default User;

// const adminSchema = mongoose.Schema({
//     firstName: {
//         type: String,
//         required: true,
//         maxLength: 30,
//         trim: true,
//     },
//     lastName: {
//         type: String,
//         required: true,
//         maxLength: 30,
//         trim: true,
//     },
//     username: {
//         type: String,
//         required: true,
//         maxLength: 30,
//         minLength: 10,
//         trim: true,
//         unique: true
//     },
//     password: {
//         type: String,
//         required: true,
//         maxLength: 30,
//         minLength: 5,
//         trim: true,
//         unique: true
//     }
// })

// const User = mongoose.model("User", userSchema);
// const Admin = mongoose.model("Admin", adminSchema);

// module.exports = {
//     User,
//     Admin
// }