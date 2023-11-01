import { Config } from "../src/classes/Config.js";
import { Vagas } from "../src/classes/Vagas.js";
import { topNavbar } from "../template/parts/topnavbar.js";
import { singleTopNavbar, add_single_topbar_events } from "../template/parts/single_topbar.js";
import { filterVagas } from "../template/parts/filters.js";
import { homeContainer, homeView } from "../template/views/home.js";
import { edit } from "../template/views/edit.js";
import { add_edit_event } from "./Controllers/EditController.js";
import { insightsView } from "../template/views/insights.js";
import { createBarChart, createLineChart, setCategoriesChartValues, setPortalsChartValues } from "../template/parts/charts.js";
import { newVaga } from "../template/views/new.js";
import { addNewVaga } from "./Controllers/NewVagaController.js";
import { singleView, descricao, formatDate, add_single_events } from "../template/views/single.js";
import { favoritos,favoriteItems, favoritesView } from "../template/views/favorites.js";
import { trashItems, trashView } from "../template/views/trash.js";
import { TrashCan } from "./Controllers/TrashcanController.js";
import { aboutContainer, aboutView } from "../template/views/about.js";
import { configsContainer, configsView } from "../template/views/configuration.js";
import { setStatusChartValues } from "./Controllers/InsightsController.js";

export function render(view = String, id = null) {
  const configs = new Config();
  const cVagas = new Vagas();
  let vagas = cVagas.get_vagas().vagas;
  let vaga = cVagas.get_vaga(id);

  let listViews = Array(
    'single',
    'edit',
    'favorites',
    'trash',
    'configs',
    'about'
  );

  switch (view) {
    case "home":
      hastopNavbar(listViews)
      $('#filter-tabs').remove()
      filterVagas();
      homeContainer();
      homeView(vagas);
      break;

    case "insights":
      insightsView();
      createLineChart('behaviorChart');
      createBarChart('categoriaChart', 'Aplicações', configs.get_categories(), setCategoriesChartValues(vagas, configs));
      createBarChart('statusChart', 'Aplicações', configs.get_status(), setStatusChartValues(vagas, configs));
      createBarChart('portalChart', 'Aplicações', configs.get_portals(), setPortalsChartValues(vagas, configs));
      // createBarChart('testeChart', 'Aplicações', configs.get_categories(), setCategoriesChartValues(vagas, configs));
      break;

    case "single":
      singleTopNavbar(view);
      add_single_topbar_events(vaga.id, vaga.is_favorite)
      $("#content").html(singleView(vaga));
      add_single_events(vaga);
      descricao(vaga.id);
      formatDate(vaga.dataaplicacao, $(".data-aplicacao"));
      vaga.dataretorno == ""
        ? false
        : formatDate(vaga.dataretorno, $(".data-retorno"));
      break;

    case "new":
      hastopNavbar(listViews);
      $('#filter-tabs').remove()
      $("#content").html(newVaga());
      addNewVaga();
      break;

    case "edit":
      singleTopNavbar(view);
      add_single_topbar_events(vaga.id, vaga.is_favorite)
      $("#content").html(edit(vaga));
      add_edit_event(vaga);
      break;

    case "favorites":
      singleTopNavbar(view);
      add_single_topbar_events(vaga.id, vaga.is_favorite)
      $("#content").html(favoritesView());
      favoriteItems();
      break;

    case "trash":
      singleTopNavbar(view);
      add_single_topbar_events(vaga.id, vaga.is_favorite)
      $("#content").html(trashView());
      $("#empty-trash").click(() => {
        let trashcan = new TrashCan();
        trashcan.empty();
      });
      trashItems();
      break;

    case "about":
      singleTopNavbar(view);
      add_single_topbar_events(vaga.id, vaga.is_favorite)
      aboutContainer();
      $("#content").html(aboutView());
      break;

    case "configs":
      singleTopNavbar(view);
      add_single_topbar_events(vaga.id, vaga.is_favorite)
      configsContainer();
      $("#content").html(configsView());
      break;

    default:
      break;
  }
}

function hastopNavbar(listViews = Array()) {
  listViews.forEach(view => {
    if (lastActions.includes(view) || lastActions[0] == 'home') {
      topNavbar();
    }
  })
}

let lastActions = Array('home');

export function setReferer(lastActions = Array(), viewName = String) {
  if (lastActions.length <= 1 && lastActions[0] != viewName) {
    lastActions.push(viewName)
  } else if (viewExists(lastActions, viewName)) {
    lastActions[0] == viewName;
  } else if (lastActions.length == 2 && !viewExists(lastActions, viewName)) {
    lastActions.shift()
    lastActions.push(viewName)
  }

  return lastActions;
}

function viewExists(lastActions = Array(), viewName = String) {
  let exists = false;
  lastActions[0] == viewName == viewName || lastActions[1] == viewName ? exists = true : exists = false;
  return exists;
}

export function goBack(lastActions = Array()) {
  let lastAction = lastActions[0];
  return lastAction;
}

export { lastActions };
