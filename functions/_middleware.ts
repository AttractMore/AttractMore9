import mailchannelsPlugin from "@cloudflare/pages-plugin-mailchannels";

export const onRequest = mailchannelsPlugin({
  personalizations: [
    {
      to: [{ name: "Website enquiry", email: "roger@attractmore.co.uk" }],
    },
  ],
  from: { name: "Enquiry", email: "no-reply@attractmore.uk" },
  respondWith: () =>
    new Response(null, {
      status: 302,
      headers: { Location: "/thanks/" },
    }),
});
