import Vagas from "../../src/classes/Vagas.js";
import {
  applicationResponses,
  statusChange,
  getDaysDifference,
  weeklyAverage,
  monthlyAverage,
} from "../../app/Controllers/InsightsController.js";
let vagas = new Vagas().get_vagas();
const total = new Vagas().get_vagas().length;

const dailyAverage = total / getDaysDifference();

export function insightsView() {
  const insights = `
    <div id="insights-container">
        <section id="complementares">
            <div class="row d-flex">
                <h3>Informações complementares</h3>
            </div>
            <div class="row d-flex">
                <div class="col-sm-12 col-md-6 col-lg-5">
                    <div class="row border border-success ap-responses">
                        <div class="col col-sm-3 col-md-3 col-lg-1 text-success percentage">
                            <p>${applicationResponses(
                              vagas,
                              total
                            )}<span>%</span></p>
                        </div>
                        <div class="col col-sm-9 col-md-7 col-lg-8 text-success description">
                            <h5><strong>Taxa de retorno</strong></h5>
                            <span>${applicationResponses(
                              vagas,
                              total
                            )}% das suas canidaturas deram retorno</span>
                        </div>
                    </div>
                </div>

                <div class="col-sm-12 col-md-6 col-lg-5">
                    <div class="row border border-warning ap-status">
                        <div class="col col-sm-3 col-md-3 col-lg-1 text-warning percentage">
                            <p>${statusChange(vagas, total)}<span>%</span></p>
                        </div>
                        <div class="col col-sm-9 col-md-7 col-lg-8 text-warning description">
                            <h5><strong>Status</strong></h5>
                            <span>${statusChange(
                              vagas,
                              total
                            )}% das suas candidaturas mudaram de status</span>
                        </col>
                    </div>
                </div>
            </div>
        </section>

        <section id="status">
            <h3>Status(%)</h3>
            <canvas id="statusChart" height="${
              window.screen.width < 1000 ? 300 : false
            }"></canvas>
        </section>

        <section id="categorias">
            <div class="row d-flex">
                <h3 class="w-100">Categorias</h3>
                <canvas id="categoriaChart" height="${
                  window.screen.width < 1000 ? 300 : false
                }"></canvas>
            </div>
        </section>

        <section id="portais">
            <h3>Portais</h3>
            <canvas id="portalChart" height="${
              window.screen.width < 1000 ? 300 : false
            }"></canvas>
        </section>

        <!--
        <section id="tags">
            <h3>Tags</h3>
            <canvas id="testeChart" height="${
              window.screen.width < 1000 ? 300 : false
            }"></canvas>
        </section>
        -->

        <section id="comportamento">
            <div class="row">
                <h3 class="w-100">Seu comportamento</h3>
                <div>
                    <p>
                        Confira seu conportamento em relacção à aplicação de vagas durante a semana
                    </p>
                </div>
            </div>
            <div class="row d-flex chart">
                <canvas id="behaviorChart" height="${
                  window.screen.width < 1000 ? 300 : false
                }"></canvas>
            </div>

            <div class="my-5" id="medias">
                <h3 class="mb-5">Média de aplicações</h3>
                <div class="row d-flex">
                    <div class="col-xl-3 col-lg-3 col-md-4 col-sm-4" style="max-width: 30%;">
                        <p class="media-category">Diária:</p>
                        <p class="media-value text-center">${dailyAverage.toFixed(2)}<span>/dia</span></p>
                    </div>
                    <div class="col-xl-3 col-lg-3 col-md-4 col-sm-4" style="max-width: 30%;">
                        <p class="media-category">Semanal:</p>
                        <p class="media-value text-center">${weeklyAverage()}<span>/semana</span></p>
                    </div>
                    <div class="col-xl-3 col-lg-3 col-md-4 col-sm-4" style="max-width: 30%;">
                        <p class="media-category">Mensal:</p>
                        <p class="media-value text-center">${monthlyAverage()}<span>/mês</span></p>
                    </div>
                </div>
            </div>
        </section>
    </div>
  `;

  $("#content").html(insights);
  $("#filter-tabs").remove();
}
