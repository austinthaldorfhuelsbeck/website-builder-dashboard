import { useEffect, useState } from "react";

import { IEventCategory, IPostCategory, IPostTopic } from "../interfaces";
import { listEventCategories } from "../services/event-categories.service";
import { listPostCategories } from "../services/post-categories.service";
import { listPostTopics } from "../services/post-topics.service";

import "react-quill/dist/quill.snow.css";

const usePostTopics = () => {
	const [topics, setTopics] = useState<(IPostTopic | undefined)[]>([]);

	// load available topic options
	useEffect(() => {
		const loadTopics = async () => {
			const response = await listPostTopics();
			if (response.data) setTopics(response.data as IPostTopic[]);
		};
		if (!topics.length) loadTopics();
	}, [topics]);

	return { topics };
};

const usePostCategories = () => {
	const [categories, setCategories] = useState<(IPostCategory | undefined)[]>(
		[],
	);

	useEffect(() => {
		const loadCategories = async () => {
			const response = await listPostCategories();
			if (response.data) setCategories(response.data as IPostCategory[]);
		};
		if (!categories.length) loadCategories();
	}, [categories]);

	return { categories };
};

const useEventCategories = () => {
	const [categories, setCategories] = useState<
		(IEventCategory | undefined)[]
	>([]);

	useEffect(() => {
		const loadCategories = async () => {
			const response = await listEventCategories();
			if (response.data) setCategories(response.data as IEventCategory[]);
		};
		if (!categories.length) loadCategories();
	}, [categories]);

	return { categories };
};

export { useEventCategories, usePostCategories, usePostTopics };
