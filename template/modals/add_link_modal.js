// GERAR PREVIEW DO LINK APÓS O INPUT
let add_link_modal = `
<!-- Modal -->
<div class="modal fade" id="addLinkModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content text-secondary">
      <div class="modal-header border border-0">
        <h5 class="modal-title" id="exampleModalLabel">Adicionar por link: </h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form>
          <div class="form-group">
            <label for="add-url" class="col-form-label">Url:</label>
            <input type="text" class="form-control-sm bg-dark text-secondary border border-0" id="add-url">
          </div>
        </form>
      </div>
      <div class="modal-footer border border-0">
        <button type="button" class="btn btn-dark py-0 px-2" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-dark py-0 px-2">Adicionar</button>
      </div>
    </div>
  </div>
</div>
`;

$('#mo-content').append(add_link_modal);
