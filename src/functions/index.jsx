export const transformValue = (price) => {
  return price.toLocaleString("pt-br", { style: "currency", currency: "BRL" });
};
