import { AxiosRequestConfig } from "axios"
import { IPostTopic } from "../../interfaces/objects.interface"
import { IApiResponse } from "../../interfaces/utils.interface"
import { fetchResponse } from "../external-api.service"

// Config
const apiUrl: string = process.env.REACT_APP_API_SERVER_URL || ""

// Functions
async function createPostTopic(postTopic: IPostTopic): Promise<IApiResponse> {
	const config: AxiosRequestConfig = {
		url: `${apiUrl}/post_topics`,
		method: "POST",
		data: postTopic,
	}
	return await fetchResponse(config)
}
async function readPostTopic(id: number): Promise<IApiResponse> {
	const config: AxiosRequestConfig = {
		url: `${apiUrl}/post_topics/${id}`,
		method: "GET",
	}
	return await fetchResponse(config)
}
async function updatePostTopic(
	postTopic: IPostTopic,
	id: number,
): Promise<IApiResponse> {
	const config: AxiosRequestConfig = {
		url: `${apiUrl}/post_topics/${id}`,
		method: "PUT",
		data: postTopic,
	}
	return await fetchResponse(config)
}
async function deletePostTopic(id: number): Promise<IApiResponse> {
	const config: AxiosRequestConfig = {
		url: `${apiUrl}/post_topics/${id}`,
		method: "DELETE",
	}
	return await fetchResponse(config)
}
async function listPostTopics(): Promise<IApiResponse> {
	const config: AxiosRequestConfig = {
		url: `${apiUrl}/post_topics`,
		method: "GET",
	}
	return await fetchResponse(config)
}

// Return
export {
	createPostTopic,
	readPostTopic,
	updatePostTopic,
	deletePostTopic,
	listPostTopics,
}
