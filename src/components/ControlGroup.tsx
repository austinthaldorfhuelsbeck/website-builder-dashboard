import { FC } from "react";
import {
	IEventCategory,
	IInputOptions,
	IPostCategory,
	IPostTopic,
} from "../interfaces";

interface ControlGroupProps extends IInputOptions {
	$short?: boolean;
}

const ControlGroup: FC<ControlGroupProps> = ({
	label,
	id,
	type,
	options,
	register,
	error,
	$short,
}) => (
	<div
		className={`flex flex-col m-4 mr-0 w-full ${$short ? "max-w-xs" : ""}`}
	>
		<label htmlFor={id} className="text-sm font-semibold text-gray-500">
			{label}
		</label>
		<select className="border border-gray-300 focus:border-gray-500 focus:ring-2 focus:ring-gray-500 focus:outline-none">
			{options?.map((option) => {
				const _id =
					(option as IPostCategory).post_category_id ||
					(option as IPostTopic).post_topic_id ||
					(option as IEventCategory).event_category_id;
				return (
					<option key={_id} value={_id}>
						{option.label}
					</option>
				);
			})}
		</select>
	</div>
);

export default ControlGroup;
