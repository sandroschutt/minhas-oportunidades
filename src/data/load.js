localStorage.getItem('vagas') == null ? create_local_json_vagas() : console.log('false');

async function create_local_json_vagas() {
  let vagas = new Vagas();
  vagas = vagas.get_model();
  
  localStorage.setItem("vagas", JSON.stringify(await vagas));
}
