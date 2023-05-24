export function newVaga() {
    let new_vaga = `
    <div id="header">
    <h2>Nova vaga</h2>
    </div>

    <form id="view-container">
        <div class="">
            <label for="nome" class="">Nome:</label>
            <input type="text" class="" id="new-nome" value="">
        </div>

        <div class="form-group">
            <label for="empresa" class="">Empresa:</label>
            <input type="text" class="" id="new-empresa" value="">
        </div>

        <div class="">
            <label for="portal" class="">Portal:</label>
            <select class="" id="new-portal">
            <option value="linkedin">linkedin</option>
            <option value="gupy">gupy</option>
            <option value="jobs">jobs</option>
            <option value="trampos">trampos</option>
            <option value="email">email</option>
            </select>
        </div>

        <div class="">
            <label for="url" class="">URL:</label>
            <input type="text" class="" id="new-url" value="">
        </div>

        <div class="">
            <label for="descricao" class="">Descricao:</label>
            <textarea class="" id="new-descricao"></textarea>
        </div>

        <div class="">
            <label for="categoria" class="">Categoria:</label>
            <select class="" id="new-categoria">
                <option value="front-end">front-end</option>
                <option value="front-end-pleno">front-end-pleno</option>
                <option value="front-end-senior">front-end-senior</option>
                <option value="back-end">back-end</option>
                <option value="back-end-pleno">back-end-pleno</option>
                <option value="back-end-senior">back-end-senior</option>
                <option value="fullstack">fullstack</option>
                <option value="fullstack-pleno">fullstack-pleno</option>
                <option value="fullstack-senior">fullstack-senior</option>
                <option value="dev-wordpress">dev-wordpress</option>
                <option value="dev-web">dev-web</option>
        </select>
        </div>

        <button type="button" class="btn btn-dark py-0 px-2" data-dismiss="modal">Cancelar</button>
        <button type="button" id="save-new-vaga" "class="btn btn-dark">Salvar</button>
    </form>
      `;
  
      return new_vaga;
  }
  