import mongoose from "mongoose";
import {DB_NAME} from "../constants.js"

const connectdb = async()=>{
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log("Connected to DB: ", connectionInstance.connection.host);
    }
    catch(error){
        console.log("CONNECTION_ERROR_TO_DB : ", error);
    }

}

export {connectdb}