import { Vagas } from "../../src/classes/Vagas/Vagas.js";
import { table_row } from "../../template/pages/home.js";
import { Toolbar } from "./ToolbarController.js";

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

    const tb_functions = new Toolbar();
    tb_functions.init();
  }

  buscar(busca) {
    let vagas = new Vagas().get_vagas();
    vagas.forEach((vaga) => {
      let nome = vaga.nome.toLowerCase();
      let empresa = vaga.empresa.toLowerCase();
      nome.includes(busca) || empresa.includes(busca) ? table_row(vaga) : false;
    });
  }

  count(status = String) {
    let vagas = new Vagas().get_vagas();
    let vagas_categoria = 0;

    vagas.forEach((vaga) => {
      vaga.status == status ? vagas_categoria++ : false;
    });

    let output = `<span>${vagas_categoria}</span>`;
    return output;
  }
}
