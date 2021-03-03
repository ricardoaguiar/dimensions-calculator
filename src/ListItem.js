import "./App.css";
import React, { useState } from "react";
import NumberInput from "./NumberInput";

function ListItem({ title }) {
  const [value, setValue] = useState("");
  return (
    <li className="input">
      <NumberInput value={value} onChange={setValue} />
      <span className="append">kg</span>
    </li>
  );
}

export default ListItem;
