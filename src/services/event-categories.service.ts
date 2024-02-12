import { AxiosRequestConfig } from "axios";
import { IEventCategory } from "../interfaces/objects.interface";
import { IApiResponse } from "../interfaces/utils.interface";
import { fetchResponse } from "./external-api.service";

// Config
const apiUrl: string = process.env.REACT_APP_API_SERVER_URL || "";

// Functions
async function createEventCategory(
	eventCategory: IEventCategory,
): Promise<IApiResponse> {
	const config: AxiosRequestConfig = {
		url: `${apiUrl}/event_categories`,
		method: "POST",
		data: eventCategory,
	};
	return await fetchResponse(config);
}
async function readEventCategory(id: number): Promise<IApiResponse> {
	const config: AxiosRequestConfig = {
		url: `${apiUrl}/event_categories/${id}`,
		method: "GET",
	};
	return await fetchResponse(config);
}
async function updateEventCategory(
	eventCategory: IEventCategory,
	id: number,
): Promise<IApiResponse> {
	const config: AxiosRequestConfig = {
		url: `${apiUrl}/event_categories/${id}`,
		method: "PUT",
		data: eventCategory,
	};
	return await fetchResponse(config);
}
async function deleteEventCategory(id: number): Promise<IApiResponse> {
	const config: AxiosRequestConfig = {
		url: `${apiUrl}/event_categories/${id}`,
		method: "DELETE",
	};
	return await fetchResponse(config);
}
async function listEventCategories(): Promise<IApiResponse> {
	const config: AxiosRequestConfig = {
		url: `${apiUrl}/event_categories`,
		method: "GET",
	};
	return await fetchResponse(config);
}

// Return
export {
	createEventCategory,
	deleteEventCategory,
	listEventCategories,
	readEventCategory,
	updateEventCategory,
};
