import { ChangeEvent, useState } from "react"

import { useSearchParams } from "react-router-dom"

import {
	DashboardHeaderContainer,
	DashboardSearchBar,
} from "../../styles/layouts/dashboard-layout.style";

interface IQuery {
	query: string | undefined
}

function DashboardHeader() {
	// State
	const [searchParams, setSearchParams] = useSearchParams()
	const [formData, setFormData] = useState<IQuery>({ query: undefined })

	// Handlers
	function onChange(e: ChangeEvent<HTMLInputElement>) {
		e.preventDefault()
		setSearchParams({ query: e.target.value })
		setFormData({ ...formData, query: e.target.value })
	}

	return (
		<DashboardHeaderContainer>
			<DashboardSearchBar
				type="search"
				placeholder="Search"
				aria-label="Search"
				onChange={onChange}
				value={formData.query}
			/>
		</DashboardHeaderContainer>
	)
}

export { DashboardHeader }
