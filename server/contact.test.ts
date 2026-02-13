import { describe, it, expect } from "vitest";
import { sendContactFormNotification } from "./contactForms";

describe("Contact Form Email Integration", () => {
  it("should send contact form email for AI companies successfully", async () => {
    const result = await sendContactFormNotification({
      name: "Test AI Company",
      email: "test@aicompany.com",
      company: "AI Innovations Inc",
      message: "We're interested in licensing rare language audio data for our multimodal LLM project. Looking for 100+ hours of content.",
      formType: "ai-companies",
    });

    expect(result).toBe(true);
  }, 30000);

  it("should send contact form email for content owners successfully", async () => {
    const result = await sendContactFormNotification({
      name: "Content Archive Owner",
      email: "owner@mediaarchive.com",
      company: "Global Media Archive",
      message: "We have 500+ hours of rare language documentary content with full rights. Interested in discussing licensing opportunities.",
      formType: "content-owners",
    });

    expect(result).toBe(true);
  }, 30000);

  it("should send general contact form email successfully", async () => {
    const result = await sendContactFormNotification({
      name: "General Inquiry",
      email: "inquiry@example.com",
      company: "Example Corp",
      message: "General question about your services and process.",
      formType: "general",
    });

    expect(result).toBe(true);
  }, 30000);
});
