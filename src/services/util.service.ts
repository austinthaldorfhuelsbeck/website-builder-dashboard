import { IEvent } from "../interfaces/objects.interface";

function formatDate(date: Date): string {
	return new Date(date).toLocaleDateString("en-us", {
		year: "numeric",
		month: "short",
		day: "numeric",
	});
}
// accepts an event from api
// formats date correctly for form
function formatEventResponse(event: IEvent): any {
	return { ...event, date: event.date.toString().slice(0, 10) };
}
// Used for previews
function shortenText(text: string): string {
	return text.length < 100 ? text : text.slice(0, 100) + "...";
}
// take a url search param and turn it into a search term
function formatQuery(query: URLSearchParams): string {
	return query.toString().slice(6).toLowerCase().split("+").join(" ");
}
// take a location string and turn it into a capitalized phrase
function formatLocation(pathname: string): string {
	const words: string[] = pathname.slice(1).split("-");
	const capitalized: string[] = words.map(
		(w) => w.charAt(0).toUpperCase() + w.slice(1),
	);
	return capitalized.join(" ");
}

export {
	formatDate,
	formatEventResponse,
	shortenText,
	formatQuery,
	formatLocation,
};
