/**
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

async function submitHandler(request, env) {
	if (request.method !== 'POST') {
		return new Response('Method Not Allowed', {
			status: 405,
		});
	}
	const body = await request.formData();

	const { name, email, message, consent } = Object.fromEntries(body);

	const reqBody = {
		fields: {
			Name: name,
			Email: email,
			Message: message,
			Consent: consent,
		},
	};
	await sendDataToZoho(env, reqBody);
}
async function sendDataToZoho(env, body) {
	const response = await fetch(env.ZOHO_WEBHOOK, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			subject: 'AM9 Website Contact Form',
			message: `
        <html>
        <body>
        <h1>Contact request from Attractmore website.</h1>
        <p>Name: ${body.fields.Name}</p>
        <p>Email: ${body.fields.Email}</p>
        <p>Message: ${body.fields.Message}</p>
        <p>Consent: ${body.fields.Consent}</p>
        </body>
        </html>
      `,
		}),
	});
	let replyBody;
	if (response.ok) {
		return Response.redirect('https://attractmore9.pages.dev/thanks/');
	} else {
		console.error(response.status, response.statusText);
		replyBody = { success: false, message: response.statusText };
		return new Response(JSON.stringify(replyBody), {
			status: response.status,
		});
	}
}

export default {
	async fetch(request, env) {
		const url = new URL(request.url);
		if (url.pathname === '/submit') {
			await submitHandler(request, env);
		}
		return new Response('Not found', { status: 404 });
	},
};
