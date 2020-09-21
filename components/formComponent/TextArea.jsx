import React from 'react';
const TextArea = (props) => (
  <div class="md:flex md:items-center mb-6">
    <div class="md:w-1/3">
    <label className="form-label">{props.title}</label>
    </div>
    <div class="md:w-2/3">
    <textarea
      className="form-control"
      name={props.name}
      rows={props.rows}
      cols = {props.cols}
      value={props.value}
      onChange={props.handleChange}
      placeholder={props.placeholder} />
    </div>
  </div>  
);

export default TextArea;