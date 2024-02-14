import fetchResponse from "./fetchResponse";

// Config
const apiUrl = process.env.REACT_APP_API_SERVER_URL;

// Functions
export const createEventCategory = async (data) => {
	const config = {
		url: `${apiUrl}/event_categories`,
		method: "POST",
		data,
	};
	return await fetchResponse(config);
};
export const readEventCategory = async (id) => {
	const config = {
		url: `${apiUrl}/event_categories/${id}`,
		method: "GET",
	};
	return await fetchResponse(config);
};
export const updateEventCategory = async (data, id) => {
	const config = {
		url: `${apiUrl}/event_categories/${id}`,
		method: "PUT",
		data,
	};
	return await fetchResponse(config);
};
export const deleteEventCategory = async (id) => {
	const config = {
		url: `${apiUrl}/event_categories/${id}`,
		method: "DELETE",
	};
	return await fetchResponse(config);
};
export const listEventCategories = async () => {
	const config = {
		url: `${apiUrl}/event_categories`,
		method: "GET",
	};
	return await fetchResponse(config);
};
