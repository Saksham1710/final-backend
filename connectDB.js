import mongoose from "mongoose";

const connectDB = async () => {

    const url = "mongodb://localhost:27017/ArtList";
    try {
        const connectionInstance = await mongoose.connect(url);
        console.log(`MongoDB connected: ${connectionInstance.connection.host}`);

    } catch (error) {
        console.log(`Error: ${error.message}`);
    }
}

export default connectDB;