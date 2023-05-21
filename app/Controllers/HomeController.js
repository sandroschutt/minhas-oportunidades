import { Vagas } from "../../src/classes/Vagas/Vagas.js";
import { render } from "../../template/scripts/render.js";

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
        vagas.delete(id)
    }

    view(id = String) {
        // abre o link da vaga
        render('single', id)
    }
}