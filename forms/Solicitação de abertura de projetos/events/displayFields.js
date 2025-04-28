function displayFields(form,customHTML){
    customHTML.append("<script> var stateProcess = "+getValue("WKNumState")+";</script>");
    console.log("teste", stateProcess);
    var user = getValue("WKUser");

    hAPI.setCardValue("#idSolicitante", user );

		}