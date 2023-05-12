let toolbar = `
    <div class="col-md-3 col-lg-2 border boder-dark" id="toolbar-vagas">
        <div class="row d-flex text-center">
            <div class="col border boder-dark m-3 py-0 px-0"onclick="addNovaVaga()">+</div>
            <div class="col border boder-dark m-3 py-0 px-0">>></div>
            <div class="col border boder-dark m-3 py-0 px-0">[ / ]</div>
            <div class="col border boder-dark m-3 py-0 px-0">x</div>
        </div>
    </div>
    <div class="col-2 border boder-dark" id="toolbar-funcoes"></div>
    <div class="col-2 border boder-dark" id="toolbar-insights"></div>
`;

$('#toolbar').html(toolbar);