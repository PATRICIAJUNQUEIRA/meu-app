import React, { Component } from 'react';

class Equipe extends Component{
  render(){
    return(
      <div>
        <Sobre
        nome={this.props.nome}
        cargo={this.props.cargo}
        idade={this.props.idade}/>
      </div>
    );
  }
}

class Sobre extends Component{
  render(){
    return(
      <div>
        <h2> Olá sou a {this.props.nome} </h2>
        <h3>Cargo: {this.props.cargo}</h3>
        <h4>Idade: {this.props.idade}</h4>
        <hr/>
      </div>
    );
  }
}

function App(){
  return(
    <div>
      <h1>Conheça nossa equipe!</h1>
      <Equipe 
      nome="Patricia" 
      cargo="Desenvolvedora Java"
      idade="31 anos"/>

      <Equipe 
      nome="Luiz Fernando" 
      cargo="Engenheiro de Produção"
      idade="34 anos"/>
    </div>
  );
}

export default App;
