import { Filters } from "../../app/Controllers/FiltersController.js";

const filters = new Filters();

export function filterVagas() {
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
                <option class="text-primary" value="" selected hidden>Status</option>
                <option class="text-primary" value="aplicado">
                  <span class="categoria filter-tab btn btn-dark filter-rounded py-1 px-2 text-primary">aplicado</span>
                </option>
                <option class="text-secondary" value="fit-cultural">
                  <span class="categoria filter-tab btn btn-dark filter-rounded py-1 px-2">fit cultural</span>
                </option>
                <option class="text-info" value="entrevista">
                  <span class="categoria filter-tab btn btn-dark filter-rounded py-1 px-2">entrevista</span>
                </option>
                <option class="" style="color: darkorange" value="exame-tecnico">
                  <span class="categoria filter-tab btn btn-dark filter-rounded py-1 px-2">Avaliação técnica</span>
                </option>
                <option class="text-danger" value="reprovado">
                  <span class="categoria filter-tab btn btn-dark filter-rounded py-1 px-2">reprovado</span>
                </option>
                <option class="text-success">
                  <span class="categoria filter-tab btn btn-dark filter-rounded py-1 px-2" value="aprovado">aprovado</span>
                </option>
                <option class="text-dark">
<<<<<<< HEAD
                  <span class="categoria filter-tab btn btn-dark filter-rounded py-1 px-2" value="encerrada">Encerrada</span>
=======
                  <span class="categoria filter-tab btn btn-dark filter-rounded py-1 px-2" value="vaga-encerrada">vaga-encerrada</span>
>>>>>>> development
                </option>
              </select>
              <span class="text-secondary mx-2 divider">|</span>
            </li>
            <li
            data-filter
            id="categoria"
            />
              <select class="filter-tab btn filter-rounded border border-secondary text-secondary py-1 px-2" data-categoria value="">
                <option class="text-primary" value="" selected hidden>Categoria</option>
                <option value="front-end">front-end</option>
                <option value="back-end">back-end</option>
                <option value="fullstack">fullstack</option>
                <option value="wordpress">wordpress</option>
                <option value="web">web</option>
                <option value="outros">outros</option>
              </select>
            </li>
            <li
            data-filter
            id="portal"
            />
              <select class="filter-tab btn filter-rounded border border-secondary text-secondary py-1 px-2" data-portal>
                <option class="text-primary" value="" selected hidden>Portal</option>
                <option value="linkedin">linkedin</option>
                <option value="gupy">gupy</option>
                <option value="jobs">jobs</option>
                <option value="quikin">quikin</option>
                <option value="e-mail">e-mail</option>
                <option value="outros">outros</option>
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

  $(document).ready(() => {
    $("[data-status]").on('change', function(){
      let filter = new Filters();
      let status = $(this).val();
      filter.filter(status, "status")
    });
  
    $('[data-categoria]').on('change', function(){
      let filter = new Filters();
      let categoria = $(this).val();
      filter.filter(categoria, "categoria")
    });
  
    $('[data-portal]').on('change', function(){
      let filter = new Filters();
      let portal = $(this).val();
      filter.filter(portal, "portal")
    });
  
  
    $("#search-vaga").keyup(function () {
      $("tbody").html("");
      filters.buscar($(this).val());
    });
  });
}
