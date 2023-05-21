import Vagas from "../../src/classes/Vagas/Vagas.js";

export function singleView(vaga = Object.JSON) {
  let single = `
        <div id="header-edit" class="single">
            <h2><strong>${vaga.nome}</strong></h2>
            <div class="vaga-sub-header">
                <span>${vaga.empresa} |</span>
                <span>Remoto</span>
            </div>

            <div class="vaga-info">
                <div class="info">
                    <span class="text-primary"><i class="fa-regular fa-circle text-primary"></i></span>
                    <span class="text-primary">${vaga.status}</span>
                    <span class="categoria rounded">${vaga.categoria}</span>
                </div>
                <div class="info">
                    <span class=""><i class="fa-solid fa-clock"></i></span>
                    <span class="grey">Aplicado em: <span class="data-aplicacao"></span></span>
                </div>
                <div class="info">
                    <span class=""><i class="fa-solid fa-calendar-days"></i></span>
                    <span class="grey">Concluída em: <span class="data-retorno"></span></span>    
                    <hr>
                </div>
            </div>
        </div>

        <div id="form-edit">
            <h3>Descrição</h3>
            <p class="single-descricao"></p>
        </div>
    `;

  return single;
}

export function descricao(id = String) {
  let vaga = new Vagas().get_vaga(id);
  let descricao = vaga.descricao;

  var modifiedString = replaceNewlinesWithBreaks(descricao);
  $(".single-descricao").html(modifiedString);
}

function replaceNewlinesWithBreaks(text) {
  var regex = /\n/g;
  return text.replace(regex, "<br/>");
}

export function formatDate(dateString = String, element = Object.html) {
  var date = new Date(dateString);

  var day = date.getDate();
  var month = date.toLocaleString("default", { month: "long" });
  var year = date.getFullYear();

  let finalString = `${day} de ${month} de ${year}`;
  element.text(finalString);
}
