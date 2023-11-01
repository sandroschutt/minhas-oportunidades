import { selectOptionThemeColor } from "../../app/Controllers/ConfigController.js";

let bgColor = selectOptionThemeColor();

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

        <div>
            <label for="portal">Portal:</label>
            <select class="" id="new-portal">
            <option style="background-color: ${bgColor}" value="linkedin">linkedin</option>
            <option style="background-color: ${bgColor}" value="gupy">gupy</option>
            <option style="background-color: ${bgColor}" value="jobs">jobs</option>
            <option style="background-color: ${bgColor}" value="trampos">trampos</option>
            <option style="background-color: ${bgColor}" value="email">email</option>
<<<<<<< HEAD
            <option style="background-color: ${bgColor}" value="email">outros</option>
=======
            <option style="background-color: ${bgColor}" value="outros">outros</option>
>>>>>>> development
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
                <option style="background-color: ${bgColor}" value="front-end">front-end</option>
                <option style="background-color: ${bgColor}" value="back-end">back-end</option>
                <option style="background-color: ${bgColor}" value="fullstack">fullstack</option>
<<<<<<< HEAD
                <option style="background-color: ${bgColor}" value="dev-wordpress">wordpress</option>
=======
                <option style="background-color: ${bgColor}" value="wordpress">wordpress</option>
>>>>>>> development
                <option style="background-color: ${bgColor}" value="web">web</option>
                <option style="background-color: ${bgColor}" value="outros">outros</option>
        </select>
        </div>

        <button type="button" id="save-new-vaga" class="btn btn-dark border border-secondary">Salvar</button>
    </form>
      `;
  
      return new_vaga;
  }
  