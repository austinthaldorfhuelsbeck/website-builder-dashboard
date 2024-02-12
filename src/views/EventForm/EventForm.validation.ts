import { IValidation } from "../../interfaces/forms.interface";

const eventLabelValidation: IValidation = {
	type: "text",
	name: "label",
	title: "Event Name *",
	placeholder: "Name of the event",
};

const eventCategoryValidation: IValidation = {
	name: "event_category_id",
	title: "Category *",
	$short: true,
};

const eventDateValidation: IValidation = {
	type: "date",
	name: "date",
	title: "Date *",
	$short: true,
};

const eventTextValidation: IValidation = {
	name: "text",
	title: "Description",
	placeholder: "A brief description of the event",
};

const eventUrlValidation: IValidation = {
	type: "text",
	name: "url",
	title: "Event URL",
	placeholder: "Clickthrough URL for the event",
};

export {
	eventCategoryValidation,
	eventDateValidation,
	eventLabelValidation,
	eventTextValidation,
	eventUrlValidation,
};
