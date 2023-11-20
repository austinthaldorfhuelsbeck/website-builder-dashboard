// External Modules
import * as dotenv from "dotenv"
import { app } from "./app"

dotenv.config()

// Env Vars
if (!process.env.PORT) {
	throw new Error("Missing required environment variables.")
}
const PORT: number = parseInt(process.env.PORT as string, 10)

// Server Activation
app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`)
})
