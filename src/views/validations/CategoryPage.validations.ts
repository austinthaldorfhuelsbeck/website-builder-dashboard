import { RegisterOptions } from "react-hook-form";

export const categoryLabelValidation: RegisterOptions = {
	required: "Label is required",
	maxLength: {
		value: 96,
		message: "Label should be less than 100 characters.",
	},
};

export const categoryTextValidation: RegisterOptions = {
	maxLength: {
		value: 96,
		message: "Description should be less than 100 characters.",
	},
};
