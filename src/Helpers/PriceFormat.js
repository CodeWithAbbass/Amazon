const PriceFormat = (Price) => {
  let FormatPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  return FormatPrice.format(Price);
};
export default PriceFormat;
