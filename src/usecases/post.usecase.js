const createError = require("http-errors")
const Post = require("../models/post.model")

async function create(post) {
    const existingPost = await Post.findOne({title: post.title})
    
    if(existingPost){
        throw createError(409, "Post already exists")
    }
    return await Post.create(post)
}

async function getAll() {
    return await Post.find()
}

async function getById(id) {
    return await Post.findById(id)
}

async function updateById(id, post) {
    return await Post.findByIdAndUpdate(id, post, { new: true })
}

async function deleteById(id) {
    return await Post.findByIdAndDelete(id)
}

module.exports = {
    create,
    getAll,
    getById,
    updateById,
    deleteById
}