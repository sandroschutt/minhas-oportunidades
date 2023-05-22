import { Vaga } from "../../src/classes/Vaga.js";

export function addNewVaga() {
  $("#save-new-vaga").on("click", (event) => {
    let today = new Date().toJSON().slice(0, 10);

    let new_vaga_values = {
      nome: $("#nome").val(),
      empresa: $("#empresa").val(),
      descricao: $("#descricao").val(),
      portal: $("#portal").val(),
      categoria: $("#categoria").val(),
      dataaplicacao: today,
      url: $("#url").val(),
    };

    let new_vaga = new Vaga(
      new_vaga_values.nome,
      new_vaga_values.empresa,
      new_vaga_values.descricao,
      new_vaga_values.portal,
      new_vaga_values.categoria,
      new_vaga_values.dataaplicacao,
      new_vaga_values.url
    );

    new_vaga.nome != "" && new_vaga.empresa != ""
      ? new_vaga.insert()
      : missing_required_data();
  });
}

function missing_required_data() {
  alert("Nome da vaga e empresa são obrigatórios");
}
