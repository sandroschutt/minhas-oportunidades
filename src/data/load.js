import {Vagas} from '../classes/Vagas/Vagas.js';

localStorage.getItem('vagas') == null ? create_local_json_vagas() : false;

async function create_local_json_vagas() {
  let vagas = new Vagas();
  vagas = vagas.get_model('vagas');

  let favoritos = { "favs" : [] }
  let lixeira = { "lixo" : [] }
  
  localStorage.setItem("vagas", JSON.stringify(await vagas));
  localStorage.setItem("lixeira", JSON.stringify(lixeira));
}
