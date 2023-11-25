// External Modules
import { Request, Response } from "express"

// Internal Modules
import { PostTopicsValidation } from "./post-topics.validation"
import { PostTopicsService } from "./post-topics.service"
import { errorHandler } from "../errors/error.handlers"
import { IBaseTopic, IPostTopic } from "../interfaces/objects.interface"

// Controller Definitions
async function create(req: Request, res: Response) {
	try {
		const postTopic: IBaseTopic = res.locals.validPostTopic
		const data: IPostTopic = await PostTopicsService.create(postTopic)
		res.status(201).json(data)
	} catch (err) {
		errorHandler(err, res)
	}
}
async function read(req: Request, res: Response) {
	try {
		const data: IPostTopic = res.locals.foundPostTopic
		res.status(200).json(data)
	} catch (err) {
		errorHandler(err, res)
	}
}
async function update(req: Request, res: Response) {
	try {
		const newPostTopic: IBaseTopic = res.locals.validPostTopic
		const id: number = parseInt(res.locals.foundPostTopic.post_topic_id)
		const data: IPostTopic = await PostTopicsService.update(
			newPostTopic,
			id,
		)
		res.status(200).json(data)
	} catch (err) {
		errorHandler(err, res)
	}
}
async function destroy(req: Request, res: Response) {
	try {
		const id: number = parseInt(res.locals.foundPostTopic.post_topic_id)
		const data: void = await PostTopicsService.destroy(id)
		res.status(204).json(data)
	} catch (err) {
		errorHandler(err, res)
	}
}
async function list(req: Request, res: Response) {
	try {
		const data: IPostTopic[] = await PostTopicsService.list()
		res.status(200).json(data)
	} catch (err) {
		errorHandler(err, res)
	}
}

const PostTopicsController = {
	create: [
		PostTopicsValidation.isValidPostTopic,
		PostTopicsValidation.appendId,
		create,
	],
	read: [PostTopicsValidation.postTopicExists, read],
	update: [
		PostTopicsValidation.postTopicExists,
		PostTopicsValidation.isValidPostTopic,
		update,
	],
	delete: [PostTopicsValidation.postTopicExists, destroy],
	list,
}
export { PostTopicsController }
