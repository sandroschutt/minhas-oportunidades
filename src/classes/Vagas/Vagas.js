export class Vagas {
  async get_model(model) {
    let fetchModel = await fetch(`./src/data/vagas/${model}.json`);
    let final_model = await fetchModel.json();

    return await final_model;
  }

  get_vagas() {
    let minhas_vagas = JSON.parse(localStorage.getItem("vagas"));
    minhas_vagas = minhas_vagas["vagas"];

    return minhas_vagas;
  }

  get_vaga(id = String){
    let vagas = this.get_vagas();
    let vaga = {};
    for(let i = 0; i <= vagas.length - 1; i++){
      if(vagas[i].id == id) {
        vaga = vagas[i];
        break;
      }
    }
    return vaga;
  }

  index(id = String) {
    let vagas = this.get_vagas();

    let index = null;

    vagas.forEach((vaga) => {
      if (vaga.id == id) {
        index = parseInt(vagas.indexOf(vaga));
      }
    });

    return index;
  }

  get_favorites() {
    let vagas = this.get_vagas();
    let vagas_favoritas = Array();
    vagas.forEach((vaga) => {
      vaga.is_favorite == "true" ? vagas_favoritas.push(vaga) : false;
    });

    return vagas_favoritas;
  }

  update(vagas) {
    vagas = { vagas: vagas };
    localStorage.setItem("vagas", JSON.stringify(vagas));
    window.location.reload();
  }

  edit(id = String, edited_values = Object.JSON) {
    let vagas = this.get_vagas();
    let index = this.index(id)
    
    vagas[index].nome = edited_values.nome;
    vagas[index].empresa = edited_values.empresa;
    vagas[index].portal = edited_values.portal;
    vagas[index].categoria = edited_values.categoria;
    vagas[index].dataaplicacao = edited_values.dataaplicacao;
    vagas[index].dataretorno = edited_values.dataretorno;
    vagas[index].status = edited_values.status;

    this.update(vagas);
  }

  delete(id = String) {
    let vagas = this.get_vagas();
    vagas.forEach((vaga) => {
      if (vaga.id == id) {
        let index = this.index(id);
        vagas.splice(index, 1);
      }
    });

    this.update(vagas);
  }

  bulk_delete(ids = Array) {
    let vagas = this.get_vagas();

    ids.forEach((id) => {
      let index = this.index(id);
      vagas.splice(index, 1);
    });

    this.update(vagas);
  }

  favorite(id = String) {
    let vagas = this.get_vagas();
    let index = this.index(id);
    vagas[index].is_favorite == "true"
      ? (vagas[index].is_favorite = "false")
      : (vagas[index].is_favorite = "true");
    this.update(vagas);
  }

  bulk_favorite(ids = Array) {
    ids.forEach((id) => {
      this.favorite(id);
    });
  }
}

export default Vagas;
