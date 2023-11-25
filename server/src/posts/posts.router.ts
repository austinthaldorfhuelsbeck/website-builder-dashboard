// External Modules
import { Router } from "express"

// Internal Modules
import { PostsController } from "./posts.controller"
import { methodNotAllowed } from "../errors/error.handlers"

// Router Definition
const PostsRouter = Router()

// Routes
PostsRouter.route("/")
	.get(PostsController.list)
	.post(PostsController.create)
	.all(methodNotAllowed)
PostsRouter.route("/featured")
	.get(PostsController.readFeatured)
	.all(methodNotAllowed)
PostsRouter.route("/:post_id")
	.get(PostsController.read)
	.put(PostsController.update)
	.delete(PostsController.delete)
	.all(methodNotAllowed)
PostsRouter.route("/category/:category")
	.get(PostsController.listCategory)
	.all(methodNotAllowed)
PostsRouter.route("/topic/:topic")
	.get(PostsController.listTopic)
	.all(methodNotAllowed)

// Return
export { PostsRouter }
