import Vagas from "../../src/classes/Vagas.js";
import { Config } from "../../src/classes/Config.js";

const theme = new Config().get_theme();
let textColor = null;
theme == "light" ? textColor = "#00000090" : textColor = "#ffffff99"

export function singleView(vaga = Object.JSON) {
  let single = `
        <div id="header" class="single">
            <h2 style="color: ${textColor};"><strong>${vaga.nome}</strong></h2>
            <div class="vaga-sub-header">
                <span>${vaga.empresa} |</span>
                <span>Remoto</span>
                <span class="link text-primary"><i class="fa-solid fa-link text-primary"></i><span class="text-primary" style="margin-left:5px;">link</span></span>
            </div>

            <div class="vaga-info">
                <div class="info">
                    <span class="${statusColor(vaga.status)}"><i class="fa-regular fa-circle-dot ${statusColor(vaga.status)}"></i></span>
                    <span class="${statusColor(vaga.status)}">${vaga.status}</span>
                    <span class="categoria rounded ${theme == 'light' ? 'text-light' : 'text-dark'}">${vaga.categoria}</span>
                </div>
                <div class="info">
                    <span class=""><i class="fa-solid fa-clock"></i></span>
                    <span class="grey">Aplicado em: <span class="data-aplicacao"></span></span>
                </div>
                <div class="info">
                    <span class=""><i class="fa-solid fa-calendar-days"></i></span>
                    <span class="grey">Retorno: <span class="data-retorno"></span></span>    
                    <hr>
                </div>
            </div>
        </div>

        <div id="view-container" style="color: ${textColor};">
            <h3>Descrição</h3>
          <p class="single-descricao"></p>
        </div>
    `;

  return single;
}

export function add_single_events(vaga) {
  $(".link").click(() => {
    window.open(vaga.url, "_blank");
  });
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

function statusColor(status = String) {
  let color = null;

  switch (status) {
    case "aplicado":
      color = "text-primary";
      break;
    case "fit-cultural":
      color = "text-secondary";
      break;
    case "entrevista":
      color = "text-info";
      break;
    case "exame-tecnico":
      color = "text-warning";
      break;
    case "reprovado":
      color = "text-danger";
      break;
    case "aprovado":
      color = "text-success";
      break;
    case "salva":
      color = "text-white";
      break;
    case "encerrada":
      color = "text-muted";
      break;
  }

  return color;
}
