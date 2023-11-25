// External Modules
import express, { NextFunction, Request, Response } from "express"
import cors from "cors"

// Internal Modules
import { notFound, errorHandler } from "./errors/error.handlers"
import { PostsRouter } from "./posts/posts.router"
import { PostCategoriesRouter } from "./post-categories/post-categories.router"
import { PostTopicsRouter } from "./post-topics/post-topics.router"
import { EventsRouter } from "./events/events.router"

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
app.use("/post_categories", PostCategoriesRouter)
app.use("/post_topics", PostTopicsRouter)
app.use("/events", EventsRouter)

// Error handlers
app.use(notFound)
app.use(errorHandler)

export { app }
