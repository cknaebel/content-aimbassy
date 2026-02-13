import { useState } from "react";
import { trpc } from "@/lib/trpc";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";

interface ContactFormProps {
  formType: "ai-companies" | "content-owners" | "general";
  title?: string;
  description?: string;
}

export function ContactForm({ formType, title, description }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const submitMutation = trpc.contact.submit.useMutation({
    onSuccess: () => {
      setSubmitted(true);
      setFormData({ name: "", email: "", company: "", message: "" });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitMutation.mutate({
      ...formData,
      formType,
    });
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-xl p-8 shadow-lg border border-border">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-[#5D1681] to-[#FBA93E] rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-foreground mb-2">Thank You!</h3>
          <p className="text-muted-foreground mb-6">
            We've received your message and will get back to you within 1-2 business days.
          </p>
          <p className="text-sm text-muted-foreground">
            Please check your email (including spam folder) for a confirmation message.
          </p>
          <Button
            onClick={() => setSubmitted(false)}
            variant="outline"
            className="mt-6"
          >
            Send Another Message
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl p-8 shadow-lg border border-border">
      {title && (
        <h3 className="text-2xl font-bold text-foreground mb-2">{title}</h3>
      )}
      {description && (
        <p className="text-muted-foreground mb-6">{description}</p>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Label htmlFor="name">Name *</Label>
          <Input
            id="name"
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            placeholder="Your full name"
            className="mt-1.5"
          />
        </div>

        <div>
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
            placeholder="your.email@example.com"
            className="mt-1.5"
          />
        </div>

        <div>
          <Label htmlFor="company">Company / Organization</Label>
          <Input
            id="company"
            type="text"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            placeholder="Your company name (optional)"
            className="mt-1.5"
          />
        </div>

        <div>
          <Label htmlFor="message">Message *</Label>
          <Textarea
            id="message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            required
            placeholder="Tell us about your needs, questions, or how we can help..."
            rows={6}
            className="mt-1.5"
          />
        </div>

        {submitMutation.error && (
          <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
            <p className="text-sm">
              {submitMutation.error.message || "Failed to send message. Please try again."}
            </p>
          </div>
        )}

        <Button
          type="submit"
          disabled={submitMutation.isPending}
          className="w-full bg-gradient-to-r from-[#5D1681] to-[#FBA93E] hover:opacity-90 text-white font-semibold py-6 text-lg"
        >
          {submitMutation.isPending ? (
            <>
              <Loader2 className="w-5 h-5 mr-2 animate-spin" />
              Sending...
            </>
          ) : (
            "Send Message"
          )}
        </Button>

        <p className="text-xs text-muted-foreground text-center">
          By submitting this form, you agree to receive email communication from Content Aimbassy.
        </p>
      </form>
    </div>
  );
}
