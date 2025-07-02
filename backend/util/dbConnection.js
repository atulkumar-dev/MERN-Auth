import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config();

export default async function connectdb() {
    try{
        await mongoose.connect(`mongodb+srv://atul:${process.env.db_password}@cluster0.divdlu9.mongodb.net/`)
        console.log("Connected to MongoDB");
    }
    catch(err) {
        console.error("Error connecting to MongoDB:", err);
    }
}

