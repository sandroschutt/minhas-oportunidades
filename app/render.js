import { Vagas } from "../src/classes/Vagas.js";
import { homeContainer, homeView } from "../template/views/home.js";
import { edit } from "../template/views/edit.js";
import { add_edit_event } from "./Controllers/EditController.js";
import { newVaga } from "../template/views/new.js";
import { addNewVaga } from "./Controllers/NewVagaController.js";
import { singleView, descricao, formatDate, add_single_events } from "../template/views/single.js";
import { favoriteItems, favoritesView } from "../template/views/favorites.js";
import { trashItems, trashView } from "../template/views/trash.js";
import { TrashCan } from "./Controllers/TrashcanController.js";
import { aboutContainer, aboutView } from "../template/views/about.js";
import { configsContainer, configsView } from "../template/views/configuration.js";

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
      add_single_events(vaga);
      descricao(vaga.id);
      formatDate(vaga.dataaplicacao, $(".data-aplicacao"));
      vaga.dataretorno == ""
        ? false
        : formatDate(vaga.dataretorno, $(".data-retorno"));
      break;

    case "new":
      $("#content").html(newVaga());
      addNewVaga();
      break;

    case "edit":
      $("#content").html(edit(vaga));
      add_edit_event(vaga);
      break;

    case "favorites":
      $("#content").html(favoritesView());
      favoriteItems();
      break;

    case "trash":
      $("#content").html(trashView());
      $("#empty-trash").click(() => {
        let trashcan = new TrashCan();
        trashcan.empty();
      });
      trashItems();
      break;

    case "about":
      aboutContainer();
      $("#content").html(aboutView());
      break;

    case "configs":
      configsContainer();
      $("#content").html(configsView());
      break;

    default:
      break;
  }
}
