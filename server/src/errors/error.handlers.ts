// External Modules
import { Request, Response } from "express"

// Internal Modules
import { ErrorStatus } from "../interfaces/utils.interface"

function isAnErrorStatus(object): object is ErrorStatus {
	return "status" in object
}

function errorHandler(err: unknown, res: Response) {
	if (isAnErrorStatus(err)) {
		res.status(err.status).json({
			error: {
				message: err.message,
				status: err.status,
			},
		})
	} else if (err instanceof Error) {
		res.status(500).json({ error: err })
	} else if (err) {
		res.status(500).json({ error: { message: String(err) } })
	} else {
		res.status(500).json({ error: { message: "Something went wrong!" } })
	}
}

function methodNotAllowed(req: Request, res: Response) {
	res.status(405).json({
		message: `${req.method} not allowed for ${req.originalUrl}.`,
	})
}

function notFound(req: Request, res: Response) {
	res.status(404).json({ message: `Not found: ${req.originalUrl}.` })
}

export { errorHandler, methodNotAllowed, notFound }
