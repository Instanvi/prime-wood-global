"use client";

import React from "react";
import Link from "next/link";
import {
  Question,
  WhatsappLogo,
  EnvelopeSimple,
  ArrowRight,
  CheckCircle,
} from "@phosphor-icons/react";
import { faq, company } from "@/lib/content";

export default function FAQSection() {
  // Show only first 4 questions as preview
  const previewQuestions = faq.questions.slice(0, 4);

  return (
    <section id="faq" className="py-20 lg:py-28 bg-[#fbfbf8] border-b border-[#e4e2d8]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0d1a13] tracking-tight mb-4">
            Common Buyer Questions
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Quick answers about species, volumes, shipping, and documentation for international timber importers.
          </p>
        </div>

        {/* Preview Questions - Simple Cards */}
        <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-6 mb-12">
          {previewQuestions.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-md hover:border-[#d5920c]/30 transition-all"
            >
              <div className="flex items-start gap-3 mb-3">
                <CheckCircle className="h-5 w-5 text-[#d5920c] shrink-0 mt-0.5" weight="fill" />
                <h3 className="font-bold text-base text-[#0d1a13] leading-snug">
                  {item.question}
                </h3>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed line-clamp-2">
                {item.answer}
              </p>
            </div>
          ))}
        </div>

        {/* View All FAQ Button */}
        <div className="text-center mb-14">
          <Link
            href="/faq"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#032f0e] hover:bg-[#0a461b] text-white font-bold text-sm shadow-md transition-all"
          >
            <span>View All Questions</span>
            <ArrowRight className="h-4 w-4" weight="bold" />
          </Link>
        </div>

        {/* Bottom Help & Export Desk CTA Card */}
        <div className="max-w-4xl mx-auto rounded-2xl p-8 sm:p-10 bg-gradient-to-br from-[#06180e] via-[#092615] to-[#03200a] text-white border border-[#183825] shadow-xl text-center">
          <h3 className="text-2xl sm:text-3xl font-extrabold mb-3">
            Need Specific Export Information?
          </h3>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto mb-8 font-normal">
            Contact our export team for custom quotations, availability checks, and shipping schedules tailored to your requirements.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#d5920c] hover:bg-[#e5a118] text-[#06180e] font-bold text-sm shadow-lg shadow-[#d5920c]/25 transition-all w-full sm:w-auto"
            >
              <EnvelopeSimple className="h-5 w-5" weight="bold" />
              <span>Request Quote</span>
            </Link>

            <a
              href={company.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm shadow-md transition-all"
            >
              <WhatsappLogo className="h-5 w-5" weight="fill" />
              <span>WhatsApp Export Desk</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
