let numeros = [];
let numerosEliminados = [];
let resultadoDeEvaluacionPop = "";
let resultadoDeEvaluacionShift = "";
const cantidadDeNumeros = 10;
const minimoDeNumeros = 1;

const obtenerNumeroRandom = () => {
  return Math.floor(
    Math.random() * (cantidadDeNumeros - minimoDeNumeros + minimoDeNumeros) +
      minimoDeNumeros
  );
};

const llenarArray = (cantidad) => {
  for (let i = 0; i < cantidad; i++) {
    numeros.push(obtenerNumeroRandom());
  }
};

const crearDivConNumero = () => {
  let divConNumero = "";
  numeros.map((numero) => {
    divConNumero += `
            <div>
                <span>${numero}</span>
            </div> 
            `;
  });
  return divConNumero;
};

const mostrarEtiquetas = () => {
  let html = `
    
    <h2>Ejercicio con pop, push, unshift y shift</h2>
    <div class="numeros">${crearDivConNumero()}</div>
    <button id="btnPop">Pop</button>
    <button id="btnPush">Push</button>
    <button id="btnUnShift">UnShift</button>
    <button id="btnShift">Shift</button>
    <hr />
    <h2>Ejercicio con AND, OR y filter</h2>
    <p>Numero eliminado por Pop: ${resultadoDeEvaluacionPop}</p>
    <p>Numero eliminado por Shift: ${resultadoDeEvaluacionShift}</p>
    <p>Numeros filtrados mayores a 5: ${obtenerNumerosFiltradosMayorACinco()}</p>
    <hr />
    <h2>Destructuracion</h2>
    <p>Numeros eliminados: ${numerosEliminados}</p>
    <button id="btnDevolver">Devolver</button>
    
  `;

  document.querySelector("#contenedor").innerHTML = html;
  agregarEventosDeBoton();
};

const obtenerNumerosFiltradosMayorACinco = () => {
  return numeros.filter((n) => n > 5);
};

const evaluarNumeroSalientePop = (numero) => {
  return numero >= 2 && numero <= 5
    ? `El numero ${numero}, esta en el rango 2-5`
    : `El numero ${numero}, no esta en el rango 2-5`;
};

const evaluarNumeroSalienteShift = (numero) => {
  return numero >= 4 || numero > 7
    ? `El numero ${numero}, es mayor que 4 o mayor que 7 o ambos`
    : `El numero ${numero}, se necesita un numero mayor a 4`;
};

const agregarEventosDeBoton = () => {
  document.querySelector("#btnPop").addEventListener("click", () => {
    let numeroFuera = numeros.pop();
    numerosEliminados.push(numeroFuera);
    resultadoDeEvaluacionPop = evaluarNumeroSalientePop(numeroFuera) + "\n";
    mostrarEtiquetas();
  });

  document.querySelector("#btnPush").addEventListener("click", () => {
    numeros.push(obtenerNumeroRandom());
    mostrarEtiquetas();
  });

  document.querySelector("#btnUnShift").addEventListener("click", () => {
    numeros.unshift(obtenerNumeroRandom());
    mostrarEtiquetas();
  });

  document.querySelector("#btnShift").addEventListener("click", () => {
    let numeroFuera = numeros.shift();
    numerosEliminados.push(numeroFuera);
    resultadoDeEvaluacionShift = evaluarNumeroSalienteShift(numeroFuera) + "\n";
    mostrarEtiquetas();
  });

  document.querySelector("#btnDevolver").addEventListener("click", () => {
    numeros.push(...numerosEliminados);
    numerosEliminados = [];
    mostrarEtiquetas();
  });
};

llenarArray(cantidadDeNumeros);
mostrarEtiquetas();
