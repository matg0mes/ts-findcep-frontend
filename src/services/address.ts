import http from "../config/http";

const baseEndpoint = "/address";

export const findByCep = async (cep) => {
  const { data } = await http.get(`${baseEndpoint}/${cep}`);
  return data;
};

export const findAll = async () => {
  const { data } = await http.get(`${baseEndpoint}`);
  return data;
};
