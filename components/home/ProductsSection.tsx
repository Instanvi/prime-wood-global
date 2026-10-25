"use client";

import React from "react";
import Image from "next/image";
import {
  Stack,
  Ruler,
  Scissors,
  CheckCircle,
  ArrowRight,
  ShieldCheck,
  WhatsappLogo,
  TreeEvergreen,
} from "@phosphor-icons/react";
import Button from "@/components/ui/Button";
import { productsList, company } from "@/lib/content";

export default function ProductsSection() {
  const getProductIcon = (id: string) => {
    switch (id) {
      case "logs":
        return <TreeEvergreen className="h-6 w-6" weight="fill" />;
      case "rough-sawn":
        return <Stack className="h-6 w-6" weight="fill" />;
      case "dimensioned":
      default:
        return <Ruler className="h-6 w-6" weight="fill" />;
    }
  };

  // Better image mapping with available images
  const imageMap: Record<string, string> = {
    "logs": "/images/logs-BtgG5hd2.webp",
    "rough-sawn": "/images/sawn_log.jpg",
    "dimensioned": "/images/sawn_log1.jpg"
  };

  return (
    <section id="products" className="py-20 lg:py-28 bg-white border-b border-[#e4e2d8]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0d1a13] tracking-tight mb-4">
            Supplied in the Form Your Operation Demands
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Whether you operate your own sawmill, a secondary joinery facility, or require ready-to-install structural timbers, we supply certified hardwood in three primary export forms.
          </p>
        </div>

        {/* Products 3-Column Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {productsList.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl overflow-hidden border border-[#e4e2d8] hover:border-[#d5920c] shadow-xs hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Product Image Frame */}
              <div>
                <div className="relative h-64 overflow-hidden bg-slate-900">
                  <Image
                    src={imageMap[product.id] || product.image}
                    alt={product.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                  {/* Icon Badge */}
                  <div className="absolute top-4 left-4 w-12 h-12 bg-[#06180e]/85 backdrop-blur-md rounded-xl flex items-center justify-center text-[#d5920c] border border-[#d5920c]/40 shadow-sm">
                    {getProductIcon(product.id)}
                  </div>

                  {/* Category Pill */}
                  <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-md rounded-lg text-xs font-bold text-[#032f0e]">
                    {product.badge}
                  </div>

                  {/* Title Overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-black text-white group-hover:text-[#d5920c] transition-colors leading-tight">
                      {product.title}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {product.description}
                  </p>

                  {/* Spec List */}
                  <div className="pt-2 border-t border-slate-100 space-y-2">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Standard Parameters:
                    </div>
                    {product.specs.map((spec, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle className="h-4 w-4 text-[#d5920c] shrink-0 mt-0.5" weight="fill" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 pt-0">
                <Button
                  href={
                    product.id === "logs" 
                      ? "/timber-logs" 
                      : product.id === "rough-sawn" || product.id === "dimensioned" 
                        ? "/sawn-timber" 
                        : "#contact"
                  }
                  variant="primary"
                  size="default"
                  className="w-full justify-center font-bold text-xs"
                >
                  <span>
                    {product.id === "logs" || product.id === "rough-sawn" || product.id === "dimensioned" 
                      ? "View Specifications" 
                      : `Inquire for ${product.title}`}
                  </span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Availability & Specification Notice Box */}
        <div className="bg-gradient-to-br from-[#fcfbf7] to-[#f4efe6] border border-[#e4e2d8] rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto shadow-xs">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#d5920c] uppercase tracking-wider mb-3">
            <ShieldCheck className="h-4 w-4" weight="fill" />
            <span>Operational Integrity Guarantee</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0d1a13] mb-4">
            Stock Availability Confirmed Before Quotation
          </h3>

          <p className="text-sm sm:text-base text-slate-700 leading-relaxed max-w-2xl mx-auto mb-8 font-normal">
            Available log diameters, sawn dimensions, moisture levels (Green, Air-Dried, or Kiln-Dried), and cutting capacities change with forest cycles. We confirm actual log yard inventory before finalizing any commercial quote.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              href="#contact"
              variant="forest"
              size="lg"
              className="w-full sm:w-auto font-bold"
            >
              <span>Request Custom Dimensions</span>
              <ArrowRight className="h-4 w-4" />
            </Button>

            <a
              href={company.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#25D366] text-white font-bold text-sm shadow-sm hover:bg-[#20ba59] transition-all"
            >
              <WhatsappLogo className="h-5 w-5" weight="fill" />
              <span>Discuss via WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
