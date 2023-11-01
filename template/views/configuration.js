export function configsContainer() {
    let configsContainer = `
      <div id="list-mobile">
        
      </div>
      `;

    $("#content").html(configsContainer);
}

export function configsView() {
    let configs = `
        <div id="header" class="single" style="margin-bottom: 15%;">
            <h2 style="margin-bottom: 0;"><strong>Configurações</strong></h2>
        </div>
    `;

    return configs;
}