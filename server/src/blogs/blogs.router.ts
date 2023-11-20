// External Modules
import { Router } from "express"

// Internal Modules
import { BlogsController } from "./blogs.controller"
import { methodNotAllowed } from "../errors/error.handlers"

// Router Definition
const BlogsRouter = Router()

// Routes
BlogsRouter.route("/")
	.get(BlogsController.list)
	.post(BlogsController.create)
	.all(methodNotAllowed)
BlogsRouter.route("/featured")
	.get(BlogsController.readFeatured)
	.all(methodNotAllowed)
BlogsRouter.route("/:blog_id")
	.get(BlogsController.read)
	.put(BlogsController.update)
	.delete(BlogsController.delete)
	.all(methodNotAllowed)
BlogsRouter.route("/category/:category")
	.get(BlogsController.listCategory)
	.all(methodNotAllowed)
BlogsRouter.route("/topic/:topic")
	.get(BlogsController.listTopic)
	.all(methodNotAllowed)

// Return
export { BlogsRouter }
