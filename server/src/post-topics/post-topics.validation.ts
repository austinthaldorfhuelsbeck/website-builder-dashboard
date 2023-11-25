// External Modules
import { Request, Response, NextFunction } from "express"

// Internal Modules
import { PostTopicsService } from "./post_topics.service"
import { errorHandler } from "../errors/error.handlers"
import { IBaseTopic, IPostTopic } from "../interfaces/objects.interface"

// Middleware Definitions
function isValidPostTopic(req: Request, res: Response, next: NextFunction) {
	// Get post topic from req
	const postTopic: IBaseTopic = req.body
	// Validate
	if (!postTopic.text) postTopic.text = ""
	// Build error message
	const messages: string[] = []
	if (!postTopic.label) messages.push("Topic name required.")
	if (!postTopic.hex) messages.push("Color required.")
	// Return error or pass thru locals
	if (messages.length !== 0) {
		const message: string = messages.join(" ")
		errorHandler({ status: 400, message }, res)
	} else {
		res.locals.validPostTopic = postTopic
		return next()
	}
}
async function postTopicExists(
	req: Request,
	res: Response,
	next: NextFunction,
) {
	// Get ID from param or req body
	let id: string = ""
	if (req.params.post_topic_id) {
		id = req.params.post_topic_id
	} else if (req.body.data.post_topic_id) {
		id = req.body.data.post_topic_id
	} else {
		errorHandler({ status: 400, message: "Post ID required." }, res)
	}
	// Read the post topic
	const postTopic: IPostTopic = await PostTopicsService.read(parseInt(id))
	// Return error or pass thru locals
	if (postTopic) {
		res.locals.foundPostTopic = postTopic
		return next()
	}
	errorHandler(
		{ status: 404, message: `Post topic ${id} cannot be found.` },
		res,
	)
}
async function appendId(req: Request, res: Response, next: NextFunction) {
	// Get post topic from req
	const postTopic: IBaseTopic = res.locals.validPostTopic
	// Append ID
	const id: number = new Date().valueOf()
	const validPostTopic: IPostTopic = {
		...postTopic,
		post_topic_id: id,
	}
	// Pass thru locals
	res.locals.validPostTopic = validPostTopic
	return next()
}

// Return
const PostTopicsValidation = {
	isValidPostTopic,
	postTopicExists,
	appendId,
}
export { PostTopicsValidation }
