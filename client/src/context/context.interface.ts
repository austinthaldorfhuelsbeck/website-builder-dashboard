import { Dispatch, SetStateAction } from "react"
import {
	IPostCategory,
	IValidPost,
	IPostTopic,
	IEventCategory,
	IValidEvent,
} from "../interfaces/objects.interface"

// Interfaces and State
// sets
interface IPostsContext {
	posts: IValidPost[] | undefined
	setPosts: Dispatch<SetStateAction<IValidPost[] | undefined>>
}
const IPostsContextState: IPostsContext = {
	posts: undefined,
	setPosts: () => {},
}
interface IPostCategoriesContext {
	postCategories: IPostCategory[] | undefined
	setPostCategories: Dispatch<SetStateAction<IPostCategory[] | undefined>>
}
const IPostCategoriesContextState: IPostCategoriesContext = {
	postCategories: undefined,
	setPostCategories: () => {},
}
interface IPostTopicsContext {
	postTopics: IPostTopic[] | undefined
	setPostTopics: Dispatch<SetStateAction<IPostTopic[] | undefined>>
}
const IPostTopicsContextState: IPostTopicsContext = {
	postTopics: undefined,
	setPostTopics: () => {},
}
interface IEventsContext {
	events: IValidEvent[] | undefined
	setEvents: Dispatch<SetStateAction<IValidEvent[] | undefined>>
}
const IEventsContextState: IEventsContext = {
	events: undefined,
	setEvents: () => {},
}
interface IEventCategoriesContext {
	eventCategories: IEventCategory[] | undefined
	setEventCategories: Dispatch<SetStateAction<IEventCategory[] | undefined>>
}
const IEventCategoriesContextState: IEventCategoriesContext = {
	eventCategories: undefined,
	setEventCategories: () => {},
}
// individual (selected) objects
interface IPostContext {
	post: IValidPost | undefined
	setPost: Dispatch<SetStateAction<IValidPost | undefined>>
}
const IPostContextState: IPostContext = {
	post: undefined,
	setPost: () => {},
}
interface IPostCategoryContext {
	postCategory: IPostCategory | undefined
	setPostCategory: Dispatch<SetStateAction<IPostCategory | undefined>>
}
const IPostCategoryContextState: IPostCategoryContext = {
	postCategory: undefined,
	setPostCategory: () => {},
}
interface IPostTopicContext {
	postTopic: IPostTopic | undefined
	setPostTopic: Dispatch<SetStateAction<IPostTopic | undefined>>
}
const IPostTopicContextState: IPostTopicContext = {
	postTopic: undefined,
	setPostTopic: () => {},
}
interface IEventContext {
	event: IValidEvent | undefined
	setEvent: Dispatch<SetStateAction<IValidEvent | undefined>>
}
const IEventContextState: IEventContext = {
	event: undefined,
	setEvent: () => {},
}
interface IEventCategoryContext {
	eventCategory: IEventCategory | undefined
	setEventCategory: Dispatch<SetStateAction<IEventCategory | undefined>>
}
const IEventCategoryContextState: IEventCategoryContext = {
	eventCategory: undefined,
	setEventCategory: () => {},
}

// Return
export type {
	IPostsContext,
	IPostCategoriesContext,
	IPostTopicsContext,
	IEventsContext,
	IEventCategoriesContext,
	IPostContext,
	IPostCategoryContext,
	IPostTopicContext,
	IEventContext,
	IEventCategoryContext,
}
export {
	IPostsContextState,
	IPostCategoriesContextState,
	IPostTopicsContextState,
	IEventsContextState,
	IEventCategoriesContextState,
	IPostContextState,
	IPostCategoryContextState,
	IPostTopicContextState,
	IEventContextState,
	IEventCategoryContextState,
}
