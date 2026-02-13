import { sendEmail } from "./email";

const CONTACT_EMAIL_RECIPIENT = process.env.CONTACT_EMAIL_RECIPIENT!;

/**
 * Send contact form notification to admin
 */
export async function sendContactFormNotification(data: {
  name: string;
  email: string;
  company?: string;
  message: string;
  formType: "ai-companies" | "content-owners" | "general";
}): Promise<boolean> {
  const formTypeLabels = {
    "ai-companies": "AI Companies Contact Form",
    "content-owners": "Content Owners Contact Form",
    general: "General Contact Form",
  };

  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: 'Montserrat', Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #5D1681 0%, #FBA93E 100%); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
        .content { background: #f8f9fa; padding: 30px; border-radius: 0 0 8px 8px; }
        .section { background: white; padding: 20px; margin-bottom: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
        .field { margin-bottom: 12px; }
        .label { font-weight: 600; color: #5D1681; }
        .value { color: #333; }
        .message-box { background: #fff; padding: 20px; border-left: 4px solid #FBA93E; margin-top: 20px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1 style="margin: 0;">New Contact Form Submission</h1>
          <p style="margin: 10px 0 0 0;">${formTypeLabels[data.formType]}</p>
        </div>
        <div class="content">
          <div class="section">
            <div class="field"><span class="label">Name:</span> <span class="value">${data.name}</span></div>
            <div class="field"><span class="label">Email:</span> <span class="value"><a href="mailto:${data.email}" style="color: #FBA93E;">${data.email}</a></span></div>
            ${data.company ? `<div class="field"><span class="label">Company:</span> <span class="value">${data.company}</span></div>` : ""}
          </div>
          
          <div class="message-box">
            <p style="margin: 0 0 10px 0;"><strong>Message:</strong></p>
            <p style="margin: 0; white-space: pre-wrap;">${data.message}</p>
          </div>
          
          <p style="color: #999; font-size: 12px; margin-top: 30px; text-align: center;">
            This email was sent from the Content Aimbassy website contact form.
          </p>
        </div>
      </div>
    </body>
    </html>
  `;

  return sendEmail({
    to: CONTACT_EMAIL_RECIPIENT,
    subject: `New Contact: ${data.name} - ${formTypeLabels[data.formType]}`,
    html,
    replyTo: data.email,
  });
}

/**
 * Send confirmation email to form submitter
 */
export async function sendContactFormConfirmation(data: {
  name: string;
  email: string;
  formType: "ai-companies" | "content-owners" | "general";
}): Promise<boolean> {
  const formTypeMessages = {
    "ai-companies": "Thank you for your interest in licensing AI training data from Content Aimbassy. We appreciate you reaching out.",
    "content-owners": "Thank you for your interest in partnering with Content Aimbassy to monetize your content. We're excited to learn more about your archive.",
    general: "Thank you for contacting Content Aimbassy. We appreciate you reaching out.",
  };

  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: 'Montserrat', Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #5D1681 0%, #FBA93E 100%); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
        .logo { max-width: 300px; margin-bottom: 15px; }
        .content { background: #f8f9fa; padding: 30px; border-radius: 0 0 8px 8px; }
        .message { background: white; padding: 25px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); margin-bottom: 20px; }
        .info-box { background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0; }
        .footer { text-align: center; margin-top: 30px; color: #708090; font-size: 14px; }
        a { color: #FBA93E; text-decoration: none; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1 style="margin: 0;">Content Aimbassy</h1>
          <p style="margin: 10px 0 0 0; font-size: 14px;">a service by Global Media Consult</p>
        </div>
        <div class="content">
          <div class="message">
            <h2 style="color: #5D1681; margin-top: 0;">Hello ${data.name},</h2>
            
            <p>${formTypeMessages[data.formType]}</p>
            
            <p>We've received your message and will review it carefully. A member of our team will get back to you within 1-2 business days to discuss your needs and how we can help.</p>
            
            <div class="info-box">
              <p style="margin: 0; color: #666; font-size: 14px;">
                <strong>What happens next?</strong><br/>
                Our team will review your inquiry and reach out to schedule a conversation. We believe in understanding your specific needs before discussing solutions—that's the Content Aimbassy way.
              </p>
            </div>
            
            <p>If you have any urgent questions in the meantime, feel free to reply to this email.</p>
            
            <p style="margin-top: 30px;">
              Best regards,<br/>
              <strong>The Content Aimbassy Team</strong>
            </p>
          </div>
          
          <div class="footer">
            <p>Content Aimbassy | A Service by Global Media Consult</p>
            <p><a href="mailto:cai@globalmediaconsult.com">cai@globalmediaconsult.com</a></p>
            <p>© ${new Date().getFullYear()} Global Media Consult. All rights reserved.</p>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;

  return sendEmail({
    to: data.email,
    subject: "Thank you for contacting Content Aimbassy",
    html,
  });
}
