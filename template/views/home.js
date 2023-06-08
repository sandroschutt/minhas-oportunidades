import { Config } from "../../src/classes/Config.js";
import { theme } from "../../app/Controllers/ConfigController.js";
import { Home } from "../../app/Controllers/HomeController.js";
import { render } from "../../app/render.js";

const configs = new Config().get();

theme(configs.theme);

export function homeContainer() {
  let homeContainer = `
    <div id="list-mobile">
      <div id="accordion">
      </div>
    </div>
    `;

  $("#content").html(homeContainer);
}

export function homeContainerTrash() {
  let homeContainer = `
    <div id="list-mobile">
      <div id="accordion">
      </div>
    </div>
    `;

  $("#content").html(homeContainer);
}

$(document).ready(() => {
  render('home');
});

export function homeView(minhas_vagas) {
  minhas_vagas.forEach((vaga) => {
    if(vaga.is_trash == "false") {
      novaVaga(vaga);
    }
  });
}

export function novaVaga(vaga) {
  const home = new Home();

  let status_color = null;

  switch (vaga.status) {
    case "aplicado":
      status_color = "#007bff!important";
      break;

    case "fit-cultural":
      status_color = "#6c757d!important";
      break;

    case "entrevista":
      status_color = "#17a2b8!important";
      break;

    case "exame-tecnico":
      status_color = "#ff8c00!important";
      break;

    case "reprovado":
      status_color = "#dc3545!important";
      break;

    case "aprovado":
      status_color = "#28a745!important";
      break;

    default:
      status_color = "#343a40!important";
      break;
  }

  let identifier = parseInt(vaga.id) ** 3 / (25 / 100);
  let nome = vaga.nome;

  window.screen.width < 900 ? nome = vaga.nome.substring(0, 30) : nome = vaga.nome;

  let item = `
    <div class="card bg-transparent">
    <div class="heading" id="heading${identifier}">
        <div class="vaga-mobile" data-toggle="collapse" data-target="#collapse${identifier}" aria-expanded="true" aria-controls="collapse${identifier}">
        <i class="fa-solid fa-file"></i>
        <span class="vaga-nome-mobile">${nome}</span>
        <span>
            <i class="fa-regular fa-circle-dot" style="color: ${status_color}"></i>
        </span>
        </div>
    </div>

        <div id="collapse${identifier}" class="collapse" aria-labelledby="heading${identifier}" data-parent="#accordion">
        <div class="preview-info">
            <p>
            <span><strong>Empresa: </strong>${vaga.empresa}</span>
            </p>
            <p>
            <span><strong>Período:</strong> Integral</span>
            </p>
            <p>
            <span><strong>Aplicação: </strong>${vaga.dataaplicacao}</span>
            </p>
        </div>

        <div class="descricao ">
            <h6><strong>Descrição:</strong></h6>
            <p>
            ${window.screen.width < 1000 ? vaga.descricao.substring(0, 200) : vaga.descricao.substring(0, 800)}...
            </p>
        </div>

        <div class="actions row">
            <div class="col basic-actions">
              <span class="edit edit-${identifier}"><i class="fa-solid fa-pen-to-square"></i></span>
              <span class="favorite favorite-${identifier}"><i class="fa-solid fa-star"></i></span>
              <span class="link link-${identifier}"><i class="fa-solid fa-link"></i></span>
              <span class="delete delete-${identifier}"><i class="fa-solid fa-trash-can"></i></span>
            </div>

            <div class="col text-right">
              <span class="visit visit-${identifier}" id="${vaga.id}"><i class="fa-solid fa-arrow-up-right-from-square"></i></span>
            </div>
        </div>
        </div>
    </div>
    </div>
    `;
  add_vaga_events(item, home, vaga, identifier);
}

export function add_vaga_events(item, home, vaga, identifier = null) {
  $("#accordion").append(item);

  $(`.edit-${identifier}`).click(() => {
    home.edit(vaga.id);
  });

  let starIconColor = '#666464;';
  vaga.is_favorite == "true" ? starIconColor = "yellow" : starIconColor = starIconColor;
  $(`.favorite-${identifier}`).css('color', starIconColor);

  const setStarIconColor = (color = String) => {
    $(`.favorite-${identifier}`).css('color', color)
  };

  $(`.favorite-${identifier}`).click(() => {
    $(`.favorite-${identifier}`).css('color') == "rgb(255, 255, 0)" ? setStarIconColor('#979a9c') : setStarIconColor('yellow');
    home.favorite(vaga.id);
  });

  $(`.link-${identifier}`).click(() => {
    window.open(vaga.url, '_blank');
  });

  $(`.delete-${identifier}`).click(() => {
    home.delete(vaga.id);
  });

  $(`.visit-${identifier}`).click(() => {
    home.view(vaga.id);
  });
}
