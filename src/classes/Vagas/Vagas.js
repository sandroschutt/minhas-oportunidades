export class Vagas {
    async get_model(model) {
        let fetchModel = await fetch(`./src/data/vagas/${model}.json`);
        let final_model = await fetchModel.json();

        return await final_model;
    }
}