export const initialEvent = {
	event_category_id: 0,
	date: new Date(),
	label: "",
	text: "",
	content: "",
	url: "",
	created_at: new Date(),
	updated_at: new Date(),
};

export const initialPost = {
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

export const initialCategory = {
	label: "",
	text: "",
	created_at: new Date(),
	updated_at: new Date(),
};

export const initialTopic = {
	label: "",
	text: "",
	hex: "#fff",
	created_at: new Date(),
	updated_at: new Date(),
};

export const warningMessage =
	"Are you sure you wish to delete? You will not be able to recover this resource.";
