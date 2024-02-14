export const categoryLabelValidation = {
	required: "Label is required",
	maxLength: {
		value: 96,
		message: "Label should be less than 100 characters.",
	},
};

export const categoryTextValidation = {
	maxLength: {
		value: 96,
		message: "Description should be less than 100 characters.",
	},
};
