import { Config } from "../../src/classes/Config.js";

export function theme(colorScheme = String) {
  switch (colorScheme) {
    case "light":
      $(document).ready(function () {
        $("body").addClass("bg-light");
        $("header").addClass("bg-light");
        $("#filter-tabs").addClass("bg-light");
        $("footer").addClass("bg-light");
      });
      break;
    case "dark":
      $(document).ready(function () {
        $("body").addClass("bg-dark");
        $("header").addClass("bg-dark");
        $("#filter-tabs").addClass("bg-dark");
        $("footer").addClass("bg-dark");
      });
      break;
  }
}

export function selectOptionThemeColor() {
  const theme = new Config().get_theme();
  let bgColor = null;
  theme == "light" ? (bgColor = "#fff") : (bgColor = "#000000");

  return bgColor;
}
