import { contact } from "../functions/contact.js";

function makeContact(event) {
  contact();
  event.preventDefault();
}

/**
 * Submit form using Cloudflare function
 */
const enquiryForm = document.getElementById("enquiryform");
enquiryForm.addEventListener("submit", makeContact);
