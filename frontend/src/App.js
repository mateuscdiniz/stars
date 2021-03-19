import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import CadastroEmpresas from "./componentes/CadastroEmpresas";
import CadastroColaboradores from "./componentes/CadastroColaboradores";
import Home from "./componentes/Home";
import NaoEncontrada from "./componentes/NaoEncontrada";
import ListarEmpresas from "./componentes/ListarEmpresas";
import DetalhesEmpresa from "./componentes/DetalhesEmpresa"
import Navbar from "./componentes/Navbar"

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        
        <Route path="/" exact={true}>
          <Home />
        </Route>
        <Route path="/cadastroEmpresas" exact={true}>
          <CadastroEmpresas />
        </Route>
        <Route path="/cadastroColaboradores" exact={true}>
          <CadastroColaboradores />
        </Route>
        <Route path="/empresas" exact={true}>
          <ListarEmpresas />
        </Route>
        <Route path="/empresas/:id" exact={true}>
          <DetalhesEmpresa />
        </Route>
        <Route path="*">
          <NaoEncontrada />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
