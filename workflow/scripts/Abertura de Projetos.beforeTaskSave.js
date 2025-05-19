function beforeTaskSave(colleagueId, nextSequenceId, userList) {
    // Verifica a lista de anexos 
    var attachments = hAPI.listAttachments();
    // Verifica se o tem um anexo 
    var temANexo = false;

    // loop para passar por todos os anexos
    for (var i = 0; i < attachments.size(); i++) {
        var attachment = attachments.get(i);
        if (attachment.getDocumentDescription != ("" || null || undefined)) {
            temANexo = true;
        }

    }

    // se nao tiver anexo, retorna uma mensagem de erro
    if (!temANexo) {
        throw "<p><strong>Anexo obrigatório! Favor incluir um anexo com o nome do projeto.</strong></p>";
    }


}