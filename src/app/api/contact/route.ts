import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 587,
  secure: Number(process.env.SMTP_PORT) === 465,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    await transporter.sendMail({
      from: `"${name}" <${process.env.SMTP_USER}>`,
      to: process.env.TO_EMAIL,
      replyTo: `"${name}" <${email}>`,
      subject: subject,
      html: `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background-color:#f1f5f9;font-family:'Helvetica Neue',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f1f5f9;padding:32px 16px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 6px rgba(0,0,0,0.07);">
        <!-- Header -->
        <tr>
          <td style="background-color:#0f172a;padding:28px 32px;text-align:center;">
            <h1 style="margin:0;color:#fbbf24;font-size:20px;font-weight:700;letter-spacing:1px;">MONTENEGRO TEAM BUILDING</h1>
          </td>
        </tr>
        <!-- Title -->
        <tr>
          <td style="padding:28px 32px 8px;">
            <h2 style="margin:0;color:#0f172a;font-size:22px;font-weight:700;">New Enquiry</h2>
            <p style="margin:6px 0 0;color:#94a3b8;font-size:13px;">Received from website contact form</p>
          </td>
        </tr>
        <!-- Details -->
        <tr>
          <td style="padding:20px 32px;">
            <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e2e8f0;border-radius:8px;overflow:hidden;">
              <tr style="background-color:#f8fafc;">
                <td style="padding:12px 16px;font-size:12px;color:#64748b;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;width:100px;border-bottom:1px solid #e2e8f0;">Name</td>
                <td style="padding:12px 16px;font-size:14px;color:#1e293b;border-bottom:1px solid #e2e8f0;">${name}</td>
              </tr>
              <tr>
                <td style="padding:12px 16px;font-size:12px;color:#64748b;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;border-bottom:1px solid #e2e8f0;">Email</td>
                <td style="padding:12px 16px;font-size:14px;border-bottom:1px solid #e2e8f0;"><a href="mailto:${email}" style="color:#d97706;text-decoration:none;">${email}</a></td>
              </tr>
              <tr style="background-color:#f8fafc;">
                <td style="padding:12px 16px;font-size:12px;color:#64748b;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;">Subject</td>
                <td style="padding:12px 16px;font-size:14px;color:#1e293b;">${subject}</td>
              </tr>
            </table>
          </td>
        </tr>
        <!-- Message -->
        <tr>
          <td style="padding:4px 32px 28px;">
            <h3 style="margin:0 0 10px;color:#0f172a;font-size:14px;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;">Message</h3>
            <div style="background-color:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;padding:16px;font-size:14px;color:#334155;line-height:1.6;white-space:pre-line;">${message}</div>
          </td>
        </tr>
        <!-- Footer -->
        <tr>
          <td style="background-color:#f8fafc;border-top:1px solid #e2e8f0;padding:16px 32px;text-align:center;">
            <p style="margin:0;color:#94a3b8;font-size:11px;">This email was sent from the Montenegro Team Building website contact form.</p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>
      `,
    });

    return NextResponse.json(
      { success: true, message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (err) {
    console.error("Email send error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
