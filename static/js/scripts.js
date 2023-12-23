import DarkModeToggle from "./dark-mode-toggle.js";
const elements = [...document.querySelectorAll('[data-behaviour="dark-mode-toggle"]')];
elements.forEach((el) => new DarkModeToggle(el));

/**
 * @description - Set target=_blank on all external links
 */
const body = document.querySelector("body");
let links = body.getElementsByTagName("a");

for (var i = 0, linksLength = links.length; i < linksLength; i++) {
  if (links[i].hostname != window.location.hostname) {
    links[i].target = "_blank";
    links[i].rel = "noopener";
  }
}
/**
 * @description - Set up main navigation
 * @source - https://web.dev/articles/website-navigation
 */
const nav = document.querySelector(".site-head__nav");
const list = nav.querySelector("ul");
const burgerClone = document.querySelector("#burger-template").content.cloneNode(true);

const button = burgerClone.querySelector("button");
button.addEventListener("click", (e) => {
  const isOpen = button.getAttribute("aria-expanded") === "false";

  button.setAttribute("aria-expanded", isOpen);
  nav.setAttribute("aria-expanded", isOpen);
});

nav.addEventListener("keyup", (e) => {
  if (e.code === "Escape") {
    button.setAttribute("aria-expanded", false);
    nav.setAttribute("aria-expanded", false);
    button.focus();
  }
});

nav.insertBefore(burgerClone, list);
