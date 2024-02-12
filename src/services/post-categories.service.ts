import { AxiosRequestConfig } from "axios";
import { IPostCategory } from "../interfaces/objects.interface";
import { IApiResponse } from "../interfaces/utils.interface";
import { fetchResponse } from "./external-api.service";

// Config
const apiUrl: string = process.env.REACT_APP_API_SERVER_URL || "";

// Functions
async function createPostCategory(
	postCategory: IPostCategory,
): Promise<IApiResponse> {
	const config: AxiosRequestConfig = {
		url: `${apiUrl}/post_categories`,
		method: "POST",
		data: postCategory,
	};
	return await fetchResponse(config);
}
async function readPostCategory(id: number): Promise<IApiResponse> {
	const config: AxiosRequestConfig = {
		url: `${apiUrl}/post_categories/${id}`,
		method: "GET",
	};
	return await fetchResponse(config);
}
async function updatePostCategory(
	postCategory: IPostCategory,
	id: number,
): Promise<IApiResponse> {
	const config: AxiosRequestConfig = {
		url: `${apiUrl}/post_categories/${id}`,
		method: "PUT",
		data: postCategory,
	};
	return await fetchResponse(config);
}
async function deletePostCategory(id: number): Promise<IApiResponse> {
	const config: AxiosRequestConfig = {
		url: `${apiUrl}/post_categories/${id}`,
		method: "DELETE",
	};
	return await fetchResponse(config);
}
async function listPostCategories(): Promise<IApiResponse> {
	const config: AxiosRequestConfig = {
		url: `${apiUrl}/post_categories`,
		method: "GET",
	};
	return await fetchResponse(config);
}

// Return
export {
	createPostCategory,
	deletePostCategory,
	listPostCategories,
	readPostCategory,
	updatePostCategory,
};
