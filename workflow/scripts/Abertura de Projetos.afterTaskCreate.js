function afterTaskCreate(colleagueId){
    var numSolicitacao = getValue("WKNumProces");
	
    hAPI.setCardValue("numSolicitacao", numSolicitacao);

}