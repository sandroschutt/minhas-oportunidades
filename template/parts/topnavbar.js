import { Config } from "../../src/classes/Config.js";
import { render, setReferer, lastActions } from "../../app/render.js";
import { Filters } from "../../app/Controllers/FiltersController.js";

export function topNavbar() {
  let currentTheme = new Config().get();
  currentTheme = currentTheme.theme;

  let topnavbar = `
    <nav class="">
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
                <i class="fa-solid fa-circle-dot-half-stroke"></i>
                <span class="current-theme">${currentTheme == 'light' ? 'dark' : 'light'}</span>
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

  $("#navigation-container").html(topnavbar);

  const configurations = new Config();
  const menuContainer = $('.menu-container');
  const menuIconOutside = $(".menu-icon-outside");
  const menuIconInside = $(".menu-icon-inside");
  const searchInput = $('.search-input input');
  const changeTheme = $('.menu.theme');

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

  $('.search-icon').click(() => {
    toggleOpen($('.search-input'))
    searchInput.focus();
  })

  searchInput.keyup(() => {
    filters.buscar(searchInput.val())
  })

  changeTheme.click(() => {
    let defineTheme = configurations.get();
    defineTheme = defineTheme.theme;
    defineTheme == 'light' ?
    configurations.set_theme('dark') :
    configurations.set_theme('light');
  })

  $("#lixeira").click(() => {
    render("trash");
    toggleOpen(menuContainer);
    setReferer(lastActions, 'trash');
  });

  $("#favoritos").click(() => {
    render("favorites");
    toggleOpen(menuContainer);
    setReferer(lastActions, 'favorites');
  });

  $('#configuracoes').click(() => {
    render('configs');
    toggleOpen(menuContainer);
    setReferer(lastActions, 'configs');
  })

  $('#minhas-oportunidades').click(() => {
    render('about');
    toggleOpen(menuContainer);
    setReferer(lastActions, 'about');
  })
}

topNavbar();
