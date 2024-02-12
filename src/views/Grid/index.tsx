import { faPlus, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { styled } from "styled-components";
import GridItem from "../../components/GridItem";
import useGrid, { GridProps } from "../../hooks/useGrid";
import { formatLocation, formatQuery } from "../../services/util.service";

const DashboardHeader = styled.h3`
	font-size: 180%;
	font-weight: 900;
	margin: 1rem auto 0 1rem;
`;

const Grid: FC<GridProps> = (props) => {
	const [searchParams] = useSearchParams();
	const location = useLocation();
	const { resources, onCreate } = useGrid(props);

	return resources ? (
		<>
			{location.pathname !== "/" && (
				<>
					<DashboardHeader>
						{formatLocation(location.pathname)}
						<hr />
					</DashboardHeader>
					<button
						className="max-w-xs p-2 bg-gray-200 hover:bg-gray-300 transition-colors duration-150 border-none rounded-lg shadow cursor-pointer"
						onClick={onCreate}
					>
						<FontAwesomeIcon icon={faPlus} /> New
					</button>
				</>
			)}

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
									key={resource.label + resource.updated_at}
									resource={resource}
								/>
							),
					)}
			</div>
		</>
	) : (
		<FontAwesomeIcon
			icon={faSpinner}
			className="text-9xl m-auto animate-spin"
			style={{
				animationName: "spin",
				animationDuration: "2.5s",
				animationIterationCount: "infinite",
			}}
		/>
	);
};

export default Grid;
