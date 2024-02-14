export const formatDate = (date) =>
	new Date(date).toLocaleDateString("en-us", {
		year: "numeric",
		month: "short",
		day: "numeric",
	});

// accepts an event from api
// formats date correctly for form
export const formatEventResponse = (event) => {
	return { ...event, date: event.date.toString().slice(0, 10) };
};
// Used for previews
export const shortenText = (text) =>
	text.length < 100 ? text : text.slice(0, 100) + "...";

// take a url search param and turn it into a search term
export const formatQuery = (query) =>
	query.toString().slice(6).toLowerCase().split("+").join(" ");

// take a location string and turn it into a capitalized phrase
export const formatLocation = (pathname) => {
	const words = pathname.slice(1).split("-");
	const capitalized = words.map(
		(w) => w.charAt(0).toUpperCase() + w.slice(1),
	);
	return capitalized.join(" ");
};
