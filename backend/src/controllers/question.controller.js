import { ApiResponse } from "../utility/ApiResponse.js";
import { ApiError } from "../utility/ApiError.js";
import {Question} from "../models/question.model.js"

const post = async(req, res)=>{
    const {title, description, tags} = req.body;
    if(
        [title, description].some((field)=>(field?.trim()===""))
    ){
        throw new ApiError(400,"All fields are required!")
    }
    const question = await Question.create({
        title,
        desc: description,
        tags,
        askedBy: req.user._id
    })

    if(!question){
        throw new ApiError(500, "Some error occured!");
    }

    return res.status(200).json({
        statusCode: 200,
        message: "Question stored successfully"
    })
}

const getAllQuestions = async(req,res)=>{
    const page = Number(req.query.page) || 1;
    const dataPerPage = 5;
    const skip = (page-1) * dataPerPage;

    const totalData = await Question.countDocuments();
    const data = await Question.find()
                            .select("-_id title desc tags askedBy createdAt")
                            .limit(dataPerPage)
                            .skip(skip)
                            .populate("askedBy", "username");

    return res.status(200).json({
        success : true,
        total : data.length,
        questions : data,
    })
}

export {
    post,
    getAllQuestions
}