import { render, lastActions, goBack } from "../../app/render.js";
import { Home } from "../../app/Controllers/HomeController.js";

export function singleTopNavbar(view) {
    let single_topnavbar = `
    <nav>
        <div id="fluid-navigation" class="row d-flex single">
            <div class="col-1">
                <!-- ícone -->
                <span class="menu-icon-outside" id="back">
                <i class="fa-solid fa-chevron-left"></i>
                </span>
            </div>
            <div class="col-11 text-right">
                    ${viewFunctions(view)}
            </div>
        </div>
    </nav>
`;

    $("#navigation-container").html(single_topnavbar);
}

function viewFunctions(view) {
    const single = `
    <div class="basic-actions">
        <span class="edit edit-23328"><i class="fa-solid fa-pen-to-square"></i></span>
        <span class="favorite favorite-23328" style="color: rgb(151, 154, 156);"><i class="fa-solid fa-star"></i></span>
        <span class="delete delete-23328"><i class="fa-solid fa-trash-can"></i></span>
    </div>
    `;

    const trash = `
    <div style="width: 100%;">
        <p id="empty-trash" class="empty-trash">Esvaziar lixeira</p>
    </div>
    `;

    const favorites = "";

    switch (view) {
        case "single":
            return single;
            break;
        case "trash":
            return trash;
            break;
        default:
            return favorites;
            break;
    }
}

export function add_single_topbar_events(id = String, is_favorite = String) {
    const home = new Home();
    const back = $('#back');

    back.click(() => {
        render(goBack(lastActions))
    })

    $('.edit').click(() => {
        home.edit(id)
    })

    favoriteIconColor(is_favorite);

    $('.favorite').click(() => {
        home.favorite(id);
        favoriteIconColor(is_favorite);
    })

    $('.delete').click(() => {
        home.delete(id);
    })
}

function favoriteIconColor(is_favorite = String) {
    let iconColor = null;
    is_favorite == "true" ? iconColor = 'yellow' : false;
    $('.favorite i').css('color', iconColor)
}
