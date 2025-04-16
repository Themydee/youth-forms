import mongoose from 'mongoose'

export const database = async() => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL)
        console.log(`MOngoDB connected successfully: ${conn.connection.host}`)
    } catch (error) {
        console.error("MongoDB connected unsuccessfully", error.message)
        process.exit(1);
    }
}