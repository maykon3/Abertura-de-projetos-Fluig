function enableFields(form) {
    var atividade = parseInt(getValue('WKNumState'));

    if (atividade > 7){
        form.setEnhancedSecurityHiddenInputs(true);
        form.setEnabled('empresa', false);
        form.setEnabled('codEmpresa', false);
        form.setEnabled('principal', false);
        form.setEnabled('complemantar', false);
        form.setEnabled('insumos', false);
        form.setEnabled('idSolicitante', false);
        form.setVisibleById("botaoIncluir", false);
        form.setVisibleById("botaoIncluirFonte", false);


        var indexes = form.getChildrenIndexes("respoTable");

        for (var i = 0; i < indexes.length; i++) {
            form.setEnabled("fornecedor___" + indexes[i], false);
            form.setEnabled("quantia___" + indexes[i], false);
            form.setEnabled("unitario___" + indexes[i], false);
            form.setEnabled("obs___" + indexes[i], false);
        }

        var indexFont = form.getChildrenIndexes("tableFonte");

        for (var i = 0; i < indexFont.length; i++) {
            form.setVisibleById("removeLinha___" + indexFont[i], false);
            form.setEnabled("instituicao___" + indexFont[i], false);
            form.setEnabled("finaciamento___" + indexFont[i], false);
            form.setEnabled("taxa___" + indexFont[i], false);
            form.setEnabled("prazoCarencia___" + indexFont[i], false);
            form.setEnabled("prazoFinanciamento___" + indexFont[i], false);
        }
        form.setEnabled('subAtivos', false);
        form.setEnabled('subAtivos', false);
        form.setEnabled('morAtivos', false);
        form.setEnabled('melhOpera', false);
        form.setEnabled('ampliacao', false);
        form.setEnabled('exigContratuais', false);
        form.setEnabled('primarizacao', false);
        form.setEnabled('exigAmbientais', false);
        form.setEnabled('novosProdutos', false);
    }
    if (atividade > 10 || atividade < 8) {
    form.setEnabled('aprovProjeto', false);
    form.setEnabled('obsValidacao', false);
    }



}