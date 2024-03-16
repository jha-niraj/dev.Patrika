const zod = require("zod");

const userSchemaSignUp = zod.object({
    firstName: zod.string(),
    lastName: zod.string(),
    username: zod.string().email(),
    password: zod.string()
})
const userSchemaSignIn = zod.object({
    username: zod.string().email(),
    password: zod.string()
})
const adminSchemaSignUp = zod.object({
    firstName: zod.string(),
    lastName: zod.string(),
    username: zod.string().email(),
    password: zod.string()
})
const adminSchemaLoginIn = zod.object({
    username: zod.string().email(),
    password: zod.string()
})

module.exports = {
    userSchemaSignUp,
    userSchemaSignIn,
    adminSchemaSignUp,
    adminSchemaLoginIn
}