import React from 'react';

const Equipe = (props) => {
  return (
    <div>
      <Sobre nome={props.nome} cargo={props.cargo} idade={props.idade} />
      <Social fb={props.facebook} />
      <hr />
    </div>
  );
};

const Sobre = (props) => {
  return (
    <div>
      <h2>Olá sou o(a) {props.nome}</h2>
      <h3>Cargo: {props.cargo}</h3>
      <h4>Idade: {props.idade} anos</h4>
    </div>
  );
};

const Social = (props) => {
  return (
    <div>
      <a href={props.fb}>Facebook </a>
      <a>LinkedIn </a>
      <a>Instagram </a>
    </div>
  );
};

function App() {
  return (
    <div>
      <h1>Conheça nossa equipe:</h1>
      <Equipe
        nome="Luiz Fernando"
        cargo="Engenheiro de Produção"
        idade="34"
        facebook="https://google.com"
      />
      <Equipe
        nome="Patrícia Junqueira"
        cargo="Desenvolvedora Java"
        idade="31"
        facebook="https://google.com"
      />
      <Equipe
        nome="Tânia Mara Junqueira"
        cargo="Dona de Casa"
        idade="61"
        facebook="https://google.com"
      />
    </div>
  );
}

export default App;
