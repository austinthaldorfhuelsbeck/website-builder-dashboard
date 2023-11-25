// External Modules
import { Router } from "express"

// Internal Modules
import { EventCategoriesController } from "./event-categories.controller"
import { methodNotAllowed } from "../errors/error.handlers"

// Router Definition
const EventCategoriesRouter = Router()

// Routes
EventCategoriesRouter.route("/")
	.get(EventCategoriesController.list)
	.post(EventCategoriesController.create)
	.all(methodNotAllowed)
EventCategoriesRouter.route("/:event_id")
	.get(EventCategoriesController.read)
	.put(EventCategoriesController.update)
	.delete(EventCategoriesController.delete)
	.all(methodNotAllowed)

// Return
export { EventCategoriesRouter }
