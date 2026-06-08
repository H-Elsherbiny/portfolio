import type { Metadata } from "next";
import SectionHeader from "@/components/ui/SectionHeader";
import ContactForm from "@/components/shared/ContactForm";
import SocialLinks from "@/components/shared/SocialLinks";
import Card from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Hossam Elsherbiny for AI Engineering, GenAI, LLM, and Data Science opportunities.",
};

export default function ContactPage() {
  return (
    <div className="section-container section-spacing">
      <SectionHeader
        badge="Contact"
        title="Get In Touch"
        subtitle="Have a project in mind or want to discuss an opportunity? I'd love to hear from you."
      />

      <div className="max-w-2xl mx-auto space-y-6">
        {/* Form is hidden for now as it doesn't dispatch messages
        <div className="lg:col-span-3">
          <ContactForm />
        </div>
        */}

        {/* Contact Info */}
        <div className="space-y-6">
          <Card hover={false}>
            <h3 className="text-sm font-semibold text-text-primary mb-4 uppercase tracking-wider">
              Contact Information
            </h3>

            <div className="space-y-4">
              {/* Email */}
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-accent-muted text-accent shrink-0">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-text-primary">Email</p>
                  <a
                    href="mailto:hossam.elsherbiny95@gmail.com"
                    className="text-sm text-text-secondary hover:text-accent transition-colors"
                  >
                    hossam.elsherbiny95@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-accent-muted text-accent shrink-0">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-text-primary">Phone</p>
                  <a
                    href="tel:+201147211427"
                    className="text-sm text-text-secondary hover:text-accent transition-colors"
                  >
                    +20 114 721 1427
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-accent-muted text-accent shrink-0">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-text-primary">
                    Location
                  </p>
                  <p className="text-sm text-text-secondary">Egypt</p>
                </div>
              </div>
            </div>
          </Card>

          <Card hover={false}>
            <h3 className="text-sm font-semibold text-text-primary mb-4 uppercase tracking-wider">
              Social Links
            </h3>
            <SocialLinks />
          </Card>

          <Card hover={false}>
            <h3 className="text-sm font-semibold text-text-primary mb-3 uppercase tracking-wider">
              Looking For
            </h3>
            <div className="space-y-2 text-sm text-text-secondary">
              <p>✓ Full-time AI Engineer roles</p>
              <p>✓ GenAI / LLM Engineer positions</p>
              <p>✓ Contract & freelance projects</p>
              <p>✓ Research collaborations</p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
