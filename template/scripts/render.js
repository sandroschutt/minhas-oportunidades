import { Vagas } from "../../src/classes/Vagas.js";
import { homeContainer, homeView } from "../views/home.js";
import { edit } from "../views/edit.js";
import { add_edit_event } from "../../app/Controllers/EditController.js";
import { newVaga } from "../views/new.js";
import { addNewVaga } from "../../app/Controllers/NewVagaController.js";
import { singleView, descricao, formatDate } from "../views/single.js";
import { trashItems, trashView } from "../views/trash.js";
import { TrashCan } from "../../app/Controllers/TrashcanController.js";

export function render(view = String, id = null) {
  let vagas = new Vagas().get_vagas();
  let vaga = new Vagas().get_vaga(id);

  let single = ``;

  let new_vaga = ``;

  let trash = ``;

  switch (view) {
    case "home":
      homeContainer();
      homeView(vagas);
      break;

    case "single":
      $("#content").html(singleView(vaga));
      descricao(vaga.id);
      formatDate(vaga.dataaplicacao, $('.data-aplicacao'))
      vaga.dataretorno == '' ? false : formatDate(vaga.dataretorno, $('.data-retorno'));
      break;

    case "new":
      $("#content").html(newVaga());
      addNewVaga();
      break;

    case "edit":
      $("#content").html(edit(vaga));
      add_edit_event(vaga);
      break;

    case "trash":
      $("#content").html(trashView());
      $("#empty-trash").click(() => {
        let trashcan = new TrashCan();
        trashcan.empty();
      });
      trashItems();
      break;

    default:
      break;
  }
}
