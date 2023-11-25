// External Modules
import { Router } from "express"

// Internal Modules
import { EventsController } from "./events.controller"
import { methodNotAllowed } from "../errors/error.handlers"

// Router Definition
const EventsRouter = Router()

// Routes
EventsRouter.route("/")
	.get(EventsController.list)
	.post(EventsController.create)
	.all(methodNotAllowed)
EventsRouter.route("/upcoming")
	.get(EventsController.listUpcoming)
	.all(methodNotAllowed)
EventsRouter.route("/:event_id")
	.get(EventsController.read)
	.put(EventsController.update)
	.delete(EventsController.delete)
	.all(methodNotAllowed)
EventsRouter.route("/category/:category_id")
	.get(EventsController.listCategory)
	.all(methodNotAllowed)

// Return
export { EventsRouter }
