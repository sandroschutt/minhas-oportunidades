import {Toolbar} from '../../app/Controllers/ToolbarController.js'

let toolbar = `
    <div class="col-md-2 col-lg-2" id="toolbar-vagas">
        <div class="row d-flex text-center">
            <a href="#" class="btn btn-dark mx-3 my-2 selected" id="home"><i class="fa-solid fa-house"></i></a>
            <a href="#" class="btn btn-dark mx-3 my-2" id="add"><i class="fa-solid fa-square-plus"></i></a>
            <a href="#" class="btn btn-dark mx-3 my-2" id="favorite"><i class="fa-solid fa-star"></i></a>
        </div>
    </div>

    <div class="col-2" id="toolbar-insights">
        <div class="row d-flex text-center">
            <a href="#" class="btn btn-dark mx-3 my-2"><i class="fa-solid fa-chart-simple"></i></a>
            <a href="#" class="btn btn-dark mx-3 my-2">#</a>
            <a href="#" class="btn btn-dark mx-3 my-2">#</a>
        </div>
    </div>

    <div class="col-8" id="toolbar-funcoes">
        <div class="row d-flex text-center">
            <button
            type="button"
            class="btn btn-dark mx-3 my-2"
            data-toggle="modal"
            data-target="#fastAddModal">
                <i class="fa-solid fa-forward"></i>
            </button>

            <button
            type="button"
            class="btn btn-dark mx-3 my-2"
            data-toggle="modal"
            data-target="#addLinkModal">
                <i class="fa-solid fa-link"></i>
            </button>
            <a href="#" class="btn btn-dark mx-3 my-2" id="favs"><i class="fa-solid fa-bookmark"></i></a>
            <button
            type="button"
            class="btn btn-dark mx-3 my-2"
            data-toggle="modal"
            data-target="#editModal"
            id="edit">
                <i class="fa-solid fa-pen-to-square"></i>
            </button>
            <a href="#" class="btn btn-dark mx-3 my-2" id="delete"><i class="fa-solid fa-trash"></i></a>
        </div>
    </div>
`;

$('#toolbar').html(toolbar)

const tb_functions = new Toolbar();
tb_functions.init();

