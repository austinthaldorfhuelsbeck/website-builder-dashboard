// Data
interface IValidation {
	type?: string;
	placeholder?: string;
	subtext?: string;
	$short?: boolean;
	name: string;
	title: string;
}

// Config
// posts
export const postLabelValidation: IValidation = {
	type: "text",
	name: "label",
	title: "Label *",
	placeholder: "Title of the post",
};
export const postCategoryValidation: IValidation = {
	name: "post_category_id",
	title: "Category *",
	$short: true,
};
export const postTopicsValidation: IValidation = {
	name: "post_topic_id",
	title: "Topic *",
	$short: true,
};
export const postUrlValidation: IValidation = {
	type: "text",
	name: "url",
	title: "Post URL",
	placeholder: "Clickthrough URL for the post",
	subtext: "When the thumbnail image is clicked, it links here.",
};
export const postAudioValidation: IValidation = {
	type: "text",
	name: "audio",
	title: "Audio URL",
	placeholder: "Full URL of the podcast audio",
	subtext:
		"For podcasts. If the podcast is hosted somewhere else, paste the URL here to allow users to listen.",
};
export const postVideoValidation: IValidation = {
	type: "text",
	name: "video",
	title: "Video URL",
	placeholder: "Full URL of the video",
	subtext:
		"For video content. If the content is hosted somewhere else, paste the URL here to allow users to watch.",
};
export const postTextValidation: IValidation = {
	name: "text",
	title: "Description",
	placeholder: "A brief description of the post",
	subtext:
		"This could be the first paragraph of the post. Automatically shortened to 250 characters for the preview.",
};
// events
export const eventLabelValidation: IValidation = {
	type: "text",
	name: "label",
	title: "Event Name *",
	placeholder: "Name of the event",
};
export const eventCategoryValidation: IValidation = {
	name: "event_category_id",
	title: "Category *",
	$short: true,
};
export const eventDateValidation: IValidation = {
	type: "date",
	name: "date",
	title: "Date *",
	$short: true,
};
export const eventTextValidation: IValidation = {
	name: "text",
	title: "Description",
	placeholder: "A brief description of the event",
};
export const eventUrlValidation: IValidation = {
	type: "text",
	name: "url",
	title: "Event URL",
	placeholder: "Clickthrough URL for the event",
};
// categories
export const categoryLabelValidation: IValidation = {
	type: "text",
	name: "label",
	title: "Label *",
	placeholder: "Name of the category",
};
export const categoryTextValidation: IValidation = {
	name: "text",
	title: "Description",
	placeholder: "A brief description of the category",
};
// topics
export const topicLabelValidation: IValidation = {
	type: "text",
	name: "label",
	title: "Label *",
	placeholder: "Name of the topic",
};
export const topicColorValidation: IValidation = {
	type: "color",
	name: "hex",
	title: "Color *",
};
export const topicTextValidation: IValidation = {
	name: "text",
	title: "Description",
	placeholder: "A brief description of the topic",
};
