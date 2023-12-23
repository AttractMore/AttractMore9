export async function onRequestPost(context) {
  const body = await context.request.formData();

  const { name, email, message, consent } = Object.fromEntries(body);

  const response = await fetch(context.env.ZOHO_WEBHOOK, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      subject: "AM9 Website Contact Form",
      message: `
      <html>
      <body>
      <h1>Contact request from Attractmore website.</h1>
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Message: ${message}</p>
        <p>Consent: ${consent}</p>
      </body>
    </html>
      `,
    }),
  });
  let replyBody;
  if (response.ok) {
    return Response.redirect("https://attractmore9.pages.dev/thanks/");
  } else {
    console.error(response.status, response.statusText);
    replyBody = { "success": false, "message": response.statusText };
    return new Response(JSON.stringify(replyBody), {
      status: response.status,
    });
  }
}
