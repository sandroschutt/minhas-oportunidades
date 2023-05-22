import { Vagas } from "../../src/classes/Vagas.js";
import { homeContainer, novaVaga } from "../../template/views/home.js";

export class Filters {
  filter(filtro = String) {
    $("#content").html("");
    homeContainer();

    let vagas = new Vagas();
    vagas = vagas.get_vagas();

    vagas.forEach((vaga) => {
      if(vaga.status == filtro || vaga.categoria == filtro || vaga.portal == filtro && vaga.is_trash == "false"){
        novaVaga(vaga)
      }
    });
  }

  buscar(busca) {
    let vagas = new Vagas().get_vagas();
    vagas.forEach((vaga) => {
      let nome = vaga.nome.toLowerCase();
      let empresa = vaga.empresa.toLowerCase();
      nome.includes(busca) || empresa.includes(busca) ? console.log(busca) : false;
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
