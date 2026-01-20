import cloudinary from "cloudinary"
import fs from "fs"

cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET // Click 'View API Keys' above to copy your API secret
});

const UploadOnCloudinary = async(localfilepath)=>{
    try{
        if(!localfilepath) return null;
        const url = await cloudinary.v2.uploader.upload(localfilepath,
            {
                folder : "StackIt",
                resource_type : "auto"
            }
        )
        fs.unlinkSync(localfilepath);
        return url;
    }
    catch(error){
        fs.unlinkSync(localfilepath);
        console.log("error in cloudinary.js : ", error);
        
    }
}

export {UploadOnCloudinary}