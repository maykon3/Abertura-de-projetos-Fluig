function displayFields(form, customHTML) {
    //inclui o estado da solicitacao no diagrama
    customHTML.append("<script> var stateProcess = " + getValue('WKNumState') + ";</script>");

    //pega o id do usuario logado e preenche o campo solicitante na fase um do processo
    user = getUser(getValue("WKUser"));
    if (getValue("WKNumState") == 0) {
        form.setValue("idSolicitante", user.colleagueName);
    }
    if (getValue("WKNumState") == 8) {
        form.setValue("respoAnalise", user.colleagueName);
    }
    if (getValue("WKNumState") == 12) {
        form.setValue("usuarioRespo", user.colleagueName);
    }
    if (getValue("WKNumState") == 18) {
        form.setValue("usuarioAnalise", user.colleagueName);
    }
    if (getValue("WKNumState") == 22) {
        form.setValue("usuarioDiretoria", user.colleagueName);
    }
    if (getValue("WKNumState") == 26) {
        form.setValue("usuarioPresidencia", user.colleagueName);
    }


    
}

// Funil para pegar o nome do usuario, login e email
function getUser(colleagueId) {
    // Cria um contrutor de lista
    var constraints = new Array();
    var dataset = null;
    // modelo das informações que o filtro ira retornar
    var user = {
        "colleagueName": "",
        "login": "",
        "email": ""
    };
    //contrutor do dataset que busca a lista onde contem as informações do usuario
    constraints.push(DatasetFactory.createConstraint("colleaguePK.colleagueId", colleagueId, colleagueId, ConstraintType.MUST));
    //constraints.push(DatasetFactory.createConstraint("colleaguePK.companyId", 1, 1, ConstraintType.MUST));


    // passa o contrutor para o dataset e busca as informações do usuario
    dataset = DatasetFactory.getDataset("colleague", null, constraints, null);

    //conta quantas linhas tem o dataset, se for maior que 0, pega o valor do nome do usuario e preenche o campo de solicitante
    if (dataset.rowsCount > 0) {
        user.colleagueName = dataset.getValue(0, "colleagueName");
    }
    else {
        log.error("Usuario nao encontrado para a matricula: " + colleagueId);
        throw ("Usuario nao encontrado para a matricula: " + colleagueId);
    }
     
    // retorno para o user para que ele possa ser usado em outros lugares do código
    return user;
}
