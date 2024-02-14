import { useEffect, useState } from "react";

import { listPostTopics } from "../services/post-topics.service";

import "react-quill/dist/quill.snow.css";

const usePostTopics = () => {
	const [topics, setTopics] = useState([]);

	// load available topic options
	useEffect(() => {
		const loadTopics = async () => {
			const response = await listPostTopics();
			if (response.data) setTopics(response.data);
		};
		if (!topics.length) loadTopics();
	}, [topics]);

	return { topics };
};

export default usePostTopics;
