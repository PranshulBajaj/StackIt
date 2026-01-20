import { ApiResponse } from "../utility/ApiResponse.js";
import { ApiError } from "../utility/ApiError.js";
import {Question} from "../models/question.model.js"
import {User} from "../models/user.model.js"

const post = async(req, res)=>{
    const {title, description, tags} = req.body;
    if(
        [title, description].some((field)=>(field?.trim()===""))
    ){
        throw new ApiError(400,"All fields are required!")
    }
    console.log("Logging from question controller: ", title, description, tags);
    console.log(req.user._id);
    const question = await Question.create({
        title,
        desc: description,
        tags,
        askedBy: req.user._id
    })

    console.log(question);

    if(!question){
        throw new ApiError(500, "Some error occured!");
    }

    return res.status(200).json({
        statusCode: 200,
        message: "Question stored successfully"
    })
}

export {
    post
}