export class Config {
    get() {
        let configs = localStorage.getItem("config");
        configs = JSON.parse(configs);
        return configs;
    }

    get_theme() {
        let configs = this.get();
        let theme = configs.theme
        return theme;
    }

    set_theme(value = String) {
        let configs = this.get();
        configs.theme = value;
        localStorage.setItem("config", JSON.stringify(configs));
        window.location.reload();
    }

    get_status() {
        let configs = this.get();
        let status = configs.status;
        return status;
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