// Config
import knex from "../db/connection"

// Internal Modules
import { IBasePost, IPost } from "../interfaces/objects.interface"

// Service Definitions
async function create(newPost: IBasePost): Promise<IPost> {
	return knex("posts")
		.insert(newPost)
		.returning("*")
		.then((posts) => posts[0])
}
async function read(id: number): Promise<IPost> {
	return knex("posts")
		.select("*")
		.where({ post_id: id })
		.then((posts) => posts[0])
}
async function update(newPost: IBasePost, id: number): Promise<IPost> {
	return knex("posts")
		.select("*")
		.where({ post_id: id })
		.update(newPost, "*")
		.then((posts) => posts[0])
}
async function destroy(id: number): Promise<void> {
	return knex("posts").where({ post_id: id }).del()
}
async function list(): Promise<IPost[]> {
	return knex("posts").select("*")
}
async function readFeatured(): Promise<IPost> {
	return knex("posts")
		.select("*")
		.where({ featured: true })
		.orderBy("updated_at", "desc")
		.orderBy("created_at", "desc")
		.then((posts) => posts[0])
}
async function listCategory(category: string): Promise<IPost[]> {
	return knex("posts")
		.select("*")
		.where({ category: category })
		.orderBy("updated_at", "desc")
		.orderBy("created_at", "desc")
}
async function listTopic(topic: string): Promise<IPost[]> {
	return knex("posts")
		.select("*")
		.where({ topic: topic })
		.orderBy("updated_at", "desc")
		.orderBy("created_at", "desc")
}

// Return
const PostsService = {
	create,
	read,
	update,
	destroy,
	list,
	readFeatured,
	listCategory,
	listTopic,
}
export { PostsService }
