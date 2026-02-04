import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

export default function RequestData() {
  const [formData, setFormData] = useState({
    company: "",
    name: "",
    email: "",
    useCase: "",
    contentType: "",
    volume: "",
    languages: "",
    specifications: "",
    timeline: "",
    budget: "",
    notes: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      toast.success("Request submitted successfully! We will contact you within 24 hours.");
      
      // Reset form
      setFormData({
        company: "",
        name: "",
        email: "",
        useCase: "",
        contentType: "",
        volume: "",
        languages: "",
        specifications: "",
        timeline: "",
        budget: "",
        notes: "",
      });
    } catch (error) {
      toast.error("Failed to submit request. Please try again or contact us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen py-16">
      <div className="container max-w-3xl">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Request Data</h1>
          <p className="text-lg text-muted-foreground">
            Tell us about your data requirements. We will review your request and contact you within 24 hours to discuss how our portfolio can support your AI development needs.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Contact Information</h2>
            
            <div className="space-y-2">
              <Label htmlFor="company">Company / Organization *</Label>
              <Input
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                required
                placeholder="Your organization name"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Your Name *</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Full name"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@company.com"
                />
              </div>
            </div>
          </div>

          {/* Project Details */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Project Details</h2>

            <div className="space-y-2">
              <Label htmlFor="useCase">Use Case *</Label>
              <Textarea
                id="useCase"
                name="useCase"
                value={formData.useCase}
                onChange={handleChange}
                required
                rows={3}
                placeholder="e.g., Training multimodal model for video understanding, ASR system for multiple languages, computer vision for motion analysis"
              />
              <p className="text-sm text-muted-foreground">
                Describe what you are building and how you plan to use the training data.
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="contentType">Content Type Required *</Label>
              <Textarea
                id="contentType"
                name="contentType"
                value={formData.contentType}
                onChange={handleChange}
                required
                rows={3}
                placeholder="e.g., Scripted video, news footage, talk radio, sports content, animation"
              />
              <p className="text-sm text-muted-foreground">
                What types of content are you looking for? See our portfolio for available categories.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="volume">Estimated Volume</Label>
                <Input
                  id="volume"
                  name="volume"
                  value={formData.volume}
                  onChange={handleChange}
                  placeholder="e.g., 10,000 hours"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="languages">Languages</Label>
                <Input
                  id="languages"
                  name="languages"
                  value={formData.languages}
                  onChange={handleChange}
                  placeholder="e.g., English, Spanish, Mandarin"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="specifications">Technical Specifications</Label>
              <Textarea
                id="specifications"
                name="specifications"
                value={formData.specifications}
                onChange={handleChange}
                rows={3}
                placeholder="e.g., Resolution requirements, format preferences, metadata needs, annotation requirements"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="timeline">Timeline</Label>
                <Input
                  id="timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  placeholder="e.g., Q2 2026"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="budget">Budget Range (Optional)</Label>
                <Input
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  placeholder="e.g., $50,000 - $100,000"
                />
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Additional Information</h2>

            <div className="space-y-2">
              <Label htmlFor="notes">Additional Notes</Label>
              <Textarea
                id="notes"
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                rows={4}
                placeholder="Any other information that would help us understand your requirements better"
              />
            </div>
          </div>

          {/* Submit */}
          <div className="flex gap-4">
            <Button type="submit" size="lg" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit Request"}
            </Button>
            <Button
              type="button"
              size="lg"
              variant="outline"
              onClick={() => window.history.back()}
            >
              Cancel
            </Button>
          </div>

          <p className="text-sm text-muted-foreground">
            By submitting this form, you agree to our terms and privacy policy. We will use this information solely to respond to your data request.
          </p>
        </form>
      </div>
    </div>
  );
}
