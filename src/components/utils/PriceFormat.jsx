import React from "react";

const formatPrice = (price) => {
  return new Intl.NumberFormat("id-ID").format(price);
};

const PriceFormat = ({ price }) => {
  if (typeof price !== "number") return null;

  return <>{formatPrice(price)}</>;
};

export default PriceFormat;
