// External Modules
import type { Knex } from "knex"
import dotenv from "dotenv"
import path from "path"

// Environment Variable handling
dotenv.config()
const {
	DATABASE_HOST,
	DATABASE_USER,
	DATABASE_PASSWORD,
	DATABASE_HOST_DEVELOPMENT,
	DATABASE_USER_DEVELOPMENT,
	DATABASE_PASSWORD_DEVELOPMENT,
} = process.env

// knexConfig object definition
interface KnexConfig {
	[key: string]: Knex.Config
}

// Config and export
const knexConfig: KnexConfig = {
	development: {
		client: "pg",
		connection: {
			host: DATABASE_HOST_DEVELOPMENT,
			user: DATABASE_USER_DEVELOPMENT,
			database: DATABASE_USER_DEVELOPMENT,
			password: DATABASE_PASSWORD_DEVELOPMENT,
			charset: "utf8",
		},
		migrations: {
			directory: path.join(__dirname, "src", "db", "migrations"),
		},
		seeds: {
			directory: path.join(__dirname, "src", "db", "seeds"),
		},
	},
	production: {
		client: "pg",
		connection: {
			host: DATABASE_HOST,
			user: DATABASE_USER,
			database: DATABASE_USER,
			password: DATABASE_PASSWORD,
			charset: "utf8",
		},
		migrations: {
			directory: path.join(__dirname, "src", "db", "migrations"),
		},
		seeds: {
			directory: path.join(__dirname, "src", "db", "seeds"),
		},
	},
}

export default knexConfig
