export const formatToChileanPesos = (number) => {
  return number.toLocaleString("es-CL", { style: "currency", currency: "CLP" });
};
