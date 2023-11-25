import { Knex } from "knex"
import * as postCategories from "./01-post-categories.json"

async function seed(knex: Knex): Promise<void> {
	// Deletes ALL existing entries
	await knex("post_categories").del()

	// Inserts seed entries
	await knex.raw("TRUNCATE TABLE users RESTART IDENTITY CASCADE").then(() => {
		return knex("post_categories").insert(postCategories)
	})
}

export { seed }
