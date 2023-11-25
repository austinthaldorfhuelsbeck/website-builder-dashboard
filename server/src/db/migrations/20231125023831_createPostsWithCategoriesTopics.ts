import { Knex } from "knex"

async function up(knex: Knex): Promise<void> {
	await knex.schema.createTable("posts", function (table) {
		table.bigInteger("post_id").primary().notNullable()
		table.bigInteger("post_category_id").notNullable()
		table.bigInteger("post_topic_id").notNullable()
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

	await knex.schema.createTable("post_categories", function (table) {
		table.bigInteger("post_category_id").primary().notNullable()
		table.string("label", 128).notNullable()
		table.string("text", 1024).defaultTo(null)
		table.timestamps(true, true)
	})

	await knex.schema.createTable("post_topics", function (table) {
		table.bigInteger("post_topic_id").primary().notNullable()
		table.string("label", 128).notNullable()
		table.string("hex", 16).defaultTo(null)
		table.timestamps(true, true)
	})

	await knex.schema.table("posts", function (table) {
		table
			.foreign("post_category_id")
			.references("post_category_id")
			.inTable("post_categories")
		table
			.foreign("post_topic_id")
			.references("post_topic_id")
			.inTable("post_topics")
	})
}

async function down(knex: Knex): Promise<void> {
	await knex.schema.dropTable("posts")
	await knex.schema.dropTable("post_categories")
	await knex.schema.dropTable("post_topics")
}

export { up, down }
