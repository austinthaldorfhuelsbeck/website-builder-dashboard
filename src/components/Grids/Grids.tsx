import { ResourceGrid } from "./ResourceGrid";
import { listPosts } from "../../services/cl-api/posts.service";
import { listEvents } from "../../services/cl-api/events.service";
import { listPostTopics } from "../../services/cl-api/post-topics.service";
import { listPostCategories } from "../../services/cl-api/post-categories.service";
import { listEventCategories } from "../../services/cl-api/event-categories.service";

// Components
function PostsGrid() {
	return <ResourceGrid loader={listPosts} />;
}
function EventsGrid() {
	return <ResourceGrid loader={listEvents} />;
}
function PostCategoriesGrid() {
	return <ResourceGrid loader={listPostCategories} />;
}
function PostTopicsGrid() {
	return <ResourceGrid loader={listPostTopics} />;
}
function EventCategoriesGrid() {
	return <ResourceGrid loader={listEventCategories} />;
}

export {
	PostsGrid,
	EventsGrid,
	PostCategoriesGrid,
	PostTopicsGrid,
	EventCategoriesGrid,
};
