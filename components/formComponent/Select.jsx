import React from "react";

const Select = (props) => {
	//console.log("Props: ",props)
	return (
		<>
			<label htmlFor={props.name} className="block text-sm font-medium leading-5 text-gray-700">{props.title}</label>
			<select
				id={props.name}
				name={props.name}
				value={props.value}
				multiple={props.multiple || false}
				data-idx={props.idx || ""}
				data-classx={props.classx || ""}
				onChange={props.onChange}
				className="mt-1 block form-select w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out text-xs sm:text-sm sm:leading-5"
			>
				<option value="" disabled>
					{props.placeholder}
				</option>
				{props.options.map((option) => {
					return (
						<option key={option.id} value={option.value} label={option.name} selected={props.value === option.value}>
							{option.name}
						</option>
					);
				})}
			</select>
		</>
	);
};

export default Select;
