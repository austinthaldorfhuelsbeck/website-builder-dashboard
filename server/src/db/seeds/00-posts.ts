import { Knex } from "knex"
import posts from "./00-posts.json"

export async function seed(knex: Knex): Promise<void> {
	// Deletes ALL existing entries
	await knex("posts").del()

	// Inserts seed entries
	await knex.raw("TRUNCATE TABLE users RESTART IDENTITY CASCADE").then(() => {
		return knex("users").insert(posts)
	})
}
