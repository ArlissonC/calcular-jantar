document.getElementById('valor-calculado').style.display = 'none';

function calculoJantar() {
  let totalConta = document.getElementById('total-conta').value;
  let taxaServico = document.getElementById('taxa-servico').value;
  let numeroPessoas = document.getElementById('numero-pessoas').value;

    if(totalConta === '' || taxaServico == 0 || numeroPessoas == '') {
      alert('Adicione um valor válido!');
      return;
    } 

    let totalTaxaServico = (totalConta * taxaServico) / numeroPessoas;
    let total = totalTaxaServico + (totalConta / numeroPessoas);

    total = Math.round(total * 100) / 100;
    total = total.toFixed(2);
    total = Math.abs(total);

    document.getElementById("valor-calculado").style.display = "flex";
    document.getElementById('valor-por-cabeca').innerHTML = total;

}

document.getElementById('calcular').addEventListener('click', calculoJantar);