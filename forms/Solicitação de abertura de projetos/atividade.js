$(document).ready(function () {

    // Verifica em qual estado esta o diagrama e preenche o capo de data com a data do dia.
    if (stateProcess == 0) {
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
            var diaMenor = '0' + dia;
        } else {
            diaMenor = dia;
        }

        var hoje = diaMenor + '/' + mes + '/' + ano;

        $('#calendario').val(hoje);
    }

})



// Função para pegar o valor do campo de data e colocar no campo de data do formulario.
function setSelectedZoomItem(selectedItem) {
    if (selectedItem.inputId == "fornecedor") {
        $("#valor").val(selectedItem["cnpj"]);
    }
}

// Forma de acessar campo zoom em uma tabela pai e filho 
function setSelectedZoomItem(selectedItem) {
    const [inputName, inputIndex] = selectedItem.inputName.split("___");

    if (inputName === "fornecedor") {
        $(`#valor___${inputIndex}`).val(selectedItem.cnpj);
    }
}
function removedZoomItem(removedItem) {
    const [inputName, inputIndex] = removedItem.inputName.split("___");
    if (inputName === "fornecedor") {
        $(`#valor___${inputIndex}`).val("");
    }
}

// Função para o botao de incluir ao ser clicado add um linha na tabela pai e filho 
function addLinha() {
    wdkAddChild("respoTable");
    
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
    fnWdkRemoveChild(elemento);
    
}



