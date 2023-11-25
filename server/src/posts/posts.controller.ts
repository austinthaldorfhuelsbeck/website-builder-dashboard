// External Modules
import { Request, Response } from "express"

// Internal Modules
import { PostsValidation } from "./posts.validation"
import { PostsService } from "./posts.service"
import { errorHandler } from "../errors/error.handlers"
import { IBasePost, IPost } from "../interfaces/objects.interface"

// Controller Definitions
async function create(req: Request, res: Response) {
	try {
		const post: IBasePost = res.locals.validPost
		const data: IPost = await PostsService.create(post)
		res.status(201).json(data)
	} catch (err) {
		errorHandler(err, res)
	}
}
async function read(req: Request, res: Response) {
	try {
		const data: IPost = res.locals.foundPost
		res.status(200).json(data)
	} catch (err) {
		errorHandler(err, res)
	}
}
async function update(req: Request, res: Response) {
	try {
		const newPost: IBasePost = res.locals.validPost
		const id: number = parseInt(res.locals.foundPost.post_id)
		const data: IPost = await PostsService.update(newPost, id)
		res.status(204).json(data)
	} catch (err) {
		errorHandler(err, res)
	}
}
async function destroy(req: Request, res: Response) {
	try {
		const id: number = parseInt(res.locals.foundPost.post_id)
		const data: void = await PostsService.destroy(id)
		res.status(202).json(data)
	} catch (err) {
		errorHandler(err, res)
	}
}
async function list(req: Request, res: Response) {
	try {
		const data: IPost[] = await PostsService.list()
		res.status(200).json(data)
	} catch (err) {
		errorHandler(err, res)
	}
}
async function readFeatured(req: Request, res: Response) {
	try {
		const data: IPost = await PostsService.readFeatured()
		res.status(200).json(data)
	} catch (err) {
		errorHandler(err, res)
	}
}
async function listCategory(req: Request, res: Response) {
	try {
		const category: string = req.params.category
		const data: IPost[] = await PostsService.listCategory(category)
		res.status(200).json(data)
	} catch (err) {
		errorHandler(err, res)
	}
}
async function listTopic(req: Request, res: Response) {
	try {
		const topic: string = req.params.topic
		const data: IPost[] = await PostsService.listTopic(topic)
		res.status(200).json(data)
	} catch (err) {
		errorHandler(err, res)
	}
}

// Return
const PostsController = {
	create: [PostsValidation.isValidPost, PostsValidation.appendId, create],
	read: [PostsValidation.postExists, read],
	update: [PostsValidation.postExists, PostsValidation.isValidPost, update],
	delete: [PostsValidation.postExists, destroy],
	list,
	readFeatured,
	listCategory,
	listTopic,
}
export { PostsController }
