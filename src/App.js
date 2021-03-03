import "./App.css";
import React, { useState } from "react";
import List from "./List";
import useMeasurementInput from "./useMeasurementInput";
import { calculateDimension, calculateWeight } from "./Calculations";

function App() {
  const numberOfItems = Array.from({ length: 20 }, (_, i) => i + 1);
  const [colliSize, setColliSize] = useState(1);

  const {
    colliValue: colliGrossWeight,
    setColliValue: setColliGrossWeight,
    masterDataColliValue: masterDataColliGrossWeight,
    setMasterDataColliValue: setMasterDataColliGrossWeight,
    masterDataArticleValue: masterDataArticleGrossWeight,
    setMasterDataArticleValue: setMasterDataArticleGrossWeight
  } = useMeasurementInput();

  const {
    colliValue: colliNetWeight,
    setColliValue: setColliNetWeight,
    masterDataColliValue: masterDataColliNetWeight,
    setMasterDataColliValue: setMasterDataColliNetWeight,
    masterDataArticleValue: masterDataArticleNetWeight,
    setMasterDataArticleValue: setMasterDataArticleNetWeight
  } = useMeasurementInput();

  const {
    colliValue: colliLength,
    setColliValue: setColliLength,
    masterDataColliValue: masterDataColliLength,
    setMasterDataColliValue: setMasterDataColliLength,
    masterDataArticleValue: masterDataArticleLength,
    setMasterDataArticleValue: setMasterDataArticleLength
  } = useMeasurementInput();

  return (
    <main>
      <header>
        <h1>Measurements</h1>
      </header>
      <div>
        <span className="colli_size">COLLI SIZE:</span>
        <select
          className="select_cl_size"
          value={`${colliSize}`}
          onChange={(e) => setColliSize(Number(e.target.value))}
        >
          {numberOfItems.map((option) => (
            <option value={option} key={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div className="data-container">
        <ul className="list_col">
          <li className="col_header">SIZE: {`${colliSize}`}</li>
          <li className="labels">CLL DATA</li>
          <li className="labels">ART DATA</li>
          <li className="labels">S-CLL DATA</li>
          <li className="labels">S-ART DATA</li>
          <li className="labels">ART DATA VAR</li>
          <li className="labels">ART DATA %VAR</li>
        </ul>

        <List
          calculate={calculateWeight}
          title={"Gross Weight"}
          colliSize={colliSize}
          colliValue={colliGrossWeight}
          setColliValue={setColliGrossWeight}
          masterDataColliValue={masterDataColliGrossWeight}
          setMasterDataColliValue={setMasterDataColliGrossWeight}
          masterDataArticleValue={masterDataArticleGrossWeight}
          setMasterDataArticleValue={setMasterDataArticleGrossWeight}
          unit={"kg"}
        />
        <List
          calculate={calculateWeight}
          title={"Net Weight"}
          colliSize={colliSize}
          colliValue={colliNetWeight}
          setColliValue={setColliNetWeight}
          masterDataColliValue={masterDataColliNetWeight}
          setMasterDataColliValue={setMasterDataColliNetWeight}
          masterDataArticleValue={masterDataArticleNetWeight}
          setMasterDataArticleValue={setMasterDataArticleNetWeight}
          unit={"kg"}
        />
        <List
          calculate={calculateDimension}
          title={"Length"}
          colliSize={colliSize}
          colliValue={colliLength}
          setColliValue={setColliLength}
          masterDataColliValue={masterDataColliLength}
          setMasterDataColliValue={setMasterDataColliLength}
          masterDataArticleValue={masterDataArticleLength}
          setMasterDataArticleValue={setMasterDataArticleLength}
          unit={"cm"}
        />
      </div>
    </main>
  );
}

export default App;
