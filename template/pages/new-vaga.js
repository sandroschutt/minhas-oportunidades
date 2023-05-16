import { Vaga } from "../../src/classes/Vaga/Vaga.js";

let form_new_vaga = `
<div class="form-new-vaga form-group">
<label for="nome">Nome</label>
<input
  class="form-control-sm bg-dark text-secondary border border-0" type="text" name="nome" id="nome" />

<label for="empresa">Empresa</label>
<input class="form-control-sm bg-dark text-secondary border border-0" type="text" name="empresa" id="empresa" />

<label for="portal">Portal</label>
<select class="form-control-sm bg-dark text-secondary border border-0" name="portal" id="portal">
  <option value="linkedin">linkedin</option>
  <option value="gupy">gupy</option>
  <option value="email">email</option>
</select>

<div class="form-group">
  <label for="url" class="col-form-label">URL:</label>
  <input type="text" class="form-control-sm bg-dark text-secondary border border-0" id="url">
</div>

<div class="form-group">
  <label for="descricao" class="col-form-label">Descricao:</label>
  <textarea class="form-control bg-dark text-secondary border border-0" id="descricao"></textarea>
</div>

<label for="categoria">Categoria</label>
<select class="form-control-sm bg-dark text-secondary border border-0" name="categoria" id="categoria">
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

<label for="data-aplicacao">Data de aplicação</label>
<input
  class="form-control-sm bg-dark text-secondary border border-0"
  type="date"
  placeholder="dd-mm-yyyy"
  min="1999-01-01"
  value=""
  name="data-aplicacao"
  id="data-aplicacao"
/>

<button type="button" id="save-new-vaga" class="btn btn-success">Adicionar</button>
</div>
`;

$(document).ready(function () {
  $("#add").click(() => {
    $("#content").html(form_new_vaga);
    addNovaVaga();
    let today = new Date().toJSON().slice(0, 10);
    $("#data-aplicacao").val(today);
  });
});

function addNovaVaga() {
  $("#save-new-vaga").on("click", (event) => {
    let new_vaga_values = {
      nome: $("#nome").val(),
      empresa: $("#empresa").val(),
      descricao: $("#descricao").val(),
      portal: $("#portal").val(),
      categoria: $("#categoria").val(),
      "data-aplicacao": $("#data-aplicacao").val(),
    };

    let new_vaga = new Vaga(
      new_vaga_values.nome,
      new_vaga_values.empresa,
      new_vaga_values.descricao,
      new_vaga_values.portal,
      new_vaga_values.categoria,
      new_vaga_values["data-aplicacao"],
    );

    new_vaga.nome != "" && new_vaga.empresa != ""
      ? new_vaga.insert()
      : missing_required_data();
  });
}

function missing_required_data() {
  alert("Nome da vaga e empresa são obrigatórios");
}

// POPULATE LOCALSTORAGE JSON
// comment alert on Vaga.js:27
// comment page redirect on Vaga.js:29
// run the following function on your browser console (make sure to be on ./new-vaga.html)

// function preenche_form(n_records = int) {
//   for (let i = 0; i <= n_records; i++) {
//     $("#nome").val("Teste" + " " + i);
//     $("#empresa").val("Empresa" + " " + i);

//     let btn_save = $("#save-new-vaga");
//     btn_save.click();
//   }
// }

// preenche_form(100)
