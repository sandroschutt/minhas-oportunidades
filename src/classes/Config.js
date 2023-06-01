export class Config {
    get() {
        let configs = localStorage.getItem("config");
        configs = JSON.parse(configs);
        return configs;
    }

    set_theme(value = String) {
        let configs = this.get();
        configs.theme = value;
        localStorage.setItem("config", JSON.stringify(configs));
        window.location.reload();
    }

    get_categories() {
        let configs = this.get();
        let categories = configs.categorias;
        return categories;
    }

    get_portals() {
        let configs = this.get();
        let portals = configs.portais;
        return portals;
    }
}