import fetchResponse from "./fetchResponse.service";

// Config
const apiUrl = process.env.REACT_APP_API_SERVER_URL;

// Functions
export const createEvent = async (data) => {
	const config = {
		url: `${apiUrl}/events`,
		method: "POST",
		data,
	};
	return await fetchResponse(config);
};
export const readEvent = async (id) => {
	const config = {
		url: `${apiUrl}/events/${id}`,
		method: "GET",
	};
	return await fetchResponse(config);
};
export const updateEvent = async (data, id) => {
	const config = {
		url: `${apiUrl}/events/${id}`,
		method: "PUT",
		data,
	};
	return await fetchResponse(config);
};
export const deleteEvent = async (id) => {
	const config = {
		url: `${apiUrl}/events/${id}`,
		method: "DELETE",
	};
	return await fetchResponse(config);
};
export const listEvents = async () => {
	const config = {
		url: `${apiUrl}/events`,
		method: "GET",
	};
	return await fetchResponse(config);
};
export const listUpcomingEvents = async () => {
	const config = {
		url: `${apiUrl}/events?upcoming=true`,
		method: "GET",
	};
	return await fetchResponse(config);
};
export const listEventsByCategory = async (id) => {
	const config = {
		url: `${apiUrl}/events?category=${id}`,
		method: "GET",
	};
	return await fetchResponse(config);
};
