import { Knex } from "knex"

async function up(knex: Knex): Promise<void> {
	return knex.schema.createTable("posts", (table) => {
		table.bigInteger("post_id").primary().notNullable()
		table.bigInteger("category_id").notNullable()
		table.bigInteger("topic_id").notNullable()
		table.boolean("featured").notNullable().defaultTo(false)
		table.string("img", 1024).notNullable()
		table.string("title", 128).notNullable()
		table.string("text", 1024).notNullable()
		table.string("content", 16384).defaultTo(null)
		table.string("audio").defaultTo(null)
		table.string("video").defaultTo(null)
		table.string("url").defaultTo(null)
		table.timestamps(true, true)
	})
}

async function down(knex: Knex): Promise<void> {
	return knex.schema.dropTable("posts")
}

export { up, down }
