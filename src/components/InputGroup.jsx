const InputGroup = ({ label, id, type, placeholder, onChange, value }) => (
	<div className="border-b-2 flex flex-col m-4 mr-0 w-full space-y-1">
		<label htmlFor={id} className="text-sm font-semibold text-gray-500">
			{label}
		</label>
		<input
			className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
			name={id}
			id={id}
			type={type}
			placeholder={placeholder}
			onChange={onChange}
			value={value}
		/>
	</div>
);

export default InputGroup;
