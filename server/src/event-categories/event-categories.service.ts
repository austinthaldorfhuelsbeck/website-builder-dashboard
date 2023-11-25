// Config
import knex from "../db/connection"

// Internal Modules
import { IBaseCategory, IEventCategory } from "../interfaces/objects.interface"

// Service Definitions
async function create(
	newEventCategory: IBaseCategory,
): Promise<IEventCategory> {
	return knex("event_categories")
		.insert(newEventCategory)
		.returning("*")
		.then((eventCategories) => eventCategories[0])
}
async function read(id: number): Promise<IEventCategory> {
	return knex("event_categories")
		.select("*")
		.where({ event_category_id: id })
		.then((eventCategories) => eventCategories[0])
}
async function update(
	newEventCategory: IBaseCategory,
	id: number,
): Promise<IEventCategory> {
	return knex("event_categories")
		.select("*")
		.where({ event_category_id: id })
		.update(newEventCategory, "*")
		.then((eventCategories) => eventCategories[0])
}
async function destroy(id: number): Promise<void> {
	return knex("event_categories").where({ event_category_id: id }).del()
}
async function list(): Promise<IEventCategory[]> {
	return knex("event_categories").select("*")
}

// Return
const EventCategoriesService = {
	create,
	read,
	update,
	destroy,
	list,
}
export { EventCategoriesService }
