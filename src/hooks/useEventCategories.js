import { useEffect, useState } from "react";

import { listEventCategories } from "../services/eventCategories.service";

const useEventCategories = () => {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		const loadCategories = async () => {
			const response = await listEventCategories();
			if (response.data) setCategories(response.data);
		};
		if (!categories.length) loadCategories();
	}, [categories]);

	return { categories };
};

export { useEventCategories };
