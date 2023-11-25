// External Modules
import { Request, Response } from "express"

// Internal Modules
import { EventsValidation } from "./events.validation"
import { EventsService } from "./events.service"
import { errorHandler } from "../errors/error.handlers"
import { IBaseEvent, IEvent } from "../interfaces/objects.interface"

// Controller Definitions
async function create(req: Request, res: Response) {
	try {
		const event: IBaseEvent = res.locals.validEvent
		const data: IEvent = await EventsService.create(event)
		res.status(201).json(data)
	} catch (err) {
		errorHandler(err, res)
	}
}
async function read(req: Request, res: Response) {
	try {
		const data: IEvent = res.locals.foundEvent
		res.status(200).json(data)
	} catch (err) {
		errorHandler(err, res)
	}
}
async function update(req: Request, res: Response) {
	try {
		const newEvent: IBaseEvent = res.locals.validEvent
		const id: number = parseInt(res.locals.foundEvent.event_id)
		const data: IEvent = await EventsService.update(newEvent, id)
		res.status(200).json(data)
	} catch (err) {
		errorHandler(err, res)
	}
}
async function destroy(req: Request, res: Response) {
	try {
		const id: number = parseInt(res.locals.foundEvent.event_id)
		const data: void = await EventsService.destroy(id)
		res.status(204).json(data)
	} catch (err) {
		errorHandler(err, res)
	}
}
async function list(req: Request, res: Response) {
	try {
		const data: IEvent[] = await EventsService.list()
		res.status(200).json(data)
	} catch (err) {
		errorHandler(err, res)
	}
}
async function listUpcoming(req: Request, res: Response) {
	try {
		const data: IEvent[] = await EventsService.listUpcoming()
		res.status(200).json(data)
	} catch (err) {
		errorHandler(err, res)
	}
}
async function listCategory(req: Request, res: Response) {
	try {
		const id: number = parseInt(req.params.category_id)
		const data: IEvent[] = await EventsService.listCategory(id)
		res.status(200).json(data)
	} catch (err) {
		errorHandler(err, res)
	}
}

// Return
const EventsController = {
	create: [EventsValidation.isValidEvent, EventsValidation.appendId, create],
	read: [EventsValidation.eventExists, read],
	update: [
		EventsValidation.eventExists,
		EventsValidation.isValidEvent,
		update,
	],
	delete: [EventsValidation.eventExists, destroy],
	list,
	listUpcoming,
	listCategory,
}
export { EventsController }
