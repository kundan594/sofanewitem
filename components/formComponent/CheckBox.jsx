import React from "react";

const CheckBox = (props) => {
  return (
    <div class="md:flex md:items-center mb-6">
      <div class="md:w-1/3">
        <label for={props.name} className="form-label">
          {props.title}
        </label>
      </div>
      <div class="md:w-2/3">
        {props.options.map((option) => {
          return (
            <label key={option} className="checkbox-inline">
              <input
                id={props.name}
                name={props.name}
                onChange={props.handleChange}
                value={option}
                checked={props.selectedOptions.indexOf(option) > -1}
                type="checkbox"
              />{" "}
              {option}
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default CheckBox;
