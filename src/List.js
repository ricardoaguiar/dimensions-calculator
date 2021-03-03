import "./App.css";
import React from "react";
import NumberInput from "./NumberInput";

function List({
  title,
  colliSize,
  colliValue,
  setColliValue,
  masterDataColliValue,
  setMasterDataColliValue,
  masterDataArticleValue,
  setMasterDataArticleValue,
  unit,
  calculate
}) {
  const {
    calcArticleValue,
    calcArticleDataVariation,
    calcArticleDataPercentageVariation
  } = calculate({ colliValue, colliSize, masterDataArticleValue });

  return (
    <ul className="list_col">
      <li className="col_header">{title}</li>
      <li className="input">
        <NumberInput
          value={colliValue}
          onChange={setColliValue}
          placeholder={`Colli ${title}`}
        />
        <span className="append">{unit}</span>
      </li>
      <li className="input">
        {/* colliGW / collisize */}
        <NumberInput value={calcArticleValue} readOnly />
        <span className="append">{unit}</span>
      </li>
      <li className="input">
        <NumberInput
          value={masterDataColliValue}
          onChange={setMasterDataColliValue}
          placeholder={`MD Colli ${title}`}
        />
        <span className="append">{unit}</span>
      </li>
      <li className="input">
        <NumberInput
          value={masterDataArticleValue}
          onChange={setMasterDataArticleValue}
          placeholder={`MD Article ${title}`}
        />
        <span className="append">{unit}</span>
      </li>
      <li className="input">
        {/* art smd - art dt */}
        <NumberInput value={calcArticleDataVariation} readOnly />
        <span className="append">{unit}</span>
      </li>
      <li className="input percentage_variation">
        <NumberInput value={calcArticleDataPercentageVariation} readOnly />
        <span className="append" />
      </li>
    </ul>
  );
}

export default List;
