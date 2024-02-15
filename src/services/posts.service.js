import fetchResponse from "./fetchResponse.service";

// Config
const apiUrl = process.env.REACT_APP_BASE_API_URL;

// Functions
export const createPost = async (post) => {
	const config = {
		url: `${apiUrl}/posts`,
		method: "POST",
		data: post,
	};
	return await fetchResponse(config);
};
export const readPost = async (id) => {
	const config = {
		url: `${apiUrl}/posts/${id}`,
		method: "GET",
	};
	return await fetchResponse(config);
};
export const updatePost = async (data, id) => {
	const config = {
		url: `${apiUrl}/posts/${id}`,
		method: "PUT",
		data,
	};
	return await fetchResponse(config);
};
export const deletePost = async (id) => {
	const config = {
		url: `${apiUrl}/posts/${id}`,
		method: "DELETE",
	};
	return await fetchResponse(config);
};
export const listPosts = async () => {
	const config = {
		url: `${apiUrl}/posts`,
		method: "GET",
	};
	return await fetchResponse(config);
};
export const readFeaturedPost = async () => {
	const config = {
		url: `${apiUrl}/posts/featured`,
		method: "GET",
	};
	return await fetchResponse(config);
};
export const listPostsByCategory = async (id) => {
	const config = {
		url: `${apiUrl}/posts/category/${id}`,
		method: "GET",
	};
	return await fetchResponse(config);
};
export const listPostsByTopic = async (id) => {
	const config = {
		url: `${apiUrl}/posts/topic/${id}`,
		method: "GET",
	};
	return await fetchResponse(config);
};
