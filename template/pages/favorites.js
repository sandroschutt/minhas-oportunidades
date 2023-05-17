import { table_row } from "../../template/pages/home.js";

export function createFavoritesTableView(vagas) {
  vagas.forEach((vaga) => {
    $("tbody").append(table_row(vaga));
  });
}
