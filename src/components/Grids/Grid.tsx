import { PropsWithChildren, useEffect, useState } from "react";

import { faSpinner } from "@fortawesome/free-solid-svg-icons";

import { GridItem } from "./GridItem";
import { IApiResponse } from "../../interfaces/utils.interface";
import { Loader } from "../../styles/layouts/page-layout.style";
import { GridContainer } from "../../styles/components/dashboard-grid.style";
import { DashboardSubheader } from "../../styles/layouts/admin-layout.style";
import {
	IEvent,
	IEventCategory,
	IPost,
	IPostCategory,
	IPostTopic,
} from "../../interfaces/objects.interface";

// Data
interface ComponentProps {
	loader: () => Promise<IApiResponse>;
}

// Components
function Grid({ loader }: PropsWithChildren<ComponentProps>) {
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
	// load category to state

	return resources ? (
		<>
			<DashboardSubheader>Resources</DashboardSubheader>
			<GridContainer>
				{resources.map(function (resource) {
					return (
						resource && (
							<GridItem
								key={resource.label + resource.updated_at}
								resource={resource}
							/>
						)
					);
				})}
			</GridContainer>
		</>
	) : (
		<Loader icon={faSpinner} />
	);
}

export { Grid };
