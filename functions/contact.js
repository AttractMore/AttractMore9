export async function onRequestPost(context) {
  return await submitHandler(context);
}

async function submitHandler(context) {
  const body = await context.request.formData();

  const { name, email, message, consent } = Object.fromEntries(body);

  const reqBody = {
    fields: {
      "Name": name,
      Email: email,
      Message: message,
      "Consent": consent,
    },
  };

  return handleFormData({ body: reqBody, context: context });
}

const handleFormData = async function onRequest({ body, context }) {
  const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Credentials": "true",
    "Access-Control-Allow-Headers": "Js-Auth-Key, Content-Type",
    "Content-Type": "application/json;charset=UTF-8",
    "Access-Control-Max-Age": "86400",
  };
  // console.log("body: " + JSON.parse(body));
  console.log("email fields: " + body.fields.email);
  const request = new Request("https://api.sendgrid.com/v3/mail/send");
  const response = await fetch(request, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${context.env.SG_API_KEY}`,
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      personalizations: [
        {
          to: [{ email: "roger@attractmore.co.uk" }],
        },
      ],
      from: {
        email: "emailsender.searched@simplelogin.com",
        name: "AttractMore Website",
      },
      reply_to: { email: body.email },
      subject: "Contact Form Submission from " + body.email,
      content: [
        {
          type: "text/plain",
          value: body.message + body.consent,
        },
      ],
    }),
  });

  let replyBody;
  if (response.ok) {
    replyBody = { "success": true, "message": "Message sent successfully" };
  } else {
    console.error(response.status, response.statusText);
    replyBody = { "success": false, "message": response.statusText };
  }

  return new Response(JSON.stringify(replyBody), {
    headers: corsHeaders,
    status: response.status,
  });
};
