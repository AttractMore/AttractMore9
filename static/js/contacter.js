import * as contact from "../functions/contact.js";

/**
 * Submit form using Cloudflare function
 */
const enquiryForm = document.getElementById("enquiryform");
enquiryForm.addEventListener("submit", contact);
