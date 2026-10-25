"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Boat,
  Anchor,
  FileText,
  ShieldCheck,
  Package,
  GlobeHemisphereWest,
  CheckCircle,
  ArrowRight,
  WhatsappLogo,
  EnvelopeSimple,
  CaretRight,
  Truck,
  CreditCard,
  ListChecks,
  Clock,
  MapPin,
} from "@phosphor-icons/react";
import { company } from "@/lib/content";

const portsData = [
  {
    name: "Port of Douala",
    type: "Cameroon Main Commercial Port",
    description:
      "Historically the principal gateway for Central African timber. Offers regular container carrier liner calls, established customs handling, and frequent departures to Europe, the Middle East, and Asia.",
    bestFor: "Standard 20ft / 40ft containerized shipments and regular monthly rotations",
    capacity: "21-25 tonnes per 20ft container (weight-limited for dense species)",
    frequency: "Weekly container vessel departures to major global hubs",
    image: "/images/douala_port.jpg"
  },
  {
    name: "Kribi Deep-Water Port",
    type: "Modern Deep-Sea Terminal",
    description:
      "Located directly on the Atlantic coastline south of Douala, Kribi accommodates large ocean-going dry bulk and container vessels without tidal limitations, expediting deep-draft departures.",
    bestFor: "Large volume contracts, deep-draft vessels, and direct ocean-liner routes",
    capacity: "Break-bulk and multi-container deep-draft vessels",
    frequency: "Direct liner services to Mediterranean, Northern Europe, and Asia",
    image: "/images/kribi-port.jpg"
  }
];

const documents = [
  {
    name: "Commercial Invoice & Packing List",
    desc: "Itemized piece counts, dimensions, volume in cubic meters (m³), and net weights",
    icon: FileText
  },
  {
    name: "Phytosanitary Certificate",
    desc: "Issued by Cameroon Ministry of Agriculture confirming quarantine inspection",
    icon: ShieldCheck
  },
  {
    name: "Certificate of Origin",
    desc: "Official proof of Cameroon origin for customs clearance in destination port",
    icon: CheckCircle
  },
  {
    name: "Ocean Bill of Lading (B/L)",
    desc: "Surrendered or 3/3 Original Ocean B/L with specified cargo release terms",
    icon: Boat
  },
  {
    name: "Forestry Waybills",
    desc: "Full legal chain-of-custody documentation under Cameroon forestry regulation",
    icon: ListChecks
  },
  {
    name: "Independent Survey (Optional)",
    desc: "Third-party quality and volume verification available upon buyer request",
    icon: Package
  }
];

const shippingProcess = [
  {
    step: "01",
    title: "Order Confirmation & Deposit",
    description:
      "Proforma Invoice issued detailing species, dimensions, volume, pricing, and delivery terms. Initial deposit secures production allocation.",
    duration: "1-2 days"
  },
  {
    step: "02",
    title: "Timber Preparation & Tallying",
    description:
      "Logs selected, sawn to specified dimensions, inspected, graded, measured, bundled, and strapped. Detailed tally sheets prepared.",
    duration: "7-14 days"
  },
  {
    step: "03",
    title: "Documentation Processing",
    description:
      "Phytosanitary inspection, Certificate of Origin application, forestry compliance verification, and customs pre-clearance.",
    duration: "3-5 days"
  },
  {
    step: "04",
    title: "Container Stuffing & Port Delivery",
    description:
      "Timber loaded into containers with proper dunnage, weight distribution, and securing. Containers delivered to Douala or Kribi port.",
    duration: "2-3 days"
  },
  {
    step: "05",
    title: "Customs Clearance & Vessel Loading",
    description:
      "Final customs formalities, port authority clearance, and cargo loaded onto scheduled vessel. Bill of Lading issued.",
    duration: "3-7 days"
  },
  {
    step: "06",
    title: "Ocean Transit & Discharge",
    description:
      "Container shipped to destination port. Transit time varies: 20-30 days Europe, 30-45 days Asia. Full document set transmitted to buyer.",
    duration: "20-45 days"
  }
];

const incoterms = [
  {
    term: "FOB (Free On Board)",
    port: "Douala or Kribi",
    description:
      "Seller delivers cargo on board the vessel at the named port. Buyer assumes all costs and risks from that point including ocean freight, insurance, and destination charges.",
    buyerResponsibility: "Ocean freight, marine insurance, import customs, destination port charges",
    sellerResponsibility: "Export packing, Cameroon customs, documentation, loading on vessel"
  },
  {
    term: "CFR (Cost and Freight)",
    port: "Named Destination Port",
    description:
      "Seller pays ocean freight to the named destination port. Risk transfers to buyer when goods are loaded on vessel. Buyer arranges marine insurance.",
    buyerResponsibility: "Marine insurance, import customs, destination port charges, inland transport",
    sellerResponsibility: "Export packing, Cameroon customs, documentation, ocean freight to destination"
  },
  {
    term: "CIF (Cost, Insurance & Freight)",
    port: "Named Destination Port",
    description:
      "Seller pays ocean freight and marine insurance to destination port. Most common for international timber buyers. Risk still transfers when loaded on vessel.",
    buyerResponsibility: "Import customs duties, destination port charges, inland transport",
    sellerResponsibility: "Export packing, Cameroon customs, documentation, ocean freight, marine insurance"
  }
];

const packagingStandards = [
  {
    title: "Heavy-Duty Steel Strapping",
    description: "Each bundle secured with anti-rust galvanized steel straps (minimum 2 per bundle, 4+ for heavy beams)"
  },
  {
    title: "Timber Dunnage & Spacing",
    description: "Proper spacing sticks for forklift handling and air circulation during transit"
  },
  {
    title: "End Protection",
    description: "Edge protectors and plastic end caps available on request for premium finishing grades"
  },
  {
    title: "Bundle Identification",
    description: "Weather-resistant paint marking with species code, dimensions, bundle number, and tally reference"
  },
  {
    title: "Container Loading Plan",
    description: "Weight distribution calculated for heavy species to prevent container overloading (max 21-25 tonnes)"
  },
  {
    title: "Moisture Barrier",
    description: "Kraft paper or plastic wrapping available for kiln-dried timber to protect against condensation"
  }
];

export default function ExportLogisticsPage() {
  return (
    <main className="min-h-screen bg-[#faf7f2]">
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0a2818] via-[#031d0d] to-[#06180e] text-white pt-20 pb-16 sm:pt-24 sm:pb-20 border-b border-[#0f381c]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/shipment.jpg"
            alt="Cameroon timber export logistics"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#021509]/95 via-[#021509]/85 to-[#021509]/70" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-300/80 mb-6">
            <Link href="/" className="hover:text-[#d5920c] transition-colors">
              Home
            </Link>
            <CaretRight className="h-3 w-3 text-slate-400" />
            <span className="text-[#d5920c]">Export & Logistics</span>
          </div>

          <div className="max-w-4xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#d5920c]/30 bg-[#031f0e]/60 px-4 py-2 shadow-sm backdrop-blur-md mb-6">
              <Boat className="h-5 w-5 text-[#d5920c]" weight="fill" />
              <span className="text-sm font-bold tracking-wide text-slate-100">
                Douala & Kribi Ports · International Shipping
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight mb-5">
              Export & Logistics{" "}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#ffe082] via-[#f5b324] to-[#d5920c]">
                from Cameroon
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl text-slate-200 leading-relaxed mb-8">
              Professional timber export through Douala and Kribi deep-water ports. We handle documentation, customs clearance, container stuffing, and maritime coordination for reliable international delivery.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#d5920c] hover:bg-[#e5a118] text-[#06180e] font-bold text-sm shadow-lg shadow-[#d5920c]/25 transition-all"
              >
                <EnvelopeSimple className="h-5 w-5" weight="bold" />
                <span>Request Shipping Quote</span>
              </Link>

              <a
                href={company.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-sm backdrop-blur-sm transition-all"
              >
                <WhatsappLogo className="h-5 w-5" weight="fill" />
                <span>WhatsApp Export Team</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* PORTS COMPARISON SECTION                                              */}
      {/* ===================================================================== */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#d5920c]/30 bg-[#fef8eb] px-4 py-1.5 mb-4">
              <Anchor className="h-4 w-4 text-[#d5920c]" weight="bold" />
              <span className="text-xs font-bold text-[#b87b08] uppercase tracking-wider">
                Cameroon Export Ports
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0d1a13] tracking-tight mb-4">
              Douala & Kribi Shipping Options
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Strategic dual-port access for containerized and break-bulk timber shipments to all major global destinations.
            </p>
          </div>

          {/* Ports Comparison Cards */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {portsData.map((port, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-[#fcfbf7] to-[#f4efe6] border border-[#e4e2d8] rounded-2xl overflow-hidden hover:shadow-xl transition-all group"
              >
                {/* Port Image */}
                <div className="relative h-56 overflow-hidden bg-slate-900">
                  <Image
                    src={port.image}
                    alt={port.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="inline-block px-3 py-1 rounded-lg bg-[#032f0e]/90 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider mb-2 border border-[#d5920c]/40">
                      {port.type}
                    </div>
                    <h3 className="text-2xl font-black text-white flex items-center gap-2">
                      <Anchor className="h-6 w-6 text-[#d5920c]" weight="fill" />
                      {port.name}
                    </h3>
                  </div>
                </div>

                {/* Port Details */}
                <div className="p-6 space-y-4">
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {port.description}
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-[#032f0e] shrink-0 mt-0.5" weight="fill" />
                      <div>
                        <span className="text-xs font-bold text-[#032f0e] block">Best For:</span>
                        <span className="text-sm text-slate-600">{port.bestFor}</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <Package className="h-5 w-5 text-[#032f0e] shrink-0 mt-0.5" weight="fill" />
                      <div>
                        <span className="text-xs font-bold text-[#032f0e] block">Capacity:</span>
                        <span className="text-sm text-slate-600">{port.capacity}</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <Clock className="h-5 w-5 text-[#032f0e] shrink-0 mt-0.5" weight="fill" />
                      <div>
                        <span className="text-xs font-bold text-[#032f0e] block">Frequency:</span>
                        <span className="text-sm text-slate-600">{port.frequency}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Shipping Routes Map Visual */}
          <div className="bg-gradient-to-br from-[#eaf4ed] to-[#d4e8da] rounded-2xl p-8 border border-[#0a461b]/20">
            <div className="flex items-start gap-4 mb-4">
              <GlobeHemisphereWest className="h-8 w-8 text-[#032f0e] shrink-0" weight="fill" />
              <div>
                <h3 className="text-2xl font-extrabold text-[#0d1a13] mb-2">
                  Global Shipping Routes & Transit Times
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Regular container services to major global hubs with reliable transit schedules.
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { region: "Northern Europe", ports: "Rotterdam, Antwerp, Hamburg", days: "25-30 days" },
                { region: "Mediterranean", ports: "Valencia, Piraeus, Istanbul", days: "20-25 days" },
                { region: "Middle East", ports: "Jebel Ali, Dammam, Aqaba", days: "25-35 days" },
                { region: "Asia Pacific", ports: "Shanghai, Qingdao, Singapore", days: "35-45 days" },
                { region: "Indian Subcontinent", ports: "Nhava Sheva, Mundra, Karachi", days: "30-40 days" },
                { region: "Americas", ports: "New York, Houston, Santos", days: "30-40 days" }
              ].map((route, idx) => (
                <div key={idx} className="bg-white rounded-lg p-4 border border-[#e4e2d8]">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="h-4 w-4 text-[#d5920c]" weight="fill" />
                    <span className="text-sm font-bold text-[#032f0e]">{route.region}</span>
                  </div>
                  <p className="text-xs text-slate-600 mb-2">{route.ports}</p>
                  <div className="inline-block px-2 py-1 rounded-md bg-[#032f0e] text-[#d5920c] text-xs font-bold">
                    {route.days}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* EXPORT DOCUMENTATION SECTION                                          */}
      {/* ===================================================================== */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-[#fcfbf7] to-[#f4efe6]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#d5920c]/30 bg-white px-4 py-1.5 mb-4">
              <FileText className="h-4 w-4 text-[#d5920c]" weight="bold" />
              <span className="text-xs font-bold text-[#b87b08] uppercase tracking-wider">
                Complete Documentation Package
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0d1a13] tracking-tight mb-4">
              Export Documentation Provided
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              International timber clearance requires strict documentation accuracy. We coordinate every certificate with national ministries and shipping lines.
            </p>
          </div>

          {/* Documents Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {documents.map((doc, idx) => {
              const Icon = doc.icon;
              return (
                <div
                  key={idx}
                  className="bg-white border border-[#e4e2d8] rounded-xl p-6 hover:shadow-lg hover:border-[#d5920c] transition-all group"
                >
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-12 h-12 rounded-lg bg-[#032f0e] flex items-center justify-center">
                      <Icon className="h-6 w-6 text-[#d5920c]" weight="fill" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-[#0d1a13] mb-2">
                        {doc.name}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {doc.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Additional Documentation Note */}
          <div className="bg-white rounded-xl border border-[#e4e2d8] p-8 text-center max-w-3xl mx-auto">
            <ShieldCheck className="h-10 w-10 text-[#d5920c] mx-auto mb-3" weight="fill" />
            <h4 className="text-lg font-bold text-[#0d1a13] mb-2">
              Third-Party Inspection Available
            </h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              Buyers may appoint independent inspection agencies (SGS, Bureau Veritas, Cotecna) for pre-shipment volume verification, species confirmation, and quality assessment. Inspection costs borne by buyer.
            </p>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* SHIPPING PROCESS TIMELINE                                             */}
      {/* ===================================================================== */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#d5920c]/30 bg-[#fef8eb] px-4 py-1.5 mb-4">
              <Truck className="h-4 w-4 text-[#d5920c]" weight="bold" />
              <span className="text-xs font-bold text-[#b87b08] uppercase tracking-wider">
                Shipping Process
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0d1a13] tracking-tight mb-4">
              From Order to Destination Port
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Transparent step-by-step process from quotation acceptance to cargo delivery at your discharge port.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative max-w-4xl mx-auto">
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[#e4e2d8]" />

            {/* Process Steps */}
            <div className="space-y-8">
              {shippingProcess.map((process, idx) => (
                <div key={idx} className="relative flex gap-6">
                  {/* Step Number Badge */}
                  <div className="shrink-0 w-16 h-16 rounded-full bg-[#032f0e] border-4 border-white shadow-lg flex items-center justify-center z-10">
                    <span className="text-xl font-black text-[#d5920c]">{process.step}</span>
                  </div>

                  {/* Step Content */}
                  <div className="flex-1 bg-gradient-to-br from-[#fcfbf7] to-[#f4efe6] border border-[#e4e2d8] rounded-xl p-6 hover:shadow-lg transition-all">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h3 className="text-lg font-bold text-[#0d1a13]">
                        {process.title}
                      </h3>
                      <span className="shrink-0 px-3 py-1 rounded-full bg-[#032f0e] text-[#d5920c] text-xs font-bold">
                        {process.duration}
                      </span>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {process.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Total Timeline Summary */}
          <div className="mt-12 bg-gradient-to-r from-[#03200a] to-[#083015] rounded-2xl p-8 text-center border border-[#0f381c] max-w-3xl mx-auto">
            <Clock className="h-10 w-10 text-[#d5920c] mx-auto mb-3" weight="fill" />
            <h3 className="text-2xl font-extrabold text-white mb-2">
              Total Lead Time: 4-8 Weeks
            </h3>
            <p className="text-sm text-slate-300 max-w-xl mx-auto">
              From confirmed order to vessel departure. Ocean transit time additional (20-45 days depending on destination). Rush orders and express processing available on request.
            </p>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* INCOTERMS & PAYMENT SECTION                                           */}
      {/* ===================================================================== */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-[#fcfbf7] to-[#f4efe6]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#d5920c]/30 bg-white px-4 py-1.5 mb-4">
              <CreditCard className="h-4 w-4 text-[#d5920c]" weight="bold" />
              <span className="text-xs font-bold text-[#b87b08] uppercase tracking-wider">
                Delivery Terms & Payment
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0d1a13] tracking-tight mb-4">
              Incoterms & Trade Conditions
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Standard international trade terms for timber export. Choose the arrangement that suits your logistics capabilities.
            </p>
          </div>

          {/* Incoterms Cards */}
          <div className="space-y-6 mb-12">
            {incoterms.map((term, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#e4e2d8] rounded-2xl p-8 hover:shadow-xl transition-all"
              >
                <div className="flex flex-col lg:flex-row gap-6">
                  {/* Term Header */}
                  <div className="lg:w-1/3">
                    <div className="inline-block px-4 py-2 rounded-lg bg-[#032f0e] text-[#d5920c] mb-3">
                      <span className="text-xl font-black">{term.term}</span>
                    </div>
                    <div className="text-sm font-bold text-slate-600 mb-2">
                      {term.port}
                    </div>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      {term.description}
                    </p>
                  </div>

                  {/* Responsibilities */}
                  <div className="lg:w-2/3 grid md:grid-cols-2 gap-4">
                    {/* Buyer Responsibility */}
                    <div className="bg-[#fef8eb] rounded-lg p-4 border border-[#f5e5c4]">
                      <span className="text-xs font-bold text-[#b87b08] uppercase tracking-wider block mb-2">
                        Buyer Responsibility
                      </span>
                      <p className="text-sm text-slate-700 leading-relaxed">
                        {term.buyerResponsibility}
                      </p>
                    </div>

                    {/* Seller Responsibility */}
                    <div className="bg-[#eaf4ed] rounded-lg p-4 border border-[#d4e8da]">
                      <span className="text-xs font-bold text-[#0a461b] uppercase tracking-wider block mb-2">
                        Seller Responsibility
                      </span>
                      <p className="text-sm text-slate-700 leading-relaxed">
                        {term.sellerResponsibility}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Payment Terms */}
          <div className="bg-white rounded-2xl border border-[#e4e2d8] p-8">
            <div className="flex items-start gap-4 mb-6">
              <CreditCard className="h-8 w-8 text-[#032f0e] shrink-0" weight="fill" />
              <div>
                <h3 className="text-2xl font-extrabold text-[#0d1a13] mb-2">
                  Standard Payment Terms
                </h3>
                <p className="text-sm text-slate-600">
                  International trade standards for timber export transactions.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-[#fcfbf7] border border-[#f0eee6] rounded-lg p-5">
                <h4 className="text-base font-bold text-[#032f0e] mb-2">
                  Letter of Credit (L/C)
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed mb-3">
                  Irrevocable L/C at sight from a recognized international bank. Most secure option for first-time transactions.
                </p>
                <div className="text-xs text-slate-500">
                  <CheckCircle className="h-4 w-4 text-[#d5920c] inline mr-1" weight="fill" />
                  Preferred for new buyers
                </div>
              </div>

              <div className="bg-[#fcfbf7] border border-[#f0eee6] rounded-lg p-5">
                <h4 className="text-base font-bold text-[#032f0e] mb-2">
                  Telegraphic Transfer (T/T)
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed mb-3">
                  30-50% deposit upon order confirmation, balance against copy of shipping documents and Bill of Lading.
                </p>
                <div className="text-xs text-slate-500">
                  <CheckCircle className="h-4 w-4 text-[#d5920c] inline mr-1" weight="fill" />
                  Available for established buyers
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* PACKAGING STANDARDS SECTION                                           */}
      {/* ===================================================================== */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#d5920c]/30 bg-[#fef8eb] px-4 py-1.5 mb-4">
              <Package className="h-4 w-4 text-[#d5920c]" weight="bold" />
              <span className="text-xs font-bold text-[#b87b08] uppercase tracking-wider">
                Export Packaging
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0d1a13] tracking-tight mb-4">
              Professional Packaging Standards
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Heavy-duty export packaging ensures cargo arrives in pristine condition regardless of ocean transit duration.
            </p>
          </div>

          {/* Packaging Standards Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {packagingStandards.map((standard, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-[#fcfbf7] to-[#f4efe6] border border-[#e4e2d8] rounded-xl p-6 hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle className="h-5 w-5 text-[#d5920c]" weight="fill" />
                  <h3 className="text-base font-bold text-[#0d1a13]">
                    {standard.title}
                  </h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {standard.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* CTA SECTION                                                           */}
      {/* ===================================================================== */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-[#fcfbf7] to-[#f4efe6]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#03200a] to-[#083015] rounded-2xl p-8 md:p-12 text-center border border-[#0f381c] shadow-xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#d5920c]/40 bg-[#062413] px-3.5 py-1 text-xs font-bold text-[#f5b324] uppercase tracking-wider mb-4">
              <ShieldCheck className="h-4 w-4" weight="fill" />
              <span>Professional Export Service</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
              Ready to Ship Cameroon Hardwood?
            </h3>

            <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed mb-8">
              Our export team handles every step from timber preparation to Bill of Lading issuance. Tell us your destination port and we'll provide FOB or CIF pricing with current ocean freight rates.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#d5920c] hover:bg-[#e5a118] text-[#06180e] font-bold text-sm shadow-lg shadow-[#d5920c]/25 transition-all w-full sm:w-auto"
              >
                <EnvelopeSimple className="h-5 w-5" weight="bold" />
                <span>Request Export Quote</span>
              </Link>

              <a
                href={company.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm shadow-md transition-all w-full sm:w-auto"
              >
                <WhatsappLogo className="h-5 w-5" weight="fill" />
                <span>WhatsApp Export Desk</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
