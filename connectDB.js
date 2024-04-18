import mongoose from "mongoose";

const connectDB = async () => {

    const url = "mongodb+srv://saksham:Saksham%40123@cluster0.j5qv4li.mongodb.net/ArtList";
    try {
        const connectionInstance = await mongoose.connect(url);
        console.log(`MongoDB connected: ${connectionInstance.connection.host}`);

    } catch (error) {
        console.log(`Error: ${error.message}`);
    }
}

export default connectDB;
