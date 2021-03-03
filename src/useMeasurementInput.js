import { useState } from "react";

const useMeasurementInput = () => {
  const [colliValue, setColliValue] = useState("");

  const [masterDataColliValue, setMasterDataColliValue] = useState("");

  const [masterDataArticleValue, setMasterDataArticleValue] = useState("");

  return {
    colliValue,
    setColliValue,
    masterDataColliValue,
    setMasterDataColliValue,
    masterDataArticleValue,
    setMasterDataArticleValue
  };
};

export default useMeasurementInput;
