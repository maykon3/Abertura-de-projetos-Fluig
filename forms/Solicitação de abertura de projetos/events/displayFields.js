function displayFields(form, customHTML) {
    customHTML.append("<script> var stateProcess = " + getValue('WKNumState') + ";</script>");

    user = getUser(getValue("WKUser"));
    if (getValue("WKNumState") == 0) {
        form.setValue("idSolicitante", user.colleagueName);
    }


    
    
}

function getUser(colleagueId) {
    var constraints = new Array();
    var dataset = null;
    var user = {
        "colleagueName": "",
        "login": "",
        "email": ""
    };

    constraints.push(DatasetFactory.createConstraint("colleaguePK.colleagueId", colleagueId, colleagueId, ConstraintType.MUST));
    //constraints.push(DatasetFactory.createConstraint("colleaguePK.companyId", 1, 1, ConstraintType.MUST));

    dataset = DatasetFactory.getDataset("colleague", null, constraints, null);

    if (dataset.rowsCount > 0) {
        user.colleagueName = dataset.getValue(0, "colleagueName");
    }
    else {
        log.error("Usuario nao encontrado para a matricula: " + colleagueId);
        throw ("Usuario nao encontrado para a matricula: " + colleagueId);
    }

    return user;
}
