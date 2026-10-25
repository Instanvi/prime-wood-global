"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  List,
  X,
  EnvelopeSimple,
  WhatsappLogo,
  ArrowRight,
} from "@phosphor-icons/react";
import { Button } from "@/components/ui/Button";
import { company, nav } from "@/lib/content";

export function Header() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const navLinks = [
    { label: nav.species, href: "/timber-species" },
    { label: nav.sawnTimber, href: "/sawn-timber" },
    { label: nav.logs, href: "/timber-logs" },
    { label: nav.exportLogistics, href: "/export-logistics" },
    { label: nav.sourcing, href: "/responsible-sourcing" },
    { label: nav.faq, href: "/faq" },
    { label: nav.about, href: "/about-us" },
    { label: nav.contact, href: "/contact" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white">
      {/* Row 1: brand + contact + CTA */}
      <div className="border-b border-gray-200">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <Link href="/" className="flex shrink-0 items-center gap-3">
            <Image
              src="/images/primewoodlogo.png"
              alt={company.name}
              width={48}
              height={48}
              className="h-12 w-auto"
              priority
            />
            <div className="whitespace-nowrap leading-tight">
              <div className="text-xl font-bold text-[#032f0e]">
                {company.name}
              </div>
              <div className="text-sm text-gray-500">
                Cameroon Timber Exporter
              </div>
            </div>
          </Link>

          {/* Desktop contact + CTA */}
          <div className="hidden items-center gap-8 xl:flex">
            <a
              href={company.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 whitespace-nowrap text-base text-gray-700 transition-colors hover:text-[#032f0e]"
            >
              <WhatsappLogo className="h-5 w-5 text-[#25D366]" weight="fill" />
              {company.whatsapp}
            </a>
            <a
              href={company.emailHref}
              className="flex items-center gap-2 whitespace-nowrap text-base text-gray-700 transition-colors hover:text-[#032f0e]"
            >
              <EnvelopeSimple className="h-5 w-5 text-[#032f0e]" />
              {company.email}
            </a>
            <Button
              href="/request-quote"
              variant="primary"
              size="default"
              className="whitespace-nowrap"
            >
              {nav.requestQuote}
              <ArrowRight className="h-4 w-4" weight="bold" />
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="p-2 text-[#032f0e] xl:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileOpen}
          >
            {isMobileOpen ? (
              <X className="h-7 w-7" weight="bold" />
            ) : (
              <List className="h-7 w-7" weight="bold" />
            )}
          </button>
        </div>
      </div>

      {/* Row 2: desktop nav strip */}
      <nav className="hidden bg-[#032f0e] xl:block" aria-label="Main">
        <div className="mx-auto flex h-12 max-w-7xl items-center justify-between px-6">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="relative flex h-full items-center whitespace-nowrap text-base font-medium text-white/90 transition-colors hover:text-white
                         after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:origin-left after:scale-x-0 after:bg-[#d5920c] after:transition-transform hover:after:scale-x-100"
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      {/* Mobile drawer */}
      {isMobileOpen && (
        <div className="max-h-[calc(100vh-4rem)] overflow-y-auto border-b border-gray-200 bg-white xl:hidden">
          <div className="mx-auto max-w-7xl px-6 py-4">
            <div className="flex flex-col divide-y divide-gray-100">
              {navLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMobileOpen(false)}
                  className="py-3 text-base font-medium text-gray-800 transition-colors hover:text-[#032f0e]"
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="mt-4 flex flex-col gap-3">
              <Button
                href="/request-quote"
                onClick={() => setIsMobileOpen(false)}
                variant="primary"
                size="lg"
                className="w-full justify-center"
              >
                {nav.requestQuote}
                <ArrowRight className="h-4 w-4" weight="bold" />
              </Button>

              <a
                href={company.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileOpen(false)}
                className="flex items-center justify-center gap-2 rounded-lg bg-[#25D366] py-3 text-base font-semibold text-white"
              >
                <WhatsappLogo className="h-5 w-5" weight="fill" />
                {company.whatsapp}
              </a>

              <a
                href={company.emailHref}
                className="flex items-center justify-center gap-2 py-2 text-base text-gray-600"
              >
                <EnvelopeSimple className="h-5 w-5" />
                {company.email}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;