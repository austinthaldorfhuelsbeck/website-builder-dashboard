import { useEffect, useState } from "react";
import "react-quill/dist/quill.snow.css";
import { IEventCategory } from "../interfaces/objects.interface";
import { listEventCategories } from "../services/event-categories.service";

const useEventCategories = () => {
	const [categories, setCategories] = useState<
		(IEventCategory | undefined)[]
	>([]);

	useEffect(() => {
		const loadCategories = async () => {
			const response = await listEventCategories();
			if (response.data) setCategories(response.data);
		};
		if (!categories.length) loadCategories();
	}, [categories]);

	return { categories };
};

export default useEventCategories;
