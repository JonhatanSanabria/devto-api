const createError = require("http-errors")
const post = require("../models/post.model")

async function create(post) {
    const existingPost = await post.findOne({
        number: post.number,
        tag: post.tag
    })
    if(existingPost){
        throw createError(409, "post already exists")
    }
    return await post.create(post)
}

async function getAll() {
    return await post.find()
}

async function getById(id) {
    return await post.findById(id)
}

async function updateById(id, post) {
    return await post.findByIdAndUpdate(id, post, { new: true })
}

async function deleteById(id) {
    return await post.findByIdAndDelete(id)
}

module.exports = {
    create,
    getAll,
    getById,
    updateById,
    deleteById
}