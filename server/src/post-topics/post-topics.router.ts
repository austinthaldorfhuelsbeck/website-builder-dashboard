// External Modules
import { Router } from "express"

// Internal Modules
import { PostTopicsController } from "./post-topics.controller"
import { methodNotAllowed } from "../errors/error.handlers"

// Router Definition
const PostTopicsRouter = Router()

// Routes
PostTopicsRouter.route("/")
	.get(PostTopicsController.list)
	.post(PostTopicsController.create)
	.all(methodNotAllowed)
PostTopicsRouter.route("/:post_topic_id")
	.get(PostTopicsController.read)
	.put(PostTopicsController.update)
	.delete(PostTopicsController.delete)
	.all(methodNotAllowed)

// Return
export { PostTopicsRouter }