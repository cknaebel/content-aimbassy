import { describe, it, expect } from "vitest";
import { sendEmail } from "./email";

describe("Gmail OAuth2 Integration", () => {
  it("should send test email successfully with OAuth2 credentials", async () => {
    const result = await sendEmail({
      to: process.env.CONTACT_EMAIL_RECIPIENT!,
      subject: "Content Aimbassy - Gmail OAuth2 Test",
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #5D1681 0%, #FBA93E 100%); color: white; padding: 30px; text-align: center; border-radius: 8px; }
            .content { background: #f5f5f5; padding: 30px; border-radius: 8px; margin-top: 20px; }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>Gmail OAuth2 Test Successful!</h1>
          </div>
          <div class="content">
            <p>This is a test email to verify Gmail OAuth2 integration is working correctly for Content Aimbassy.</p>
            <p><strong>If you receive this email, the configuration is successful!</strong></p>
            <p>Test details:</p>
            <ul>
              <li>Sender: ${process.env.GMAIL_USER}</li>
              <li>Recipient: ${process.env.CONTACT_EMAIL_RECIPIENT}</li>
              <li>Authentication: OAuth2</li>
            </ul>
          </div>
        </body>
        </html>
      `,
    });

    expect(result).toBe(true);
  }, 30000); // 30 second timeout for email sending
});
