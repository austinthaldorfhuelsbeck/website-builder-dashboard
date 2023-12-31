import {
	initialCategory,
	initialEvent,
	initialPost,
	initialTopic,
} from "../../../data/app-consts.data";
import { IApiResponse } from "../../../interfaces/utils.interface";
import {
	deleteEventCategory,
	readEventCategory,
	updateEventCategory,
} from "../../../services/cl-api/event-categories.service";
import {
	deleteEvent,
	readEvent,
	updateEvent,
} from "../../../services/cl-api/events.service";
import {
	deletePostCategory,
	readPostCategory,
	updatePostCategory,
} from "../../../services/cl-api/post-categories.service";
import {
	deletePostTopic,
	readPostTopic,
	updatePostTopic,
} from "../../../services/cl-api/post-topics.service";
import {
	deletePost,
	readPost,
	updatePost,
} from "../../../services/cl-api/posts.service";

// Data
interface IFormHookProps {
	initialData: any;
	id?: string;
	readFunction: (...args: any) => Promise<IApiResponse>;
	updateFunction: (...args: any) => Promise<IApiResponse>;
	deleteFunction: (...args: any) => Promise<IApiResponse>;
}

// Config
const postFormConfig: IFormHookProps = {
	initialData: initialPost,
	readFunction: readPost,
	updateFunction: updatePost,
	deleteFunction: deletePost,
};
const eventFormConfig: IFormHookProps = {
	initialData: initialEvent,
	readFunction: readEvent,
	updateFunction: updateEvent,
	deleteFunction: deleteEvent,
};
const postCategoryFormConfig: IFormHookProps = {
	initialData: initialCategory,
	readFunction: readPostCategory,
	updateFunction: updatePostCategory,
	deleteFunction: deletePostCategory,
};
const postTopicFormConfig: IFormHookProps = {
	initialData: initialTopic,
	readFunction: readPostTopic,
	updateFunction: updatePostTopic,
	deleteFunction: deletePostTopic,
};
const eventCategoryFormConfig: IFormHookProps = {
	initialData: initialCategory,
	readFunction: readEventCategory,
	updateFunction: updateEventCategory,
	deleteFunction: deleteEventCategory,
};

// Exports
export type { IFormHookProps };
export {
	postFormConfig,
	eventFormConfig,
	postCategoryFormConfig,
	postTopicFormConfig,
	eventCategoryFormConfig,
};
