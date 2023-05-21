export function singleView(vaga = Object.JSON) {
    let single = `
        <div id="header-edit" class="single">
            <h2><strong>Desenvolvedor de software</strong></h2>
            <div class="vaga-sub-header">
                <span>Empresa |</span>
                <span>Integral |</span>
                <span>Remoto</span>
            </div>

            <div class="vaga-info">
                <div class="info">
                    <span class="text-primary"><i class="fa-regular fa-circle text-primary"></i></span>
                    <span class="text-primary">Aplicado</span>
                    <span class="categoria rounded">categoria</span>
                </div>
                <div class="info">
                    <span class=""><i class="fa-solid fa-clock"></i></span>
                    <span class="grey">Aplicado em: 1 de janeiro de 1999</span>
                </div>
                <div class="info">
                    <span class=""><i class="fa-solid fa-calendar-days"></i></span>
                    <span class="grey">Concluída em: 31 de dezembro de 1999</span>    
                    <hr>
                </div>
            </div>
        </div>

        <div id="form-edit">
            <h3>Descrição</h3>
            <textarea disabled class="single-textarea">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</textarea>
        </div>
    `;

    return single;
}