import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import GridItem from "../components/GridItem";
import Spinner from "../components/Spinner";
import useGrid from "../hooks/useGrid";
import { formatLocation, formatQuery } from "../services/util.service";

const Grid = ({ loader }) => {
	const [searchParams] = useSearchParams();
	const location = useLocation();
	const { resources, onCreate } = useGrid({ loader });

	useEffect(() => console.log(resources), [resources]);

	// show spinner while resources are loading
	if (!resources) return <Spinner />;
	return (
		<>
			{location.pathname !== "/" && (
				<>
					<h3 className="text-3xl font-bold m-auto mt-4 mb-0 ml-4">
						{formatLocation(location.pathname)}
					</h3>
					<button
						className="max-w-xs p-2 my-3 bg-gray-200 hover:bg-gray-300 transition-colors duration-150 border-none rounded-lg shadow cursor-pointer"
						onClick={onCreate}
					>
						<FontAwesomeIcon icon={faPlus} /> New
					</button>
				</>
			)}

			{resources.length ? (
				<div
					className="grid grid-cols-auto-fill gap-4 align-stretch p-4"
					style={{
						gridTemplateColumns:
							"repeat(auto-fill, minmax(250px, 1fr))",
					}}
				>
					{resources
						.filter(
							(resource) =>
								resource &&
								(resource.label
									.toLowerCase()
									.includes(formatQuery(searchParams)) ||
									resource.text
										.toLowerCase()
										.includes(formatQuery(searchParams))),
						)
						.map(
							(resource) =>
								resource && (
									<GridItem
										key={
											resource.label + resource.updated_at
										}
										resource={resource}
									/>
								),
						)}
				</div>
			) : (
				<></>
			)}
		</>
	);
};

export default Grid;
