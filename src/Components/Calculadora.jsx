import React from 'react'
import { useState } from 'react';

// Função principal do componente Calculadora
export default function Calculadora() {

  // useState é um hook do React que permite adicionar estado aos componentes funcionais
  // Aqui, estamos criando três estados: primeiroValor, segundoValor e resultado
  const [primeiroValor, setPrimeiroValor] = useState();
  const [segundoValor, setSegundoValor] = useState();
  const [resultado, setResultado] = useState();

  // Função para capturar o primeiro valor do input
  // Evento (e) é passado para a função e.target.value obtém o valor do input
  // Number() converte o valor para número e setPrimeiroValor atualiza o estado
  const capturandoPrimeiroValor = (e) => {
    setPrimeiroValor(Number(e.target.value));
  };

  // Função para capturar o segundo valor do input
  // Funciona da mesma forma que capturandoPrimeiroValor
  const capturandoSegundoValor = (e) => {
    setSegundoValor(Number(e.target.value));
  };

  // Função para somar os dois valores
  // Atualiza o estado resultado com a soma de primeiroValor e segundoValor
  const soma = () => {
    setResultado(primeiroValor + segundoValor);
  };

  // Função para subtrair os dois valores
  // Atualiza o estado resultado com a diferença entre primeiroValor e segundoValor
  const diminuir = () => {
    setResultado(primeiroValor - segundoValor);
  };

  // Função para multiplicar os dois valores
  // Atualiza o estado resultado com o produto de primeiroValor e segundoValor
  const multiplicar = () => {
    setResultado(primeiroValor * segundoValor);
  };

  // Função para dividir os dois valores
  // Atualiza o estado resultado com o quociente de primeiroValor e segundoValor
  const dividir = () => {
    setResultado(primeiroValor / segundoValor);
  };

  // Função para limpar os valores dos inputs e o resultado
  // Reseta os estados para os valores iniciais
  const limpar = () => {
    setPrimeiroValor("");
    setSegundoValor("");
    setResultado();
  };

  // JSX que define a interface do usuário para a calculadora
  return (
    <section>
      <h1>Calculadora</h1>
      <div>
        {/* 
          Input para o primeiro valor, com onChange para capturar o valor digitado.
          onChange é um evento que é acionado sempre que o valor do input muda.
          Quando o usuário digita algo no campo de input, a função capturandoPrimeiroValor é chamada.
          Essa função atualiza o estado primeiroValor com o novo valor digitado.
        */}
        <input onChange={capturandoPrimeiroValor} placeholder="Digite o primeiro número" value={primeiroValor}/>
        
        {/* 
          Input para o segundo valor, com onChange para capturar o valor digitado.
          Funciona da mesma forma que o input anterior.
          onChange aciona a função capturandoSegundoValor sempre que o valor do input muda.
          Isso atualiza o estado segundoValor com o novo valor digitado.
        */}
        <input onChange={capturandoSegundoValor} placeholder="Digite o segundo número" value={segundoValor}/>
      </div>
      <div>
        {/* Botões para operações matemáticas, cada um com onClick para chamar a função correspondente */}
        <button onClick={soma}>+</button>
        <button onClick={diminuir}>-</button>
        <button onClick={multiplicar}>x</button>
        <button onClick={dividir}>÷</button>
        
        {/* Botão para limpar os valores e resultado */}
        <button onClick={limpar}>Limpar</button>
      </div>
      <div>
        <div>
          {/* Exibe o resultado da operação */}
          <h2>{resultado}</h2>
        </div>
      </div>
    </section>
  )
}