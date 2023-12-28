interface IAppError {
	message: string
}
interface IApiResponse {
	data: any
	error: IAppError | null
}
interface ILink {
	id: number
	label: string
	target: string
}
interface ILinkGroup {
	id: number
	label: string
	links: ILink[]
}

export type { IAppError, IApiResponse, ILink, ILinkGroup }
