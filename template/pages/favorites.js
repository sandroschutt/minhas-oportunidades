import { Vagas } from "../../src/classes/Vagas/Vagas.js";
import { createTableView } from "../../template/pages/home.js";
import { table } from "../../template/pages/home.js";
import { table_row } from "../../template/pages/home.js";

$(document).ready(() => {
  $("#favs").click(() => {
    const vagas = new Vagas().get_favorites();
    if ($("table").html() != undefined) {
      $("tbody").html("");
      create_favorites_table_view(vagas);
    } else {
      $("#content").html("");
      table();
      create_favorites_table_view(vagas);
    }
  });
});

function create_favorites_table_view(vagas) {
  vagas.forEach((vaga) => {
    $("tbody").append(table_row(vaga));
  });
}

// const vagas = new Vagas().get_favorites();
