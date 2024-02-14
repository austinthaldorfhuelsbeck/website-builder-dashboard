import useGridItem from "../hooks/useGridItem";
import { formatDate, shortenText } from "../services/util.service";

const GridItem = ({ resource }) => {
	const { onClick, category, topic } = useGridItem({ resource });

	return (
		<div
			className="bg-gray-200 m-4 p-2 rounded-md cursor-pointer hover:bg-gray-300 hover:shadow-md hover:text-goldenrod"
			style={{ backgroundColor: resource.hex }}
			onClick={() => onClick()}
		>
			<h3 className="text-xl m-2 cursor-pointer">{resource.label}</h3>
			{resource.date && (
				<p className="m-2">{formatDate(resource.date)}</p>
			)}
			<p className="text-sm m-2">
				{resource.text && shortenText(resource.text)}
			</p>
			<div className="flex flex-row justify-start">
				{category && (
					<p className="bg-gray-400 text-sm m-1 p-2 rounded-md">
						{category.label}
					</p>
				)}
				{topic && (
					<p
						className="text-white text-sm m-1 p-2 rounded-md"
						style={{ backgroundColor: topic.hex }}
					>
						{topic.label}
					</p>
				)}
			</div>
			<p className="m-2 italic">
				{`Created: ${formatDate(
					resource.created_at,
				)} | Updated: ${formatDate(resource.updated_at)}`}
			</p>
		</div>
	);
};

export default GridItem;
