import Vagas from '../../src/classes/Vagas/Vagas.js';

export class Toolbar {
  // CONJUNTO DE FUNÕES PARA AÇÕES EM MASSA
  init() {
    let vagas_selecionadas = Array();
    let vaga_selecionada = String;

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
    };

    // CRUD
    // Edit
    $('#edit').on('click', function(event) {
        event.preventDefault();

        // atribuir o evento abaixo à função do modal
        // capturar os dados do modal e passar para a vaga
        // let vaga = new Vagas();
        // vaga.edit(vaga_selecionada)
    })

    // Delete
    $('#delete').on('click', function(event) {
        event.preventDefault();
        let vaga = new Vagas();
        
        vagas_selecionadas.length > 1 ?
        vaga.bulk_delete(vagas_selecionadas) :
        vaga.delete(vaga_selecionada);
    })

    // META
    // favorite
    $('#favorite').on('click', (event) => {
        event.preventDefault();
        let vaga = new Vagas();

        vagas_selecionadas.length > 1 ?
        vaga.bulk_favorite(vagas_selecionadas) :
        vaga.favorite(vaga_selecionada);
    })
  }
}
