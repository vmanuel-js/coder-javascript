import { getProductById } from "../model/carrito.js";

export const getProductByIdController = async (id) => {
  if (typeof id !== "number") return null;
  await getProductById(id);
};
