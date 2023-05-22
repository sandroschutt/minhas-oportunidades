import { render } from "../../app/render.js";
import { Filters } from "../../app/Controllers/FiltersController.js";

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
                    <p class="lixeira" id="lixeira">Lixeira</p>
                    <hr class="bg-grey">
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
  const menuIconOutside = $(".menu-icon-outside");
  const menuIconInside = $(".menu-icon-inside");

  const filters = new Filters();

  menuIconInside.click(() => {
    let menu = $(".menu-container");
    menu.toggleClass("open");
  });

  menuIconOutside.click(() => {
    let menu = $(".menu-container");
    menu.toggleClass("open");
  });

  $("#lixeira").click(() => {
    render("trash");
    let menu = $(".menu-container");
    menu.toggleClass("open");
  });

  $('.search-icon').click(() => {
    $('.search-input').toggleClass('open')
  })

  $('.search-input input').keyup(() => {
    filters.buscar($('.search-input input').val())
  })
});
