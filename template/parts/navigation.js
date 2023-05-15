let topbar_navigation = `
<ul id="main-navigation-desktop" class="d-flex text-light pl-3">
    <li class="d-inline pr-3">Arquivo</li>
    <li class="d-inline pr-3">Configurações</li>
    <li class="d-inline pr-3">Sobre</li>
</ul>
`;

$("nav").html(topbar_navigation);

create_table_view_filters();

function create_table_view_filters() {
    let navigation_container = $('#navigation-container')
    
    let filters = `
    <div class="row d-flex justify-content-between" id="filter-tabs">
        <div class="col col-xl-8 col-lg-8">
        <ul>
            <li
            class="filter-tab btn btn-dark text-light filter-rounded py-1 px-2"
            >
            <span><i class="fa-solid fa-circle"></i></span>Todas
            </li>
            <li
            class="filter-tab btn btn-dark text-primary filter-rounded py-1 px-2"
            >
            <span><i class="fa-solid fa-circle"></i></span>Aplicado
            </li>
            <li
            class="filter-tab btn btn-dark text-secondary filter-rounded py-1 px-2"
            >
            <span><i class="fa-solid fa-circle"></i></span>Fit cultural
            </li>
            <li
            class="filter-tab btn btn-dark text-info filter-rounded py-1 px-2"
            >
            <span><i class="fa-solid fa-circle"></i></span>Entrevista
            </li>
            <li
            class="filter-tab btn btn-dark filter-rounded py-1 px-2 yellow-tab"
            style="color: darkorange"
            >
            <span><i class="fa-solid fa-circle"></i></span>Exame prático
            </li>
            <li
            class="filter-tab btn btn-dark text-danger filter-rounded py-1 px-2"
            >
            <span><i class="fa-solid fa-circle"></i></span>Reprovado
            </li>
            <li
            class="filter-tab btn btn-dark text-success filter-rounded py-1 px-2"
            >
            <span><i class="fa-solid fa-circle"></i></span>Aprovado
            </li>
        </ul>
        </div>
        <div class="col col-xl-4 col-lg-4 text-right">
        <div id="search-vagas">
            <input
            type="text"
            name="search-vaga"
            class="filter-tab filter-rounded bg-dark text-light border border-dark"
            placeholder="Buscar vaga"
            />
        </div>
        </div>
    </div>
    `;

    if(window.screen.width > 999 && window.location.href == `${window.location.origin}/`) {
        navigation_container.append(filters);
    }
}


