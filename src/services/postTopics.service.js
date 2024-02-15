import fetchResponse from "./fetchResponse.service";

// Config
const apiUrl = process.env.REACT_APP_BASE_API_URL || "";

// Functions
export const createPostTopic = async (postTopic) => {
	const config = {
		url: `${apiUrl}/post_topics`,
		method: "POST",
		data: postTopic,
	};
	return await fetchResponse(config);
};
export const readPostTopic = async (id) => {
	const config = {
		url: `${apiUrl}/post_topics/${id}`,
		method: "GET",
	};
	return await fetchResponse(config);
};
export const updatePostTopic = async (data, id) => {
	const config = {
		url: `${apiUrl}/post_topics/${id}`,
		method: "PUT",
		data,
	};
	return await fetchResponse(config);
};
export const deletePostTopic = async (id) => {
	const config = {
		url: `${apiUrl}/post_topics/${id}`,
		method: "DELETE",
	};
	return await fetchResponse(config);
};
export const listPostTopics = async () => {
	const config = {
		url: `${apiUrl}/post_topics`,
		method: "GET",
	};
	return await fetchResponse(config);
};
