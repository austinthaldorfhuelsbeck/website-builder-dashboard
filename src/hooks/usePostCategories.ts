import { useEffect, useState } from "react";

import { IPostCategory } from "../interfaces";
import { listPostCategories } from "../services/post-categories.service";

import "react-quill/dist/quill.snow.css";

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

export default usePostCategories;
