let edit_modal = `
<!-- Modal -->
<div class="modal fade" id="editModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content text-secondary">
      <div class="modal-header border border-0">
        <h5 class="modal-title" id="exampleModalLabel">Editar vaga</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form>
          <div class="form-group">
            <label for="edit-nome" class="col-form-label">Nome:</label>
            <input type="text" class="form-control-sm bg-dark text-secondary border border-0" id="edit-nome">
          </div>

          <div class="form-group">
            <label for="edit-empresa" class="col-form-label">Empresa:</label>
            <input type="text" class="form-control-sm bg-dark text-secondary border border-0" id="edit-empresa">
          </div>

          <div class="form-group">
            <label for="edit-portal" class="col-form-label">Portal:</label>
            <select class="form-control-sm bg-dark text-secondary border border-0" id="edit-portal">
              <option value="linkedin">linkedin</option>
              <option value="gupy">gupy</option>
              <option value="email">email</option>
            </select>
          </div>

          <div class="form-group">
            <label for="edit-url" class="col-form-label">URL:</label>
            <input type="text" class="form-control-sm bg-dark text-secondary border border-0" id="edit-url">
          </div>

          <div class="form-group">
            <label for="edit-descricao" class="col-form-label">Descricao:</label>
            <textarea class="form-control bg-dark text-secondary border border-0" id="edit-descricao"></textarea>
          </div>

          <div class="form-group">
            <label for="edit-categoria" class="col-form-label">Categoria:</label>
            <select class="form-control-sm bg-dark text-secondary border border-0" id="edit-categoria">
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

          <div class="form-group">
            <label for="edit-data-aplicacao" class="col-form-label">Data de aplicação:</label>
            <input
              class="form-control-sm bg-dark text-secondary border border-0"
              type="date"
              placeholder="dd-mm-yyyy"
              min="1999-01-01"
              value=""
              id="edit-data-aplicacao"
            />
          </div>

          <div class="form-group">
            <label for="edit-data-retorno" class="col-form-label">Data de retorno:</label>
            <input
              class="form-control-sm bg-dark text-secondary border border-0"
              type="date"
              placeholder="dd-mm-yyyy"
              id="edit-data-retorno"
            />
          </div>

          <div class="form-group">
            <label for="edit-status" class="col-form-label">Status:</label>
            <select class="form-control-sm bg-dark text-secondary border border-0" name="status" id="edit-status">
              <option value="aplicado">Aplicado</option>
              <option value="fit-cultural">Fit cultural</option>
              <option value="exame-tecnico">Teste técnico</option>
              <option value="entrevista">Entrevista</option>
              <option value="reprovado">Reprovado</option>
              <option value="aprovado">Aprovado</option>
            </select>
          </div>
        </form>
      </div>
      <div class="modal-footer border border-0">
        <button type="button" class="btn btn-dark py-0 px-2" data-dismiss="modal">Cancelar</button>
        <button type="button" id="editar-vaga"class="btn btn-dark py-0 px-2">Salvar</button>
      </div>
    </div>
  </div>
</div>
`;

$('#mo-content').append(edit_modal);
