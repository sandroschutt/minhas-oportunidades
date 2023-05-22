export function edit(vaga) {
  let edit = `
    <div id="header">
        <p>Editando /</p>
        <h2>${vaga.nome}</h2>
    </div>

  <form id="view-container">
  <div class="">
    <label for="edit-nome" class="">Nome:</label>
    <input type="text" class="" id="edit-nome" value="${vaga.nome}">
  </div>

  <div class="form-group">
    <label for="edit-empresa" class="">Empresa:</label>
    <input type="text" class="" id="edit-empresa" value="${vaga.empresa}">
  </div>

  <div class="">
    <label for="edit-portal" class="">Portal:</label>
    <select class="" id="edit-portal" value="${vaga.portal}">
      <option value="linkedin">linkedin</option>
      <option value="gupy">gupy</option>
      <option value="email">email</option>
    </select>
  </div>

  <div class="">
    <label for="edit-url" class="">URL:</label>
    <input type="text" class="" id="edit-url" value="${vaga.url}">
  </div>

  <div class="">
    <label for="edit-descricao" class="">Descricao:</label>
    <textarea class="" id="edit-descricao">${vaga.descricao}</textarea>
  </div>

  <div class="">
    <label for="edit-categoria" class="">Categoria:</label>
    <select class="" id="edit-categoria" value="${vaga.categoria}">
      <option value="${vaga.categoria}">${vaga.categoria}</option>
      <option value="front-end">front-end</option>
      <option value="front-end-pleno">front-end-pleno</option>
      <option value="front-end-senior">front-end-senior</option>
      <option value="back-end">back-end</option>
      <option value="back-end-pleno">back-end-pleno</option>
      <option value="back-end-senior">back-end-senior</option>
      <option value="fullstack">fullstack</option>
      <option value="fullstack-pleno">fullstack-pleno</option>
      <option value="fullstack-senior">fullstack-senior</option>
    </select>
  </div>

  <div class="">
    <label for="edit-data-aplicacao" class="">Data de aplicação:</label>
    <input
      class=""
      type="date"
      placeholder="dd-mm-yyyy"
      min="1999-01-01"
      value="${vaga.dataaplicacao}"
      id="edit-data-aplicacao"
    />
  </div>

  <div class="">
    <label for="edit-data-retorno" class="">Data de retorno:</label>
    <input
      class=""
      type="date"
      placeholder="dd-mm-yyyy"
      id="edit-data-retorno"
      value="${vaga.dataretorno}"
    />
  </div>

  <div class="">
    <label for="edit-status" class="">Status:</label>
    <select class="" name="status" id="edit-status">
      <option value="${vaga.status}">${vaga.status}</option>
      <option value="aplicado">Aplicado</option>
      <option value="fit-cultural">Fit cultural</option>
      <option value="exame-tecnico">Teste técnico</option>
      <option value="entrevista">Entrevista</option>
      <option value="reprovado">Reprovado</option>
      <option value="aprovado">Aprovado</option>
    </select>
  </div>

  <button type="button" class="btn btn-dark py-0 px-2" data-dismiss="modal">Cancelar</button>
  <button type="button" id="editar-vaga"class="btn btn-dark py-0 px-2">Salvar</button>
</form>
    `;

    return edit;
}
