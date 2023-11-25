// External Modules
import { Request, Response, NextFunction } from "express"

// Internal Modules
import { PostsService } from "./posts.service"
import { PostCategoriesService } from "../post-categories/post-categories.service"
import { PostTopicsService } from "../post-topics/post-topics.service"
import { defaultImg } from "../utils/app-constants"
import { errorHandler } from "../errors/error.handlers"
import {
	IBasePost,
	IPost,
	IPostCategory,
	IPostTopic,
	IValidPost,
} from "../interfaces/objects.interface"

// Middleware Definitions
function isValidPost(req: Request, res: Response, next: NextFunction) {
	// Get post from req
	const post: IBasePost = req.body
	// Validate
	if (!post.featured) post.featured = false
	if (!post.img) post.img = defaultImg
	// Build error message
	const messages: string[] = []
	if (!post.post_category_id) messages.push("Category required.")
	if (!post.post_topic_id) messages.push("Topic required.")
	if (!post.title) messages.push("Title required.")
	if (!post.text) messages.push("Description required.")
	// Return error or pass thru locals
	if (messages.length !== 0) {
		const message: string = messages.join(" ")
		errorHandler({ status: 400, message }, res)
	} else {
		res.locals.validPost = post
		return next()
	}
}
async function postExists(req: Request, res: Response, next: NextFunction) {
	// Get ID from param or req body
	let id: string = ""
	if (req.params.post_id) {
		id = req.params.post_id
	} else if (req.body.data.post_id) {
		id = req.body.data.post_id
	} else {
		errorHandler({ status: 400, message: "Post ID required." }, res)
	}
	// Read the post
	const post: IPost = await PostsService.read(parseInt(id))
	// Return error or pass thru locals
	if (post) {
		res.locals.foundPost = post
		return next()
	}
	errorHandler({ status: 404, message: `Post ${id} cannot be found.` }, res)
}
async function appendId(req: Request, res: Response, next: NextFunction) {
	// Get post from req
	const post: IBasePost = res.locals.validPost
	// Append ID
	const id: number = new Date().valueOf()
	const validPost: IPost = { ...post, post_id: id }
	// Pass thru locals
	res.locals.validPost = validPost
	return next()
}
async function appendChildren(req: Request, res: Response, next: NextFunction) {
	// Get post from locals
	const post: IPost = res.locals.foundPost
	// Add category and topic
	const post_category_id: number = post.post_category_id
	const post_topic_id: number = post.post_topic_id
	const category: IPostCategory =
		await PostCategoriesService.read(post_category_id)
	const topic: IPostTopic = await PostTopicsService.read(post_topic_id)
	// Pass thru completed object
	const validPost: IValidPost = { ...post, category: category, topic: topic }
	res.locals.validPost = validPost
	return next()
}

// Return
const PostsValidation = {
	isValidPost,
	postExists,
	appendId,
	appendChildren,
}
export { PostsValidation }
