import axios, {
	AxiosError,
	AxiosRequestConfig,
	AxiosResponse,
	RawAxiosRequestHeaders,
	isAxiosError,
} from "axios";
import { IApiResponse, IAppError } from "../interfaces";

const callExternalApi = async (options: {
	config: AxiosRequestConfig;
}): Promise<IApiResponse> => {
	try {
		const response: AxiosResponse = await axios(options.config);
		const { data } = response;

		return {
			data,
			error: null,
		};
	} catch (error) {
		if (isAxiosError(error)) {
			const axiosError = error as AxiosError;

			const { response } = axiosError;

			let message = "http request failed";

			if (response && response.statusText) {
				message = response.statusText;
			}

			if (axiosError.message) {
				message = axiosError.message;
			}

			if (
				response &&
				response.data &&
				(response.data as IAppError).message
			) {
				message = (response.data as IAppError).message;
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
			error: {
				message: (error as Error).message,
			},
		};
	}
};

const fetchResponse = async (config: AxiosRequestConfig) => {
	const reqHeaders: RawAxiosRequestHeaders = {
		"content-type": "application/json",
	};
	const configWithHeaders: AxiosRequestConfig = {
		...config,
		headers: reqHeaders,
	};
	const { data, error } = (await callExternalApi({
		config: configWithHeaders,
	})) as IApiResponse;
	return {
		data: (data as IApiResponse).data,
		error: (data as IApiResponse).error || error,
	};
};

export { fetchResponse };

