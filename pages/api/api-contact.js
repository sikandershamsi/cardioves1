import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { firstName, lastName, email, subject, description } = req.body;
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER, // Your Gmail address
      pass: process.env.GMAIL_PASS, // Your Gmail App Password
    },
  });

  try {
    await transporter.sendMail({
      from: `"${firstName} ${lastName}" <${email}>`,
      to: 'alidev90120@gmail.com', // Your email
      subject: `${subject}`,
      html: `
        <div style="font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: auto; background-color: #ffffff; border-radius: 10px; padding: 24px; border: 1px solid #e0e0e0;">
          <div style="text-align: center; padding-bottom: 16px;">
            <img src="https://cardioves.com/wp-content/uploads/elementor/thumbs/Screenshot-2023-08-28-222901-7b7wqyt6xq1tw85qkrnxtg21dyjpf2jamuvyvzqxjok.png" alt="Cardioves Logo" style="height: 48px;" />
          </div>

          <h2 style="color: #d4274b;">New Contact Form Submission</h2>
          <p style="color: #555;">You've received a new inquiry via the Cardioves contact form. Here are the details:</p>

          <table style="width: 100%; margin-top: 16px;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #333;">Full Name:</td>
              <td style="padding: 8px 0; color: #555;">${firstName} ${lastName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #333;">Email Address:</td>
              <td style="padding: 8px 0; color: #555;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #333;">Subject:</td>
              <td style="padding: 8px 0; color: #555;">${subject}</td>
            </tr>
          </table>

          <div style="margin-top: 24px;">
            <p style="font-weight: bold; color: #333;">Message:</p>
            <p style="color: #555; background-color: #f9f9f9; padding: 12px; border-radius: 6px;">${description}</p>
          </div>

          <hr style="margin: 32px 0; border: none; border-top: 1px solid #eee;" />

          <p style="text-align: center; font-size: 13px; color: #999;">
            This message was sent via the Cardioves mobile app contact form.<br/>
            © ${new Date().getFullYear()} Cardioves. All rights reserved.
          </p>
        </div>
      `,
    });

    res.status(200).json({ message: 'Email sent successfully' });
  } catch (err) {
    console.error('Email error:', err);
    res.status(500).json({ message: 'Email sending failed' });
  }
}
