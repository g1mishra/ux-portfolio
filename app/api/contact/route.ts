import { sendEmailUsingVercelEmail } from "@/lib/vercelEmail";

// import { sendEmailUsingSendgrid } from "@/lib/sendgrid"O

export const runtime = "edge";

export async function POST(request: Request) {
  console.log("IP", request.headers.get("X-Forwarded-For"));
  const req = await request.json();
  const { subject, message, firstName, lastName, phone, email, typeOfEnquiry } =
    req.body;

  const htmlContent = `
    <div style="font-family: Arial, sans-serif; color: #333;">
      <h2 style="color: #007bff;">Enquiry Details</h2>
      <p><strong>First Name:</strong> ${firstName}</p>
      <p><strong>Last Name:</strong> ${lastName}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #007bff;">${email}</a></p>
      <p><strong>Type of Enquiry:</strong> ${typeOfEnquiry}</p>
      <hr>
      <h3 style="color: #007bff;">Message</h3>
      <p>${message}</p>
    </div>
  `;

  try {
    // await sendEmailUsingSendgrid("jack@norg.ai", subject, htmlContent)
    await sendEmailUsingVercelEmail(
      "g1mishra.dev@gmail.com",
      subject,
      htmlContent,
    );

    return new Response(
      JSON.stringify({ message: "Email sent successfully" }),
      { status: 200 },
    );
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: "Internal Server Error" }), {
      status: 500,
    });
  }
}
