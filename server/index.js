import express from "express"
import dotenv from "dotenv"
import { database } from "./db/db.js"
import formRoutes from './routers/user.router.js'
import cors from "cors"

dotenv.config()

const app = express();
const PORT = process.env.PORT || 5000


app.use(express.json())

app.use(cors({
    origin: '*', //Allow frontend link here
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use("/api/form", formRoutes);

app.listen(PORT, () => {
    database()
    console.log(
        "Server is running on port:", PORT
    )
})