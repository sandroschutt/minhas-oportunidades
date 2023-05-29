import { Vagas } from "../../src/classes/Vagas.js";
import { novaVaga } from "./home.js";

export const favoritos = new Vagas().get_favorites();

export function favoritesContainer() {
  let favoritesContainer = `
      <div id="list-mobile">
        <div id="accordion">
        </div>
      </div>
      `;

  $("#content").append(favoritesContainer);
}

export function favoritesView() {
  let favoritesHeader = `
        <div id="header" class="single" style="margin-bottom: 15%;">
            <h2 style="margin-bottom: 0;"><strong>Favoritos</strong></h2>
            <span class="mr-2 text-secondary">${favoritos.length} favoritos</span>
        </div>
    `;

  return favoritesHeader;
}

export function favoriteItems() {
  favoritesContainer();

  favoritos.forEach((favorito) => {
    novaVaga(favorito);
  });
}
