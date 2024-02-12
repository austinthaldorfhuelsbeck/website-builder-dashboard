import { IValidation } from "../../interfaces/forms.interface";

const postLabelValidation: IValidation = {
	type: "text",
	name: "label",
	title: "Label *",
	placeholder: "Title of the post",
};
const postCategoryValidation: IValidation = {
	name: "post_category_id",
	title: "Category *",
	$short: true,
};
const postTopicsValidation: IValidation = {
	name: "post_topic_id",
	title: "Topic *",
	$short: true,
};
const postUrlValidation: IValidation = {
	type: "text",
	name: "url",
	title: "Post URL",
	placeholder: "Clickthrough URL for the post",
	subtext: "When the thumbnail image is clicked, it links here.",
};
const postAudioValidation: IValidation = {
	type: "text",
	name: "audio",
	title: "Audio URL",
	placeholder: "Full URL of the podcast audio",
	subtext:
		"For podcasts. If the podcast is hosted somewhere else, paste the URL here to allow users to listen.",
};
const postVideoValidation: IValidation = {
	type: "text",
	name: "video",
	title: "Video URL",
	placeholder: "Full URL of the video",
	subtext:
		"For video content. If the content is hosted somewhere else, paste the URL here to allow users to watch.",
};
const postTextValidation: IValidation = {
	name: "text",
	title: "Description",
	placeholder: "A brief description of the post",
	subtext:
		"This could be the first paragraph of the post. Automatically shortened to 250 characters for the preview.",
};

// Export all validations
export {
	postAudioValidation,
	postCategoryValidation,
	postLabelValidation,
	postTextValidation,
	postTopicsValidation,
	postUrlValidation,
	postVideoValidation,
};
