// External Modules
import { Request, Response, NextFunction } from "express"

// Internal Modules
import { EventCategoriesService } from "./event-categories.service"
import { errorHandler } from "../errors/error.handlers"
import { IBaseCategory, IEventCategory } from "../interfaces/objects.interface"

// Middleware Definitions
function isValidEventCategory(req: Request, res: Response, next: NextFunction) {
	// Get event category from req
	const eventCategory: IBaseCategory = req.body
	// Validate
	if (!eventCategory.text) eventCategory.text = ""
	// Build error message
	const messages: string[] = []
	if (!eventCategory.label) messages.push("Category name required.")
	// Return error or pass thru locals
	if (messages.length !== 0) {
		const message: string = messages.join(" ")
		errorHandler({ status: 400, message }, res)
	} else {
		res.locals.validEventCategory = eventCategory
		return next()
	}
}
async function eventCategoryExists(
	req: Request,
	res: Response,
	next: NextFunction,
) {
	// Get ID from param or req body
	let id: string = ""
	if (req.params.event_category_id) {
		id = req.params.event_category_id
	} else if (req.body.data.event_category_id) {
		id = req.body.data.event_category_id
	} else {
		errorHandler(
			{ status: 400, message: "Event Category ID required." },
			res,
		)
	}
	// Read the event category
	const eventCategory: IEventCategory = await EventCategoriesService.read(
		parseInt(id),
	)
	// Return error or pass thru locals
	if (eventCategory) {
		res.locals.foundEventCategory = eventCategory
		return next()
	}
	errorHandler(
		{ status: 404, message: `Event category ${id} cannot be found.` },
		res,
	)
}
async function appendId(req: Request, res: Response, next: NextFunction) {
	// Get event category from req
	const eventCategory: IBaseCategory = res.locals.validEventCategory
	// Append ID
	const id: number = new Date().valueOf()
	const validEventCategory: IEventCategory = {
		...eventCategory,
		event_category_id: id,
	}
	// Pass thru locals
	res.locals.validEventCategory = validEventCategory
	return next()
}

// Return
const EventCategoriesValidation = {
	isValidEventCategory,
	eventCategoryExists,
	appendId,
}
export { EventCategoriesValidation }
