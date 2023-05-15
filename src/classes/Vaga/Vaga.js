import {Vagas} from '../Vagas/Vagas.js'

export class Vaga {
    constructor(id, nome, empresa, portal, categoria, dataaplicacao, dataretorno, status, is_favorite){
        this.id = id;
        this.nome = nome;
        this.empresa = empresa;
        this.portal = portal;
        this.categoria = categoria;
        this.dataaplicacao = dataaplicacao;
        this.dataretorno = dataretorno
        this.status = status;
        this.is_favorite = is_favorite;
    }

    async insert() {
        let all_vagas = JSON.parse(localStorage.getItem("vagas"));
        
        let last_index = all_vagas['vagas'].length -1;
        let id = parseInt(all_vagas['vagas'][last_index].id) + 1;
        id = id.toString();
        this.id = id;

        all_vagas.vagas.push(this);

        localStorage.setItem("vagas", JSON.stringify(all_vagas));

        // alert('Vaga adicionada com sucesso!');

        // window.location.href = './';
    }
}