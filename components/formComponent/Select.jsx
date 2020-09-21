import React from "react";

const Select = (props) => {
  return (
    <div class="md:flex md:items-center mb-6">
      <div class="md:w-1/3">
        <label class="block text-sm font-medium leading-5 text-gray-700" for={props.name}> {props.title} </label>
      </div>
      <div class="md:w-2/3">
        <select
          id={props.name}
          name={props.name}
          value={props.value}
          onChange={props.handleChange}
          className="form-input block w-full sm:text-sm sm:leading-5"
        >
          <option value="" disabled>
            {props.placeholder}
          </option>
          {props.options.map((option) => {
            return (
              <option key={option} value={option} label={option}>
                {option}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default Select;
