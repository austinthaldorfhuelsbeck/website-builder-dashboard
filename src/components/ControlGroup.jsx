const ControlGroup = ({ label, id, options, $short }) => (
	<div
		className={`flex flex-col m-4 mr-0 w-full ${$short ? "max-w-xs" : ""}`}
	>
		<label htmlFor={id} className="text-sm font-semibold text-gray-500">
			{label}
		</label>
		<select className="border border-gray-300 focus:border-gray-500 focus:ring-2 focus:ring-gray-500 focus:outline-none">
			{options?.map((option) => {
				const _id =
					option.post_category_id ||
					option.post_topic_id ||
					option.event_category_id;
				return (
					<option key={_id} value={_id}>
						{option?.label}
					</option>
				);
			})}
		</select>
	</div>
);

export default ControlGroup;