import app from "./app.js";

import cloudinary from "cloudinary";



cloudinary.v2.config({
    cloud_name : process.env.COUDINARY_CLOUD_NAME,
    api_key : process.env.COUDINARY_API_KEY,
    api_secret : process.env.COUDINARY_API_SECRET
});


app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on port ${process.env.PORT}`);

});
