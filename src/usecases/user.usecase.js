const createError = require("http-errors")
const encrypt = require("../lib/encrypt")
const Users = require("../models/user.model")

async function create(userData) {
    const userFound = await Users.findOne({email: userData.email})
    
    if(userFound){
        throw createError(409, "Email is already is use")
    }

    userData.password = await encrypt.encrypt(userData.password)

    const newUser = await Users.create(userData)
    return newUser
} 

async function getAll() {
    const allPosts = await Users.find().populate("post")
    return allPosts
}

async function getById(id) {
    const user = await Users.findById(id).populate("post")
    return user
}

async function deleteById(id) {
    const userDeleted = await Users.findByIdAndDelete(id)
    return userDeleted
}

async function updateById(id, newUserData) {
    const updatedUser = await Users.findByIdAndUpdate(id, newUserData, {
        new: true
    })
    return updatedUser
}



module.exports = {
    create,
    getAll,
    getById,
    deleteById,
    updateById
}