import React from "react";

const onTypingNumber = (setter) => (e) => {
  const typingNumber = !Number.isNaN(Number(e.target.value));
  if (typingNumber) {
    setter(e.target.value);
  }
};

const onFormatNumber = (setter, value) => () => {
  const formatedValue = Number(value).toFixed(3);
  setter(formatedValue);
};

function NumberInput({ value, onChange, placeholder, readOnly }) {
  const formatedValue = typeof value === "number" ? value.toFixed(3) : value;

  return (
    <input
      type="text"
      className="input"
      value={readOnly ? formatedValue : value}
      onChange={readOnly ? () => {} : onTypingNumber(onChange)}
      onBlur={readOnly ? () => {} : onFormatNumber(onChange, value)}
      placeholder={placeholder}
      readOnly={readOnly}
    />
  );
}

export default NumberInput;
