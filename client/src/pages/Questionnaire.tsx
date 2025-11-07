import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";
import { CheckCircle, Loader2 } from "lucide-react";

const GENRE_OPTIONS = [
  "Films & Series",
  "Documentaries",
  "Music Performances & Concerts",
  "Sports",
  "Children's Programming",
  "Instructional Videos",
  "Historical Archives",
  "Other",
];

export default function Questionnaire() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    contactName: "",
    email: "",
    phone: "",
    company: "",
    contentGenres: [] as string[],
    totalHours: "",
    contentDescription: "",
    hasHD1080p: "yes" as "yes" | "no" | "partial",
    hasMP4Format: "yes" as "yes" | "no" | "partial",
    hasWatermarks: "no" as "yes" | "no" | "some",
    rightsConfirmation: "yes" as "yes" | "no",
    additionalNotes: "",
  });

  const submitMutation = trpc.contentSubmissions.submit.useMutation({
    onSuccess: () => {
      setSubmitted(true);
      toast.success("Submission received!", {
        description: "We'll review your content and get back to you soon.",
      });
    },
    onError: (error) => {
      toast.error("Submission failed", {
        description: error.message,
      });
    },
  });

  const handleGenreToggle = (genre: string) => {
    setFormData((prev) => ({
      ...prev,
      contentGenres: prev.contentGenres.includes(genre)
        ? prev.contentGenres.filter((g) => g !== genre)
        : [...prev.contentGenres, genre],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const totalHours = parseInt(formData.totalHours);
    if (isNaN(totalHours) || totalHours < 100) {
      toast.error("Invalid hours", {
        description: "Minimum 100 hours required",
      });
      return;
    }

    if (formData.contentGenres.length === 0) {
      toast.error("No genres selected", {
        description: "Please select at least one content genre",
      });
      return;
    }

    submitMutation.mutate({
      ...formData,
      totalHours,
      phone: formData.phone || undefined,
      company: formData.company || undefined,
      additionalNotes: formData.additionalNotes || undefined,
    });
  };

  if (submitted) {
    return (
      <div className="w-full min-h-[80vh] flex items-center justify-center">
        <div className="container max-w-2xl">
          <Card className="border-2 border-primary/20">
            <CardHeader className="text-center pb-8">
              <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <CheckCircle className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-3xl">Thank You!</CardTitle>
              <CardDescription className="text-lg">
                Your content submission has been received successfully.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 text-center">
              <p className="text-muted-foreground">
                We'll review your submission and contact you within 1-2 business days to discuss next steps. 
                Please check your email (including spam folder) for our response.
              </p>
              <div className="bg-muted/50 p-4 rounded-lg">
                <p className="text-sm font-medium text-foreground mb-2">What happens next?</p>
                <ul className="text-sm text-muted-foreground space-y-2 text-left max-w-md mx-auto">
                  <li>• Our team will review your content details</li>
                  <li>• We'll assess technical requirements and market fit</li>
                  <li>• You'll receive an initial evaluation and next steps</li>
                  <li>• If suitable, we'll request sample videos for quality assessment</li>
                </ul>
              </div>
              <Button onClick={() => window.location.href = "/"}>
                Return to Home
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-accent/10 py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Content Submission
            </h1>
            <p className="text-xl text-muted-foreground">
              Share details about your video content library and discover its licensing potential.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16">
        <div className="container max-w-4xl">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>
                  How can we reach you?
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="contactName">Full Name *</Label>
                    <Input
                      id="contactName"
                      required
                      value={formData.contactName}
                      onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Company/Organization</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Your Company Name"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Content Details */}
            <Card>
              <CardHeader>
                <CardTitle>Content Details</CardTitle>
                <CardDescription>
                  Tell us about your video content library
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <Label>Content Genres * (Select all that apply)</Label>
                  <div className="grid md:grid-cols-2 gap-3">
                    {GENRE_OPTIONS.map((genre) => (
                      <div key={genre} className="flex items-center space-x-2">
                        <Checkbox
                          id={genre}
                          checked={formData.contentGenres.includes(genre)}
                          onCheckedChange={() => handleGenreToggle(genre)}
                        />
                        <label
                          htmlFor={genre}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                        >
                          {genre}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="totalHours">Total Hours Available *</Label>
                  <Input
                    id="totalHours"
                    type="number"
                    required
                    min="100"
                    value={formData.totalHours}
                    onChange={(e) => setFormData({ ...formData, totalHours: e.target.value })}
                    placeholder="e.g., 500"
                  />
                  <p className="text-sm text-muted-foreground">
                    Minimum 100 hours required (500+ hours ideal)
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contentDescription">Content Description *</Label>
                  <Textarea
                    id="contentDescription"
                    required
                    value={formData.contentDescription}
                    onChange={(e) => setFormData({ ...formData, contentDescription: e.target.value })}
                    placeholder="Describe your content library, including themes, production quality, and any notable features..."
                    rows={5}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Technical Specifications */}
            <Card>
              <CardHeader>
                <CardTitle>Technical Specifications</CardTitle>
                <CardDescription>
                  Technical details about your content
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <Label>Is your content in HD 1080p quality? *</Label>
                  <RadioGroup
                    value={formData.hasHD1080p}
                    onValueChange={(value: "yes" | "no" | "partial") => 
                      setFormData({ ...formData, hasHD1080p: value })
                    }
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="hd-yes" />
                      <Label htmlFor="hd-yes" className="font-normal cursor-pointer">
                        Yes, all content is HD 1080p
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="partial" id="hd-partial" />
                      <Label htmlFor="hd-partial" className="font-normal cursor-pointer">
                        Partially, some content is HD 1080p
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="hd-no" />
                      <Label htmlFor="hd-no" className="font-normal cursor-pointer">
                        No, content is in lower resolution
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-3">
                  <Label>Is your content in MP4 format? *</Label>
                  <RadioGroup
                    value={formData.hasMP4Format}
                    onValueChange={(value: "yes" | "no" | "partial") => 
                      setFormData({ ...formData, hasMP4Format: value })
                    }
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="mp4-yes" />
                      <Label htmlFor="mp4-yes" className="font-normal cursor-pointer">
                        Yes, all content is MP4
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="partial" id="mp4-partial" />
                      <Label htmlFor="mp4-partial" className="font-normal cursor-pointer">
                        Partially, some content is MP4
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="mp4-no" />
                      <Label htmlFor="mp4-no" className="font-normal cursor-pointer">
                        No, content is in other formats
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-3">
                  <Label>Does your content have watermarks, subtitles, or overlays? *</Label>
                  <RadioGroup
                    value={formData.hasWatermarks}
                    onValueChange={(value: "yes" | "no" | "some") => 
                      setFormData({ ...formData, hasWatermarks: value })
                    }
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="watermark-no" />
                      <Label htmlFor="watermark-no" className="font-normal cursor-pointer">
                        No, content is clean
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="some" id="watermark-some" />
                      <Label htmlFor="watermark-some" className="font-normal cursor-pointer">
                        Some content has watermarks/overlays
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="watermark-yes" />
                      <Label htmlFor="watermark-yes" className="font-normal cursor-pointer">
                        Yes, most/all content has watermarks/overlays
                      </Label>
                    </div>
                  </RadioGroup>
                </div>
              </CardContent>
            </Card>

            {/* Rights Confirmation */}
            <Card>
              <CardHeader>
                <CardTitle>Rights Confirmation</CardTitle>
                <CardDescription>
                  Verify your licensing authority
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <Label>Do you own or control the rights to license this content? *</Label>
                  <RadioGroup
                    value={formData.rightsConfirmation}
                    onValueChange={(value: "yes" | "no") => 
                      setFormData({ ...formData, rightsConfirmation: value })
                    }
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="rights-yes" />
                      <Label htmlFor="rights-yes" className="font-normal cursor-pointer">
                        Yes, I have the authority to license this content
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="rights-no" />
                      <Label htmlFor="rights-no" className="font-normal cursor-pointer">
                        No, I need to verify rights ownership
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="additionalNotes">Additional Notes</Label>
                  <Textarea
                    id="additionalNotes"
                    value={formData.additionalNotes}
                    onChange={(e) => setFormData({ ...formData, additionalNotes: e.target.value })}
                    placeholder="Any additional information you'd like to share..."
                    rows={4}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Submit Button */}
            <div className="flex justify-center">
              <Button 
                type="submit" 
                size="lg" 
                disabled={submitMutation.isPending}
                className="min-w-[200px]"
              >
                {submitMutation.isPending ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Submit Content Information"
                )}
              </Button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
