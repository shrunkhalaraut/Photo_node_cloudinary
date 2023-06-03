const mongoose= require('mongoose');

const imageSchema = new mongoose.Schema({
    name: {
        type:String,
        required: true,
    },
    image: {
        url: {type: String,
        required: true,
        },
        filename: {
            type: String,
            required: true,
        }
    },
    description: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("Image", imageSchema);