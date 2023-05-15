import { Vaga } from "../../src/classes/Vaga/Vaga.js";

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

addNovaVaga();

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
