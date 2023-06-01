import { Config } from "../../src/classes/Config.js";
import Vagas from "../../src/classes/Vagas.js";

const confgs = new Config();

export function countStatus(vagas = Array) {
  let status = {
    todas: 0,
    aplicado: 0,
    fit_cultural: 0,
    entrevista: 0,
    teste: 0,
    reprovado: 0,
    aprovado: 0,
  };

  for (const vaga of vagas) {
    switch (vaga.status) {
      case "aplicado":
        status.aplicado++
        status.todas++
        break;
      case "fit-cultural":
        status.fit_cultural++
        status.todas++
        break;
      case "entrevista":
        status.entrevista++
        status.todas++
        break;
      case "exame-tecnico":
        status.teste++
        status.todas++
        break;
      case "aprovado":
        status.aprovado++
        status.todas++
        break;
      case "reprovado":
        status.reprovado++
        status.todas++
        break;
    }
  }

  return status;
}

export function statusPercentage(status = Object.JSON, total = Int) {
  let percentage = null;
  percentage = Math.floor((status * 100)/ total)
  return percentage;
}

export function applicationResponses(vagas = Array, total = Int) {
  let responses = vagas.filter(vaga => vaga.dataretorno)
  let responsePercentage = Math.floor((responses.length * 100) / total)
  return responsePercentage;
}

export function statusChange(vagas = Array, total = Int) {
  let status = vagas.filter(vaga => vaga.status != 'aplicado');
  let statusChangePercentage = Math.floor((status.length * 100) / total);
  return statusChangePercentage;
}

function getLastSevenDays() {
  const dates = [];
  const today = new Date(); // Get the current date

  for (let i = 6; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(today.getDate() - i); // Subtract days from the current date

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Month is zero-indexed, so we add 1
    const day = String(date.getDate()).padStart(2, "0");

    const formattedDate = `${year}-${month}-${day}`;
    dates.push(formattedDate); // Push the formatted date to the array
  }

  return dates;
}

export function getWeekdays() {
  const weekdays = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];
  const lastSevenDays = getLastSevenDays();
  const portugueseWeekdays = [];

  for (let i = 0; i < lastSevenDays.length; i++) {
    const date = new Date(lastSevenDays[i]);
    const weekdayIndex = date.getDay();
    const portugueseWeekday = weekdays[weekdayIndex];
    portugueseWeekdays.push(portugueseWeekday);
  }

  return portugueseWeekdays;
}

export function setLineChartValues(vagas = Array) {
  let lastWeek = getLastSevenDays();

  let chartValues = [
    [lastWeek[0], 0],
    [lastWeek[1], 0],
    [lastWeek[2], 0],
    [lastWeek[3], 0],
    [lastWeek[4], 0],
    [lastWeek[5], 0],
    [lastWeek[6], 0],
  ];

  let lastWeekAppliances = vagas.filter((vaga) =>
    lastWeek.includes(vaga.dataaplicacao)
  );
  lastWeekAppliances = lastWeekAppliances.map(
    (vaga) => (vaga = vaga.dataaplicacao)
  );

  chartValues.forEach((value, index) => {
    for (let appliance of lastWeekAppliances) {
      if (appliance == value[0]) {
        value[1] += 1;
      }
    }
  });

  chartValues = chartValues.map((value) => (value = value[1]));

  return chartValues;
}

export function setCategoriesChartValues(vagas = Array, configs) {
  let categories = configs.get_categories()
  categories = categories.map(category => category = [category, 0]);
  
  categories.forEach((category) => {
    for (let vaga of vagas) {
      if (category[0] == vaga.categoria) {
        category[1] += 1;
      }
    }
  });

  categories = categories.map((category) => (category = category[1]));

  return categories;
}

export function setPortalsChartValues(vagas = Array, configs) {
  let portals = configs.get_portals()
  portals = portals.map(portal => portal = [portal, 0]);
  
  portals.forEach((portal) => {
    for (let vaga of vagas) {
      if (portal[0] == vaga.portal) {
        portal[1] += 1;
      }
    }
  });

  portals = portals.map((portal) => (portal = portal[1]));

  return portals;
}

