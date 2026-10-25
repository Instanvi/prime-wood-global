"use client";

import React from "react";
import Image from "next/image";
import {
  ShieldCheck,
  TreeEvergreen,
  CheckCircle,
  FileText,
  Certificate,
  Eye,
  ArrowRight,
} from "@phosphor-icons/react";
import Button from "@/components/ui/Button";
import { sourcing, company } from "@/lib/content";

export default function SourcingSection() {
  const getPillarIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Certificate className="h-6 w-6 text-[#d5920c]" weight="fill" />;
      case 1:
        return <FileText className="h-6 w-6 text-[#d5920c]" weight="fill" />;
      case 2:
        return <TreeEvergreen className="h-6 w-6 text-[#d5920c]" weight="fill" />;
      case 3:
      default:
        return <Eye className="h-6 w-6 text-[#d5920c]" weight="fill" />;
    }
  };

  return (
    <section id="sourcing" className="relative py-20 lg:py-28 bg-[#04140a] text-white overflow-hidden border-b border-[#0f3a1d]">
      {/* Background Image Texture */}
      <div className="absolute inset-0 opacity-15">
        <Image
          src="/images/3962b-1.jpg"
          alt="Cameroon forestry and responsible timber tracking"
          fill
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#04140a] via-[#04140a]/90 to-[#03200a]"></div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/10 backdrop-blur-md border border-[#d5920c]/40 rounded-full mb-4">
            <ShieldCheck className="h-4 w-4 text-[#d5920c]" weight="fill" />
            <span className="text-xs sm:text-sm font-bold text-[#d5920c] uppercase tracking-wider">
              {sourcing.badge}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            {sourcing.title}
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            {sourcing.subtitle}
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {sourcing.pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-white/5 backdrop-blur-md border border-white/10 hover:border-[#d5920c]/60 rounded-2xl p-6 transition-all duration-300 hover:bg-white/10 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#062613] border border-[#145e28]/50 flex items-center justify-center mb-5 shadow-xs">
                  {getPillarIcon(idx)}
                </div>
                <h3 className="text-xl font-bold text-white mb-2.5">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  {pillar.desc}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-white/10 flex items-center gap-1.5 text-xs text-[#d5920c] font-semibold">
                <CheckCircle className="h-4 w-4" weight="fill" />
                <span>Verified Compliance</span>
              </div>
            </div>
          ))}
        </div>

        {/* Buyer Pre-Loading Audit Notice */}
        <div className="bg-gradient-to-r from-[#0c2618] to-[#06180e] rounded-2xl border border-[#d5920c]/30 p-8 sm:p-10 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <h4 className="text-xl sm:text-2xl font-black text-white">
              FLEGT Licensing & Full Traceability Documentation
            </h4>
            <p className="text-sm text-slate-300 max-w-2xl font-normal leading-relaxed">
              Every shipment backed by FLEGT licenses (EU destinations), chain-of-custody tracking, and open pre-shipment yard inspections. Learn about our comprehensive responsible sourcing framework.
            </p>
          </div>

          <Button
            href="/responsible-sourcing"
            variant="primary"
            size="default"
            className="shrink-0 font-bold text-xs"
          >
            <span>View Sourcing Details</span>
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
