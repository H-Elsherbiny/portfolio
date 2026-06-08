import Link from "next/link";
import { siteConfig } from "@/data/site-config";
import SocialLinks from "@/components/shared/SocialLinks";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-bg-secondary/50">
      <div className="section-container py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="text-lg font-semibold text-text-primary"
            >
              H<span className="text-accent">.</span>Elsherbiny
            </Link>
            <p className="mt-3 text-sm text-text-secondary max-w-xs">
              AI Engineer & Data Scientist building intelligent systems powered
              by LLMs, Computer Vision, and Agentic Workflows.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-text-primary mb-4 uppercase tracking-wider">
              Navigation
            </h4>
            <nav className="flex flex-col gap-2">
              {siteConfig.navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-text-secondary hover:text-text-primary transition-colors w-fit"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-sm font-semibold text-text-primary mb-4 uppercase tracking-wider">
              Connect
            </h4>
            <SocialLinks />
            <p className="mt-4 text-sm text-text-secondary">
              hossam.elsherbiny95@gmail.com
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-tertiary">
            © {currentYear} Hossam Elsherbiny. All rights reserved.
          </p>
          <p className="text-xs text-text-tertiary">
            Built with Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
