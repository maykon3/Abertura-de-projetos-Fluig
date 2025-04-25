function beforeTaskSave(colleagueId,nextSequenceId,userList){

    var current = getValue("WKNumState");
    var next = getValue("WKNextState");
    var user = getValue("WKUser");
    var task = getValue("WKNumState");

    if (current == 0 && next == 1) {
        if (getValue("WKCompletTask") == "true") {
            hAPI.setCardValue("status", "Aprovado");
        }
    }

    if (current == 1 && next == 2) {
        hAPI.setCardValue("status", "Em Análise");
    }

    if (current == 2 && next == 3) {
        hAPI.setCardValue("status", "Aprovado");
    }

    if (current == 3 && next == 4) {
        hAPI.setCardValue("status", "Reprovado");
    }
}