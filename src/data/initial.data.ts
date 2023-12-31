import { IBaseEvent } from "../interfaces/objects.interface";

const initialEvent: IBaseEvent = {
	event_category_id: 0,
	date: new Date(),
	label: "",
	text: "",
	content: "",
	url: "",
	created_at: new Date(),
	updated_at: new Date(),
};

export { initialEvent };
