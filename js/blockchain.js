var enderecoContrato = "0xCA35b7d915458EF540aDe6068dFe2F44E8fa733c";
var provedor = new ethers.providers.Web3Provider(web3.currentProvider);
ethereum.enable();
var signatario = provedor.getSigner();
var contrato = new ethers.Contract(enderecoContrato, abiContrato, signatario);
