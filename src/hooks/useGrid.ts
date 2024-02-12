import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
	IEvent,
	IEventCategory,
	IPost,
	IPostCategory,
	IPostTopic,
} from "../interfaces/objects.interface";
import { IApiResponse } from "../interfaces/utils.interface";

interface GridProps {
	loader: () => Promise<IApiResponse>;
}

const useGrid = ({ loader }: GridProps) => {
	const navigate = useNavigate();
	const location = useLocation();
	const [resources, setResources] = useState<
		(
			| IPost
			| IPostCategory
			| IPostTopic
			| IEvent
			| IEventCategory
			| undefined
		)[]
	>([]);

	const onCreate = (e: React.SyntheticEvent<HTMLButtonElement>) => {
		e.preventDefault();
		navigate(`${location.pathname}/new`);
	};

	useEffect(() => {
		const loadResources = async () => {
			const response = await loader();
			if (response.data) setResources(response.data);
			// TODO: handle error
		};
		loadResources();
	}, [loader]);

	return { resources, onCreate };
};

export type { GridProps };
export default useGrid;
