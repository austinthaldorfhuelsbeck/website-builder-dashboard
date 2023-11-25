// External Modules
import express, { NextFunction, Request, Response } from "express"
import cors from "cors"

// Internal Modules
import { notFound, errorHandler } from "./errors/error.handlers"
import { PostsRouter } from "./posts/posts.router"

// App Definition
const app = express()

// Middleware
app.use(express.json())
app.set("json spaces", 2)
app.use(function (req: Request, res: Response, next: NextFunction) {
	res.contentType("application/json; charset=utf-8")
	next()
})
app.use(cors())

// Route handlers
app.use("/posts", PostsRouter)

// Error handlers
app.use(notFound)
app.use(errorHandler)

export { app }
