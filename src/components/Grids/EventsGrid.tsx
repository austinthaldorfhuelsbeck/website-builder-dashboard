import { PropsWithChildren, useEffect } from "react"

import { IValidEvent } from "../../interfaces/objects.interface"
import { IApiResponse } from "../../interfaces/utils.interface"
import { readEventCategory } from "../../services/cl-api/event-categories.service"
import {
	GridContainer,
	GridLink,
	GridTag,
	TagsContainer,
} from "../../styles/components/dashboard-grid.style"
import {
	DashboardSubheader,
	DashboardText,
} from "../../styles/layouts/admin-layout.style"
import { formatDate, shortenText } from "../../services/util.service"
import { useEventsContext } from "../../context/ContextProvider"
import { Loader } from "../../styles/layouts/page-layout.style"
import { faSpinner } from "@fortawesome/free-solid-svg-icons"

// Data
interface ComponentProps {
	event: IValidEvent
}

// Components
function EventGridItem({ event }: PropsWithChildren<ComponentProps>) {
	// Effects
	useEffect(() => {
		// function to get category
		async function getCategory(id: number) {
			const response: IApiResponse = await readEventCategory(id)
			if (response.data) event.category = response.data
		}
		if (!event.category) getCategory(event.event_category_id)
	}, [event])

	return (
		<GridLink to={`/admin/events/${event.event_id}`}>
			<DashboardSubheader>{event.title}</DashboardSubheader>
			<DashboardText>{formatDate(event.date)}</DashboardText>
			<DashboardText>{shortenText(event.text)}</DashboardText>
			<TagsContainer>
				<GridTag>{event.category?.label}</GridTag>
			</TagsContainer>
		</GridLink>
	)
}
function EventsGrid() {
	// Context
	const { events } = useEventsContext()

	return events ? (
		<>
			<DashboardSubheader>Events</DashboardSubheader>
			<GridContainer>
				{events.map(function (event) {
					return <EventGridItem key={event.event_id} event={event} />
				})}
			</GridContainer>
		</>
	) : (
		<Loader icon={faSpinner} />
	)
}

export { EventsGrid }
