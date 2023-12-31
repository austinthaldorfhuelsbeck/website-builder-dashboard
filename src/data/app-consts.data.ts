import { IBaseEvent, IBasePost } from "../interfaces/objects.interface";

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

const warningMessage: string =
	"Are you sure you wish to delete? You will not be able to recover this resource.";

export { initialEvent, initialPost, warningMessage };
