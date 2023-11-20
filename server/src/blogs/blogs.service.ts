// Config
import knex from "../db/connection"

// Service Definitions
async function create(newBlog: IBaseBlog): Promise<IBlog> {
	return knex("blogs")
		.insert(newBlog)
		.returning("")
		.then((blogs) => blogs[0])
}
async function read(id: number): Promise<IBlog> {
	return knex("blogs")
		.select("*")
		.where({ blog_id: id })
		.then((blogs) => blogs[0])
}
async function update(newBlog: IBaseBlog, id: number): Promise<IBlog> {
	return knex("blogs")
		.select("*")
		.where({ blog_id: id })
		.update(newBlog, "*")
		.then((blogs) => blogs[0])
}
async function destroy(id: number): Promise<void> {
	return knex("blogs").where({ blog_id: id }).del()
}
async function list(): Promise<IBlog[]> {
	return knex("blogs").select("*")
}
async function readFeatured(): Promise<IBlog> {
	return knex("blogs")
		.select("*")
		.where({ featured: true })
		.orderBy("updated_at", "desc")
		.then((blogs) => blogs[0])
}
async function listCategory(category: string): Promise<IBlog[]> {
	return knex("blogs")
		.select("*")
		.where({ category: category })
		.orderBy("updated_at", "desc")
}
async function listTopic(topic: string): Promise<IBlog[]> {
	return knex("blogs")
		.select("*")
		.where({ topic: topic })
		.orderBy("updated_at", "desc")
}

// Return
const BlogsService = {
	create,
	read,
	update,
	destroy,
	list,
	readFeatured,
	listCategory,
	listTopic,
}
export { BlogsService }
