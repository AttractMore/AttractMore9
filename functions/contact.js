export async function onRequestPost(context) {
  return await submitHandler(context);
}

async function submitHandler(context) {
  const body = await context.request.formData();

  const { name, email, message, consent } = Object.fromEntries(body);

  const reqBody = {
    fields: {
      "Name": name,
      "Email": email,
      "Message": message,
      "Consent": consent,
    },
  };

  return handleFormData({ body: reqBody, context: context });
}
const handleFormData = async function onRequest({ body, context }) {
  console.log("Name = " + body.fields.Name);
  console.log("Email = " + body.fields.Email);
  console.log("Message = " + body.fields.Message);
  console.log("Consent = " + body.fields.Consent);

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
        <p>Name: ${body.fields.name}</p>
        <p>Email: ${body.fields.email}</p>
        <p>Phone: ${body.fields.message}</p>
        <p>Message: ${body.fields.consent}</p>
      </body>
    </html>
      `,
    }),
  });
  let replyBody;
  if (response.ok) {
    console.log("Message sent successfully");
    return Response.redirect("https://attractmore9.pages.dev/thanks/");
  } else {
    console.error(response.status, response.statusText);
    replyBody = { "success": false, "message": response.statusText };
    return new Response(JSON.stringify(replyBody), {
      headers: corsHeaders,
      status: response.status,
    });
  }
};
