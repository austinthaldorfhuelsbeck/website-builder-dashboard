import { PropsWithChildren, useEffect, useState } from "react";

import { faSpinner } from "@fortawesome/free-solid-svg-icons";

import { IApiResponse } from "../../interfaces/utils.interface";
import { Loader } from "../../styles/layouts/page-layout.style";
import { listEvents } from "../../services/cl-api/events.service";
import { formatDate, shortenText } from "../../services/util.service";
import { IEvent, IEventCategory } from "../../interfaces/objects.interface";
import { readEventCategory } from "../../services/cl-api/event-categories.service";
import {
	DashboardSubheader,
	DashboardText,
} from "../../styles/layouts/admin-layout.style";
import {
	GridContainer,
	GridLink,
	GridTag,
	TagsContainer,
} from "../../styles/components/dashboard-grid.style";

// Data
interface ComponentProps {
	event: IEvent;
}

// Components
function EventGridItem({ event }: PropsWithChildren<ComponentProps>) {
	// State
	const [category, setCategory] = useState<IEventCategory | undefined>();
	// Effects
	// load category
	useEffect(() => {
		// function to get category
		async function getCategory(id: number) {
			const response: IApiResponse = await readEventCategory(id);
			if (response.data) setCategory(response.data);
		}
		if (!category) getCategory(event.event_category_id);
	}, [category, event]);

	return (
		<GridLink to={`/events/${event.event_id}`}>
			<DashboardSubheader link>{event.title}</DashboardSubheader>
			<DashboardText>{formatDate(event.date)}</DashboardText>
			<DashboardText>{shortenText(event.text)}</DashboardText>
			<TagsContainer>
				<GridTag>{category?.label}</GridTag>
			</TagsContainer>
		</GridLink>
	);
}
function EventsGrid() {
	// State
	const [events, setEvents] = useState<(IEvent | undefined)[]>([]);
	// Effects
	// load events
	useEffect(
		function () {
			async function loadEvents() {
				const response: IApiResponse = await listEvents();
				if (response.data) setEvents(response.data);
				// TODO: handle error
			}
			if (!events.length) loadEvents();
		},
		[events],
	);

	return events ? (
		<>
			<DashboardSubheader>Events</DashboardSubheader>
			<GridContainer>
				{events.map(function (event) {
					return (
						event && (
							<EventGridItem key={event.event_id} event={event} />
						)
					);
				})}
			</GridContainer>
		</>
	) : (
		<Loader icon={faSpinner} />
	);
}

export { EventsGrid };
