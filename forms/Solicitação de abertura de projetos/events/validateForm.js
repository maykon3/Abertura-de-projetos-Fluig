function validateForm(form) {

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
            var numLinha = linhasOrcamento[i];

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
                throw "Adicione uma Observação para o orçamento ";
            }
        }
    }
    var linhasFonte = form.getChildrenIndexes("tableFonte");
    if (linhasFonte.length == 0) {
        throw "A tabela de fontes de recursos não possui linhas!";

    }
    if (linhasFonte.length > 0) {
        for (var i = 0; i < linhasFonte.length; i++) {
            var numLinha = linhasFonte[i];

            if (form.getValue("instituicao___" + numLinha) == "") {
                throw "O nome da instituição não foi informado na linha ";
            }
            if (form.getValue("finaciamento___" + numLinha) == "") {
                throw "Mod. Financiamento não foi informado na linha ";
            }
            if (form.getValue("taxa___" + numLinha) == "") {
                throw "A taxa a.a não foi informada na linha ";
            }
            if (form.getValue("prazoCarencia___" + numLinha) == "") {
                throw "O prazo de carencia não foi informado na linha ";
            }
            if (form.getValue("prazoFinanciamento___" + numLinha) == "") {
                throw "O prazo do financiamneto não foi informado na linha ";
            }
        }
    }




    if (form.getValue("subAtivos") == "") {
        throw "O campo Substituição de ativos não foi preenchido!";
    }
    if (form.getValue("morAtivos") == "") {
        throw "O campo Modernização de ativos não foi preenchido!";
    }
    if (form.getValue("melhOpera") == "") {
        throw "O campo Melhoria da operação não foi preenchido!";
    }
    if (form.getValue("ampliacao") == "") {
        throw "O campo Ampliação da capacidade operacional não foi preenchido!";
    }
    if (form.getValue("primarizacao") == "") {
        throw "O campo Primarização e planejamento tributário não foi preenchido!";
    }
    if (form.getValue("exigContratuais") == "") {
        throw "O campo Exigências Contratuais não foi preenchido!";
    }
    if (form.getValue("exigAmbientais") == "") {
        throw "O campo Exigências ambientais de segurança não foi preenchido!";
    }

    if (getValue("WKNumState") == 8) {
        if (form.getValue("aprovProjeto") == "") {
            throw "O campo Aprovação do projeto não foi preenchido!";
        }
        if (form.getValue("obsValidacao") == "") {
            throw "O campo Observações não foi preenchido!";
        }
    }
    if (getValue("WKNumState") == 12) {
        if (form.getValue("aprovContabil") == "") {
            throw "O campo Dados Conferem? não foi preenchido!";
        }
        if (form.getValue("obsContabil") == "") {
            throw "O campo Observações não foi preenchido!";
        }
    }
    if (getValue("WKNumState") == 18) {
        if (form.getValue("aprovAnalise") == "") {
            throw "O campo Aprovação do projeto não foi preenchido!";
        }
        if (form.getValue("obsAnalise") == "") {
            throw "O campo Observações não foi preenchido!";
        }
    }
    if (getValue("WKNumState") == 22) {
        if (form.getValue("aprovDiretoria") == "") {
            throw "O campo Aprovação do projeto não foi preenchido!";
        }
        if (form.getValue("obsDiretoria") == "") {
            throw "O campo Observações não foi preenchido!";
        }
    }
    if (getValue("WKNumState") == 26) {
        if (form.getValue("aprovPresidencia") == "") {
            throw "O campo Aprovação do projeto não foi preenchido!";
        }
        if (form.getValue("obsPresidencia") == "") {
            throw "O campo Observações não foi preenchido!";
        }
    }
    if (getValue("WKNumState") == 30) {
        if (form.getValue("optionsRadios1") == "") {
            //
            throw "O campo Efetivado no Protheus não foi preenchido!";
        }
        if (form.getValue("Justificativa") == "") {
            throw "O campo Observações não foi preenchido!";
        }
    }
    if (getValue("WKNumState") == 38) {
        if (form.getValue("efetivado") == "") {
            throw "O campo Efetivado no Protheus não foi preenchido!";
        }
        if (form.getValue("dadosProjeto") == "") {
            throw "O campo Observações não foi preenchido!";
        }
    }


}

