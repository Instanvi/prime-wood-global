import React from "react";
import Link from "next/link";
import { FileText, Shield, Database, Lock, EnvelopeSimple } from "@phosphor-icons/react/dist/ssr";
import { company } from "@/lib/content";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#032f0e] via-[#0a461b] to-[#032f0e] text-white py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-sm mb-8 text-white/70">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-white font-medium">Privacy Policy</span>
          </nav>

          <div className="flex items-center gap-3 mb-6">
            <Shield className="h-10 w-10 text-[#d5920c]" weight="fill" />
            <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
              Privacy Policy
            </h1>
          </div>

          <p className="text-lg text-white/90">
            Last Updated: January 2025
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            {/* Introduction */}
            <div className="mb-12">
              <p className="text-lg text-slate-700 leading-relaxed">
                {company.name} ("we," "us," or "our") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage with our timber export services.
              </p>
            </div>

            {/* Information We Collect */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <Database className="h-6 w-6 text-[#d5920c]" weight="bold" />
                <h2 className="text-2xl font-bold text-[#0d1a13] m-0">1. Information We Collect</h2>
              </div>

              <h3 className="text-xl font-bold text-[#0d1a13] mt-6 mb-3">1.1 Information You Provide</h3>
              <p className="text-slate-700 mb-4">When you contact us or request a quote, we may collect:</p>
              <ul className="text-slate-700 space-y-2">
                <li>Name and company name</li>
                <li>Email address and phone number</li>
                <li>Business address and country</li>
                <li>Timber species and volume requirements</li>
                <li>Destination port information</li>
                <li>Any additional details you provide in inquiry forms</li>
              </ul>

              <h3 className="text-xl font-bold text-[#0d1a13] mt-6 mb-3">1.2 Automatically Collected Information</h3>
              <p className="text-slate-700 mb-4">When you visit our website, we may automatically collect:</p>
              <ul className="text-slate-700 space-y-2">
                <li>IP address and browser type</li>
                <li>Device information and operating system</li>
                <li>Pages visited and time spent on site</li>
                <li>Referring website addresses</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </div>

            {/* How We Use Your Information */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <FileText className="h-6 w-6 text-[#d5920c]" weight="bold" />
                <h2 className="text-2xl font-bold text-[#0d1a13] m-0">2. How We Use Your Information</h2>
              </div>

              <p className="text-slate-700 mb-4">We use the information we collect to:</p>
              <ul className="text-slate-700 space-y-2">
                <li>Respond to your inquiries and provide quotations</li>
                <li>Process and fulfill timber export orders</li>
                <li>Communicate with you about shipments and documentation</li>
                <li>Improve our website and customer service</li>
                <li>Send relevant business information (with your consent)</li>
                <li>Comply with legal obligations and forestry regulations</li>
                <li>Protect against fraud and unauthorized transactions</li>
              </ul>
            </div>

            {/* Information Sharing */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <Lock className="h-6 w-6 text-[#d5920c]" weight="bold" />
                <h2 className="text-2xl font-bold text-[#0d1a13] m-0">3. Information Sharing and Disclosure</h2>
              </div>

              <p className="text-slate-700 mb-4">We may share your information with:</p>

              <h3 className="text-xl font-bold text-[#0d1a13] mt-6 mb-3">3.1 Service Providers</h3>
              <ul className="text-slate-700 space-y-2 mb-4">
                <li>Shipping and logistics companies</li>
                <li>Customs brokers and freight forwarders</li>
                <li>Payment processors and banks</li>
                <li>Third-party inspection agencies (when requested)</li>
              </ul>

              <h3 className="text-xl font-bold text-[#0d1a13] mt-6 mb-3">3.2 Legal Requirements</h3>
              <p className="text-slate-700 mb-4">
                We may disclose your information when required by law, including:
              </p>
              <ul className="text-slate-700 space-y-2">
                <li>Cameroon forestry and export authorities</li>
                <li>Customs and border protection agencies</li>
                <li>Law enforcement or regulatory bodies</li>
                <li>Legal proceedings or court orders</li>
              </ul>

              <h3 className="text-xl font-bold text-[#0d1a13] mt-6 mb-3">3.3 Business Transfers</h3>
              <p className="text-slate-700">
                In the event of a merger, acquisition, or sale of assets, your information may be transferred to the acquiring entity.
              </p>
            </div>

            {/* Data Security */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-[#0d1a13] mb-4">4. Data Security</h2>
              <p className="text-slate-700 mb-4">
                We implement reasonable security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no internet transmission is completely secure, and we cannot guarantee absolute security.
              </p>
              <p className="text-slate-700">
                We maintain physical, electronic, and procedural safeguards consistent with international standards to protect your information.
              </p>
            </div>

            {/* Cookies */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-[#0d1a13] mb-4">5. Cookies and Tracking</h2>
              <p className="text-slate-700 mb-4">
                Our website uses cookies to enhance user experience and analyze site traffic. You can control cookie settings through your browser preferences. Disabling cookies may limit certain website functionality.
              </p>
            </div>

            {/* International Transfers */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-[#0d1a13] mb-4">6. International Data Transfers</h2>
              <p className="text-slate-700">
                As an international timber exporter, your information may be transferred to and processed in countries outside Cameroon, including the country where you are located. We ensure appropriate safeguards are in place for such transfers.
              </p>
            </div>

            {/* Your Rights */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-[#0d1a13] mb-4">7. Your Rights</h2>
              <p className="text-slate-700 mb-4">You have the right to:</p>
              <ul className="text-slate-700 space-y-2">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your information (subject to legal obligations)</li>
                <li>Opt-out of marketing communications</li>
                <li>Object to processing of your information</li>
                <li>Request a copy of your information</li>
              </ul>
            </div>

            {/* Data Retention */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-[#0d1a13] mb-4">8. Data Retention</h2>
              <p className="text-slate-700">
                We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, comply with legal obligations, resolve disputes, and enforce our agreements. Export documentation is retained according to Cameroon forestry regulations and international trade requirements.
              </p>
            </div>

            {/* Children's Privacy */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-[#0d1a13] mb-4">9. Children's Privacy</h2>
              <p className="text-slate-700">
                Our services are directed to businesses and commercial buyers. We do not knowingly collect information from individuals under 18 years of age.
              </p>
            </div>

            {/* Updates */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-[#0d1a13] mb-4">10. Changes to This Policy</h2>
              <p className="text-slate-700">
                We may update this Privacy Policy from time to time. The updated version will be indicated by a revised "Last Updated" date. We encourage you to review this policy periodically.
              </p>
            </div>

            {/* Contact */}
            <div className="bg-[#eaf4ed] border border-[#032f0e]/10 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <EnvelopeSimple className="h-6 w-6 text-[#032f0e]" weight="bold" />
                <h2 className="text-2xl font-bold text-[#0d1a13] m-0">11. Contact Us</h2>
              </div>
              <p className="text-slate-700 mb-4">
                If you have questions about this Privacy Policy or wish to exercise your rights, please contact us:
              </p>
              <div className="space-y-2 text-slate-700">
                <p><strong>{company.name}</strong></p>
                <p>Email: <a href={company.emailHref} className="text-[#032f0e] hover:text-[#d5920c]">{company.email}</a></p>
                <p>Phone: <a href={company.phoneHref} className="text-[#032f0e] hover:text-[#d5920c]">{company.phoneDisplay}</a></p>
                <p>WhatsApp: <a href={company.whatsappLink} target="_blank" rel="noopener noreferrer" className="text-[#032f0e] hover:text-[#d5920c]">{company.whatsapp}</a></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
