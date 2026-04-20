import nodemailer from "nodemailer";

const ADMIN_EMAIL = 'cai@globalmediaconsult.com';
const GMAIL_USER = process.env.GMAIL_USER!;
const GMAIL_CLIENT_ID = process.env.GMAIL_CLIENT_ID!;
const GMAIL_CLIENT_SECRET = process.env.GMAIL_CLIENT_SECRET!;
const GMAIL_REFRESH_TOKEN = process.env.GMAIL_REFRESH_TOKEN!;
const CONTACT_EMAIL_RECIPIENT = process.env.CONTACT_EMAIL_RECIPIENT!;

interface EmailParams {
  to: string;
  subject: string;
  html: string;
  replyTo?: string;
}

/**
 * Send email using Gmail OAuth2
 */
export async function sendEmail({ to, subject, html, replyTo }: EmailParams): Promise<boolean> {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: GMAIL_USER,
      clientId: GMAIL_CLIENT_ID,
      clientSecret: GMAIL_CLIENT_SECRET,
      refreshToken: GMAIL_REFRESH_TOKEN,
    },
  });

  const mailOptions = {
    from: `Content Aimbassy <${GMAIL_USER}>`,
    to,
    subject,
    html,
    replyTo,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.messageId);
    return true;
  } catch (error) {
    console.error("Email send error:", error);
    return false;
  }
}

/**
 * Send admin notification email about new content submission
 */
export async function sendAdminNotification(submission: {
  contactName: string;
  email: string;
  phone?: string;
  company?: string;
  contentType: "video" | "audio";
  contentGenres: string;
  totalHours: number;
  contentDescription: string;
  hasHD1080p?: string;
  hasMP4Format?: string;
  hasWatermarks?: string;
  audioFormat?: string;
  hasTranscript?: string;
  rightsConfirmation: string;
  additionalNotes?: string;
}): Promise<boolean> {
  const genres = JSON.parse(submission.contentGenres).join(", ");
  
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: 'Montserrat', Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #4b0082 0%, #e67e22 100%); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
        .content { background: #f8f9fa; padding: 30px; border-radius: 0 0 8px 8px; }
        .section { background: white; padding: 20px; margin-bottom: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
        .section-title { color: #4b0082; font-weight: 600; margin-bottom: 15px; font-size: 18px; }
        .field { margin-bottom: 12px; }
        .label { font-weight: 600; color: #4b0082; }
        .value { color: #333; }
        .badge { display: inline-block; padding: 4px 12px; background: #e67e22; color: white; border-radius: 12px; font-size: 14px; font-weight: 600; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1 style="margin: 0;">New Content Submission</h1>
          <p style="margin: 10px 0 0 0;">Global Media Consult - A Global Gateway for AI Training Content</p>
        </div>
        <div class="content">
          <div class="section">
            <div class="section-title">Contact Information</div>
            <div class="field"><span class="label">Name:</span> <span class="value">${submission.contactName}</span></div>
            <div class="field"><span class="label">Email:</span> <span class="value">${submission.email}</span></div>
            ${submission.phone ? `<div class="field"><span class="label">Phone:</span> <span class="value">${submission.phone}</span></div>` : ""}
            ${submission.company ? `<div class="field"><span class="label">Company:</span> <span class="value">${submission.company}</span></div>` : ""}
          </div>
          
          <div class="section">
            <div class="section-title">Content Details</div>
            <div class="field"><span class="label">Content Type:</span> <span class="badge">${submission.contentType.toUpperCase()}</span></div>
            <div class="field"><span class="label">Genres:</span> <span class="value">${genres}</span></div>
            <div class="field"><span class="label">Total Hours:</span> <span class="value">${submission.totalHours} hours</span></div>
            <div class="field"><span class="label">Description:</span> <span class="value">${submission.contentDescription}</span></div>
          </div>
          
          ${submission.contentType === "video" ? `
          <div class="section">
            <div class="section-title">Technical Details (Video)</div>
            <div class="field"><span class="label">HD 1080p:</span> <span class="value">${submission.hasHD1080p}</span></div>
            <div class="field"><span class="label">MP4 Format:</span> <span class="value">${submission.hasMP4Format}</span></div>
            <div class="field"><span class="label">Watermarks:</span> <span class="value">${submission.hasWatermarks}</span></div>
          </div>
          ` : ""}
          
          ${submission.contentType === "audio" ? `
          <div class="section">
            <div class="section-title">Technical Details (Audio)</div>
            <div class="field"><span class="label">Audio Format:</span> <span class="value">${submission.audioFormat}</span></div>
            <div class="field"><span class="label">Has Transcript:</span> <span class="value">${submission.hasTranscript}</span></div>
          </div>
          ` : ""}
          
          <div class="section">
            <div class="section-title">Rights & Additional Information</div>
            <div class="field"><span class="label">Rights Confirmation:</span> <span class="value">${submission.rightsConfirmation === "yes" ? "✓ Confirmed" : "✗ Not Confirmed"}</span></div>
            ${submission.additionalNotes ? `<div class="field"><span class="label">Additional Notes:</span> <span class="value">${submission.additionalNotes}</span></div>` : ""}
          </div>
        </div>
      </div>
    </body>
    </html>
  `;

  return await sendEmail({
    to: ADMIN_EMAIL,
    subject: `New ${submission.contentType.toUpperCase()} Content Submission - ${submission.contactName}`,
    html,
  });
}

/**
 * Send confirmation email to the submitter
 */
export async function sendSubmitterConfirmation(contactName: string, email: string): Promise<boolean> {
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: 'Montserrat', Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #4b0082 0%, #e67e22 100%); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
        .content { background: #f8f9fa; padding: 30px; border-radius: 0 0 8px 8px; }
        .message { background: white; padding: 25px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
        .footer { text-align: center; margin-top: 30px; color: #708090; font-size: 14px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1 style="margin: 0;">Thank You for Your Submission!</h1>
          <p style="margin: 10px 0 0 0;">Global Media Consult</p>
        </div>
        <div class="content">
          <div class="message">
            <p>Dear ${contactName},</p>
            
            <p>Thank you for submitting your content to Global Media Consult. We have received your submission and our team will review it carefully.</p>
            
            <p><strong>What happens next?</strong></p>
            <ul>
              <li>Our team will review your submission within 24-48 hours</li>
              <li>We'll assess the content quality and licensing potential</li>
              <li>You'll receive a follow-up email with next steps</li>
            </ul>
            
            <p>If you have any questions in the meantime, please don't hesitate to contact us at <a href="mailto:cai@globalmediaconsult.com" style="color: #e67e22;">cai@globalmediaconsult.com</a>.</p>
            
            <p>Best regards,<br>
            <strong>The Global Media Consult Team</strong><br>
            Global Media Consult</p>
          </div>
          
          <div class="footer">
            <p>A Global Gateway for AI Training Content</p>
            <p>© ${new Date().getFullYear()} Global Media Consult. All rights reserved.</p>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;

  return await sendEmail({
    to: email,
    subject: "Thank You for Your Content Submission - Global Media Consult",
    html,
  });
}
