import { RegisterOptions } from "react-hook-form";

export const postLabelValidation: RegisterOptions = {
	required: "Label is required",
	maxLength: {
		value: 96,
		message: "Label should be less than 100 characters.",
	},
};

export const postCategoryValidation: RegisterOptions = {
	required: "Category is required.",
};

export const postTopicValidation: RegisterOptions = {
	required: "Topic is required.",
};

export const postTextValidation: RegisterOptions = {
	maxLength: {
		value: 96,
		message: "Label should be less than 100 characters.",
	},
};