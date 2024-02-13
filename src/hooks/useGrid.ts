import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { IApiModel, IApiResponse } from "../interfaces";

interface GridProps {
	loader: () => Promise<IApiResponse>;
}

const useGrid = ({ loader }: GridProps) => {
	const navigate = useNavigate();
	const location = useLocation();
	const [resources, setResources] = useState<(IApiModel | undefined)[]>([]);

	const onCreate = (e: React.SyntheticEvent<HTMLButtonElement>) => {
		e.preventDefault();
		navigate(`${location.pathname}/new`);
	};

	useEffect(() => {
		const loadResources = async () => {
			const response = await loader();
			if (response.data) setResources(response.data as IApiModel[]);
			// TODO: handle error
		};
		loadResources();
	}, [loader]);

	return { resources, onCreate };
};

export type { GridProps };
export default useGrid;
