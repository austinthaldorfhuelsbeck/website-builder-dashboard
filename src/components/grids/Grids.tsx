import { Grid } from "./Grid";
import { listPosts } from "../../services/cl-api/posts.service";
import { listEvents } from "../../services/cl-api/events.service";
import { listPostTopics } from "../../services/cl-api/post-topics.service";
import { listPostCategories } from "../../services/cl-api/post-categories.service";
import { listEventCategories } from "../../services/cl-api/event-categories.service";

// Components
function PostsGrid() {
	return <Grid loader={listPosts} />;
}
function EventsGrid() {
	return <Grid loader={listEvents} />;
}
function PostCategoriesGrid() {
	return <Grid loader={listPostCategories} />;
}
function PostTopicsGrid() {
	return <Grid loader={listPostTopics} />;
}
function EventCategoriesGrid() {
	return <Grid loader={listEventCategories} />;
}

export {
	PostsGrid,
	EventsGrid,
	PostCategoriesGrid,
	PostTopicsGrid,
	EventCategoriesGrid,
};
