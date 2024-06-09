const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 100
    },
    image: {
        type: String,
        required: true
    }, 
    body: {
        type: String,
        required: true,
        minLength: 1
    },
    user: {
        type: String,
        required: true
    },
    tags: {
        type: String,
        required: true,
        enum: [
            '#javascript', 
            '#python', 
            '#ios', 
            '#android', 
            '#backend', 
            '#frontend', 
            '#html', 
            '#css', 
            '#react', 
            '#angular', 
            '#nodejs'
        ]
    },
    createdAt : {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("user", schema)