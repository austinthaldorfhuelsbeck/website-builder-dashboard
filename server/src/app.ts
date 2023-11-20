// External Modules
import express from "express"
import cors from "cors"
import nocache from "nocache"

// Internal Modules
import { notFound, errorHandler } from "./errors/error.handlers"
import { BlogsRouter } from "./blogs/blogs.router"
// import { usersRouter } from "./users/users.router"
// import { companiesRouter } from "./companies/companies.router"
// import { galleriesRouter } from "./galleries/galleries.router"
// import { videosRouter } from "./videos/videos.router"
// import * as ErrorHandlers from "./middleware/error.handlers"
// import { fontsRouter } from "./fonts/fonts.router"
// import { validateAccessToken } from "./middleware/auth0.middleware";

// App Definition
const app = express()
// const CLIENT_ORIGIN_URL: string | undefined = process.env.CLIENT_ORIGIN_URL

// Middleware
app.use(express.json())
app.set("json spaces", 2)
app.use((req, res, next) => {
	res.contentType("application/json; charset=utf-8")
	next()
})
app.use(nocache())
app.use(cors())
// app.use("*", validateAccessToken)

// Route handlers
app.use("/blogs", BlogsRouter)

//Error handlers
app.use(notFound)
app.use(errorHandler)

export { app }
