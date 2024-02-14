import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { readEventCategory } from "../services/eventCategories.service";
import { readPostCategory } from "../services/postCategories.service";
import { readPostTopic } from "../services/postTopics.service";

const useGridItem = ({ resource }) => {
	const navigate = useNavigate();
	const location = useLocation();
	const [category, setCategory] = useState();
	const [topic, setTopic] = useState();

	const onClick = () => {
		const id = getResourceId(resource);
		// if (id && location.pathname !== "/")
		navigate(`${location.pathname}/${id}`);
	};

	useEffect(() => {
		// Fetch category or topic based on resource type
		const fetchCategoryOrTopic = async () => {
			if (resource.post_category_id && resource.post_id && !category) {
				const catResponse = await readPostCategory(
					resource.post_category_id,
				);
				if (catResponse.data) setCategory(catResponse.data);
			} else if (resource.event_category_id && resource.event_id && !category) {
				const evtResponse = await readEventCategory(
					resource.event_category_id,
				);
				if (evtResponse.data) setCategory(evtResponse.data);
			}

			if (resource.post_topic_id && resource.post_id && !topic) {
				const topicResponse = await readPostTopic(
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
const getResourceId = (resource) => {
	if ("post_id" in resource) return resource.post_id;
	if ("event_id" in resource) return resource.event_id;
	if ("post_category_id" in resource) return resource.post_category_id;
	if ("post_topic_id" in resource) return resource.post_topic_id;
	if ("event_category_id" in resource) return resource.event_category_id;

	return undefined;
};

export default useGridItem;
