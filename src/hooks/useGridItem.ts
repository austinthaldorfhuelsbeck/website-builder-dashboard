import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
	IEvent,
	IEventCategory,
	IPost,
	IPostCategory,
	IPostTopic,
} from "../interfaces/objects.interface";
import { IApiResponse } from "../interfaces/utils.interface";
import { readEventCategory } from "../services/event-categories.service";
import { readPostCategory } from "../services/post-categories.service";
import { readPostTopic } from "../services/post-topics.service";

interface GridItemProps {
	resource: IPost | IPostCategory | IPostTopic | IEvent | IEventCategory;
}

const useGridItem = ({ resource }: GridItemProps) => {
	const navigate = useNavigate();
	const location = useLocation();
	const [category, setCategory] = useState<
		IPostCategory | IEventCategory | undefined
	>();
	const [topic, setTopic] = useState<IPostTopic | undefined>();

	const onClick = () => {
		const id = getResourceId(resource);
		// if (id && location.pathname !== "/")
		navigate(`${location.pathname}/${id}`);
	};

	useEffect(() => {
		// Fetch category or topic based on resource type
		const fetchCategoryOrTopic = async () => {
			if (
				"post_category_id" in resource &&
				resource.post_category_id &&
				!category
			) {
				const catResponse: IApiResponse = await readPostCategory(
					resource.post_category_id,
				);
				if (catResponse.data) setCategory(catResponse.data);
			} else if (
				"event_category_id" in resource &&
				resource.event_category_id &&
				!category
			) {
				const evtResponse: IApiResponse = await readEventCategory(
					resource.event_category_id,
				);
				if (evtResponse.data) setCategory(evtResponse.data);
			}

			if (
				"post_topic_id" in resource &&
				resource.post_topic_id &&
				!topic
			) {
				const topicResponse: IApiResponse = await readPostTopic(
					resource.post_topic_id,
				);
				if (topicResponse.data) setTopic(topicResponse.data);
			}
		};

		fetchCategoryOrTopic();
	}, [resource, category, topic]);

	return { onClick, category, topic };
};

// Helper function for resource ID extraction
const getResourceId = (
	resource: IPost | IPostCategory | IPostTopic | IEvent | IEventCategory,
): number | undefined => {
	if ("post_id" in resource) return resource.post_id;
	if ("event_id" in resource) return resource.event_id;

	if ("post_category_id" in resource) return resource.post_category_id;
	if ("post_topic_id" in resource) return resource.post_topic_id;
	if ("event_category_id" in resource) return resource.event_category_id;

	// Add more conditions as necessary
	return undefined;
};

export type { GridItemProps };
export default useGridItem;
