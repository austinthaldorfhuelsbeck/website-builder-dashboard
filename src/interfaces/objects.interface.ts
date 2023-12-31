interface ITimestamps {
	created_at: Date
	updated_at: Date
}
// POST
interface IBasePost extends ITimestamps {
	post_category_id: number;
	post_topic_id: number;
	featured: boolean;
	img: string;
	label: string;
	text: string;
	content: string | undefined;
	audio: string | undefined;
	video: string | undefined;
	url: string | undefined;
}
interface IPost extends IBasePost {
	post_id: number;
}
// EVENT
interface IBaseEvent extends ITimestamps {
	event_category_id: number;
	date: Date;
	label: string;
	text: string;
	content: string;
	url: string;
}
interface IEvent extends IBaseEvent {
	event_id: number;
}
// CATEGORY
interface IBaseCategory extends ITimestamps {
	label: string
	text: string
}
interface IPostCategory extends IBaseCategory {
	post_category_id: number
}
interface IEventCategory extends IBaseCategory {
	event_category_id: number
}
// TOPIC
interface IBaseTopic extends ITimestamps {
	label: string
	text: string
	hex: string
}
interface IPostTopic extends IBaseTopic {
	post_topic_id: number
}

// Return
export type {
	ITimestamps,
	IBasePost,
	IPost,
	IBaseEvent,
	IEvent,
	IBaseCategory,
	IPostCategory,
	IEventCategory,
	IBaseTopic,
	IPostTopic,
};
