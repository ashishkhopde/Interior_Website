import { Schema, model } from "mongoose";

const projectSchema = new Schema({
    client: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    projectTitle: {
        type: String,
        required: true
    }
}, { timestamps: true });

export default model("Project", projectSchema);
