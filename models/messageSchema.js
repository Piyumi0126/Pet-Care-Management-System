import mongoose  from "mongoose";
import validator from "validator";

const messageSchema= new mongoose.Schema({
    firstName : {
        type : String,
        required : true,
        minLength : [3, "First name should be contain atleast 3 Characters"]
    },

    lastName : {
        type : String,
        required : true,
        minLength : [3, "Last name should be contain atleast 3 Characters"]
    },

    email : {
        type : String,
        required : true,
        validate : [validator.isEmail, "Please provide a valid Email"]
    },

    phone : {
        type : String,
        required : true,
        minLength : [10, "Phone number must contain 10 digits"],
        maxLength : [10, "Phone number must contain 10 digits"],
    },

    message : {
        type : String,
        required : true,
        minLength :[10, "Message must contain at least 10 charcters "]
    }

});

export const Message = mongoose.model("Message", messageSchema);