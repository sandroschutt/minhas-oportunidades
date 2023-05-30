import { Vagas } from "../../src/classes/Vagas.js";

let export_modal = `
<!-- Modal -->
<div class="modal fade" id="exportModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content text-secondary">
      <div class="modal-header border border-0">
        <h5 class="modal-title" id="exampleModalLabel">Exportar: </h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form>
          <div class="form-group">
            <select id="exportar-opcoes" class="form-control-sm bg-dark border border-0">
                <option value="vagas">Vagas</option>
                <option value="config">Configurações</option>
            </select>
          </div>
          <button type="button" class="btn btn-dark py-0 px-2" data-dismiss="modal">Cancelar</button>
          <button type="button" class="btn btn-dark py-0 px-2" id="export-button">Exportar</button>
        </form>
      </div>
    </div>
  </div>
</div>
`;

$("#mo-content").append(export_modal);

$("#export-button").click(() => {
  if ($("#exportar-opcoes").val() == "vagas") {
    let today = new Date().toJSON().slice(0, 10);
    const vagas = new Vagas().get_vagas();
    const filename = `mo_bkp_${today}.json`;
    const jsonStr = JSON.stringify(vagas);

    let element = document.createElement("a");
    element.setAttribute(
      "href",
      "data:text/plain;charset=utf-8," + encodeURIComponent(jsonStr)
    );
    element.setAttribute("download", filename);

    element.style.display = "none";
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
  } else {
    alert("Funcionalidade em desenvolvimento...");
  }
});
