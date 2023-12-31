// Data
interface IValidation {
	type?: string;
	placeholder?: string;
	$short?: boolean;
	name: string;
	title: string;
}

// Config
const eventLabelValidation: IValidation = {
	type: "text",
	name: "label",
	title: "Event Name *",
	placeholder: "e.g. Redeeming Heartache Conference",
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
	type: "text",
	name: "text",
	title: "Preview",
	placeholder: "A brief description of the event",
};
const eventUrlValidation: IValidation = {
	type: "text",
	name: "url",
	title: "URL",
	placeholder: "e.g. https://theallendercenter.org/events/2726298",
};

// Exports
export {
	eventLabelValidation,
	eventCategoryValidation,
	eventDateValidation,
	eventTextValidation,
	eventUrlValidation,
};
