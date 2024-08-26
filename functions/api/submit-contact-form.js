/**
 * POST /api/submit-contact-form
 * @source https://sia.codes/posts/migrating-netlify-to-cloudflare/
 */
import { Resend } from "resend";

export async function onRequestPost(context) {
  try {
    let input = await context.request.formData();

    // Convert FormData to JSON
    // NOTE: Allows multiple values per key
    let output = {};
    for (let [key, value] of input) {
      let tmp = output[key];
      if (tmp === undefined) {
        output[key] = value;
      } else {
        output[key] = [].concat(tmp, value);
      }
    }
    // output: {
    //   name: 'Jane Doe',
    //   'contact-name': '',
    //   email: 'jane@doe.com',
    //   message: 'this is my message'
    const honeypot = output["contact-name"];
    // Return early with pretend confirmation if bot hit honeypot
    if (honeypot !== "") {
      return Response.redirect("https://attractmore.uk/thanks/", 303);
    }

    // Using text instead of email so that I don't need to sanitize it
    const resend = new Resend(context.env.RESEND_API_KEY);
    const { data, error } = await resend.emails.send({
      from: context.env.SENDER_EMAIL,
      reply_to: output.email,
      to: context.env.RECIPIENT_EMAIL,
      subject: `[ATTRACTMORE] Contact form request`,
      text: output.message,
    });
    console.log({ data, error });

    if (error) {
      return Response.redirect("https://attractmore.uk/404", 303);
    } else {
      return Response.redirect("https://attractmore.uk/thanks/", 303);
    }
  } catch (err) {
    return Response.redirect("https://attractmore.uk/404?error=json_parsing", 303);
  }
}
