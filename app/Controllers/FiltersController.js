import { Vagas } from "../../src/classes/Vagas/Vagas.js";
import { table_row } from "../../template/pages/home.js";

export class Filters {
  filtrar(filtro = String) {
    $("tbody").html("");

    let vagas = new Vagas();
    vagas = vagas.get_vagas();

    if (filtro != "todas") {
      vagas.forEach((vaga) => {
        vaga.status == filtro ? table_row(vaga) : false;
      });
    } else {
      vagas.forEach((vaga) => {
        table_row(vaga);
      });
    }
  }

  buscar(busca) {
    let vagas = new Vagas();
    vagas.get_vagas().forEach((vaga) => {
        let nome = vaga.nome.toLowerCase();
        let empresa = vaga.empresa.toLowerCase();
        nome.includes(busca) || empresa.includes(busca)  ? table_row(vaga) : false;
    })
  }
}
