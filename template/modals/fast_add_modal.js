import {Vaga} from '../../src/classes/Vaga/Vaga.js';

let fast_add_modal = `
<!-- Modal -->
<div class="modal fade" id="fastAddModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content text-secondary">
      <div class="modal-header border border-0">
        <h5 class="modal-title" id="exampleModalLabel">Nova vaga (rápido)</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form>
        <div class="form-group">
          <label for="fast-add-nome" class="col-form-label">Nome:</label>
          <input type="text" class="form-control-sm bg-dark text-secondary border border-0" id="fast-add-nome">
        </div>

        <div class="form-group">
          <label for="fast-add-empresa" class="col-form-label">Empresa:</label>
          <input type="text" class="form-control-sm bg-dark text-secondary border border-0" id="fast-add-empresa">
        </div>

        <div class="form-group">
          <label for="fast-add-categoria" class="col-form-label">Categoria:</label>
          <select class="form-control-sm bg-dark text-secondary border border-0" id="fast-add-categoria">
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

        </form>
      </div>
      <div class="modal-footer border border-0">
        <button type="button" class="btn btn-dark py-0 px-2" data-dismiss="modal">Cancelar</button>
        <button type="button" class="btn btn-dark py-0 px-2" id="fast-add-button">Adicionar</button>
      </div>
    </div>
  </div>
</div>
`;

$('#mo-content').append(fast_add_modal);

$('#fast-add-button').click(() => {
  let today = new Date().toJSON().slice(0, 10);
  let nome = $('#fast-add-nome').val();
  let empresa = $('#fast-add-empresa').val();
  let categoria = $('#fast-add-categoria').val();

  let vaga = new Vaga(
    undefined,
    nome,
    empresa,
    'linkedin',
    categoria,
    today,
    undefined,
    'aplicado',
    'false'
    )
  
  vaga.insert();
})