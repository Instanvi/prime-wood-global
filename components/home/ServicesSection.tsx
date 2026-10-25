"use client";

import React from "react";
import {
  Boat,
  FileText,
  ShieldCheck,
  Package,
  GlobeHemisphereWest,
  Anchor,
  CheckCircle,
  ArrowRight,
  WhatsappLogo,
} from "@phosphor-icons/react";
import Button from "@/components/ui/Button";
import { logistics, company } from "@/lib/content";

export default function ServicesSection() {
  return (
    <section id="logistics" className="py-20 lg:py-28 bg-[#fbfbf8] border-b border-[#e4e2d8]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Dual Ports Showcase Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {logistics.ports.map((port, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-8 border border-[#e4e2d8] hover:border-[#d5920c] shadow-xs hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#032f0e] text-[#d5920c] flex items-center justify-center shrink-0 shadow-sm">
                  <Anchor className="h-6 w-6" weight="bold" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-[#0d1a13] group-hover:text-[#032f0e] transition-colors">
                    {port.name}
                  </h3>
                  <div className="text-xs font-bold text-[#d5920c] uppercase tracking-wider">
                    {port.type}
                  </div>
                </div>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                {port.description}
              </p>

              <div className="bg-[#fcfbf7] border border-[#f0eee6] rounded-xl p-4 text-xs">
                <span className="font-bold text-[#032f0e] block mb-1">Recommended for:</span>
                <span className="text-slate-700">{port.bestFor}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Complete Export Documentation Set */}
        <div className="bg-white rounded-2xl border border-[#e4e2d8] p-8 md:p-12 shadow-xs mb-14">
          <div className="max-w-3xl mb-8">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#d5920c] uppercase tracking-wider mb-2">
              <ShieldCheck className="h-4 w-4" weight="fill" />
              <span>Full Export Documentary Package</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-[#0d1a13] mb-3">
              Standard Documents Provided with Every Shipment
            </h3>
            <p className="text-sm sm:text-base text-slate-600 font-normal">
              International timber clearance requires strict documentation accuracy. We coordinate every certificate with national ministries and international shipping lines prior to vessel release.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {logistics.documents.map((doc, idx) => (
              <div
                key={idx}
                className="bg-[#fcfbf7] border border-[#f0eee6] rounded-xl p-5 hover:bg-white hover:border-[#d5920c] transition-colors"
              >
                <div className="flex items-center gap-2.5 text-[#032f0e] font-bold text-sm mb-2">
                  <FileText className="h-5 w-5 text-[#d5920c] shrink-0" weight="fill" />
                  <span>{doc.name}</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {doc.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Shipping Checklist Strip */}
        <div className="bg-gradient-to-r from-[#03200a] to-[#0a3818] rounded-2xl p-8 sm:p-10 text-white shadow-xl border border-[#144d28]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 flex-1">
              <h4 className="text-xl sm:text-2xl font-black text-white">
                Need detailed export and logistics information?
              </h4>
              <p className="text-slate-300 text-sm max-w-xl font-normal">
                Explore our comprehensive export guide covering shipping process, documentation, incoterms, payment terms, and packaging standards for international timber delivery.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
              <Button
                href="/export-logistics"
                variant="primary"
                size="default"
                className="font-bold text-xs"
              >
                <span>View Export & Logistics Guide</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
              <a
                href={company.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#25D366] text-white font-bold text-xs shadow-sm hover:bg-[#20ba59] transition-colors"
              >
                <WhatsappLogo className="h-4 w-4" weight="fill" />
                <span>WhatsApp Export Team</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
