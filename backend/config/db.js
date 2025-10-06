import mongoose from "mongoose";

const connectDb = async()=>{
    try {
        let connect = await mongoose.connect(process.env.MONGO_URL)
        console.log('mongodb connected')
    } catch (error) {
        console.log(error?.message)
    }
}

export default connectDb