import { PropsWithChildren } from "react"

import { faSpinner } from "@fortawesome/free-solid-svg-icons"

import { IValidPost } from "../../interfaces/objects.interface"
import { usePostsContext } from "../../context/ContextProvider"
import { Loader } from "../../styles/layouts/page-layout.style"
import { formatDate, shortenText } from "../../services/util.service"
import {
	GridLink,
	GridContainer,
} from "../../styles/components/dashboard-grid.style"
import {
	DashboardSubheader,
	DashboardText,
} from "../../styles/layouts/admin-layout.style"

// Data
interface ComponentProps {
	post: IValidPost
}

// Components
function PostGridItem({ post }: PropsWithChildren<ComponentProps>) {
	return (
		<GridLink to={`/posts/${post.post_id}`}>
			{/* <img alt="Thumbnail [200x250]" src={post.img} /> */}
			{/* <> */}
			{/* <strong>
				{post.category?.label} | {post.topic?.label}
			</strong> */}
			<DashboardSubheader>{post.title}</DashboardSubheader>
			<DashboardText>{formatDate(post.created_at)}</DashboardText>
			<DashboardText>{shortenText(post.text)}</DashboardText>
			{/* </> */}
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
