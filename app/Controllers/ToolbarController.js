import {Vagas} from "../../src/classes/Vagas/Vagas.js";

export class Toolbar {
  // CONJUNTO DE FUNÕES PARA AÇÕES EM MASSA
  init() {
    let vaga_selecionada = String;
    let vagas_selecionadas = Array();

    // Adiciona evento às checkboxes
    let checkboxes = $("[data-check]");
    checkboxes.each(function (i) {
      $(this).on("click", function (event) {
        is_checked($(this))
          ? select_vaga($(this).val())
          : deselect_vaga($(this).val());
      });
    });

    // seleciona todas as checkboxes
    let check_all = $("[data-checkall]");
    check_all.on("click", () => {
      is_checked(check_all) ? select_all_vagas() : deselect_all_vagas();
    });

    const is_checked = function (checkbox) {
      let result;
      checkbox.is(":checked") ? (result = true) : (result = false);

      return result;
    };

    const select_vaga = function (checkbox) {
      vagas_selecionadas.push(checkbox);
      vaga_selecionada = checkbox;
      return vaga_selecionada;
    };

    const select_all_vagas = function () {
      $("[data-check]").each(function () {
        $(this).prop("checked", true);
        select_vaga($(this).val());
      });
    };

    const deselect_vaga = function (checkbox) {
      let index = vagas_selecionadas.indexOf(checkbox);
      vagas_selecionadas.splice(index, 1);
    };

    const deselect_all_vagas = function () {
      $("[data-check]").each(function () {
        $(this).prop("checked", false);
        deselect_vaga($(this).val());
      });
    };;

    // CRUD
    // Update
    $("#edit").on("click", function (event) {
      event.preventDefault();
      let vagas = new Vagas();
      let vaga = new Vagas().get_vaga(vaga_selecionada);

      $("#edit-nome").val(vaga.nome);
      $("#edit-empresa").val(vaga.empresa);
      $("#edit-portal").val(vaga.portal);
      $('#edit-url').val(vaga.url);
      $('#edit-descricao').val(vaga.descricao);
      $("#edit-categoria").val(vaga.categoria);
      $("#edit-data-aplicacao").val(vaga.dataaplicacao);
      $("#edit-data-retorno").val(vaga.dataretorno);
      $("#edit-status").val(vaga.status);

      $("#editar-vaga").click(() => {
        let edited_values = get_edited_values();
        vagas.edit(vaga.id, edited_values);
      });
    });

    const get_edited_values = () => {
      let nome = $("#edit-nome").val();
      let empresa = $("#edit-empresa").val();
      let portal = $("#edit-portal").val();
      // $('#edit-url').val();
      // $('#edit-descricao').val();
      let categoria = $("#edit-categoria").val();
      let dataaplicacao = $("#edit-data-aplicacao").val();
      let dataretorno = $("#edit-data-retorno").val();
      let status = $("#edit-status").val();

      let edited_values = {
        "nome" : nome,
        "empresa" : empresa,
        "portal" : portal,
        "categoria" : categoria,
        "dataaplicacao" : dataaplicacao,
        "dataretorno" : dataretorno,
        "status" : status
      };

      return edited_values;
    };

    // Delete
    $("#delete").on("click", function (event) {
      event.preventDefault();
      let vaga = new Vagas();

      vagas_selecionadas.length > 1
        ? vaga.bulk_delete(vagas_selecionadas)
        : vaga.delete(vaga_selecionada);
    });

    // META
    // favorite
    $("#favorite").on("click", (event) => {
      event.preventDefault();
      let vaga = new Vagas();

      vagas_selecionadas.length > 1
        ? vaga.bulk_favorite(vagas_selecionadas)
        : vaga.favorite(vaga_selecionada);
    });
  }
}
