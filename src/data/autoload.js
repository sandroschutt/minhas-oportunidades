import {Vagas} from '../classes/Vagas.js';

let has_data = false;
localStorage.getItem('vagas') == null ? has_data = false : has_data = true;

if(!has_data){
  create_local_json_vagas();
}

async function create_local_json_vagas() {
  let vagas = get_model('vagas');

  console.log(await vagas)
  
  localStorage.setItem("vagas", JSON.stringify(await vagas));

  window.location.reload();
}

async function get_model(model) {
  let fetchModel = await fetch(`./src/data/vagas/${model}.json`);
  let final_model = await fetchModel.json()

  return await final_model;
}
