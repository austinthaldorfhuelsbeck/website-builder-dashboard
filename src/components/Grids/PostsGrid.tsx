import { PropsWithChildren, useEffect, useState } from "react";

import { faSpinner } from "@fortawesome/free-solid-svg-icons";

import { Loader } from "../../styles/layouts/page-layout.style";
import { IApiResponse } from "../../interfaces/utils.interface";
import { listPosts } from "../../services/cl-api/posts.service";
import { formatDate, shortenText } from "../../services/util.service";
import { readPostTopic } from "../../services/cl-api/post-topics.service";
import { readPostCategory } from "../../services/cl-api/post-categories.service";
import {
	IPost,
	IPostCategory,
	IPostTopic,
} from "../../interfaces/objects.interface";
import {
	DashboardSubheader,
	DashboardText,
} from "../../styles/layouts/admin-layout.style";
import {
	GridContainer,
	GridLink,
	GridTag,
	TagsContainer,
} from "../../styles/components/dashboard-grid.style";

// Data
interface ComponentProps {
	post: IPost;
}

// Components
function PostGridItem({ post }: PropsWithChildren<ComponentProps>) {
	// State
	const [category, setCategory] = useState<IPostCategory | undefined>();
	const [topic, setTopic] = useState<IPostTopic | undefined>();
	// Effects
	// load category and topic
	useEffect(
		function () {
			// function to get category
			async function getCategory(id: number) {
				const response: IApiResponse = await readPostCategory(id);
				if (response.data) setCategory(response.data);
			}
			// function to get topic
			async function getTopic(id: number) {
				const response: IApiResponse = await readPostTopic(id);
				if (response.data) setTopic(response.data);
			}
			if (!category) getCategory(post.post_category_id);
			if (!topic) getTopic(post.post_topic_id);
		},
		[category, post, topic],
	);

	return (
		<GridLink to={`/posts/${post.post_id}`}>
			<DashboardSubheader link>{post.title}</DashboardSubheader>
			<DashboardText>{formatDate(post.created_at)}</DashboardText>
			<DashboardText>{shortenText(post.text)}</DashboardText>
			<TagsContainer>
				<GridTag>{category?.label}</GridTag>
				<GridTag bgColor={topic?.hex}>{topic?.label}</GridTag>
			</TagsContainer>
		</GridLink>
	);
}
function PostsGrid() {
	// State
	const [posts, setPosts] = useState<(IPost | undefined)[]>([]);
	// Effects
	// load posts
	useEffect(
		function () {
			async function loadPosts() {
				const response: IApiResponse = await listPosts();
				if (response.data) setPosts(response.data);
				// TODO: handle error
			}
			if (!posts.length) loadPosts();
		},
		[posts],
	);

	return posts ? (
		<>
			<DashboardSubheader>Posts</DashboardSubheader>
			<GridContainer>
				{posts.map(function (post) {
					return (
						post && <PostGridItem key={post.post_id} post={post} />
					);
				})}
			</GridContainer>
		</>
	) : (
		<Loader icon={faSpinner} />
	);
}

export { PostsGrid };
