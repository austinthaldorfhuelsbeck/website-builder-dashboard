import fetchResponse from "./fetchResponse.service";

// Config
const apiUrl = process.env.REACT_APP_API_SERVER_URL;

// Functions
export const createPostCategory = async (postCategory) => {
	const config = {
		url: `${apiUrl}/post_categories`,
		method: "POST",
		data: postCategory,
	};
	return await fetchResponse(config);
};
export const readPostCategory = async (id) => {
	const config = {
		url: `${apiUrl}/post_categories/${id}`,
		method: "GET",
	};
	return await fetchResponse(config);
};
export const updatePostCategory = async (data, id) => {
	const config = {
		url: `${apiUrl}/post_categories/${id}`,
		method: "PUT",
		data,
	};
	return await fetchResponse(config);
};
export const deletePostCategory = async (id) => {
	const config = {
		url: `${apiUrl}/post_categories/${id}`,
		method: "DELETE",
	};
	return await fetchResponse(config);
};
export const listPostCategories = async () => {
	const config = {
		url: `${apiUrl}/post_categories`,
		method: "GET",
	};
	return await fetchResponse(config);
};
