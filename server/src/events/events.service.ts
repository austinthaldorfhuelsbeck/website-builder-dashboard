// Config
import knex from "../db/connection"

// Internal Modules
import { IBaseEvent, IEvent } from "../interfaces/objects.interface"

// Service Definitions
async function create(newEvent: IBaseEvent): Promise<IEvent> {
	return knex("events")
		.insert(newEvent)
		.returning("*")
		.then((events) => events[0])
}
async function read(id: number): Promise<IEvent> {
	return knex("events")
		.select("*")
		.where({ event_id: id })
		.then((events) => events[0])
}
async function update(newEvent: IBaseEvent, id: number): Promise<IEvent> {
	return knex("events")
		.select("*")
		.where({ event_id: id })
		.update(newEvent)
		.then((events) => events[0])
}
async function destroy(id: number): Promise<void> {
	return knex("events").where({ event_id: id }).del()
}
async function list(): Promise<IEvent[]> {
	return knex("events").select("*")
}
async function listUpcoming(): Promise<IEvent[]> {
	return knex("events")
		.select("*")
		.where("date", ">", new Date())
		.orderBy("date")
}
async function listCategory(id: number): Promise<IEvent[]> {
	return knex("events")
		.select("*")
		.where({ event_category_id: id })
		.orderBy("updated_at", "desc")
		.orderBy("created_at", "desc")
}

// Return
const EventsService = {
	create,
	read,
	update,
	destroy,
	list,
	listUpcoming,
	listCategory,
}
export { EventsService }
