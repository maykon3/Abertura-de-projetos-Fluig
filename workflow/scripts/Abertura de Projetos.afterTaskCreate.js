
// Script para depois que a solicitação for criada, ele pegar o numero do processo e preencher o campo de numero
// de solicitação na aba de dados do processo.
function afterTaskCreate(colleagueId){
    var numSolicitacao = getValue("WKNumProces");
	
    //hAPI usado para destrichar o getValue e pegar o valor do numero do processo.
    hAPI.setCardValue("numSolicitacao", numSolicitacao);

}