import Vagas from "../classes/Vagas.js";

let has_data = false;
localStorage.getItem("config") == null || localStorage.getItem("vagas") == null
  ? (has_data = false)
  : (has_data = true);

if (!has_data) {
  create_local_json_config();
  create_local_json_vagas();
} else {
  update_old_vagas();
}

async function create_local_json_vagas() {
  let vagas = get_model("vagas");

  localStorage.setItem("vagas", JSON.stringify(await vagas));

  window.location.reload();
}

async function create_local_json_config() {
  let config = get_model("config");

  localStorage.setItem("config", JSON.stringify(await config));

  window.location.reload();
}

async function get_model(model) {
  let fetchModel = await fetch(`./src/data/${model}/${model}.json`);

  let final_model = await fetchModel.json();

  return await final_model;
}

// atualiza as vagas com mais de 75 dias de aplicação para encerradas
function update_old_vagas() {
  try {
    let getVagasToUpdate = new Vagas();
    let vagasToUpdate = getVagasToUpdate.get_vagas().vagas;

    vagasToUpdate.forEach((vaga) => {
      if (get_vaga_application_time(vaga.dataaplicacao) && vaga.status == "aplicado") {
        vaga.status = "vaga-encerrada";
      }
    });

    // getVagasToUpdate.update(JSON.stringify(vagasToUpdate));
  } catch (error) {
    console.log(error)
  }
}

function get_vaga_application_time(dateString) {
  // Parse the input date string
  const inputDate = new Date(dateString);

  // Get the current date
  const currentDate = new Date();

  // Calculate the difference in milliseconds between the two dates
  const timeDifference = inputDate - currentDate;

  // Calculate the number of days
  const daysDifference = Math.abs(timeDifference / (1000 * 60 * 60 * 24));

  // Check if the input date is greater than or equal to 75 days from the current date
  return daysDifference >= 75;
}
