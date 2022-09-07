function ConverterParaDolar() {
    let valorElemento = parseFloat(
      document.getElementById("valor").value
    ).toFixed(2);
  
    let valorConvertido = document.getElementById("valorConvertido");
  
    let valorElementoEmDolar = valorElemento / 5.25;
  
    valorConvertido.innerHTML = `O valor convertido em dólar é U$ ${parseFloat(
      valorElementoEmDolar
    ).toFixed(2)}`;
  }
  
  function ConverterParaEuro() {
    let valorElemento = parseFloat(
      document.getElementById("valor").value
    ).toFixed(2);
  
    let valorConvertido = document.getElementById("valorConvertido");
  
    let valorElementoEmDolar = valorElemento / 5.19;
  
    valorConvertido.innerHTML = `O valor convertido para euro é € ${parseFloat(
      valorElementoEmDolar
    ).toFixed(2)}`;
  }
  