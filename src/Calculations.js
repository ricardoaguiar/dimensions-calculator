const calculateWeight = ({ colliValue, colliSize, masterDataArticleValue }) => {
  const calcArticleValue = Number(colliValue) / colliSize;
  const calcArticleDataVariation = calcArticleValue - masterDataArticleValue;
  const calcArticleDataPercentageVariation =
    (masterDataArticleValue / calcArticleValue - 1) * 100;

  return {
    calcArticleValue,
    calcArticleDataVariation,
    calcArticleDataPercentageVariation
  };
};
const calculateDimension = ({
  colliValue,
  colliSize,
  masterDataArticleValue
}) => {
  const calcArticleValue = Number(colliValue) * 10;
  const calcArticleDataVariation = calcArticleValue * colliSize;
  const calcArticleDataPercentageVariation = masterDataArticleValue / Math.PI;

  return {
    calcArticleValue,
    calcArticleDataVariation,
    calcArticleDataPercentageVariation
  };
};

export { calculateWeight, calculateDimension };
