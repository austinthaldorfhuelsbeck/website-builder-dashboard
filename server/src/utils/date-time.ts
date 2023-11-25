function today(): string {
	const now = new Date()
	const dd: string = now.getDate().toString().padStart(2, "0")
	const mm: string = (now.getMonth() + 1).toString().padStart(2, "0")
	const yyyy: string = now.getFullYear().toString()
	const today: string = `${mm}-${dd}-${yyyy}`
	return today
}
