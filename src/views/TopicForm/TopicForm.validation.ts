import { IValidation } from "../../interfaces/forms.interface";

const topicLabelValidation: IValidation = {
	type: "text",
	name: "label",
	title: "Label *",
	placeholder: "Name of the topic",
};
const topicColorValidation: IValidation = {
	type: "color",
	name: "hex",
	title: "Color *",
};
const topicTextValidation: IValidation = {
	name: "text",
	title: "Description",
	placeholder: "A brief description of the topic",
};

export { topicColorValidation, topicLabelValidation, topicTextValidation };
