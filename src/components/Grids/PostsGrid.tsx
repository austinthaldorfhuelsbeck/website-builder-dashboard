import { PropsWithChildren, useEffect } from "react"

import { faSpinner } from "@fortawesome/free-solid-svg-icons"

import { IValidPost } from "../../interfaces/objects.interface"
import { usePostsContext } from "../../context/ContextProvider"
import { Loader } from "../../styles/layouts/page-layout.style"
import { IApiResponse } from "../../interfaces/utils.interface"
import { formatDate, shortenText } from "../../services/util.service"
import { readPostTopic } from "../../services/cl-api/post-topics.service"
import { readPostCategory } from "../../services/cl-api/post-categories.service"
import {
	DashboardSubheader,
	DashboardText,
} from "../../styles/layouts/admin-layout.style"
import {
	GridContainer,
	GridLink,
	GridTag,
	TagsContainer,
} from "../../styles/components/dashboard-grid.style"

// Data
interface ComponentProps {
	post: IValidPost
}

// Components
function PostGridItem({ post }: PropsWithChildren<ComponentProps>) {
	// Effects
	useEffect(() => {
		// function to get category
		async function getCategory(id: number) {
			const response: IApiResponse = await readPostCategory(id)
			if (response.data) post.category = response.data
		}
		// function to get topic
		async function getTopic(id: number) {
			const response: IApiResponse = await readPostTopic(id)
			if (response.data) post.topic = response.data
		}
		if (!post.category) getCategory(post.post_category_id)
		if (!post.topic) getTopic(post.post_topic_id)
	}, [post])

	return (
		<GridLink to={`/admin/posts/${post.post_id}`}>
			<DashboardSubheader>{post.title}</DashboardSubheader>
			<DashboardText>{formatDate(post.created_at)}</DashboardText>
			<DashboardText>{shortenText(post.text)}</DashboardText>
			<TagsContainer>
				<GridTag>{post.category?.label}</GridTag>
				<GridTag>{post.topic?.label}</GridTag>
			</TagsContainer>
		</GridLink>
	)
}
function PostsGrid() {
	// Context
	const { posts } = usePostsContext()

	return posts ? (
		<>
			<DashboardSubheader>Posts</DashboardSubheader>
			<GridContainer>
				{posts.map(function (post) {
					return <PostGridItem key={post.post_id} post={post} />
				})}
			</GridContainer>
		</>
	) : (
		<Loader icon={faSpinner} />
	)
}

export { PostsGrid }
