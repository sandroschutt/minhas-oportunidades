import { Vagas } from "../../src/classes/Vagas.js";
import { novaVaga } from "./home.js";


export function trashContainer() {
    let trashContainer = `
      <div id="list-mobile">
        <div id="accordion">
        </div>
      </div>
      `;
  
    $("#content").append(trashContainer);
  }

export function trashView() {
    let trashHeader = `
        <div id="header" class="single" style="margin-bottom: 15%;">
            <h2 style="margin-bottom: 0;"><strong>Lixeira</strong></h2>
            <span class="mr-2 text-secondary">11 Vagas</span>
        </div>
    `;

    return trashHeader;
}

export function trashItems() {
    let vagas = new Vagas().get_vagas();
    trashContainer();

    vagas.forEach(vaga => {
        if(vaga.is_trash == 'true') {
            novaVaga(vaga)

            // adicionar ícone de restauração e atribuir evento a ele
            let restoreicon = `<span class=""><i class="fa-solid fa-trash-arrow-up"></i></span>`;
            $('.actions .col.text-right').last().html(restoreicon);
        }
    });

    $('.actions .col span').remove()
}