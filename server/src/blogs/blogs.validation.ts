// External Modules
import { Request, Response, NextFunction } from "express"

// Internal Modules
import { BlogsService } from "./blogs.service"
import { errorHandler } from "../errors/error.handlers"

// Middleware Definitions
function isValidBlog(req: Request, res: Response, next: NextFunction) {
	// Get blog from req
	const blog: IBlog = req.body
	// Build error message
	let message: string = ""
	if (!blog.title) message += "Title required. "
	if (!blog.category) message += "Category required. "
	if (!blog.text) message += "Description required. "
	if (!blog.img) message += "Image required. "
	// Return error or pass thru locals
	if (message !== "") {
		errorHandler({ status: 400, message }, res)
	} else {
		res.locals.validBlog = blog
		return next()
	}
}
async function blogExists(req: Request, res: Response, next: NextFunction) {
	// Get ID from param or req body
	let id: string = ""
	if (req.params.blog_id) {
		id = req.params.blog_id
	} else if (req.body.data.blog_id) {
		id = req.body.data.blog_id
	} else {
		errorHandler({ status: 400, message: "Blog ID required." }, res)
	}
	// Read the blog
	const blog: IBlog = await BlogsService.read(parseInt(id))
	// Return error of pass thru locals
	if (blog) {
		res.locals.foundBlog = blog
		return next()
	}
	errorHandler({ status: 404, message: `Blog ${id} cannot be found.` }, res)
}
async function appendData(req: Request, res: Response, next: NextFunction) {
	// Get blog from req
	const blog: IBlog = res.locals.validBlog
	// Append ID if none provided
	if (!blog.blog_id) {
		blog.blog_id = new Date().valueOf()
	}
	// Append topic if none provided
	if (!blog.topic) blog.topic = "general"
	// Pass thru locals
	res.locals.validBlog = blog
	return next()
}

// Return
const BlogsValidation = {
	isValidBlog,
	blogExists,
	appendData,
}
export { BlogsValidation }
