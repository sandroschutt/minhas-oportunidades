let topbar_navigation = `
<ul id="main-navigation-desktop" class="d-flex text-light pl-3">
    <li class="d-inline pr-3">
        <div class="btn-group">
            <h6 class=" dropdown-header text-light" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Arquivo</h6>
            <div class="dropdown-menu dropdown-menu-left text-light">
                <a
                class="dropdown-item"
                data-toggle="modal"
                data-target="#importModal">
                    Importar
                </a>
                <a
                class="dropdown-item"
                id="exportar"
                data-toggle="modal"
                data-target="#exportModal">
                    Exportar
                </a>
                <a class="dropdown-item">Configurações</a>
                <a class="dropdown-item">Sair</a>
            </div>
        </div>
    </li>
    <li class="d-inline pr-3">
        <div class="btn-group">
            <h6 class=" dropdown-header text-light" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Editar</h6>
            <div class="dropdown-menu dropdown-menu-left text-light">
                <a class="dropdown-item">Adicionar vaga</a>
                <a class="dropdown-item">Adicionar rápido</a>
                <a class="dropdown-item">Adicionar link</a>
                <a class="dropdown-item">Editar vaga</a>
                <a class="dropdown-item">Edição rápida</a>
                <a class="dropdown-item">Favoritar selecionadas</a>
                <a class="dropdown-item">Excluir selecionadas</a>
            </div>
        </div>
    </li>
    <li class="d-inline pr-3">
        <div class="btn-group">
            <h6 class=" dropdown-header text-light" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Sobre</h6>
            <div class="dropdown-menu dropdown-menu-left text-light">
                <a class="dropdown-item">Action</a>
                <a class="dropdown-item">Another action</a>
                <a class="dropdown-item">Something else here</a>
            </div>
        </div>
    </li>
</ul>
`;

$("nav").html(topbar_navigation);
