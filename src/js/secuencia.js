const resultadoSecuencia = document.querySelector("#resultadoSecuencia");
const btnDato = document.querySelector("button");

function conversor() {
  const numeroBase = document.querySelector("#numeroBase").value;
  let secuencia = [];
  secuencia[0] = 0;
  secuencia[1] = 1;
  for (let i = 2; i < numeroBase; i++) {
    secuencia[i] = secuencia[i-1] + secuencia[i-2]
  }
  resultadoSecuencia.innerHTML = `<h4>${secuencia}</h4>`
}

btnDato.onclick = function () {
  conversor();
};
