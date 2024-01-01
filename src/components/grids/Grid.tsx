import { PropsWithChildren, SyntheticEvent, useEffect, useState } from "react";

import { faPlus, faSpinner } from "@fortawesome/free-solid-svg-icons";

import { GridItem } from "./GridItem";
import { IApiResponse } from "../../interfaces/utils.interface";
import { Loader } from "../../styles/layouts/page-layout.style";
import { GridContainer } from "../../styles/components/dashboard-grid.style";
import {
	IEvent,
	IEventCategory,
	IPost,
	IPostCategory,
	IPostTopic,
} from "../../interfaces/objects.interface";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { formatLocation, formatQuery } from "../../services/util.service";
import { DashboardTitle } from "../common/DashboardTitle";
import { InlineButton } from "../../styles/components/util.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Data
interface ComponentProps {
	loader: () => Promise<IApiResponse>;
}

// Components
function Grid({ loader }: PropsWithChildren<ComponentProps>) {
	// Hooks
	const [searchParams] = useSearchParams();
	const location = useLocation();
	const navigate = useNavigate();

	// State
	// resources to be loaded with loader function
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

	// Handlers
	function onClick(e: SyntheticEvent<HTMLButtonElement>) {
		e.preventDefault();
		navigate(`${location.pathname}/new`);
	}

	// Effects
	// load resources to state
	useEffect(
		function () {
			async function loadResources() {
				const response: IApiResponse = await loader();
				if (response.data) setResources(response.data);
				// TODO: handle error
			}
			if (!resources.length) loadResources();
		},
		[loader, resources],
	);

	// filter results by search query and then map items
	return resources ? (
		<>
			{location.pathname !== "/" && (
				<DashboardTitle>
					{formatLocation(location.pathname)}
				</DashboardTitle>
			)}

			<GridContainer>
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
			</GridContainer>

			<InlineButton onClick={onClick}>
				<FontAwesomeIcon icon={faPlus} /> New
			</InlineButton>
		</>
	) : (
		<Loader icon={faSpinner} />
	);
}

export { Grid };
