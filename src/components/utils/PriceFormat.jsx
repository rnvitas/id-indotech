import React from "react";

const formatPrice = (price) => {
  if (!isNaN(price)) {
    return new Intl.NumberFormat("id-ID").format(Number(price));
  }
  return price; // Jika bukan angka, kembalikan teks asli
};

const PriceFormat = ({ price }) => {
  return <>{formatPrice(price)}</>;
};

export default PriceFormat;
