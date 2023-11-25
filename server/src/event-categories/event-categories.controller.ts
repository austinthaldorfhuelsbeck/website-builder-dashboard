// External Modules
import { Request, Response } from "express"

// Internal Modules
import { EventCategoriesValidation } from "./event-categories.validation"
import { EventCategoriesService } from "./event-categories.service"
import { errorHandler } from "../errors/error.handlers"
import { IBaseCategory, IEventCategory } from "../interfaces/objects.interface"

// Controller Definitions
async function create(req: Request, res: Response) {
	try {
		const eventCategory: IBaseCategory = res.locals.validEventCategory
		const data: IEventCategory =
			await EventCategoriesService.create(eventCategory)
		res.status(201).json(data)
	} catch (err) {
		errorHandler(err, res)
	}
}
async function read(req: Request, res: Response) {
	try {
		const data: IEventCategory = res.locals.foundEventCategory
		res.status(200).json(data)
	} catch (err) {
		errorHandler(err, res)
	}
}
async function update(req: Request, res: Response) {
	try {
		const newEventCategory: IBaseCategory = res.locals.validEventCategory
		const id: number = parseInt(
			res.locals.foundEventCategory.event_category_id,
		)
		const data: IEventCategory = await EventCategoriesService.update(
			newEventCategory,
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
			res.locals.foundEventCategory.event_category_id,
		)
		const data: void = await EventCategoriesService.destroy(id)
		res.status(204).json(data)
	} catch (err) {
		errorHandler(err, res)
	}
}
async function list(req: Request, res: Response) {
	try {
		const data: IEventCategory[] = await EventCategoriesService.list()
		res.status(200).json(data)
	} catch (err) {
		errorHandler(err, res)
	}
}

const EventCategoriesController = {
	create: [
		EventCategoriesValidation.isValidEventCategory,
		EventCategoriesValidation.appendId,
		create,
	],
	read: [EventCategoriesValidation.eventCategoryExists, read],
	update: [
		EventCategoriesValidation.eventCategoryExists,
		EventCategoriesValidation.isValidEventCategory,
		update,
	],
	delete: [EventCategoriesValidation.eventCategoryExists, destroy],
	list,
}
export { EventCategoriesController }
