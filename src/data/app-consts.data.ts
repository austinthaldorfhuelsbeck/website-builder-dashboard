import {
	IBaseCategory,
	IBaseEvent,
	IBasePost,
	IBaseTopic,
} from "../interfaces";

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
const initialPost: IBasePost = {
	post_category_id: 0,
	post_topic_id: 0,
	label: "",
	text: "",
	content: "",
	audio: "",
	video: "",
	url: "",
	img: "",
	featured: false,
	created_at: new Date(),
	updated_at: new Date(),
};
const initialCategory: IBaseCategory = {
	label: "",
	text: "",
	created_at: new Date(),
	updated_at: new Date(),
};
const initialTopic: IBaseTopic = {
	label: "",
	text: "",
	hex: "#fff",
	created_at: new Date(),
	updated_at: new Date(),
};

const warningMessage: string =
	"Are you sure you wish to delete? You will not be able to recover this resource.";

export {
	initialCategory,
	initialEvent,
	initialPost,
	initialTopic,
	warningMessage,
};

