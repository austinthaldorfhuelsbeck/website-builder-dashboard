import { useEffect, useState } from "react";

import { IEventCategory } from "../interfaces";
import { listEventCategories } from "../services/event-categories.service";

import "react-quill/dist/quill.snow.css";

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

export { useEventCategories };
