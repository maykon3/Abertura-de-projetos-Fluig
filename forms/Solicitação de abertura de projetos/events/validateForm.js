

/*function validateForm(form) {
    // Valida campos principais
    if (form.getValue('empresa') == "") {
        throw "A Empresa não foi informada!";
    }

    if (form.getValue('codEmpresa') == "") {
        throw "A Filial não foi informada!";
    }

    if (form.getValue('principal') == "") {
        throw "O Objetivo principal do projeto não foi informado!";
    }

    if (form.getValue('complemantar') == "") {
        throw "O Objetivo complementar do projeto não foi informado!";
    }

    if (form.getValue('insumos') == "") {
        throw "O Grupo de ativos e insumos estratégicos não foi informado!";
    }


    var linhasOrcamento = form.getChildrenIndexes("respoTable");
    if (linhasOrcamento.length == 0) {
        throw "A tabela de fontes de orçamento não possui linhas!";
    } else if (linhasOrcamento.length > 0) {
        for (var i = 0; i < linhasOrcamento.length; i++) {
            var numLinha = linhasOrcamento;

            if (form.getValue("fornecedor___" + numLinha) == "") {
                throw "O nome do fornecedor não foi informado na linha ";
            }

            if (form.getValue("valor___" + numLinha) == "") {
                throw "O CNPJ do fornecedor não foi informado na linha ";
            }

            if (form.getValue("quantia___" + numLinha) == "") {
                throw "A quantidade não foi informada na linha ";
            }
            

            if (form.getValue("unitario___" + numLinha) == "") {
                throw "O valor unitário não foi informado na linha ";
            }
            if (form.getValue("obs___" + numLinha) == "") {
                throw "O valor unitário não foi informado na linha ";
            }
        }
    }


    var linhasFonte = form.getChildrenIndexes("tableFonte");
    if (linhasFonte.length == 0) {
        throw "A tabela de fontes de financiamento não possui linhas!";
    } else if (linhasFonte.length > 0) {
        for (var n = 0; n < linhasFonte.length; n++) {
            var linhaFonte = linhasFonte;

            if (form.getValue("instituicao___" + linhaFonte) == "") {
                throw "A instituição não foi informada na linha da fonte de recursos.";
            }

            if (form.getValue("finaciamento___" + linhaFonte) == "") {
                throw "O modo de financiamento não foi informado na linha da fonte de recursos.";
            }

            if (form.getValue("taxa___" + linhaFonte) == "") {
                throw "A taxa anual não foi informada na linha da fonte de recursos.";
            }

            if (form.getValue("prazoCarencia___" + linhaFonte) == "") {
                throw "O prazo de carência não foi informado na linha da fonte de recursos.";
            }

            if (form.getValue("prazoFinanciamento___" + linhaFonte) == "") {
                throw "O prazo de financiamento não foi informado na linha da fonte de recursos.";
            }
        }
    }

    if (form.getValue("subAtivos") == "" ){
        throw "O campo Substituição de ativos não foi preenchido!";
    }
    if (form.getValue("morAtivos") == "" ){
        throw "O campo Modernização de ativos não foi preenchido!";
    }
    if (form.getValue("melhOpera") == "" ){
        throw "O campo Melhoria da operação não foi preenchido!";
    }
    if (form.getValue("ampliacao") == "" ){
        throw "O campo Ampliação da capacidade operacional não foi preenchido!";
    }
    if (form.getValue("primarizacao") == "" ){
        throw "O campo Primarização e planejamento tributário não foi preenchido!";
    }
    if (form.getValue("exigContratuais") == "" ){
        throw "O campo Exigências Contratuais não foi preenchido!";
    }
    if (form.getValue("exigAmbientais") == "" ){
        throw "O campo Exigências ambientais de segurança não foi preenchido!";
    }
    if (form.getValue("novosProdutos") == "" ){
        throw "O campo Novos produtos e serviços não foi preenchido!";
    }
}*/

