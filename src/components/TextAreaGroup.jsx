const TextAreaGroup = ({ label, id, placeholder, onChange, value }) => (
	<div className="border-b-2 flex flex-col m-4 mr-0 w-full space-y-1">
		<label htmlFor={id} className="text-sm font-semibold text-gray-500">
			{label}
		</label>
		<textarea
			className="px-4 py-2 transition duration-300 border border-gray-300 focus:border-gray-500 focus:ring-2 focus:ring-gray-500 focus:outline-none"
			id={id}
			name={id}
			placeholder={placeholder}
			onChange={onChange}
			value={value}
		/>
	</div>
);

export default TextAreaGroup;
