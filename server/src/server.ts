// External Modules
import dotenv from "dotenv"
import { app } from "./app"

// Config
dotenv.config()

// Env Vars
if (!process.env.PORT) {
	throw new Error("Missing required environment variables.")
}
const PORT: number = parseInt(process.env.PORT as string, 10)

// Server Activation
app.listen(PORT, () => {
	return console.log(
		`Express server is listening at http://localhost:${PORT} 🚀`,
	)
})
