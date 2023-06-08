import { Config } from "../../src/classes/Config.js";
import Vagas from "../../src/classes/Vagas.js";

const confgs = new Config();
const vagas = new Vagas().get_vagas();
const firstAppliance = vagas.reverse()[0].dataaplicacao;

export function applicationResponses(vagas = Array, total = Int) {
  let responses = vagas.filter((vaga) => vaga.dataretorno);
  let responsePercentage = Math.floor((responses.length * 100) / total);
  return responsePercentage;
}

export function statusChange(vagas = Array, total = Int) {
  let status = vagas.filter((vaga) => vaga.status != "aplicado");
  let statusChangePercentage = Math.floor((status.length * 100) / total);
  return statusChangePercentage;
}

function getLastSevenDays() {
  const dates = [];
  const today = new Date(); // Get the current date

  for (let i = 5; i >= (-1); i--) {
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

  let chartValues = lastWeek.map((day) => (day = [day, 0]));

  let lastWeekAppliances = vagas.filter((vaga) =>
    lastWeek.includes(vaga.dataaplicacao)
  );
  lastWeekAppliances = lastWeekAppliances.map(
    (vaga) => (vaga = vaga.dataaplicacao)
  );

  chartValues.forEach((value) => {
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
  let categories = configs.get_categories();
  categories = categories.map((category) => (category = [category, 0]));

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

export function setStatusChartValues(vagas = Array, configs) {
  let status = configs.get_status();
  status = status.map((stat) => (stat = [stat, 0]));

  status.forEach((stat) => {
    for (let vaga of vagas) {
      if (stat[0] == vaga.status) {
        stat[1] += 1;
      }
    }
  });

  status = status.map((stat) => (stat = stat[1]));

  return status;
}

export function setPortalsChartValues(vagas = Array, configs) {
  let portals = configs.get_portals();
  portals = portals.map((portal) => (portal = [portal, 0]));

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

// calcula média de aplicações diária
export function getDaysDifference() {
  const givenDate = new Date(firstAppliance);
  const currentDate = new Date();

  // Calculate the time difference in milliseconds
  const timeDifference = currentDate.getTime() - givenDate.getTime();

  // Convert the time difference to days
  const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  return daysDifference;
}

function getWeekdaysInRange() {
  const currentDate = new Date();
  const weekdays = [];

  const givenDate = new Date(firstAppliance);

  while (givenDate <= currentDate) {
    const weekday = givenDate.getDay();

    if (weekday <= 6) {
      const formattedDate = givenDate.toISOString().split("T")[0];

      if (weekdays.length === 0 || weekday === 1) {
        weekdays.push([formattedDate]);
      } else {
        weekdays[weekdays.length - 1].push(formattedDate);
      }
    }

    givenDate.setDate(givenDate.getDate() + 1);
  }

  // console.log(weekdays);
  return weekdays;
}

export function weeklyAverage() {
  let weeks = getWeekdaysInRange();
  weeks = weeks.map((week) => (week = week.map((day) => day = searchAppliance(day))));
  weeks = weeks.map(week => week = week.reduce((partialSum, a) => partialSum + a, 0))
  let weeklyAverageNumber = (weeks.reduce((partialSum, a) => partialSum + a, 0)) / weeks.length;
  weeklyAverageNumber = weeklyAverageNumber.toFixed(2)

  return weeklyAverageNumber;
}

function getDaysInMonthsInRange() {
  const currentDate = new Date();
  const months = [];

  const givenDate = new Date(firstAppliance); // Replace with your desired start date

  while (givenDate <= currentDate) {
    const year = givenDate.getFullYear();
    const month = givenDate.getMonth();
    const lastDayOfMonth = new Date(year, month + 1, 0).getDate();
    const days = [];

    for (let day = givenDate.getDate(); day <= lastDayOfMonth; day++) {
      const currentDate = new Date(year, month, day);
      const formattedDate = currentDate.toISOString().split('T')[0];
      days.push(formattedDate);
    }

    months.push(days);
    givenDate.setMonth(givenDate.getMonth() + 1);
    givenDate.setDate(1); // Set the date to the beginning of the next month
  }

  console.log(months);
  return months;
}

export function monthlyAverage() {
  let months = getDaysInMonthsInRange();
  months = months.map((month) => (month = month.map((day) => day = searchAppliance(day))));
  months = months.map(month => month = month.reduce((partialSum, a) => partialSum + a, 0))
  let monthlyAverageNumber = (months.reduce((partialSum, a) => partialSum + a, 0)) / months.length;
  monthlyAverageNumber = monthlyAverageNumber.toFixed(2)

  return monthlyAverageNumber;
}

function searchAppliance(day) {
  let counter = 0;
  vagas.map(vaga => vaga.dataaplicacao == day ? counter+=1 : false)
  day = counter;

  return day;
}
