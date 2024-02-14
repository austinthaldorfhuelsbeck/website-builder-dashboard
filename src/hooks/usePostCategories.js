import { useEffect, useState } from "react";

import { listPostCategories } from "../services/postCategories.service";

const usePostCategories = () => {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		const loadCategories = async () => {
			const response = await listPostCategories();
			if (response.data) setCategories(response.data);
		};
		if (!categories.length) loadCategories();
	}, [categories]);

	return { categories };
};

export default usePostCategories;
