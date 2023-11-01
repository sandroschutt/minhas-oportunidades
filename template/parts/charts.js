import Vagas from "../../src/classes/Vagas.js";
import { getWeekdays, setLineChartValues, setCategoriesChartValues, setPortalsChartValues } from "../../app/Controllers/InsightsController.js";

<<<<<<< HEAD
const vagas = new Vagas().get_vagas();
=======
const vagas = new Vagas().get_vagas().vagas;
>>>>>>> development

export function createLineChart(chartName = String) {
  $(document).ready(function () {
    const ctx = document.getElementById(chartName);

    new Chart(ctx, {
      type: "line",
      data: {
        labels: getWeekdays(),
        datasets: [
          {
            data: setLineChartValues(vagas),
            label: "Aplicações",
            borderColor: "#3cba9f",
            fill: true,
          },
        ],
      },
      options: {
        title: {
          display: true,
          text: "Chart JS Line Chart Example",
        },
      },
    });
  });
}

export function createBarChart(chartName = String, label = String, labels = Array, data = Array) {
  $(document).ready(function () {
    const ctx = document.getElementById(chartName);

    new Chart(ctx, {
      type: "bar",
      data: {
        labels: labels,
        datasets: [
          {
            label: label,
            data: data,
            backgroundColor: "#3cba9f",
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  });
}

export { setCategoriesChartValues, setPortalsChartValues };

