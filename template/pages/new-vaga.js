import { Vaga } from "../../src/classes/Vaga/Vaga.js";

let form_new_vaga = `
<div class="form-new-vaga form-group">
<label for="nome">Nome</label>
<input
  class="form-control-sm bg-dark text-secondary border border-0" type="text" name="nome" id="nome" />

<label for="empresa">Empresa</label>
<input
  class="form-control-sm bg-dark text-secondary border border-0" type="text" name="empresa" id="empresa" />

<label for="portal">Portal</label>
<select class="form-control-sm bg-dark text-secondary border border-0" name="portal" id="portal">
  <option value="linkedin">linkedin</option>
  <option value="gupy">gupy</option>
  <option value="email">email</option>
</select>

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

<label for="data-retorno">Data de retorno</label>
<input
  class="form-control-sm bg-dark text-secondary border border-0"
  type="date"
  placeholder="dd-mm-yyyy"
  name="data-retorno"
  id="data-retorno"
/>

<label class="form-label" for="status">Status</label>
<select class="form-control-sm bg-dark text-secondary border border-0" name="status" id="status">
  <option value="aplicado">Aplicado</option>
  <option value="fit-cultural">Fit cultural</option>
  <option value="exame-tecnico">Teste técnico</option>
  <option value="entrevista">Entrevista</option>
  <option value="reprovado">Reprovado</option>
  <option value="aprovado">Aprovado</option>
</select>

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
      portal: $("#portal").val(),
      categoria: $("#categoria").val(),
      "data-aplicacao": $("#data-aplicacao").val(),
      "data-retorno": $("#data-retorno").val(),
      status: $("#status").val(),
    };

    let new_vaga = new Vaga(
      "id",
      new_vaga_values.nome,
      new_vaga_values.empresa,
      new_vaga_values.portal,
      new_vaga_values.categoria,
      new_vaga_values["data-aplicacao"],
      new_vaga_values["data-retorno"],
      new_vaga_values.status,
      "false"
    );

    console.log(new_vaga);

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
