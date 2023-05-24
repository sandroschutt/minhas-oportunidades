import { render, setReferer, lastActions, goBack } from "../../app/render.js";

export function singleTopNavbar() {
    let single_topnavbar = `
    <nav>
    <div id="fluid-navigation" class="row d-flex">
    <div class="col-1">
        <!-- ícone -->
        <span class="menu-icon-outside" id="back">
        <i class="fa-solid fa-chevron-left"></i>
        </span>
    </div>
    <div class="col-11 text-right">
        <h4 class="text-light">options</h4>
    </div>
    </div>
    </nav>
`;

$("#navigation-container").html(single_topnavbar);

$(document).ready(function () {
    const back = $('#back');

    back.click(() => {
        render(goBack(lastActions))
    })
});
}
