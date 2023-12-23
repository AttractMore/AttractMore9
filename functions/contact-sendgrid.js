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
handleFormData = await fetch(context.env.ZOHO_WEBHOOK, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    subject: "Noel Voice Contact Form",
    message: `
    <html>
    <body>
      <p>Name: ${body.fields.name}</p>
      <p>Email: ${body.fields.email}}</p>
      <p>Phone:${body.fields.message}}</p>
      <p>Message: ${body.fields.consent}}</p>
    </body>
  </html>
    `,
  }),
});
