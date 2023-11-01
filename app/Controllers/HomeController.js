import { Vagas } from "../../src/classes/Vagas.js";
import { render } from "../render.js";

export class Home {
    // CONTROLA TODAS AS FUNCIONALIDADES DA HOME
    edit(id = String){
        render('edit', id);
    }

    favorite(id = String) {
        // favorita vaga
        let vagas = new Vagas();
        vagas.favorite(id);
    }

    delete(id = String) {
        // deleta vaga
        let vagas = new Vagas();
        let minhas_vagas = vagas.get_vagas().vagas;
        let index = vagas.index(id)
        minhas_vagas[index].is_trash = "true";
        vagas.update(minhas_vagas)
    }

    view(id = String) {
        // abre o link da vaga
        render('single', id)
    }
}