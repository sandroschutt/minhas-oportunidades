import { Vagas } from '../../src/classes/Vagas.js';
import { render } from '../render.js';

export function get_edited_values() {
  let nome = $("#edit-nome").val();
  let empresa = $("#edit-empresa").val();
  let portal = $("#edit-portal").val();
  let url = $("#edit-url").val();
  let descricao = $("#edit-descricao").val();
  let categoria = $("#edit-categoria").val();
  let especialidade = $("#edit-especialidade").val();
  let dataaplicacao = $("#edit-data-aplicacao").val();
  let dataretorno = $("#edit-data-retorno").val();
  let status = $("#edit-status").val();

  let edited_values = {
    nome: nome,
    empresa: empresa,
    portal: portal,
    url: url,
    descricao: descricao,
    categoria: categoria,
    especialdade: especialidade,
    dataaplicacao: dataaplicacao,
    dataretorno: dataretorno,
    status: status,
  };

  return edited_values;
}

export function add_edit_event(vaga = Object.JSON) {
  $("#editar-vaga").click(() => {
    let vagas = new Vagas();
    let edited_values = get_edited_values();
    vagas.edit(vaga.id, edited_values);
    render('single', vaga.id);
  });
}
