let fast_add_modal = `
<!-- Modal -->
<div class="modal fade" id="fastAddModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
            <label for="recipient-name" class="col-form-label">Recipient:</label>
            <input type="text" class="form-control bg-dark text-secondary border border-0" id="recipient-name">
          </div>
          <div class="form-group">
            <label for="message-text" class="col-form-label">Message:</label>
            <textarea class="form-control bg-dark text-secondary border border-0" id="message-text"></textarea>
          </div>
        </form>
      </div>
      <div class="modal-footer border border-0">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Send message</button>
      </div>
    </div>
  </div>
</div>
`;

$('#mo-content').append(fast_add_modal);