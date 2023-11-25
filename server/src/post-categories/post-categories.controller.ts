// External Modules
import { Request, Response } from "express"

// Internal Modules
import { PostCategoriesValidation } from "./post-categories.validation"
import { PostCategoriesService } from "./post-categories.service"
import { errorHandler } from "../errors/error.handlers"
import { IBaseCategory, IPostCategory } from "../interfaces/objects.interface"

// Controller Definitions
async function create(req: Request, res: Response) {
	try {
		const postCategory: IBaseCategory = res.locals.validPostCategory
		const data: IPostCategory =
			await PostCategoriesService.create(postCategory)
		res.status(201).json(data)
	} catch (err) {
		errorHandler(err, res)
	}
}
async function read(req: Request, res: Response) {
	try {
		const data: IPostCategory = res.locals.foundPostCategory
		res.status(200).json(data)
	} catch (err) {
		errorHandler(err, res)
	}
}
async function update(req: Request, res: Response) {
	try {
		const newPostCategory: IBaseCategory = res.locals.validPostCategory
		const id: number = parseInt(
			res.locals.foundPostCategory.post_category_id,
		)
		const data: IPostCategory = await PostCategoriesService.update(
			newPostCategory,
			id,
		)
		res.status(200).json(data)
	} catch (err) {
		errorHandler(err, res)
	}
}
async function destroy(req: Request, res: Response) {
	try {
		const id: number = parseInt(
			res.locals.foundPostCategory.post_category_id,
		)
		const data: void = await PostCategoriesService.destroy(id)
		res.status(204).json(data)
	} catch (err) {
		errorHandler(err, res)
	}
}
async function list(req: Request, res: Response) {
	try {
		const data: IPostCategory[] = await PostCategoriesService.list()
		res.status(200).json(data)
	} catch (err) {
		errorHandler(err, res)
	}
}

const PostCategoriesController = {
	create: [
		PostCategoriesValidation.isValidPostCategory,
		PostCategoriesValidation.appendId,
		create,
	],
	read: [PostCategoriesValidation.postCategoryExists, read],
	update: [
		PostCategoriesValidation.postCategoryExists,
		PostCategoriesValidation.isValidPostCategory,
		update,
	],
	delete: [PostCategoriesValidation.postCategoryExists, destroy],
	list,
}
export { PostCategoriesController }
