import { MouseEvent, PropsWithChildren, useEffect, useState } from "react";

import { useLocation, useNavigate } from "react-router-dom";

import { formatDate, shortenText } from "../../services/util.service";
import {
	GridCard,
	GridTag,
	TagsContainer,
} from "../../styles/components/dashboard-grid.style";
import {
	DashboardSubheader,
	DashboardText,
} from "../../styles/layouts/dashboard-layout.style";
import {
	IEvent,
	IEventCategory,
	IPost,
	IPostCategory,
	IPostTopic,
} from "../../interfaces/objects.interface";
import { IApiResponse } from "../../interfaces/utils.interface";
import { readPostCategory } from "../../services/cl-api/post-categories.service";
import { readEventCategory } from "../../services/cl-api/event-categories.service";
import { readPostTopic } from "../../services/cl-api/post-topics.service";

// Data
interface ComponentProps {
	resource: IPost | IPostCategory | IPostTopic | IEvent | IEventCategory;
}

// Components
function GridItem({ resource }: PropsWithChildren<ComponentProps>) {
	// Hooks
	const navigate = useNavigate();
	const location = useLocation();

	// State
	// resources for grid tags
	const [category, setCategory] = useState<
		IPostCategory | IEventCategory | undefined
	>();
	const [topic, setTopic] = useState<IPostTopic | undefined>();

	// Handlers
	function onClick(e: MouseEvent<HTMLDivElement>) {
		e.preventDefault();
		// find appropriate id and construct link
		const id: number =
			(resource as IPost).post_id ||
			(resource as IEvent).event_id ||
			(resource as IPostCategory).post_category_id ||
			(resource as IPostTopic).post_topic_id ||
			(resource as IEventCategory).event_category_id;
		navigate(`${location.pathname}/${id}`);
	}

	// Effects
	// load category if resource is a post or event
	useEffect(
		function () {
			// functions to get each category
			async function getPostCategory(id: number) {
				const response: IApiResponse = await readPostCategory(id);
				if (response.data) setCategory(response.data);
				// TODO: handle error
			}
			async function getEventCategory(id: number) {
				const response: IApiResponse = await readEventCategory(id);
				if (response.data) setCategory(response.data);
				// TODO: handle error
			}
			// get corresponding category for each resource type
			if (!category) {
				if ((resource as IPost).post_id)
					getPostCategory((resource as IPost).post_category_id);
				if ((resource as IEvent).event_id)
					getEventCategory((resource as IEvent).event_category_id);
			}
		},
		[category, resource],
	);
	// load topic if resource is a post
	useEffect(
		function () {
			// function to get post topic
			async function getPostTopic(id: number) {
				const response: IApiResponse = await readPostTopic(id);
				if (response.data) setTopic(response.data);
				// TODO: handle error
			}
			// get topic if resource is a post
			if (!topic) {
				if ((resource as IPost).post_id)
					getPostTopic((resource as IPost).post_topic_id);
			}
		},
		[topic, resource],
	);

	return (
		<GridCard
			onClick={onClick}
			$bgColor={(resource as IPostTopic).hex || undefined}
		>
			<DashboardSubheader
				$link
				$white={(resource as IPostTopic).hex ? true : false}
			>
				{resource.label}
			</DashboardSubheader>
			{(resource as IEvent).date && (
				<DashboardText>
					{formatDate((resource as IEvent).date)}
				</DashboardText>
			)}
			<DashboardText $white={(resource as IPostTopic).hex ? true : false}>
				{shortenText(resource.text)}
			</DashboardText>
			<TagsContainer>
				{category && <GridTag>{category.label}</GridTag>}
				{topic && <GridTag $bgColor={topic.hex}>{topic.label}</GridTag>}
			</TagsContainer>
			<DashboardText $white={(resource as IPostTopic).hex ? true : false}>
				<em>{`Created: ${formatDate(
					resource.created_at,
				)} | Updated: ${formatDate(resource.updated_at)}`}</em>
			</DashboardText>
		</GridCard>
	);
}

export { GridItem };
