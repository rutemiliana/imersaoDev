let numeroDaSorte = parseInt(Math.random() * 11);

function Chutar() {
  //pega valor do input;
  let chute = parseInt(document.getElementById("valor").value);
  let resultado = document.getElementById("resultado");

  if (chute == numeroDaSorte) {
    resultado.innerHTML = `Parabéns, você acertou! O numero da sorte é ${numeroDaSorte}!`;
  } else if (chute > 10 || chute < 0) {
    resultado.innerHTML = "Digite um número entre 0 e 10";
  } else {
    resultado.innerHTML = "Errou";
  }

  if (chute <= 10 && chute >= 0 && chute != numeroDaSorte) {
    if (numeroDaSorte > chute) {
      resultado.innerHTML =
        "O número da sorte é maior que o número digitado. Tente novamente";
    } else {
      resultado.innerHTML =
        "O número da sorte é menor o que número digitado. Tente novamente";
    }
  }
}
