import {Vaga} from '../../src/classes/Vaga/Vaga.js';

function addNovaVaga() {
  let form = `
        <form action="">
          <label for="nome">Nome</label>
          <input type="text" name="nome" id="nome" />

          <label for="empresa">Empresa</label>
          <input type="text" name="empresa" id="empresa" />

          <label for="portal">Portal</label>
          <select name="portal" id="portal">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
            <option value="option4">Option 4</option>
            <option value="option5">Option 5</option>
            <option value="option6">Option 6</option>
          </select>

          <label for="categoria">Categoria</label>
          <select name="categoria" id="categoria">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
            <option value="option4">Option 4</option>
            <option value="option5">Option 5</option>
            <option value="option6">Option 6</option>
          </select>

          <label for="data-aplicacao">Data de aplicação</label>
          <input type="date" name="data-aplicacao" id="data-aplicacao" />

          <label for="data-retorno">Data de retorno</label>
          <input type="date" name="data-retorno" id="data-retorno" />

          <label for="status">Status</label>
          <select name="status" id="status">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
            <option value="option4">Option 4</option>
            <option value="option5">Option 5</option>
            <option value="option6">Option 6</option>
          </select>

          <label for="email">E-mail</label>
          <input type="text" name="email" id="email">

          <button type="submit">Adicionar</button>
        </form>
    `;

  $("#content").html(form);
}

let vagabundo = new Vaga('1', 'teste', 'teste', 'teste', 'teste', 'teste', 'teste', 'teste');
vagabundo.insert();
