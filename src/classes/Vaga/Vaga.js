import {Vagas} from '../Vagas.js'

export class Vaga {
    constructor(nome = String, empresa  = String, descricao  = String, portal  = String, categoria  = String, dataaplicacao  = String, url = String){
        this.id = '';
        this.nome = nome;
        this.empresa = empresa;
        this.descricao = descricao;
        this.url = url;
        this.portal = portal;
        this.categoria = categoria;
        this.dataaplicacao = dataaplicacao;
        this.dataretorno = '';
        this.status = 'aplicado';
        this.is_favorite = "false";
        this.is_trash = "false";
    }

    insert() {
        const vgs = new Vagas;
        let vagas = vgs.get_vagas();
        
        let id = parseInt(vagas[0].id) + 1;
        console.log(`
            index: ${vagas[0].id}\n
            id: ${id}
        `)
        id = id.toString();
        this.id = id;

        vagas.unshift(this);

        vgs.update(vagas)

        // alert('Vaga adicionada com sucesso!');

        // window.location.href = './';
    }
}