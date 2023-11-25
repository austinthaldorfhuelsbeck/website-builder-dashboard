// Config
import knex from "../db/connection"

// Internal Modules
import { IBaseCategory, IPostCategory } from "../interfaces/objects.interface"

// Service Definitions
async function create(newPostCategory: IBaseCategory): Promise<IPostCategory> {
	return knex("post_categories")
		.insert(newPostCategory)
		.returning("*")
		.then((postCategories) => postCategories[0])
}
async function read(id: number): Promise<IPostCategory> {
	return knex("post_categories")
		.select("*")
		.where({ post_category_id: id })
		.then((postCategories) => postCategories[0])
}
async function update(
	newPostCategory: IBaseCategory,
	id: number,
): Promise<IPostCategory> {
	return knex("post_categories")
		.select("*")
		.where({ post_category_id: id })
		.update(newPostCategory, "*")
		.then((postCategories) => postCategories[0])
}
async function destroy(id: number): Promise<void> {
	return knex("post_categories").where({ post_category_id: id }).del()
}
async function list(): Promise<IPostCategory[]> {
	return knex("post_categories").select("*")
}

// Return
const PostCategoriesService = {
	create,
	read,
	update,
	destroy,
	list,
}
export { PostCategoriesService }
