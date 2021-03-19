import React, { useState, useEffect } from "react";

import BackendService from "../servicos/BackendService";

function DetalhesEmpresa() {
  const [colaborador, setColaboradores] = useState([]);

  useEffect(() => {
    (async () => {
      setColaboradores(await BackendService.getColaboradores());
    })();
  }, []);

  const renderColaborador = (colaborador) => {
    return (
      <div className="colaborador" key={colaborador._id}>
        <h4>{colaborador.nome}</h4>
      </div>
    );
  };

  return (
    <div className="empresas">
      <h1>COLABORADORES DA EMPRESA</h1>
      <br />

      <h3>{colaborador.map(renderColaborador)}</h3>
    </div>
  );
}

export default DetalhesEmpresa;
