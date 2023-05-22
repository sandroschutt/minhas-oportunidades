import { Vagas } from "../../src/classes/Vagas.js";
import { Home } from "../../app/Controllers/HomeController.js";
import { render } from "../../app/render.js";

// homeContainer();

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

  let item = `
    <div class="card">
    <div class="heading" id="heading${identifier}">
        <div class="vaga-mobile" data-toggle="collapse" data-target="#collapse${identifier}" aria-expanded="true" aria-controls="collapse${identifier}">
        <i class="fa-solid fa-file"></i>
        <span class="vaga-nome-mobile">${vaga.nome.substring(0, 30)}</span>
        <span>
            <i class="fa-regular fa-circle" style="color: ${status_color}"></i>
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
            ${vaga.descricao.substring(0, 150)}...
            </p>
        </div>

        <div class="actions row">
            <div class="col basic-actions">
              <span class="edit edit-${identifier}"><i class="fa-solid fa-pen-to-square"></i></span>
              <span class="favorite favorite-${identifier}"><i class="fa-solid fa-star"></i></span>
              <span class="delete delete-${identifier}"><i class="fa-solid fa-trash-can"></i></span>
            </div>

            <div class="col text-right">
              <span class="visit visit-${identifier}"><i class="fa-solid fa-arrow-up-right-from-square"></i></span>
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

  $(`.favorite-${identifier}`).click(() => {
    home.favorite(vaga.id);
  });

  $(`.delete-${identifier}`).click(() => {
    home.delete(vaga.id);
  });

  $(`.visit-${identifier}`).click(() => {
    home.view(vaga.id);
  });
}
