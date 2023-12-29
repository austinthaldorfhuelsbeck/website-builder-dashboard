import { PropsWithChildren, useEffect, useState } from "react";

import { faSpinner } from "@fortawesome/free-solid-svg-icons";

import { formatDate } from "../../services/util.service";
import { Loader } from "../../styles/layouts/page-layout.style";
import { IApiResponse } from "../../interfaces/utils.interface";
import { IEventCategory } from "../../interfaces/objects.interface";
import { listEventCategories } from "../../services/cl-api/event-categories.service";
import {
	GridContainer,
	GridLink,
} from "../../styles/components/dashboard-grid.style";
import {
	DashboardSubheader,
	DashboardText,
} from "../../styles/layouts/admin-layout.style";

// Data
interface ComponentProps {
	eventCategory: IEventCategory;
}

// Components
function EventCategoriesGridItem({
	eventCategory,
}: PropsWithChildren<ComponentProps>) {
	return (
		<GridLink to={`/event-categories/${eventCategory.event_category_id}`}>
			<DashboardSubheader link>{eventCategory.label}</DashboardSubheader>
			<DashboardText>{eventCategory.text}</DashboardText>
			<DashboardText>
				<em>{`Updated at ${formatDate(eventCategory.updated_at)}`}</em>
			</DashboardText>
		</GridLink>
	);
}
function EventCategoriesGrid() {
	// State
	const [eventCategories, setEventCategories] = useState<
		(IEventCategory | undefined)[]
	>([]);
	// Effects
	// load event categories
	useEffect(
		function () {
			async function loadEventCategories() {
				const response: IApiResponse = await listEventCategories();
				if (response.data) setEventCategories(response.data);
				// TODO: handle error
			}
			if (!eventCategories.length) loadEventCategories();
		},
		[eventCategories],
	);

	return eventCategories ? (
		<>
			<DashboardSubheader>Event Categories</DashboardSubheader>
			<GridContainer>
				{eventCategories.map(function (eventCategory) {
					return (
						eventCategory && (
							<EventCategoriesGridItem
								key={eventCategory.event_category_id}
								eventCategory={eventCategory}
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

export { EventCategoriesGrid };
