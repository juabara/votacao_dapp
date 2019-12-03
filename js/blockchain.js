var enderecoContrato = "0xCA35b7d915458EF540aDe6068dFe2F44E8fa733c";
var provedor = new ethers.providers.Web3Provider(web3.currentProvider);
ethereum.enable();
var signatario = provedor.getSigner();
var contrato = new ethers.Contract(enderecoContrato, abiContrato, signatario);

function votar() {
  var name = $('#name').val();
  var candidate = $('input:radio:checked').val();

  if (!name || !candidate) {
    return alert('Por favor informe o nome e o candidato');
  }

  contrato.vote(name, candidate)
    .then(function (transacao) {
      console.log('transacao', transacao);
      return transacao.wait();
    })
    .then(function (resultado) {
      console.log('resultado', resultado);
      alert('Voto computado com sucesso')
    })
    .catch(function (err) {
      console.log('erro', err);
      alert('Erro ao computar seu voto' + JSON.stringify(err));
    })
}

function pagarMulta() {

  contrato.payFine()
    .then(function (transacao) {
      console.log('transacao multa', transacao);
      return transacao.wait();
    })
    .then(function (resultado) {
      console.log('resultado multa', resultado);
      alert('Multa paga com sucesso')
    })
    .catch(function (err) {
      console.log('erro multa', err);
      alert('Erro ao cobrar a multa.' + JSON.stringify(err));
    })
}
