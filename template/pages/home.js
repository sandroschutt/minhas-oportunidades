import { Vagas } from "../../src/classes/Vagas/Vagas.js";

let minhas_vagas = new Vagas().get_vagas();

createTableView(minhas_vagas);

$(document).ready(function () {
//   if (! $("#home").hasClass("selected")) {
    $("#home").click(() => {
      createTableView(minhas_vagas);
    });
//   }
});

function createTableView(minhas_vagas) {
  table();

  minhas_vagas.forEach((vaga) => {
    table_row(vaga);
  });
}

function table() {
  const table = `
    <table>
        <thead class="border border-dark">
            <th class="border border-dark">
                <input type="checkbox" data-checkall>
            </th>
            <th class="border border-dark">
                Nome da vaga
            </th>
            <th class="border border-dark">
                Empresa
            </th>
            <th class="border border-dark">
                Portal
            </th>
            <th class="border border-dark">
                Categoria
            </th>
            <th class="border border-dark">
                Data-apl
            </th>
            <th class="border border-dark">
                Status
            </th>
        </thead>
        <tbody class="border border-dark">
        </tbody>
        </table>
        `;

  $("#content").html(table);
}

function table_row(vaga) {
  let row = `
    <tr data-id="${vaga.id}">
        <td class="border border-dark">
            <input type="checkbox" data-check="" value="${vaga.id}">
        </td>     
        <td class="border border-dark">
            ${vaga.nome}
        </td>
        <td class="border border-dark">
            ${vaga.empresa}
        </td>
        <td class="border border-dark">
            <a href="#">${vaga.portal}</a>
        </td>
        <td class="border border-dark">
            ${vaga.categoria}
        </td>
        <td class="border border-dark">
            ${vaga.dataaplicacao}
        </td>
        <td class="border border-dark">
            ${vaga.status}
        </td>
    </tr>
`;

  $("tbody").append(row);
}

export { createTableView, table, table_row };
