import { Knex } from "knex"
import * as postTopics from "./02-post-topics.json"

async function seed(knex: Knex): Promise<void> {
	// Deletes ALL existing entries
	await knex("post_topics").del()

	// Inserts seed entries
	await knex.raw("TRUNCATE TABLE users RESTART IDENTITY CASCADE").then(() => {
		return knex("post_topics").insert(postTopics)
	})
}

export { seed }
