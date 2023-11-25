import { Knex } from "knex"

async function up(knex: Knex): Promise<void> {
	await knex.schema.createTable("events", function (table) {
		table.bigInteger("event_id").primary().notNullable()
		table.bigInteger("event_category_id").notNullable()
		table.date("date").notNullable()
		table.string("title", 128).notNullable()
		table.string("text", 1024).notNullable
		table.string("content", 16384).defaultTo(null)
		table.string("url").defaultTo(null)
		table.timestamps(true, true)
	})

	await knex.schema.createTable("event_categories", function (table) {
		table.bigInteger("event_category_id").primary().notNullable()
		table.string("label", 128).notNullable()
		table.string("text", 1024).defaultTo(null)
		table.timestamps(true, true)
	})

	await knex.schema.table("events", function (table) {
		table
			.foreign("event_category_id")
			.references("event_category_id")
			.inTable("event_categories")
	})
}

async function down(knex: Knex): Promise<void> {
	await knex.schema.dropTable("events")
	await knex.schema.dropTable("event_categories")
}

export { up, down }
