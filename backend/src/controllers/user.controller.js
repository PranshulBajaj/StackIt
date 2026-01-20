import { User } from "../models/user.model.js";
import { ApiError } from "../utility/ApiError.js";
import { ApiResponse } from "../utility/ApiResponse.js";

const generateAccessandRefreshToken = async(id)=> {
    try{
        const user = await User.findById(id);
        const accessToken = user.generateAccess();
        const refreshToken = user.generateRefresh();
        
        user.refreshToken = refreshToken;
        return {accessToken, refreshToken};
    }
    catch(error){
        throw new ApiError(500, "Something went wrong while generating tokens");
    }
}

const register = async(req, res)=>{
    const {username, email, password} = req.body

    if(
        [username, email, password].some((field)=>(field?.trim()===""))
    ){
        throw new ApiError(400,"All fields are required!")
    }

    const existedUser = await User.findOne({
        $or : [{username}, {email}]
    })    

    if(existedUser){
        throw new ApiError(409, "Username with same username or email already exists!")
    }

    const user = await User.create({
        username : username.toLowerCase(),
        email,
        password
    })
    console.log("Creating the user: ",user);

    const createdUser = await User.findOne(user._id).select("-password -refreshToken");
    
    if(!createdUser){
        throw new ApiError(500, "Some internal error occured, please try again!");
    }

    return res.status(200).json({"statusCode": 200, "message": "User successfully created!"})
}

const login = async(req, res)=>{
    const {username,password, email} = req.body

    const user = await User.findOne({
        $or : [{username}, {email}]
    })
    console.log("Log from Login(user): ", user);

    if(!user){
        throw new ApiError(500, "User does not exist, Make sure credentials are correct!");
    }

    if(!user.checkPass(password)){
        return res.status(404).json(new ApiResponse(404, null, "User not found"));
    }

    const {accessToken, refreshToken} = await generateAccessandRefreshToken(user._id);
    console.log("Access Token: ", accessToken);
    console.log("Refresh Token: ", refreshToken);

    const options = {
        httpOnly: true,
        secure: true
    }

    const loggedInUser = User.findById(user._id).select("-password -refreshToken");

    return res.status(200)
              .cookie("accessToken", accessToken, options)
              .cookie("refreshToken", refreshToken, options)
              .json(new ApiResponse(200, null, "Login Successful"))
    
}

const logout = async(req,res)=>{
    await User.findByIdAndUpdate(
        req.user._id,
        {
            $set:{
                refreshToken : undefined
            }
        },
        {
            new: true
        }
    )

    const options = {
        httpOnly : true,
        secure : true
    }

    return res.status(200)
              .clearCookie("accessToken", options)
              .clearCookie("refreshToken", options)
              .json(new ApiResponse(200,{}, "Logged Out Successfully!"))
}

export {
    register,
    login,
    logout
}


