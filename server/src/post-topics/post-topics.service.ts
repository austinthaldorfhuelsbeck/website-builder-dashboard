// Config
import knex from "../db/connection"

// Internal Modules
import { IBaseTopic, IPostTopic } from "../interfaces/objects.interface"

// Service Definitions
async function create(newPostTopic: IBaseTopic): Promise<IPostTopic> {
	return knex("post-topics")
		.insert(newPostTopic)
		.returning("*")
		.then((postTopics) => postTopics[0])
}
async function read(id: number): Promise<IPostTopic> {
	return knex("post-topics")
		.select("*")
		.where({ post_topic_id: id })
		.then((postTopics) => postTopics[0])
}
async function update(
	newPostTopic: IBaseTopic,
	id: number,
): Promise<IPostTopic> {
	return knex("post-topics")
		.select("*")
		.where({ post_topic_id: id })
		.update(newPostTopic, "*")
		.then((postTopics) => postTopics[0])
}
async function destroy(id: number): Promise<void> {
	return knex("post-topics").where({ post_topic_id: id }).del()
}
async function list(): Promise<IPostTopic[]> {
	return knex("post-topics").select("*")
}

// Return
const PostTopicsService = {
	create,
	read,
	update,
	destroy,
	list,
}
export { PostTopicsService }
