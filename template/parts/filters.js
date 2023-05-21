import { Filters } from "../../app/Controllers/FiltersController.js";

const filters = new Filters();

function filterVagas() {
  let navigation_container = $("#navigation-container");

  let filters = `
    <div class="row d-flex justify-content-between" id="filter-tabs">
        <div class="col col-xl-8 col-lg-8">
        <ul>
            <li
            data-filter
            id="status"
            >
              <select class="filter-tab btn filter-rounded border border-secondary text-secondary py-1 px-2" data-status>
                <option class="text-primary" value="aplicado">
                  <span class="categoria filter-tab btn btn-dark filter-rounded py-1 px-2 text-primary">Aplicado</span>
                </option>
                <option class="text-secondary" value="fit-cultural">
                  <span class="categoria filter-tab btn btn-dark filter-rounded py-1 px-2">Fit cultural</span>
                </option>
                <option class="text-info" value="entrevista">
                  <span class="categoria filter-tab btn btn-dark filter-rounded py-1 px-2">Entrevista</span>
                </option>
                <option class="" style="color: darkorange" value="exame-tecnico">
                  <span class="categoria filter-tab btn btn-dark filter-rounded py-1 px-2">Avaliação técnica</span>
                </option>
                <option class="text-danger" value="reprovado">
                  <span class="categoria filter-tab btn btn-dark filter-rounded py-1 px-2">Reprovado</span>
                </option>
                <option class="text-success">
                  <span class="categoria filter-tab btn btn-dark filter-rounded py-1 px-2" value="aprovado">Aprovado</span>
                </option>
                <option class="text-light">
                  <span class="categoria filter-tab btn btn-dark filter-rounded py-1 px-2" value="encerrada">Encerrada</span>
                </option>
              </select>
              <span class="text-secondary mx-2 divider">|</span>
            </li>
            <li
            data-filter
            id="categoria"
            />
              <select class="filter-tab btn filter-rounded border border-secondary text-secondary py-1 px-2" data-categoria value="">
                <option value="front-end">front-end</option>
                <option value="front-end-pleno">front-end-pleno</option>
                <option value="front-end-senior">front-end-senior</option>
                <option value="back-end">back-end</option>
                <option value="back-end-pleno">back-end-pleno</option>
                <option value="back-end-pleno">back-end-senior</option>
                <option value="fullstack">fullstack</option>
                <option value="fullstack-pleno">fullstack-pleno</option>
                <option value="fullstack-senior">fullstack-senior</option>
                <option value="wordpress">wordpress</option>
                <option value="desenvolvedor-software">desenvolvedor-software</option>
              </select>
            </li>
            <li
            data-filter
            id="portal"
            />
              <select class="filter-tab btn filter-rounded border border-secondary text-secondary py-1 px-2" data-portal>
                <option value="linkedin">linkedin</option>
                <option value="jobs">jobs</option>
                <option value="gupy">gupy</option>
                <option value="e-mail">e-mail</option>
              </select>
            </li>
        </ul>
        </div>
        <div class="col col-xl-4 col-lg-4 text-right d-none">
        <div id="search">
            <input
            type="text"
            id="search-vaga"
            class="filter-tab filter-rounded bg-dark text-light border border-dark"
            placeholder="Buscar vaga"
            />
        </div>
        </div>
    </div>
    `;
  navigation_container.append(filters);
}

$(document).ready(() => {
  filterVagas();

  $("[data-status]").on('change', function(){
    let filter = new Filters();
    let status = $(this).val();
    filter.filter(status)
  });

  $('[data-categoria]').on('change', function(){
    let filter = new Filters();
    let categoria = $(this).val();
    filter.filter(categoria)
  });

  $('[data-portal]').on('change', function(){
    let filter = new Filters();
    let portal = $(this).val();
    filter.filter(portal)
  });


  $("#search-vaga").keyup(function () {
    $("tbody").html("");
    filters.buscar($(this).val());
  });
});
