import Vagas from "../../src/classes/Vagas.js";
import { countStatus, statusPercentage, applicationResponses, statusChange } from "../../app/Controllers/InsightsController.js";

let vagas = new Vagas().get_vagas();
const status = countStatus(vagas)
const total = status.todas;

export function insightsView() {
  const insights = `
    <div id="insights-container">
        <section id="insights-status">
            <div class="row d-flex">
                <h3>Status (%)</h3>
            </div>
            <div class="row d-flex">
                <div class="col col-sm-4 bg-transparent border border-primary text-primary">
                    <p>${statusPercentage(status.aplicado, status.todas)}</p>
                    <span>aplicada</span>
                </div>
                <div class="col col-sm-4 bg-transparent border border-secondary text-secondary">
                    <p>${statusPercentage(status.fit_cultural, status.todas)}</p>
                    <span>fit cultural</span>
                </div>
                <div class="col col-sm-4 bg-transparent border border-info text-info">
                    <p>${statusPercentage(status.entrevista, status.todas)}</p>
                    <span>entrevista</span>
                </div>
            </div>
            <div class="row d-fle">
                <div class="col col-sm-4 bg-transparent border border-warning text-warning">
                    <p>${statusPercentage(status.teste, status.todas)}</p>
                    <span>teste</span>
                </div>
                <div class="col col-sm-4 bg-transparent border border-danger text-danger">
                    <p>${statusPercentage(status.reprovado, status.todas)}</p>
                    <span>reprovado</span>
                </div>
                <div class="col col-sm-4 bg-success bg-transparent border border-success text-success">
                    <p>${statusPercentage(status.aprovado, status.todas)}</p>
                    <span>aprovado</span>
                </div>
            </div>
        </section>

        <section id="complementares">
            <div class="row d-flex">
                <h3>Informações complementares</h3>
            </div>
            <div class="row border border-success">
                <div class="col col-sm-3 text-success percentage">
                    <p>${applicationResponses(vagas, total)}<span>%</span></p>
                </div>
                <div class="col col-sm-9 text-success description">
                    <h5><strong>Taxa de retorno</strong></h5>
                    <span>${applicationResponses(vagas, total)}% das suas canidaturas deram retorno</span>
                </div>
            </div>

            <div class="row border border-warning">
                <div class="col col-sm-3 text-warning percentage">
                    <p>${statusChange(vagas, total)}<span>%</span></p>
                </div>
                <div class="col col-sm-9 text-warning description">
                    <h5><strong>Status</strong></h5>
                    <span>${statusChange(vagas, total)}% das suas candidaturas mudaram de status</span>
                </col>
            </div>
        </section>

        <section id="categorias">
            <div class="row d-flex">
                <h3>Categorias (%)</h3>
                <canvas id="categoriaChart" height="${window.screen.width < 1000 ? 300 : false }"></canvas>
            </div>
        </section>

        <section id="portais">
            <h3>Portais</h3>
            <canvas id="portalChart" height="${window.screen.width < 1000 ? 300 : false }"></canvas>
        </section>

        <section id="comportamento">
            <div class="row d-flex">
                <h3>Seu comportamento</h3>
                <p>
                    Confira seu conportamento em relacção à aplicação de vagas durante a semana
                </p>
            </div>
            <div class="row d-flex chart">
                <canvas id="behaviorChart" height="${window.screen.width < 1000 ? 300 : false }"></canvas>
            </div>
        </section>
    </div>
  `;

  $("#content").html(insights);
  $("#filter-tabs").remove();
}
