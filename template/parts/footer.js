import { render, setReferer, lastActions } from "../../app/render.js";

let navbar = `
<footer>
    <div class="navbar">
      <div class="text-center" id="home">
        <img src="./resources/icons/home-svgrepo-com.svg" alt="navbar home" />
      </div>

      <div class="text-center" id="insights">
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
          src="./resources/icons/link-3-svgrepo-com.svg"
          alt="navbar link add"
        />
      </div>
    </div>
  </footer>
`;

$('html').append(navbar)

$('#home').click(() => {
  render('home')
  let previousViews = setReferer(lastActions, 'home')
})

$('#insights').click(() => {
  render('insights');
})

$('#new').click(() => {
  render('new')
  let previousViews = setReferer(lastActions, 'new');
})