import { selectOptionThemeColor } from "../../app/Controllers/ConfigController.js";

let bgColor = selectOptionThemeColor();

export function edit(vaga) {
  let edit = `
    <div id="header">
        <p>Editando /</p>
        <h2>${vaga.nome}</h2>
    </div>

  <form id="view-container">
  <div class="">
    <label for="edit-nome" class="">Nome:</label>
    <input type="text" class="" id="edit-nome" value="${vaga.nome}">
  </div>

  <div class="form-group">
    <label for="edit-empresa" class="">Empresa:</label>
    <input type="text" class="" id="edit-empresa" value="${vaga.empresa}">
  </div>

  <div class="">
    <label for="edit-portal" class="">Portal:</label>
    <select class="" id="edit-portal">
      <option style="background-color: ${bgColor}" value="${vaga.portal}" selected hidden>${vaga.portal}</option>
      <option style="background-color: ${bgColor}" value="linkedin">linkedin</option>
      <option style="background-color: ${bgColor}" value="gupy">gupy</option>
      <option style="background-color: ${bgColor}" value="jobs">jobs</option>
      <option style="background-color: ${bgColor}" value="quikin">quikin</option>
      <option style="background-color: ${bgColor}" value="e-mail">e-mail</option>
      <option style="background-color: ${bgColor}" value="outros">outros</option>
    </select>
  </div>

  <div class="">
    <label for="edit-url" class="">URL:</label>
    <input type="text" class="" id="edit-url" value="${vaga.url}">
  </div>

  <div class="">
    <label for="edit-descricao" class="">Descricao:</label>
    <textarea class="" id="edit-descricao">${vaga.descricao}</textarea>
  </div>

  <div class="">
    <label for="edit-categoria" class="">Categoria:</label>
    <select class="" id="edit-categoria"  >
      <option style="background-color: ${bgColor}" value="${vaga.categoria}" selected hidden>${vaga.categoria}</option>
      <option style="background-color: ${bgColor}" value="front-end">front-end</option>
      <option style="background-color: ${bgColor}" value="back-end">back-end</option>
      <option style="background-color: ${bgColor}" value="fullstack">fullstack</option>
      <option style="background-color: ${bgColor}" value="wordpress">wordpress</option>
      <option style="background-color: ${bgColor}" value="web">web</option>
      <option style="background-color: ${bgColor}" value="outros">outros</option>
    </select>
  </div>

  <!--  //IMPLEMENTAR SISTEMA DE TAGS AQUI
  <div class="">
    <label for="especialidade" class="">Especialidade:</label>
    <input type="text" class="" id="edit-especialidade" value="${vaga.especialdade}">
  </div>
  -->

  <div class="">
    <label for="edit-data-aplicacao" class="">Data de aplicação:</label>
    <input
      class=""
      type="date"
      placeholder="dd-mm-yyyy"
      min="1999-01-01"
      value="${vaga.dataaplicacao}"
      id="edit-data-aplicacao"
    />
  </div>

  <div class="">
    <label for="edit-data-retorno" class="">Data de retorno:</label>
    <input
      class=""
      type="date"
      placeholder="dd-mm-yyyy"
      id="edit-data-retorno"
      value="${vaga.dataretorno}"
    />
  </div>

  <div class="">
    <label for="edit-status" class="">Status:</label>
    <select class="" name="status" id="edit-status">
      <option style="background-color: ${bgColor}" value="${vaga.status}" selected hidden>${vaga.status}</option>
      <option style="background-color: ${bgColor}" value="salva">Salva</option>
      <option style="background-color: ${bgColor}" value="aplicado">Aplicado</option>
      <option style="background-color: ${bgColor}" value="fit-cultural">Fit cultural</option>
<<<<<<< HEAD
      <option style="background-color: ${bgColor}" value="exame-tecnico">Teste técnico</option>
=======
      <option style="background-color: ${bgColor}" value="teste">Teste técnico</option>
>>>>>>> development
      <option style="background-color: ${bgColor}" value="entrevista">Entrevista</option>
      <option style="background-color: ${bgColor}" value="reprovado">Reprovado</option>
      <option style="background-color: ${bgColor}" value="aprovado">Aprovado</option>
      <option style="background-color: ${bgColor}" value="vaga-encerrada">Vaga encerrada</option>
    </select>
  </div>

  <button type="button" id="editar-vaga"class="btn btn-dark border border-secondary py-2 px-3">Salvar</button>
</form>
    `;

  return edit;
}
