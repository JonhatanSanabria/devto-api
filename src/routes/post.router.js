const express = require("express")
const auth = require("../middlewares/auth.middleware")
const postUsecase = require("../usecases/post.usecase")

const router = express.Router()


router.post("/", auth, async (req, res) => {
    try {
        const post = req.body
        const postCreated = await postUsecase.create(post)
        res.json({
            success: true,
            message: "post created",
            data: {post: postCreated}
        })
    } catch (error) {
        res.status(error.status || 500).json({
            success: false,
            error: error.message
        })
    }
})

router.get("/", async (req, res) => {
    try {
        const posts = await postUsecase.getAll()
        res.json({
            success: true,
            message: "All posts",
            data: {posts: posts}
        })
    } catch (error) {
        res.status(error.status || 500).json({
            success: false,
            error: error.message
        })
    }
})

router.patch("/:id", auth, async (req, res) => {
    try {
        const {id} = req.params
        const postUpdated = await postUsecase.updateById(id, req.body)
        res.json({
            success: true,
            message: "post updated",
            data: {post: postUpdated}
        })
    } catch (error) {
        res.status(error.status || 500).json({
            success: false,
            error: error.message
        })
    }
})

router.delete("/:id", auth, async (req, res) => {
    try {
        const {id} = req.params
        const postDeleted = await postUsecase.deleteById(id)
        res.json({
            success: true,
            message: "post deleted",
            data: {post: postDeleted}
        })
    } catch (error) {
        res.status(error.status || 500).json({
            success: false,
            error: error.message
        })
    }
})

module.exports = router