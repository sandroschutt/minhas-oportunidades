// A ESTRUTURA ESTÁ CERTA, MAS ESSES DADOS PRECISAM VIR DO LOCAL STORAGE

getHomePageData();

async function getHomePageData() {
  let dummyData = await fetch("../../src/data/vagas/vagas.json");
  let data = await dummyData.json();

//   console.log(data)

  createHomePage(await data);
}

async function createHomePage(data) {
    vagas = data.vagas;
    vaga = vagas.vaga_0

  const tableHead = `
    <table>
        <thead class="border border-dark">
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
                Data-ret
            </th>
            <th class="border border-dark">
                Status
            </th>
            <th class="border border-dark">
                E-mail
            </th>
        </thead>
        `;

    let tableBody = 
        `<tbody class="border border-dark">
            <tr>
                <td class="border border-dark col">
                    ${vaga.nome}
                </td>
                <td class="border border-dark col">
                    ${vaga.empresa}
                </td>
                <td class="border border-dark col">
                    ${vaga.portal}
                </td>
                <td class="border border-dark col">
                    ${vaga.categoria}
                </td>
                <td class="border border-dark col">
                    ${vaga.dataaplicacao}
                </td>
                <td class="border border-dark col">
                    ${vaga.dataretorno}
                </td>
                <td class="border border-dark col">
                    ${vaga.status}
                </td>
                <td class="border border-dark col">
                    ${vaga.email}
                </td>
            </tr>
        </tbody>
    </table>
`;

  $("#content").html(tableHead + tableBody);
}
