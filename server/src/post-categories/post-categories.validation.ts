// External Modules
import { Request, Response, NextFunction } from "express"

// Internal Modules
import { PostCategoriesService } from "./post-categories.service"
import { errorHandler } from "../errors/error.handlers"
import { IBaseCategory, IPostCategory } from "../interfaces/objects.interface"

// Middleware Definitions
function isValidPostCategory(req: Request, res: Response, next: NextFunction) {
	// Get post category from req
	const postCategory: IBaseCategory = req.body
	// Validate
	if (!postCategory.text) postCategory.text = ""
	// Build error message
	const messages: string[] = []
	if (!postCategory.label) messages.push("Category name required.")
	// Return error or pass thru locals
	if (messages.length !== 0) {
		const message: string = messages.join(" ")
		errorHandler({ status: 400, message }, res)
	} else {
		res.locals.validPostCategory = postCategory
		return next()
	}
}
async function postCategoryExists(
	req: Request,
	res: Response,
	next: NextFunction,
) {
	// Get ID from param or req body
	let id: string = ""
	if (req.params.post_category_id) {
		id = req.params.post_category_id
	} else if (req.body.data.post_category_id) {
		id = req.body.data.post_category_id
	} else {
		errorHandler(
			{ status: 400, message: "Post Category ID required." },
			res,
		)
	}
	// Read the post category
	const postCategory: IPostCategory = await PostCategoriesService.read(
		parseInt(id),
	)
	// Return error or pass thru locals
	if (postCategory) {
		res.locals.foundPostCategory = postCategory
		return next()
	}
	errorHandler(
		{ status: 404, message: `Post category ${id} cannot be found.` },
		res,
	)
}
async function appendId(req: Request, res: Response, next: NextFunction) {
	// Get post category from req
	const postCategory: IBaseCategory = res.locals.validPostCategory
	// Append ID
	const id: number = new Date().valueOf()
	const validPostCategory: IPostCategory = {
		...postCategory,
		post_category_id: id,
	}
	// Pass thru locals
	res.locals.validPostCategory = validPostCategory
	return next()
}

// Return
const PostCategoriesValidation = {
	isValidPostCategory,
	postCategoryExists,
	appendId,
}
export { PostCategoriesValidation }
