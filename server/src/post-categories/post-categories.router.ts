// External Modules
import { Router } from "express"

// Internal Modules
import { PostCategoriesController } from "./post_categories.controller"
import { methodNotAllowed } from "../errors/error.handlers"

// Router Definition
const PostCategoriesRouter = Router()

// Routes
PostCategoriesRouter.route("/")
	.get(PostCategoriesController.list)
	.post(PostCategoriesController.create)
	.all(methodNotAllowed)
PostCategoriesRouter.route("/:post_category_id")
	.get(PostCategoriesController.read)
	.put(PostCategoriesController.update)
	.delete(PostCategoriesController.delete)
	.all(methodNotAllowed)
