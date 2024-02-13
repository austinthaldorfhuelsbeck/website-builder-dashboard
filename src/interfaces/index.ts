import { UseFormRegisterReturn } from "react-hook-form";

export interface ITimestamps {
	created_at: Date;
	updated_at: Date;
}
// POST
export interface IBasePost extends ITimestamps {
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
export interface IPost extends IBasePost {
	post_id: number;
}
// EVENT
export interface IBaseEvent extends ITimestamps {
	event_category_id: number;
	date: Date;
	label: string;
	text: string;
	content: string;
	url: string;
}
export interface IEvent extends IBaseEvent {
	event_id: number;
}
// CATEGORY
export interface IBaseCategory extends ITimestamps {
	label: string;
	text: string;
}
export interface IPostCategory extends IBaseCategory {
	post_category_id: number;
}
export interface IEventCategory extends IBaseCategory {
	event_category_id: number;
}
// TOPIC
export interface IBaseTopic extends ITimestamps {
	label: string;
	text: string;
	hex: string;
}
export interface IPostTopic extends IBaseTopic {
	post_topic_id: number;
}
export type IApiModel =
	| IPost
	| IEvent
	| IPostCategory
	| IPostTopic
	| IEventCategory;
// Util
export interface IAppError {
	message: string;
}
export interface IApiResponse {
	data: IApiModel | IApiModel[] | IApiResponse | null;
	error: IAppError | null;
}
export interface ILink {
	id: number;
	label: string;
	target: string;
}
export interface ILinkGroup {
	id: number;
	label: string;
	links: ILink[];
}
export interface IInputOptions {
	label: string;
	id: string;
	type?: string;
	placeholder?: string;
	options?: (IPostCategory | IPostTopic | IEventCategory)[];
}
export interface IInputProps extends IInputOptions {
	register: UseFormRegisterReturn<any>;
	error: any;
}
export interface IFormHookProps {
	initialData: any;
	id?: string;
	createFunction: (...args: any) => Promise<IApiResponse>;
	readFunction: (...args: any) => Promise<IApiResponse>;
	updateFunction: (...args: any) => Promise<IApiResponse>;
	deleteFunction: (...args: any) => Promise<IApiResponse>;
}
