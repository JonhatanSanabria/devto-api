const express = require("express")

const usersUsecase = require("../usecases/user.usecase")

const router = express.Router()


router.post("/", async (req, res) => {
    try {
        const userCreated = await usersUsecase.create(req.body)
        res.json({
            success: true,
            data: {user: userCreated}
        })
    } catch (error) {
        res.status(error.status || 500).json({
            success: false,
            error: error.message
        })
    }
})

router.get("/:id", async (req, res) => {
    try {
        const id = req.params.id
        const user = await usersUsecase.getById(id)
        res.json({
            success: true,
            data: {user: user}
        })
    } catch (error) {
        res.status(error.status || 500).json({
            success: false,
            error: error.message
        })
    }
})


module.exports = router