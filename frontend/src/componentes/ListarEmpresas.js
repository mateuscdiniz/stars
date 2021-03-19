import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BackendService from '../servicos/BackendService';


function ListarEmpresas() {
  const [empresas, setEmpresas] = useState([]);

  useEffect(() => {
    (async () => {
        setEmpresas(await BackendService.getEmpresas());
    })();
  }, []);

  const renderEmpresas = (empresa) => {
    return (
      <div className="postagem" key={empresa._id}>

        <Link to={`/empresas/${empresa.nome}`} > {empresa.nome} </Link>
        <hr/>
      </div>
    );
  };

  return (
    
      <div className="empresas">
         <h1> EMPRESAS CADASTRADAS </h1> 
        <h3>{empresas.map(renderEmpresas)}</h3>
      </div>
    
  );
}

export default ListarEmpresas;