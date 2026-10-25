"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  WhatsappLogo,
  TreeEvergreen,
  ArrowRight,
  ShieldCheck,
} from "@phosphor-icons/react";
import { speciesList } from "@/lib/content";

export default function TimberSpeciesSection() {
  // Show first 6 species by default
  const filteredSpecies = speciesList.slice(0, 6);

  return (
    <section id="timber-species" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Species Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredSpecies.map((species) => (
            <Link
              key={species.id}
              href={`/timber-species#${species.id}`}
              className="group bg-white rounded-xl overflow-hidden border border-slate-200 hover:border-[#d5920c] shadow-sm hover:shadow-lg transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                {species.image ? (
                  <Image
                    src={species.image}
                    alt={species.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-[#0a2614]">
                    <TreeEvergreen className="h-12 w-12 text-[#d5920c] opacity-30" />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                {/* Badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-2 py-1 rounded-md text-xs font-semibold bg-[#06180e]/90 text-[#d5920c] backdrop-blur-sm">
                    {species.durability}
                  </span>
                </div>

                {/* Title Overlay */}
                <div className="absolute bottom-3 left-3 right-3">
                  <h3 className="text-xl font-bold text-white mb-0.5">
                    {species.name}
                  </h3>
                  <div className="text-xs text-slate-300 italic">
                    {species.scientificName}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <p className="text-sm text-slate-600 leading-relaxed mb-4 line-clamp-2">
                  {species.description}
                </p>

                {/* Key Specs */}
                <div className="space-y-2 mb-4 text-xs">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Density:</span>
                    <span className="font-semibold text-slate-800">{species.density}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Form:</span>
                    <span className="font-semibold text-[#032f0e]">{species.formsAvailable}</span>
                  </div>
                </div>

                {/* Uses */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {species.uses.slice(0, 2).map((use, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 rounded bg-slate-100 text-slate-700 text-xs font-medium"
                    >
                      {use}
                    </span>
                  ))}
                  {species.uses.length > 2 && (
                    <span className="px-2 py-1 rounded bg-slate-100 text-slate-500 text-xs">
                      +{species.uses.length - 2}
                    </span>
                  )}
                </div>

                {/* View Details */}
                <div className="flex items-center text-[#032f0e] font-semibold text-sm group-hover:text-[#d5920c] transition-colors">
                  <span>View Details</span>
                  <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" weight="bold" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center">
          <Link
            href="/timber-species"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#032f0e] text-white rounded-lg font-semibold hover:bg-[#0a461b] transition-colors"
          >
            <span>View All Species</span>
            <ArrowRight className="h-4 w-4" weight="bold" />
          </Link>
        </div>

        {/* Trust Banner */}
        <div className="mt-16 bg-gradient-to-r from-[#03200a] to-[#083015] rounded-xl p-8 text-white">
          <div className="flex items-start gap-4">
            <ShieldCheck className="h-6 w-6 text-[#d5920c] shrink-0 mt-1" weight="fill" />
            <div>
              <h3 className="text-xl font-bold mb-2">
                Need a species not listed?
              </h3>
              <p className="text-slate-300 text-sm mb-4 leading-relaxed">
                Cameroon hosts dozens of commercial hardwoods. Contact our export team about Dabema, Kossipo, Moabi, Movingui, or other species from our network.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-[#d5920c] font-semibold text-sm hover:text-[#f5b324] transition-colors"
              >
                <span>Submit Species Inquiry</span>
                <ArrowRight className="h-4 w-4" weight="bold" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
