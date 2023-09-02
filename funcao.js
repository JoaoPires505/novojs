function funcionar(valorhora, qtndhora) {
  return valorhora * qtndhora;
}

function mediaPesos(pesos) {
  let soma = 0;
  for (let i = 0; i < pesos.length; i++) {
    soma = soma + pesos[i];
  }
  const media = soma / pesos.length;

  return media;
}

module.exports = { funcionar, mediaPesos };
