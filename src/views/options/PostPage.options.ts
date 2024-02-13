import { IInputOptions } from "../../interfaces";

export const postLabelOptions: IInputOptions = {
	label: "Label *",
	id: "label",
	type: "text",
	placeholder: "Post name",
};

export const postUrlOptions: IInputOptions = {
	label: "Post URL",
	id: "url",
	type: "text",
	placeholder:
		"Paste the full URL of the external link that clicking the post image should link to",
};

export const postAudioOptions: IInputOptions = {
	label: "Audio URL",
	id: "audio",
	type: "text",
};

export const postVideoOptions: IInputOptions = {
	label: "Video URL",
	id: "video",
	type: "text",
};

export const postTextOptions: IInputOptions = {
	label: "Description",
	id: "text",
	type: "text",
	placeholder: "A short description of the post",
};
