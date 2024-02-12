import { useEffect, useState } from "react";
import "react-quill/dist/quill.snow.css";

import { IPostCategory } from "../interfaces/objects.interface";
import { listPostCategories } from "../services/post-categories.service";

const usePostCategories = () => {
	const [categories, setCategories] = useState<(IPostCategory | undefined)[]>(
		[],
	);

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
