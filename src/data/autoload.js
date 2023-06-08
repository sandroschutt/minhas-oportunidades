let has_data = false;
localStorage.getItem('config') == null || localStorage.getItem('vagas') == null ? has_data = false : has_data = true;

if(!has_data){
  create_local_json_config();
  create_local_json_vagas();
}

async function create_local_json_vagas() {
  let vagas = get_model('vagas');

  localStorage.setItem("vagas", JSON.stringify(await vagas));

  window.location.reload();
}

async function create_local_json_config() {
  let config = get_model('config');
  
  localStorage.setItem("config", JSON.stringify(await config));

  window.location.reload();
}

async function get_model(model) {
  let fetchModel = await fetch(`./src/data/${model}/${model}.json`);
  let final_model = await fetchModel.json()

  return await final_model;
}
