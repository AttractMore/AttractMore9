/**
 * @description sets up accordion for FAQs page and Sustainable web design page
 */
let acc = document.getElementsByClassName("faquestion");
let ans = document.getElementsByClassName("faqanswer");
let inlinks = document.querySelectorAll(".faqanswer a");
for (let j = 0, inlinksLength = inlinks.length; j < inlinksLength; j++) {
  inlinks[j].tabIndex = "-1";
}

let i;
for (i = 0; i < acc.length; i++) {
  acc[i].onclick = function () {
    "use strict";
    this.classList.toggle("selected");
    if (this.getElementsByTagName("button")[0].getAttribute("aria-expanded") === "true") {
      this.getElementsByTagName("button")[0].setAttribute("aria-expanded", "false");
    } else {
      this.getElementsByTagName("button")[0].setAttribute("aria-expanded", "true");
    }
    this.nextElementSibling.classList.toggle("displayed");
    let answerlinks = this.nextElementSibling.getElementsByTagName("a");
    for (let j = 0, answerlinksLength = answerlinks.length; j < answerlinksLength; j++) {
      if (this.nextElementSibling.classList.contains("displayed")) {
        answerlinks[j].tabIndex = "0";
      } else {
        answerlinks[j].tabIndex = "-1";
      }
    }
  };
}
