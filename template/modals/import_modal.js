import { Vagas } from "../../src/classes/Vagas.js";

let import_modal = `
<!-- Modal -->
<div class="modal fade" id="importModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content text-secondary">
      <div class="modal-header border border-0">
        <h5 class="modal-title" id="exampleModalLabel">Importar: </h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <input class="form-control p-0" type="file" id="fileInput" accept=".json">
      </div>
    </div>
  </div>
</div>
`;

$("#mo-content").append(import_modal);

const fileInput = document.getElementById('fileInput');

fileInput.addEventListener('change', (event) => {
  const file = event.target.files[0];

  const reader = new FileReader();
  reader.onload = (e) => {
    const contents = e.target.result;
    const jsonObject = JSON.parse(contents);
    if(confirm('A importação irá sobrescreve todos os seus dados. Tem certeza que deseja prosseguir?') == true){
        let vagas = new Vagas();
        vagas.update(jsonObject);
        window.location.reload;
    }
  };
  reader.readAsText(file);
});
