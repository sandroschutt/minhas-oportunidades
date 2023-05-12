import {Vagas} from '../Vagas/Vagas.js'

export class Vaga {
    constructor(id, nome, empresa, portal, categoria, dataaplicacao, dataretorno, status){
        this.id = id;
        this.nome = nome;
        this.empresa = empresa;
        this.portal = portal;
        this.categoria = categoria;
        this.dataaplicacao = dataaplicacao;
        this.dataretorno = dataretorno
        this.status = status;
    }

    async insert() {
        let all_vagas = JSON.parse(localStorage.getItem("vagas"));
        let template_vaga = new Vagas;
        console.log('minhas_vagas', all_vagas)
        console.log('model_vaga', await template_vaga.get_model('vaga'))
    }
}