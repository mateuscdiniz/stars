/* eslint-disable import/no-anonymous-default-export */
import api from "../backend";

const getColaboradores = async () => {
  const { data } = await api.get("/colaboradores");
  return data;
};

const criarColaborador = async (formColaborador) => {
  await api.post("/colaboradores", formColaborador);
};

const excluirColaborador = async (colaborador) => {
  await api.delete(`/colaboradores/${colaborador._id}`);
};

const getEmpresas = async () => {
  const { data } = await api.get("/empresas");
  return data;
};

const criarEmpresa = async (formEmpresa) => {
  await api.post("/empresas", formEmpresa);
};

const excluirEmpresa = async (empresa) => {
  await api.delete(`/empresas/${empresa._id}`);
};

export default {
  getColaboradores,
  criarColaborador,
  excluirColaborador,
  getEmpresas,
  criarEmpresa,
  excluirEmpresa,
};
