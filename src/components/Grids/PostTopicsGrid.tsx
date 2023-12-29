import { PropsWithChildren, useEffect, useState } from "react";

import { faSpinner } from "@fortawesome/free-solid-svg-icons";

import { formatDate } from "../../services/util.service";
import { IPostTopic } from "../../interfaces/objects.interface";
import { Loader } from "../../styles/layouts/page-layout.style";
import { IApiResponse } from "../../interfaces/utils.interface";
import { listPostTopics } from "../../services/cl-api/post-topics.service";
import {
	GridContainer,
	GridLink,
} from "../../styles/components/dashboard-grid.style";
import {
	DashboardSubheader,
	DashboardText,
} from "../../styles/layouts/admin-layout.style";

// Data
interface ComponentProps {
	postTopic: IPostTopic;
}

// Components
function PostTopicsGridItem({ postTopic }: PropsWithChildren<ComponentProps>) {
	return (
		<GridLink
			to={`/post-topics/${postTopic.post_topic_id}`}
			bgColor={postTopic.hex}
		>
			<DashboardSubheader white link>
				{postTopic.label}
			</DashboardSubheader>
			<DashboardText white>{postTopic.text}</DashboardText>
			<DashboardText white>
				<em>{`Updated at ${formatDate(postTopic.updated_at)}`}</em>
			</DashboardText>
		</GridLink>
	);
}
function PostTopicsGrid() {
	// State
	const [postTopics, setPostTopics] = useState<(IPostTopic | undefined)[]>(
		[],
	);
	// Effects
	// load post topics
	useEffect(
		function () {
			async function loadPostTopics() {
				const response: IApiResponse = await listPostTopics();
				if (response.data) setPostTopics(response.data);
				// TODO: handle error
			}
			if (!postTopics.length) loadPostTopics();
		},
		[postTopics],
	);

	return postTopics ? (
		<>
			<DashboardSubheader>Post Topics</DashboardSubheader>
			<GridContainer>
				{postTopics.map(function (postTopic) {
					return (
						postTopic && (
							<PostTopicsGridItem
								key={postTopic.post_topic_id}
								postTopic={postTopic}
							/>
						)
					);
				})}
			</GridContainer>
		</>
	) : (
		<Loader icon={faSpinner} />
	);
}

export { PostTopicsGrid };
