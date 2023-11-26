function formatDate(date: Date) {
	return new Date(date).toLocaleDateString("en-us", {
		year: "numeric",
		month: "short",
		day: "numeric",
	})
}
function shortenText(text: string) {
	return text.length < 100 ? text : text.slice(0, 100) + "..."
}

export { formatDate, shortenText }
