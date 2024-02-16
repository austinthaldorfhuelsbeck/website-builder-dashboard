import axios from "axios";

const callExternalApi = async (options) => {
	try {
		const response = await axios(options.config);
		const { data } = response;

		return {
			data: data.data || data,
			error: null,
		};
	} catch (error) {
		if (error.isAxiosError) {
			const { response } = error;

			let message = "HTTP request failed.";

			if (error.message) {
				message = error.message;
			}

			if (response?.status) {
				const { data } = response;
				message = `${data?.error?.message} (error code ${response.status})`;
			}

			return {
				data: null,
				error: {
					message,
				},
			};
		}

		return {
			data: null,
			error,
		};
	}
};

const fetchResponse = async (config) => {
	const reqHeaders = {
		"content-type": "application/json",
	};
	const configWithHeaders = {
		...config,
		headers: reqHeaders,
	};
	const { data, error } = await callExternalApi({
		config: configWithHeaders,
	});
	return { data, error };
};

export default fetchResponse;
