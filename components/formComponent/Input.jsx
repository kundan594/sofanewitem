import React from "react";

const Input = (props) => {
	//console.log(props.value);
	return (
		<>
			<label htmlFor={props.name} className="block text-sm font-medium leading-5 text-gray-700">{props.title === "" ? <>&nbsp;</> : props.title}</label>
			<input
				className="mt-1 form-input block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
				id={props.name}
				name={props.name}
				type={props.inputType}
				value={props.value}
				onChange={props.handleChange}
				placeholder={props.placeholder}
				{...props}
			/>
		</>
	);
};

export default Input;

