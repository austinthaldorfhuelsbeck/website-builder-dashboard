// External Modules
import { Request, Response } from "express"

// Internal Modules
import { BlogsValidation } from "./blogs.validation"
import { BlogsService } from "./blogs.service"
import { errorHandler } from "../errors/error.handlers"

// Controller Definitions
async function create(req: Request, res: Response) {
	try {
		const blog: IBaseBlog = res.locals.validBlog
		const data: IBlog = await BlogsService.create(blog)
		res.status(201).json(data)
	} catch (err) {
		errorHandler(err, res)
	}
}
async function read(req: Request, res: Response) {
	try {
		const data: IBlog = res.locals.foundBlog
		res.status(200).json(data)
	} catch (err) {
		errorHandler(err, res)
	}
}
async function update(req: Request, res: Response) {
	try {
		const newBlog: IBaseBlog = res.locals.validBlog
		const id: number = parseInt(res.locals.foundBlog.blog_id)
		const data: IBlog = await BlogsService.update(newBlog, id)
		res.status(204).json(data)
	} catch (err) {
		errorHandler(err, res)
	}
}
async function destroy(req: Request, res: Response) {
	try {
		const id: number = parseInt(res.locals.foundBlog.blog_id)
		const data: void = await BlogsService.destroy(id)
		res.status(202).json(data)
	} catch (err) {
		errorHandler(err, res)
	}
}
async function list(req: Request, res: Response) {
	try {
		const data: IBlog[] = await BlogsService.list()
		res.status(200).json(data)
	} catch (err) {
		errorHandler(err, res)
	}
}
async function readFeatured(req: Request, res: Response) {
	try {
		const data: IBlog = await BlogsService.readFeatured()
		res.status(200).json(data)
	} catch (err) {
		errorHandler(err, res)
	}
}
async function listCategory(req: Request, res: Response) {
	try {
		const category: string = req.params.category
		const data: IBlog[] = await BlogsService.listCategory(category)
		res.status(200).json(data)
	} catch (err) {
		errorHandler(err, res)
	}
}
async function listTopic(req: Request, res: Response) {
	try {
		const topic: string = req.params.topic
		const data: IBlog[] = await BlogsService.listTopic(topic)
		res.status(200).json(data)
	} catch (err) {
		errorHandler(err, res)
	}
}

// Return
const BlogsController = {
	create: [BlogsValidation.isValidBlog, BlogsValidation.appendData, create],
	read: [BlogsValidation.blogExists, read],
	update: [BlogsValidation.blogExists, BlogsValidation.isValidBlog, update],
	delete: [BlogsValidation.blogExists, destroy],
	list,
	readFeatured,
	listCategory,
	listTopic,
}
export { BlogsController }
