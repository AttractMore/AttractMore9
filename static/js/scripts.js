import DarkModeToggle from "./dark-mode-toggle.js";
const elements = [...document.querySelectorAll('[data-behaviour="dark-mode-toggle"]')];
elements.forEach((el) => new DarkModeToggle(el));

/**
  @ description - Set target=_blank on all external links
*/
let links = body.getElementsByTagName("a");

for (var i = 0, linksLength = links.length; i < linksLength; i++) {
  if (links[i].hostname != window.location.hostname) {
    links[i].target = "_blank";
    links[i].rel = "noopener";
  }
}
