import mongoose from "mongoose";

// Define the schema for the user model
const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true,
    },
    email:{
        type: String,
        required: true,

    },
    password:{
        type: String,
        required: true, 
    }
})

// Create a model from the schema
const User = mongoose.model("User", userSchema);
console.log("User model created");

export default User;

