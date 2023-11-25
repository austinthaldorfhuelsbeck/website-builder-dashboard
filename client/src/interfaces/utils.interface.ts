interface ErrorStatus extends Error {
	status: number
}
interface IApiResponse {
	data: any
	error: IAppError | null
}

export type { ErrorStatus, IApiResponse }
