import { Vagas } from "../../src/classes/Vagas.js";
import { homeContainer, novaVaga } from "../../template/views/home.js";

export class Filters {
  filter(filtro = String, filterType = String) {
    $("#content").html("");
    homeContainer();

    let vagas = new Vagas();
    vagas = vagas.get_vagas().vagas;

    vagas.forEach((vaga) => {
      if((vaga.status == filtro && filterType == "status") || (vaga.categoria == filtro && filterType == "categoria") || (vaga.portal == filtro && filterType == "portal") && (vaga.is_trash == "false")){
        novaVaga(vaga)
      }
    });
  }

  buscar(busca) {
    let vagas = new Vagas().get_vagas().vagas;
    
    homeContainer();
    
    vagas.forEach((vaga) => {
      busca = busca.toLowerCase();
      let nome = vaga.nome.toLowerCase();
      let empresa = vaga.empresa.toLowerCase();

      if(nome.includes(busca) || empresa.includes(busca)) {
        novaVaga(vaga)
      }
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
