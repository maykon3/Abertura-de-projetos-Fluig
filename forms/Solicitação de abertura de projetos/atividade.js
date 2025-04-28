$(document).ready(function() {
    if (stateProcess == 0) {
        var data = new Date();
        var dia = data.getDate();
        var mes = data.getMonth() + 1;
        var ano = data.getFullYear();var hoje = dia + '/0'  + mes  + '/' + ano;
        
        $('#calendario').val(hoje);
    }
    
})



