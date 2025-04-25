  <h1>Projeto Fluig - Abertura de Projetos</h1>

  <div class="section">
    <h2>1. 1Objetivo</h2>
    <p>Gerenciar as solicitações de <strong>abertura de projetos</strong> utilizando o ambiente <strong>Fluig</strong>.</p>
  </div>

  <div class="section">
    <h2>2. Estrutura do Processo</h2>
    <ul>
      <li><strong>Área / Serviços:</strong> Projetos</li>
      <li><strong>Processo:</strong> Solicitação de Abertura de Projetos</li>
    </ul>
  </div>

  <div class="section">
    <h2>3. Formulário do Processo</h2>
    <ul>
      <li>Preencher automaticamente:
        <ul>
          <li><strong>Data da solicitação:</strong> data atual</li>
          <li><strong>Nome do solicitante:</strong> usuário logado</li>
          <li><strong>Número da solicitação:</strong> via script de workflow</li>
        </ul>
      </li>
      <li>Buscar Empresa e Filial via datasets do processo de Entrada NF</li>
      <li>Campos com <code>*</code> vermelho são obrigatórios</li>
      <li>Máscara decimal nos valores: <code>000.000.000,00</code></li>
      <li>Valor total de cada linha:
        <ul>
          <li>Desabilitado</li>
          <li>Calculado automaticamente com base na quantidade e valor unitário</li>
        </ul>
      </li>
      <li>Valor total fora da tabela: soma de todas as linhas</li>
      <li>Campos de data com calendário nativo</li>
      <li>Cadastro de Fornecedores:
        <ul>
          <li>Campos: Nome e CNPJ</li>
          <li>Seleção preenche CNPJ</li>
          <li>Exclusão limpa o campo CNPJ</li>
        </ul>
      </li>
      <li>Painéis de análise:
        <ul>
          <li>Visíveis apenas em suas atividades</li>
          <li>Responsável e Data preenchidos automaticamente</li>
          <li>Campos habilitados apenas em sua etapa</li>
        </ul>
      </li>
    </ul>
  </div>

  <div class="section">
    <h2>4. Diagrama do Processo</h2>
    <img src="Abertura de Projetos.png" alt="Diagrama do Processo" width="600" />
  </div>

  <div class="section">
    <h2>5. Descrição das Atividades</h2>
    <h3>Início</h3>
    <ul>
      <li><strong>Grupo:</strong> PERMISSAO_INICIO_PRJ001_SOLICITACAO_DE_ABERT_PROJ</li>
      <li><strong>Prazo:</strong> 0:00</li>
      <li><strong>Instruções:</strong> Obrigatório 1 anexo</li>
      <li><strong>Permite cancelar:</strong> Sim</li>
      <li><strong>Notificação:</strong> Responsável</li>
    </ul>
    <h3>Avaliação do Gestor de Projetos</h3>
    <ul>
      <li><strong>Grupo:</strong> GERENCIA_PROJETOS</li>
      <li><strong>Prazo:</strong> 8:00</li>
      <li><strong>Notificação:</strong> Responsável</li>
    </ul>
    <h3>Valida Documentos - Contábil</h3>
    <ul>
      <li><strong>Grupo:</strong> CONTABIL</li>
      <li><strong>Prazo:</strong> 8:00</li>
      <li><strong>Notificação:</strong> Responsável</li>
    </ul>
    <h3>Valida Documentos - Controller</h3>
    <ul>
      <li><strong>Grupo:</strong> CONTROLLER</li>
      <li><strong>Prazo:</strong> 8:00</li>
      <li><strong>Notificação:</strong> Responsável</li>
    </ul>
    <h3>Aprovação Diretoria</h3>
    <ul>
      <li><strong>Grupo:</strong> DIRETORIA</li>
      <li><strong>Prazo:</strong> 8:00</li>
      <li><strong>Notificação:</strong> Responsável</li>
    </ul>
    <h3>Aprovação Presidência</h3>
    <ul>
      <li><strong>Grupo:</strong> PRESIDENCIA</li>
      <li><strong>Prazo:</strong> 8:00</li>
      <li><strong>Notificação:</strong> Responsável</li>
    </ul>
    <h3>Cadastro no Sistema Protheus</h3>
    <ul>
      <li><strong>Grupo:</strong> CONTABIL</li>
      <li><strong>Prazo:</strong> 8:00</li>
      <li><strong>Notificação:</strong> Responsável</li>
    </ul>
    <h3>Avaliação do Atendimento</h3>
    <ul>
      <li><strong>Executor:</strong> Executor da Atividade Inicial</li>
      <li><strong>Prazo:</strong> 4:00</li>
      <li><strong>Notificação:</strong> Responsável</li>
    </ul>
  

