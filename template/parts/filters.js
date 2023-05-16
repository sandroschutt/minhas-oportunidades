import { Filters } from "../../app/Controllers/FiltersController.js";

const filters = new Filters();

create_table_view_filters();

function create_table_view_filters() {
  let navigation_container = $("#navigation-container");

  let filters = `
    <div class="row d-flex justify-content-between" id="filter-tabs">
        <div class="col col-xl-8 col-lg-8">
        <ul>
            <li
            data-filter
            id="todas"
            class="filter-tab btn btn-dark text-light filter-rounded py-1 px-2"
            style="display: none;
            >
            <span><i class="fa-solid fa-circle"></i></span>
            <span class="categoria">Todas</span>
            </li>
            <li
            data-filter
            id="aplicado"
            class="filter-tab btn btn-dark text-primary filter-rounded py-1 px-2"
            >
            <span><i class="fa-solid fa-circle"></i></span>
            <span class="categoria">Aplicado</span>
            </li>
            <li
            data-filter
            id="fit-cultural"
            class="filter-tab btn btn-dark text-secondary filter-rounded py-1 px-2"
            >
            <span id="fit-cultural"><i class="fa-solid fa-circle"></i></span>
            <span class="categoria">Fit cultural</span>
            </li>
            <li
            data-filter
            id="entrevista"
            class="filter-tab btn btn-dark text-info filter-rounded py-1 px-2"
            >
            <span><i class="fa-solid fa-circle"></i></span>
            <span class="categoria">Entrevista</span>
            </li>
            <li 
            data-filter
            id="exame-tecnico"
            style="color: darkorange!important;"
            class="filter-tab btn btn-dark text-info filter-rounded py-1 px-2"
            >
            <span><i class="fa-solid fa-circle"></i></span>
            <span class="categoria">Exame prático</span>
            </li>
            <li
            data-filter
            id="reprovado"
            class="filter-tab btn btn-dark text-danger filter-rounded py-1 px-2"
            >
            <span><i class="fa-solid fa-circle"></i></span>
            <span class="categoria">Reprovado</span>
            </li>
            <li
            data-filter
            id="aprovado"
            class="filter-tab btn btn-dark text-success filter-rounded py-1 px-2"
            >
            <span><i class="fa-solid fa-circle"></i></span>
            <span class="categoria">Aprovado</span>
            </li>
        </ul>
        </div>
        <div class="col col-xl-4 col-lg-4 text-right">
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

  // if (
  //   window.screen.width > 999 &&
  //   window.location.href == `${window.location.origin}/`
  // ) {
    navigation_container.append(filters);
  // }
}

$("[data-filter]").each(function () {
  $(this).click(() => {;
    filters.filtrar($(this).attr("id"))
  });
  
  $(this).append(filters.count($(this).attr('id')));
});

$('#search-vaga').keyup(function() {
    $("tbody").html("");
    filters.buscar($(this).val())
})
