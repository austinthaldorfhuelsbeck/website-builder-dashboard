import { ChangeEvent, useState } from "react"

import { Link, useSearchParams } from "react-router-dom"

import {
	DashboardHeaderContainer,
	DashboardSearchBar,
} from "../../styles/layouts/admin-layout.style"

interface IQuery {
	query: string | undefined
}

function SearchBar() {
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
		<DashboardSearchBar
			type="search"
			placeholder="Search"
			aria-label="Search"
			onChange={onChange}
			value={formData.query}
		/>
	)
}

function DashboardHeader() {
	return (
		<DashboardHeaderContainer>
			<Link to="/admin">CL Admin</Link>
			<SearchBar />
		</DashboardHeaderContainer>
	)
}

export { DashboardHeader }
