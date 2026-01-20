import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import userRoutes from "./routes/user.route.js"
import questionRoutes from "./routes/question.route.js"

const app = express()

app.use(cors({
    origin : process.env.CORS_ORIGIN,
    credentials : true
}))

app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended : true}))

app.use('/api/v1/users', userRoutes)
app.use('/api/v1/questions', questionRoutes)

export {app}