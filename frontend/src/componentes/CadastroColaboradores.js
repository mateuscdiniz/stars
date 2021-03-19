import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import BackendService from "../servicos/BackendService";

const criaFormEmBranco = () => {
  return {
    cpf: "",
    nome: "",
    email: "",
    telefone: "",
    endereco: "",
    empresa: "",
  };
};

function CadastroColaboradores() {
  const [form, setForm] = useState(criaFormEmBranco());
  const history = useHistory();

  const setValor = (evento, campo) => {
    setForm({ ...form, [campo]: evento.target.value });
  };

  const submeter = async (evento) => {
    evento.preventDefault();
    let dadosForm = { ...form };
    setForm(criaFormEmBranco());
    await BackendService.criarColaborador(dadosForm);
    history.push("/empresas");
  };

  return (
      
    <form onSubmit={(e) => submeter(e)}>
      <fieldset>
        <legend>Cadastrar Colaborador</legend>
        <div>
          <label>CPF:</label>
          <input
            type="number"
            name="cpf"
            value={form.cpf}
            onChange={(e) => setValor(e, "cpf")}
          />
        </div>
        <div>
          <label>Nome:</label>
          <input
            type="text"
            value={form.nome}
            name="nome"
            onChange={(e) => setValor(e, "nome")}
          ></input>
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={form.email}
            name="email"
            onChange={(e) => setValor(e, "email")}
          ></input>
        </div>
        <div>
          <label>Telefone:</label>
          <input
            type="number"
            value={form.telefone}
            name="telefone"
            onChange={(e) => setValor(e, "telefone")}
          ></input>
        </div>
        <div>
          <label>Endereco:</label>
          <input
            type="text"
            value={form.endereco}
            name="endereco"
            onChange={(e) => setValor(e, "endereco")}
          ></input>
        </div>
        <div>
          <label>Empresa:</label>
          <input
            type="text"
            value={form.empresa}
            name="empresa"
            onChange={(e) => setValor(e, "empresa")}
          ></input>
        </div>
        <div>
          <input type="submit" value="Cadastrar" />
        </div>
      </fieldset>
    </form>
  );
}

export default CadastroColaboradores;
