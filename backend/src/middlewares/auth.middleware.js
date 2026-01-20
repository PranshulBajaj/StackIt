import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";
import { ApiError } from "../utility/ApiError.js";


export const verifyJWT = async (req, res, next) => {
    try {
        const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer", "");
        if(!token){
            throw new ApiError(400, "Unauthorized Acces Denied!");
        }

        const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        if(!decodedToken){
            throw new ApiError(400, "Invalid_Tokens_ACCESS_DENIED!")
        }

        const user = await User.findById(decodedToken?._id).select("-password -refreshToken")
        console.log("Logging from verifyJWT(user): ",user._id);
        req.user = user;
        next();
    }
    catch(error){
        throw new ApiError(401, error?.message || "Invalid Tokens");
    }
}