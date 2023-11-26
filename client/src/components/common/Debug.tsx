import { PropsWithChildren, useState } from "react"
import {
	useEventCategoriesContext,
	useEventCategoryContext,
	useEventContext,
	useEventsContext,
	usePostCategoriesContext,
	usePostCategoryContext,
	usePostContext,
	usePostTopicContext,
	usePostTopicsContext,
	usePostsContext,
} from "../../context/ContextProvider"

interface ComponentProps {
	state: boolean
	handler: (c: boolean) => void
	label: string
	context: any
}

function DebugBlock({
	state,
	handler,
	label,
	context,
}: PropsWithChildren<ComponentProps>) {
	return (
		<>
			<button onClick={() => handler(state)}>
				<h1>{label}</h1>
			</button>
			<hr />
			{state && <pre>{JSON.stringify(context, null, "\t")}</pre>}
		</>
	)
}

function Debug() {
	// Context
	const { posts } = usePostsContext()
	const { postCategories } = usePostCategoriesContext()
	const { postTopics } = usePostTopicsContext()
	const { events } = useEventsContext()
	const { eventCategories } = useEventCategoriesContext()
	const { post } = usePostContext()
	const { postCategory } = usePostCategoryContext()
	const { postTopic } = usePostTopicContext()
	const { event } = useEventContext()
	const { eventCategory } = useEventCategoryContext()

	// State
	const [isPosts, setIsPosts] = useState<boolean>(false)
	const [isPostCategories, setIsPostCategories] = useState<boolean>(false)
	const [isPostTopics, setIsPostTopics] = useState<boolean>(false)
	const [isEvents, setIsEvents] = useState<boolean>(false)
	const [isEventCategories, setIsEventCategories] = useState<boolean>(false)
	const [isPost, setIsPost] = useState<boolean>(false)
	const [isPostCategory, setIsPostCategory] = useState<boolean>(false)
	const [isPostTopic, setIsPostTopic] = useState<boolean>(false)
	const [isEvent, setIsEvent] = useState<boolean>(false)
	const [isEventCategory, setIsEventCategory] = useState<boolean>(false)

	// Handlers
	function onTogglePosts(current: boolean) {
		setIsPosts(!current)
	}
	function onTogglePostCategories(current: boolean) {
		setIsPostCategories(!current)
	}
	function onTogglePostTopics(current: boolean) {
		setIsPostTopics(!current)
	}
	function onToggleEvents(current: boolean) {
		setIsEvents(!current)
	}
	function onToggleEventCategories(current: boolean) {
		setIsEventCategories(!current)
	}
	function onTogglePost(current: boolean) {
		setIsPost(!current)
	}
	function onTogglePostCategory(current: boolean) {
		setIsPostCategory(!current)
	}
	function onTogglePostTopic(current: boolean) {
		setIsPostTopic(!current)
	}
	function onToggleEvent(current: boolean) {
		setIsEvent(!current)
	}
	function onToggleEventCategory(current: boolean) {
		setIsEventCategory(!current)
	}

	return (
		<>
			<DebugBlock
				state={isPosts}
				handler={onTogglePosts}
				label="Posts"
				context={posts}
			/>
			<DebugBlock
				state={isPostCategories}
				handler={onTogglePostCategories}
				label="PostCategories"
				context={postCategories}
			/>
			<DebugBlock
				state={isPostTopics}
				handler={onTogglePostTopics}
				label="PostTopics"
				context={postTopics}
			/>
			<DebugBlock
				state={isEvents}
				handler={onToggleEvents}
				label="Events"
				context={events}
			/>
			<DebugBlock
				state={isEventCategories}
				handler={onToggleEventCategories}
				label="EventCategories"
				context={eventCategories}
			/>
			<h1>Currently Selected</h1>
			<hr />
			<DebugBlock
				state={isPost}
				handler={onTogglePost}
				label="Post"
				context={post || "None selected!"}
			/>
			<DebugBlock
				state={isPostCategory}
				handler={onTogglePostCategory}
				label="PostCategory"
				context={postCategory || "None selected!"}
			/>
			<DebugBlock
				state={isPostTopic}
				handler={onTogglePostTopic}
				label="PostTopic"
				context={postTopic || "None selected!"}
			/>
			<DebugBlock
				state={isEvent}
				handler={onToggleEvent}
				label="Event"
				context={event || "None selected!"}
			/>
			<DebugBlock
				state={isEventCategory}
				handler={onToggleEventCategory}
				label="EventCategory"
				context={eventCategory || "None selected!"}
			/>
		</>
	)
}

export { Debug }
