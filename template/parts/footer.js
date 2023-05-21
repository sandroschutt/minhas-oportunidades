import { render } from "../scripts/render.js";

let footer = `
<footer>
    <div class="navbar">
      <div class="text-center" id="home">
        <img src="./resources/icons/home-svgrepo-com.svg" alt="navbar home" />
      </div>

      <div class="text-center">
        <img
          src="./resources/icons/bar-chart-5-svgrepo-com.svg"
          alt="navbar insights"
        />
      </div>

      <div class="text-center" id="new">
        <img
          src="./resources/icons/add-square-svgrepo-com.svg"
          alt="navbar home"
        />
      </div>

      <div class="text-center">
        <img
          src="./resources/icons/bookmark-svgrepo-com.svg"
          alt="navbar fast add"
        />
      </div>

      <div class="text-center">
        <img
          src="./resources/icons/link-3-svgrepo-com.svg"
          alt="navbar link add"
        />
      </div>
    </div>
  </footer>
`;

$('html').append(footer)

$('#home').click(() => {
  render('home')
})

$('#new').click(() => {
  render('new')
})