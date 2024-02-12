import { IValidation } from "../../interfaces/forms.interface";

// categories
const categoryLabelValidation: IValidation = {
	type: "text",
	name: "label",
	title: "Label *",
	placeholder: "Name of the category",
};
const categoryTextValidation: IValidation = {
	name: "text",
	title: "Description",
	placeholder: "A brief description of the category",
};

export { categoryLabelValidation, categoryTextValidation };
