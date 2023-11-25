interface IAppError {
	message: string
}
interface IApiResponse {
	data: any
	error: IAppError | null
}

export type { IAppError, IApiResponse }
