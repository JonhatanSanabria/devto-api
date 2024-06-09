const cors = require("cors")
const express = require("express")
const userRouter = require("./routes/user.router")
const authRouter = require("./routes/auth.router")
const postRouter = require("./routes/post.router")

const app = express()

// middleware
app.use(cors())
app.use(express.json())

app.use("/user", userRouter)
app.use("/auth", authRouter)
app.use("/post", postRouter)

app.get("/", (req, res) => {
    console.log("GET request to API")
    res.json({
        message: "Devto API"
    })
})

module.exports = app