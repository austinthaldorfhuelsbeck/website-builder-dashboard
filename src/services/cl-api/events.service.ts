import { AxiosRequestConfig } from "axios"

import { fetchResponse } from "../external-api.service"
import { IBaseEvent } from "../../interfaces/objects.interface"
import { IApiResponse } from "../../interfaces/utils.interface"

// Config
const apiUrl: string = process.env.REACT_APP_API_SERVER_URL || ""

// Functions
async function createEvent(event: IBaseEvent): Promise<IApiResponse> {
	const config: AxiosRequestConfig = {
		url: `${apiUrl}/events`,
		method: "POST",
		data: event,
	}
	return await fetchResponse(config)
}
async function readEvent(id: number): Promise<IApiResponse> {
	const config: AxiosRequestConfig = {
		url: `${apiUrl}/events/${id}`,
		method: "GET",
	}
	return await fetchResponse(config)
}
async function updateEvent(
	event: IBaseEvent,
	id: number,
): Promise<IApiResponse> {
	const config: AxiosRequestConfig = {
		url: `${apiUrl}/events/${id}`,
		method: "PUT",
		data: event,
	}
	return await fetchResponse(config)
}
async function deleteEvent(id: number): Promise<IApiResponse> {
	const config: AxiosRequestConfig = {
		url: `${apiUrl}/events/${id}`,
		method: "DELETE",
	}
	return await fetchResponse(config)
}
async function listEvents(): Promise<IApiResponse> {
	const config: AxiosRequestConfig = {
		url: `${apiUrl}/events`,
		method: "GET",
	}
	return await fetchResponse(config)
}
async function listUpcomingEvents(): Promise<IApiResponse> {
	const config: AxiosRequestConfig = {
		url: `${apiUrl}/events?upcoming=true`,
		method: "GET",
	};
	return await fetchResponse(config)
}
async function listEventsByCategory(id: number): Promise<IApiResponse> {
	const config: AxiosRequestConfig = {
		url: `${apiUrl}/events?category=${id}`,
		method: "GET",
	};
	return await fetchResponse(config)
}

// Return
export {
	createEvent,
	readEvent,
	updateEvent,
	deleteEvent,
	listEvents,
	listUpcomingEvents,
	listEventsByCategory,
}
