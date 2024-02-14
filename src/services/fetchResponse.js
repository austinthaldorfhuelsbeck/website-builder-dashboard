import axios, { isAxiosError } from "axios";

const callExternalApi = async (options) => {
	try {
		const response = await axios(options.config);
		const { data } = response;

		return {
			data,
			error: null,
		};
	} catch (error) {
		if (isAxiosError(error)) {
			const { response } = error;

			let message = "http request failed";

			if (response && response.statusText) {
				message = response.statusText;
			}

			if (error.message) {
				message = error.message;
			}

			if (response?.data?.message) message = response.data.message;

			return {
				data: null,
				error: {
					message,
				},
			};
		}

		return {
			data: null,
			error: {
				message: error.message,
			},
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
	return {
		data: data.data,
		error: data.error || error,
	};
};

export default fetchResponse;
