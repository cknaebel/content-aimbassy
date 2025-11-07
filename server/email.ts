import { ENV } from './_core/env';

const NOTIFICATION_EMAIL = 'info@content-aimbassy.com';

interface EmailParams {
  to: string;
  subject: string;
  html: string;
}

/**
 * Send email notification using Manus built-in notification API
 * This sends emails through the platform's email service
 */
export async function sendEmail({ to, subject, html }: EmailParams): Promise<boolean> {
  try {
    const response = await fetch(`${ENV.forgeApiUrl}/notification/email`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${ENV.forgeApiKey}`,
      },
      body: JSON.stringify({
        to,
        subject,
        html,
      }),
    });

    if (!response.ok) {
      console.error('[Email] Failed to send email:', await response.text());
      return false;
    }

    return true;
  } catch (error) {
    console.error('[Email] Error sending email:', error);
    return false;
  }
}

/**
 * Send notification email about new content submission
 */
export async function sendContentSubmissionNotification(submission: {
  companyName: string;
  contactPerson: string;
  email: string;
  phone?: string;
  contentType: string;
  contentVolume: string;
  contentDescription?: string;
  rightsOwnership: string;
  geographicRights?: string;
  languageVersions?: string;
  technicalSpecs?: string;
  additionalInfo?: string;
}) {
  const subject = `New Content Submission: ${submission.companyName}`;
  
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #5a0e19;">New Content Submission Received</h2>
      
      <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #5a0e19; margin-top: 0;">Company Information</h3>
        <p><strong>Company Name:</strong> ${submission.companyName}</p>
        <p><strong>Contact Person:</strong> ${submission.contactPerson}</p>
        <p><strong>Email:</strong> <a href="mailto:${submission.email}">${submission.email}</a></p>
        ${submission.phone ? `<p><strong>Phone:</strong> ${submission.phone}</p>` : ''}
      </div>

      <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #5a0e19; margin-top: 0;">Content Details</h3>
        <p><strong>Content Type:</strong> ${submission.contentType}</p>
        <p><strong>Content Volume:</strong> ${submission.contentVolume}</p>
        ${submission.contentDescription ? `<p><strong>Description:</strong> ${submission.contentDescription}</p>` : ''}
      </div>

      <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #5a0e19; margin-top: 0;">Rights & Technical Information</h3>
        <p><strong>Rights Ownership:</strong> ${submission.rightsOwnership}</p>
        ${submission.geographicRights ? `<p><strong>Geographic Rights:</strong> ${submission.geographicRights}</p>` : ''}
        ${submission.languageVersions ? `<p><strong>Language Versions:</strong> ${submission.languageVersions}</p>` : ''}
        ${submission.technicalSpecs ? `<p><strong>Technical Specs:</strong> ${submission.technicalSpecs}</p>` : ''}
      </div>

      ${submission.additionalInfo ? `
        <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #5a0e19; margin-top: 0;">Additional Information</h3>
          <p>${submission.additionalInfo}</p>
        </div>
      ` : ''}

      <div style="margin-top: 30px; padding-top: 20px; border-top: 2px solid #d7b899; text-align: center; color: #666;">
        <p>This notification was sent from Content Aimbassy</p>
        <p><a href="https://content-aimbassy.com" style="color: #5a0e19;">content-aimbassy.com</a></p>
      </div>
    </div>
  `;

  return await sendEmail({
    to: NOTIFICATION_EMAIL,
    subject,
    html,
  });
}
