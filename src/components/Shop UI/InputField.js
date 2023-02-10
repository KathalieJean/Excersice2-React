import React from "react";

const InputFields = React.forwardRef((props, ref) => {
  return (
    <div>
      <label htmlFor={props.input.id}>{props.label}</label>
      <br></br>
      <input ref={ref} {...props.input} />
    </div>
  );
});

export default InputFields;
