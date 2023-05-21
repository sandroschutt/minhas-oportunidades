import Vagas from "../../src/classes/Vagas.js";

export class TrashCan extends Vagas {
    restore(id = String) {
        // restaura vaga excluída
    }

    empty() {
        // esvazia lixeira
        let vagas = this.get_vagas();

        vagas.forEach(vaga => {
            if (vaga.is_trash === 'true') {
                this.delete(vaga.id)
            }
        });

        alert("lixeira esvaziada")

        window.location.reload
    }
}