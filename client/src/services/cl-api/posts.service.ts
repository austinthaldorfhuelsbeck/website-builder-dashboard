import { AxiosRequestConfig } from "axios"

import { fetchResponse } from "../external-api.service"
import { IBasePost } from "../../interfaces/objects.interface"
import { IApiResponse } from "../../interfaces/utils.interface"

// Config
const apiUrl: string = process.env.REACT_APP_API_SERVER_URL || ""

// Functions
async function createPost(post: IBasePost): Promise<IApiResponse> {
	const config: AxiosRequestConfig = {
		url: `${apiUrl}/posts`,
		method: "POST",
		data: post,
	}
	return await fetchResponse(config)
}
async function readPost(id: number): Promise<IApiResponse> {
	const config: AxiosRequestConfig = {
		url: `${apiUrl}/posts/${id}`,
		method: "GET",
	}
	return await fetchResponse(config)
}
async function updatePost(post: IBasePost, id: number): Promise<IApiResponse> {
	const config: AxiosRequestConfig = {
		url: `${apiUrl}/posts/${id}`,
		method: "PUT",
		data: post,
	}
	return await fetchResponse(config)
}
async function deletePost(id: number): Promise<IApiResponse> {
	const config: AxiosRequestConfig = {
		url: `${apiUrl}/posts/${id}`,
		method: "DELETE",
	}
	return await fetchResponse(config)
}
async function listPosts(): Promise<IApiResponse> {
	const config: AxiosRequestConfig = {
		url: `${apiUrl}/posts`,
		method: "GET",
	}
	return await fetchResponse(config)
}
async function readFeaturedPost(): Promise<IApiResponse> {
	const config: AxiosRequestConfig = {
		url: `${apiUrl}/posts/featured`,
		method: "GET",
	}
	return await fetchResponse(config)
}
async function listPostsByCategory(id: number): Promise<IApiResponse> {
	const config: AxiosRequestConfig = {
		url: `${apiUrl}/posts/category/${id}`,
		method: "GET",
	}
	return await fetchResponse(config)
}
async function listPostsByTopic(id: number): Promise<IApiResponse> {
	const config: AxiosRequestConfig = {
		url: `${apiUrl}/posts/topic/${id}`,
		method: "GET",
	}
	return await fetchResponse(config)
}

// Return
export {
	createPost,
	readPost,
	updatePost,
	deletePost,
	listPosts,
	readFeaturedPost,
	listPostsByCategory,
	listPostsByTopic,
}
