import { render } from "../../app/render.js";
import { Filters } from "../../app/Controllers/FiltersController.js";
import { homeContainer } from "../views/home.js";

let topnavbar = `
    <nav>
    <div id="fluid-navigation" class="row d-flex">
    <div class="col-1">
        <!-- ícone -->
        <span class="menu-icon-outside">
        <i class="fa-solid fa-sliders"></i>
        </span>

        <div class="menu-container">
            <!-- icone de dentro do menu -->
            <span class="menu-icon-inside">
            <i class="fa-solid fa-chevron-left"></i>
            </span>

            <ul class="menu">
                <li>
                    <h5 class="arquivo">Arquivo</h5>
                    <p
                    class="importar"
                    id="importar"
                    data-toggle="modal"
                    data-target="#importModal">
                        Importar
                    </p>
                    <p
                    class="exportar"
                    id="exportar"
                    id="exportar"
                    data-toggle="modal"
                    data-target="#exportModal">
                        Exportar
                    </p>
                    <p class="lixeira" id="favoritos">Favoritos</p>
                    <p class="lixeira" id="lixeira">Lixeira</p>
                    <p class="configuracoes" id="configuracoes">Configurações</p>
                </li>
                <li>
                    <h5 class="arquivo">Sobre</h5>
                    <p class="minhas-oportunidades" id="minhas-oportunidades">Minhas Oportunidades</p>
                </li>
            </ul>
            <span class="menu theme">
                <i class="fa-solid fa-circle-half-stroke"></i>
            </span>
        </div>
    </div>
    <div class="col-11 text-right">
        <span class="search-input">
            <input type="text" placeholder="Search...">
        </span>
        <!-- ícone de busca -->
        <span class="search-icon">
            <i class="fa-solid fa-magnifying-glass"></i>
        </span>
    </div>
    </div>
    </nav>
`;

$("#navigation-container").prepend(topnavbar);

$(document).ready(function () {
  const menuContainer = $('.menu-container');
  const menuIconOutside = $(".menu-icon-outside");
  const menuIconInside = $(".menu-icon-inside");
  const searchInput = $('.search-input input');

  const filters = new Filters();

  const toggleOpen = (toggleItem = Object.html) => {
    toggleItem.toggleClass("open");
  }

  menuIconInside.click(() => {
    toggleOpen(menuContainer);
  });

  menuIconOutside.click(() => {
    toggleOpen(menuContainer);
  });

  $("#lixeira").click(() => {
    render("trash");
    toggleOpen(menuContainer);
  });

  $("#favoritos").click(() => {
    render("favorites");
    toggleOpen(menuContainer);
  });

  $('#configuracoes').click(() => {
    render('configs');
    toggleOpen(menuContainer);
  })

  $('#minhas-oportunidades').click(() => {
    render('about');
    toggleOpen(menuContainer);
  })

  $('.search-icon').click(() => {
    toggleOpen($('.search-input'))
    searchInput.focus();
  })

  searchInput.keyup(() => {
    filters.buscar(searchInput.val())
  })
});
