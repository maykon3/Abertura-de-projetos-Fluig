$(document).ready(function () {

    var data = new Date();
    var dia = data.getDate();
    // o valor mes(Month), vem com o valor de um mes antes por o array e de 0 a 11, por isso somamos 1.
    var mes = data.getMonth() + 1;
    var ano = data.getFullYear();
    // Para que os meses fiquem com dois digitos, se o mes for menor que 10, adicionamos um zero a esquerda.
    if (mes < 10) {
        mes = '0' + mes;
    } else {
        mes = mes;
    }
    // Para que os dias fiquem com dois digitos, se o dia for menor que 10, adicionamos um zero a esquerda.
    if (dia < 10) {
        dia = '0' + dia;
        var diaMenor = dia;
    } else {
        diaMenor = dia;
    }

    var hoje = diaMenor + '/' + mes + '/' + ano;

    var contabil = $("#aprovContabil").val();
    var diretoria = $("#aprovDiretoria").val();
    var presidencia = $("#aprovPresidencia").val();
    $("#rowValGestor").hide();
    $("#rowValContabil").hide();
    $("#rowValController").hide();
    $("#rowValDiretoria").hide();
    $("#rowValPresidencia").hide();
    $("#rowEfetivado").hide();
    $("#rowAvaliacao").hide();

    // Verifica em qual estado esta o diagrama e preenche o capo de data com a data do dia.
    if (stateProcess == 0) {
        $('#calendario').val(hoje);
    }
    if (stateProcess > 0) {
        $("#rowValGestor").show();
        if (stateProcess == 8) {
            $('#dataValidacao').val(hoje);
        }
    }
    if (stateProcess > 0 && (contabil == "revisar_dados" || contabil == "aprovado")) {
        $("#rowValContabil").show();
        if (stateProcess == 12) {
            $('#dataContabil').val(hoje);
        }
    } else if (stateProcess > 11 && stateProcess < 30) {
        $("#rowValContabil").show();
        if (stateProcess == 12) {
            $('#dataContabil').val(hoje);
        }
    }
    if (stateProcess > 0 && contabil == "aprovado") {
        $("#rowValController").show();
        if (stateProcess == 18) {
            $('#dataAnalise').val(hoje);
        }
    }
    if (stateProcess > 0 && (diretoria == "revisar_dados" || diretoria == "aprovado")) {
        $("#rowValDiretoria").show();
    } else if (stateProcess > 21 && stateProcess < 30) {
        $("#rowValDiretoria").show();
        $('#dataDiretoria').val(hoje);
    }
    if (stateProcess > 0 && diretoria == "aprovado") {
        $("#rowValPresidencia").show();
        if (stateProcess == 26) {
            $('#dataPresidencia').val(hoje);
        }
    }
    if (stateProcess > 28 && presidencia == "aprovado") {
        $("#rowEfetivado").show();
    }
    if (stateProcess == 30) {
        $("#rowAvaliacao").show();
    }

    if (stateProcess == 31 || form.getFormMode() == "VIEW") {
        var gestor = $("#aprovProjeto").val();
        var contabill = $("#aprovContabil").val();
        var presi = $("#aprovPresidencia").val();
        var controll = $("#aprovAnalise").val();
        var diretor = $("#aprovDiretoria").val();
        var protheus = $("#efetivado").val();

        if (gestor == "aprovado" || gestor == "reprovado") {
            $("#rowValGestor").show();
        }
        if (contabill == "aprovado") {
            $("#rowValContabil").show();
        }
        if (presi == "aprovado" || presi == "reprovado") {
            $("#rowValPresidencia").show();
        }
        if (controll == "aprovado" || cocontrollntabill == "reprovado") {
            $("#rowValController").show();
        }
        if (diretor == "aprovado") {
            $("#rowValDiretoria").show();
        }
        if (protheus == "sim") {
            $("#rowEfetivado").show();
        }

        $("#rowAvaliacao").show();

    }

})



// Função para pegar o valor do campo de data e colocar no campo de data do formulario.
function setSelectedZoomItem(item) {
    if (item.inputId === "empresa") {
        $("#codEmpresa").val(item["Empresa"]);
    }
}

// Forma de acessar campo zoom em uma tabela pai e filho 
function setSelectedZoomItem(selectedItem) {
    const [inputName, inputIndex] = selectedItem.inputName.split("___");

    if (inputName === "fornecedor") {
        $(`#valor___${inputIndex}`).val(selectedItem["cnpj"]);
    }
}
function removedZoomItem(removedItem) {
    const [inputName, inputIndex] = removedItem.inputName.split("___");
    if (inputName === "fornecedor") {
        $(`#valor___${inputIndex}`).val("");
    }
}

function addFonte() {
    wdkAddChild("tableFonte");
}

// Função para o botao de incluir ao ser clicado add um linha na tabela pai e filho 
function addLinha() {
    wdkAddChild("respoTable");
    var linha = newId

    // Torna os camppos de text ara numericos com estilos de mascara 
    $("#quantia___" + linha).mask('000.000.000.000.000', { reverse: true });
    $("#unitario___" + linha).mask('000.000.000.000.000,00', { reverse: true });

    calcularTotal();

}


function calcularTotal(idCampo) {
    var linha = idCampo.split("___")[1]

    $(document).ready(function () {

        var quanFloat = parseFloat($("#quantia___" + linha).val().toString().replace(".", "").replace(",", "."));
        var uniFloat = parseFloat($("#unitario___" + linha).val().toString().replace(".", "").replace(",", "."));

        var soma = quanFloat * uniFloat;

        $("#total___" + linha).val(soma.toFixed(2).toString().replace(".", ","));
        totalFinal();


    })

}

function totalFinal() {
    var totalGeral = 0;
    $("input[id^='total___']").each(function () {

        var valor = $(this).val().replace(".", "").replace(",", ".");

        if (!isNaN(valor)) {
            totalGeral += parseFloat(valor);
        }

    });
    $("#valorTotal").val(totalGeral.toFixed(2).toString().replace(".", ","));
}

function removeLinha(elemento) {
    if (stateProcess == 0 || stateProcess == 7) {
        fnWdkRemoveChild(elemento);
        totalFinal();
    }
}

function removeFonte(element) {
    if (stateProcess == 0 || stateProcess == 7) {
        fnWdkRemoveChild(element);
    }
}

var beforeSendValidate = function (numState, nextState) {
    if (numState == 1 && nextState == 2 && document.form.codigo.value == '') {
        throw ("Erro: Para movimentar para a atividade 2, o código deve ser preenchido");
    }
    return true;
}



