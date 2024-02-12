import { useEffect, useState } from "react";
import { IPostTopic } from "../interfaces/objects.interface";
import { listPostTopics } from "../services/post-topics.service";

const usePostTopics = () => {
	const [topics, setTopics] = useState<(IPostTopic | undefined)[]>([]);

	// load available topic options
	useEffect(
		function () {
			async function loadTopics() {
				const response = await listPostTopics();
				if (response.data) setTopics(response.data);
			}
			if (!topics.length) loadTopics();
		},
		[topics],
	);

	return { topics };
};

export default usePostTopics;
