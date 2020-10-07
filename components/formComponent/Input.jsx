import React from "react";

const Input = (props) => {
  //console.log(props.value);
  return (
    <div class="md:flex md:items-center mb-6">
      <div class="md:w-1/3">
        <label class="block text-sm font-medium leading-5 text-gray-700" for={props.name} className="form-label">
          {props.title}
        </label>
      </div>
      <div class="md:w-2/3">
        <input
          className="form-input block w-full sm:text-sm sm:leading-5"
          id={props.name}
          name={props.name}
          type={props.inputType}
          value={props.value}
          onChange={props.handleChange}
          placeholder={props.placeholder}
          {...props}
        />
      </div>
    </div>
  );
};

export default Input;

