import mongoose, {Schema} from "mongoose";

const questionSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    desc: {
        type: String,
        required: true,
        trim: true
    },
    tags: {
        type: String,
        lowercase: true,
        trim: true,
        index: true
    },
    askedBy : {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
}, {timestamps: true});

export const Question = mongoose.model('Question', questionSchema);