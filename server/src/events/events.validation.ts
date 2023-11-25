// External Modules
import { Request, Response, NextFunction } from "express"

// Internal Modules
import { EventsService } from "./events.service"
import { EventCategoriesService } from "../event-categories/event-categories.service"
import { errorHandler } from "../errors/error.handlers"
import {
	IBaseEvent,
	IEvent,
	IEventCategory,
	IValidEvent,
} from "../interfaces/objects.interface"

// Middleware Definitions
function isValidEvent(req: Request, res: Response, next: NextFunction) {
	// Get event from req
	const event: IBaseEvent = req.body
	// Build error message
	const messages: string[] = []
	if (!event.event_category_id) messages.push("Category required.")
	if (!event.date) messages.push("Event date required.")
	if (!event.title) messages.push("Title required.")
	if (!event.text) messages.push("Description required.")
	// Return error or pass thru locals
	if (messages.length !== 0) {
		const message: string = messages.join(" ")
		errorHandler({ status: 400, message }, res)
	} else {
		res.locals.validEvent = event
		return next()
	}
}
async function eventExists(req: Request, res: Response, next: NextFunction) {
	// Get ID from param or req body
	let id: string = ""
	if (req.params.event_id) {
		id = req.params.event_id
	} else if (req.body.data.event_id) {
		id = req.body.data.event_id
	} else {
		errorHandler({ status: 400, message: "Event ID required." }, res)
	}
	// Read the event
	const event: IEvent = await EventsService.read(parseInt(id))
	// Return error or pass thru locals
	if (event) {
		res.locals.foundEvent = event
		return next()
	}
	errorHandler({ status: 404, message: `Event ${id} cannot be found.` }, res)
}
async function appendId(req: Request, res: Response, next: NextFunction) {
	// Get post from req
	const event: IBaseEvent = res.locals.validEvent
	// Append ID
	const id: number = new Date().valueOf()
	const validEvent: IEvent = { ...event, event_id: id }
	// Pass thru locals
	res.locals.validEvent = validEvent
	return next()
}
async function appendChildren(req: Request, res: Response, next: NextFunction) {
	// Get event from locals
	const event: IEvent = res.locals.foundEvent
	// Add category
	const id: number = event.event_category_id
	const category: IEventCategory = await EventCategoriesService.read(id)
	// Pass thru
	const validEvent: IValidEvent = { ...event, category: category }
	res.locals.validEvent = validEvent
	return next()
}

// Return
const EventsValidation = {
	isValidEvent,
	eventExists,
	appendId,
	appendChildren,
}
export { EventsValidation }
