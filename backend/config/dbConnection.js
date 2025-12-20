import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const connectionDB = async () => {

    try {
        const connectionIsDone = await mongoose.connect(process.env.MONGODB_URI);
        console.log(connectionIsDone.connection.host)
    } catch (error) {
        console.log("Mongodb connection Error", error);
        process.exit(1);
    }
}

export default connectionDB;