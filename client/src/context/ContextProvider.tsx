import {
	Context,
	createContext,
	PropsWithChildren,
	ReactNode,
	useContext,
	useEffect,
	useState,
} from "react"

import { IApiResponse } from "../interfaces/utils.interface"
import { listPosts } from "../services/cl-api/posts.service"
import {
	IEventCategory,
	IPostCategory,
	IPostTopic,
	IValidEvent,
	IValidPost,
} from "../interfaces/objects.interface"
import {
	IEventCategoriesContext,
	IEventCategoriesContextState,
	IEventCategoryContext,
	IEventCategoryContextState,
	IEventContext,
	IEventContextState,
	IEventsContext,
	IEventsContextState,
	IPostCategoriesContext,
	IPostCategoriesContextState,
	IPostCategoryContext,
	IPostCategoryContextState,
	IPostContext,
	IPostContextState,
	IPostsContext,
	IPostsContextState,
	IPostTopicContext,
	IPostTopicContextState,
	IPostTopicsContext,
	IPostTopicsContextState,
} from "./context.interface"
import { listPostCategories } from "../services/cl-api/post-categories.service"
import { listPostTopics } from "../services/cl-api/post-topics.service"
import { listEvents } from "../services/cl-api/events.service"
import { listEventCategories } from "../services/cl-api/event-categories.service"

// Context Definitions
// sets
const PostsContext: Context<IPostsContext> =
	createContext<IPostsContext>(IPostsContextState)
function usePostsContext() {
	const posts: IPostsContext = useContext(PostsContext)
	if (posts === undefined) {
		throw new Error("usePostsContext must be used with a PostsContext")
	}
	return posts
}
const PostCategoriesContext: Context<IPostCategoriesContext> =
	createContext<IPostCategoriesContext>(IPostCategoriesContextState)
function usePostCategoriesContext() {
	const postCategories: IPostCategoriesContext = useContext(
		PostCategoriesContext,
	)
	if (postCategories === undefined) {
		throw new Error(
			"usePostCategoriesContext must be used with a PostCategoriesContext",
		)
	}
	return postCategories
}
const PostTopicsContext: Context<IPostTopicsContext> =
	createContext<IPostTopicsContext>(IPostTopicsContextState)
function usePostTopicsContext() {
	const postTopics: IPostTopicsContext = useContext(PostTopicsContext)
	if (postTopics === undefined) {
		throw new Error(
			"usePostTopicsContext must be used with a PostTopicsContext",
		)
	}
	return postTopics
}
const EventsContext: Context<IEventsContext> =
	createContext<IEventsContext>(IEventsContextState)
function useEventsContext() {
	const events: IEventsContext = useContext(EventsContext)
	if (events === undefined) {
		throw new Error("useEventsContext must be used with a EventsContext")
	}
	return events
}
const EventCategoriesContext: Context<IEventCategoriesContext> =
	createContext<IEventCategoriesContext>(IEventCategoriesContextState)
function useEventCategoriesContext() {
	const eventCategories: IEventCategoriesContext = useContext(
		EventCategoriesContext,
	)
	if (eventCategories === undefined) {
		throw new Error(
			"useEventCategories must be used with a EventCategoriesContext",
		)
	}
	return eventCategories
}
// individual (selected) objects
const PostContext: Context<IPostContext> =
	createContext<IPostContext>(IPostContextState)
function usePostContext() {
	const post: IPostContext = useContext(PostContext)
	if (post === undefined) {
		throw new Error("usePostContext must be used with a PostContext")
	}
	return post
}
const PostCategoryContext: Context<IPostCategoryContext> =
	createContext<IPostCategoryContext>(IPostCategoryContextState)
function usePostCategoryContext() {
	const postCategory: IPostCategoryContext = useContext(PostCategoryContext)
	if (postCategory === undefined) {
		throw new Error(
			"usePostCategoryContext must be used with a PostCategoryContext",
		)
	}
	return postCategory
}
const PostTopicContext: Context<IPostTopicContext> =
	createContext<IPostTopicContext>(IPostTopicContextState)
function usePostTopicContext() {
	const postTopic: IPostTopicContext = useContext(PostTopicContext)
	if (postTopic === undefined) {
		throw new Error(
			"usePostTopicContext must be used with a PostTopicContext",
		)
	}
	return postTopic
}
const EventContext: Context<IEventContext> =
	createContext<IEventContext>(IEventContextState)
function useEventContext() {
	const event: IEventContext = useContext(EventContext)
	if (event === undefined) {
		throw new Error("useEventContext must be used with a EventContext")
	}
	return event
}
const EventCategoryContext: Context<IEventCategoryContext> =
	createContext<IEventCategoryContext>(IEventCategoryContextState)
function useEventCategoryContext() {
	const eventCategory: IEventCategoryContext =
		useContext(EventCategoryContext)
	if (eventCategory === undefined) {
		throw new Error(
			"useEventCategory must be used with a EventCategoryContext",
		)
	}
	return eventCategory
}

// Build Provider
interface ComponentProps {
	children: ReactNode
}
function ContextProvider({ children }: PropsWithChildren<ComponentProps>) {
	// State
	const [posts, setPosts] = useState<IValidPost[] | undefined>(undefined)
	const [postCategories, setPostCategories] = useState<
		IPostCategory[] | undefined
	>(undefined)
	const [postTopics, setPostTopics] = useState<IPostTopic[] | undefined>(
		undefined,
	)
	const [events, setEvents] = useState<IValidEvent[] | undefined>(undefined)
	const [eventCategories, setEventCategories] = useState<
		IEventCategory[] | undefined
	>(undefined)
	const [post, setPost] = useState<IValidPost | undefined>(undefined)
	const [postCategory, setPostCategory] = useState<IPostCategory | undefined>(
		undefined,
	)
	const [postTopic, setPostTopic] = useState<IPostTopic | undefined>(
		undefined,
	)
	const [event, setEvent] = useState<IValidEvent | undefined>(undefined)
	const [eventCategory, setEventCategory] = useState<
		IEventCategory | undefined
	>(undefined)

	// Effects
	useEffect(() => {
		async function loadPosts() {
			const response: IApiResponse = await listPosts()
			if (response.data) {
				setPosts(response.data)
				setPost(undefined)
			}
		}
		async function loadPostCategories() {
			const response: IApiResponse = await listPostCategories()
			if (response.data) {
				setPostCategories(response.data)
				setPostCategory(undefined)
			}
		}
		async function loadPostTopics() {
			const response: IApiResponse = await listPostTopics()
			if (response.data) {
				setPostTopics(response.data)
				setPostTopic(undefined)
			}
		}
		async function loadEvents() {
			const response: IApiResponse = await listEvents()
			if (response.data) {
				setEvents(response.data)
				setEvent(undefined)
			}
		}
		async function loadEventCategories() {
			const response: IApiResponse = await listEventCategories()
			if (response.data) {
				setEventCategories(response.data)
				setEventCategory(undefined)
			}
		}
		if (posts === undefined) loadPosts()
		if (postCategories === undefined) loadPostCategories()
		if (postTopics === undefined) loadPostTopics()
		if (events === undefined) loadEvents()
		if (eventCategories === undefined) loadEventCategories()
	}, [eventCategories, events, postCategories, postTopics, posts])

	return (
		<PostsContext.Provider value={{ posts, setPosts }}>
			<PostCategoriesContext.Provider
				value={{ postCategories, setPostCategories }}
			>
				<PostTopicsContext.Provider
					value={{ postTopics, setPostTopics }}
				>
					<EventsContext.Provider value={{ events, setEvents }}>
						<EventCategoriesContext.Provider
							value={{ eventCategories, setEventCategories }}
						>
							<PostContext.Provider value={{ post, setPost }}>
								<PostCategoryContext.Provider
									value={{ postCategory, setPostCategory }}
								>
									<PostTopicContext.Provider
										value={{ postTopic, setPostTopic }}
									>
										<EventContext.Provider
											value={{ event, setEvent }}
										>
											<EventCategoryContext.Provider
												value={{
													eventCategory,
													setEventCategory,
												}}
											>
												{children}
											</EventCategoryContext.Provider>
										</EventContext.Provider>
									</PostTopicContext.Provider>
								</PostCategoryContext.Provider>
							</PostContext.Provider>
						</EventCategoriesContext.Provider>
					</EventsContext.Provider>
				</PostTopicsContext.Provider>
			</PostCategoriesContext.Provider>
		</PostsContext.Provider>
	)
}

export {
	usePostsContext,
	usePostCategoriesContext,
	usePostTopicsContext,
	useEventsContext,
	useEventCategoriesContext,
	usePostContext,
	usePostCategoryContext,
	usePostTopicContext,
	useEventContext,
	useEventCategoryContext,
	ContextProvider,
}
