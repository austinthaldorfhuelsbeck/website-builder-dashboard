import { RegisterOptions } from "react-hook-form";

export const postLabelValidation: RegisterOptions = {
	required: "Label is required",
	maxLength: {
		value: 96,
		message: "Label should be less than 100 characters.",
	},
};

export const postTextValidation: RegisterOptions = {
	maxLength: {
		value: 96,
		message: "Label should be less than 100 characters.",
	},
};
