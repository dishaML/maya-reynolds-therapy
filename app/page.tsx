"use client";

import { useState } from "react";
import Script from "next/script";

// ---------------------------------------------------------------------------
// Structured data — LocalBusiness + Person schema for Google rich results
// ---------------------------------------------------------------------------
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://mayareynoldspsyd.com/#business",
      name: "Maya Reynolds, PsyD",
      description:
        "Licensed clinical psychologist offering warm, collaborative therapy for adults navigating anxiety, panic, trauma, and burnout.",
      url: "https://mayareynoldspsyd.com",
      telephone: "",
      email: "maya@mayareynoldspsyd.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "123th Street 45 W",
        addressLocality: "Santa Monica",
        addressRegion: "CA",
        postalCode: "90401",
        addressCountry: "US",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 34.0195,
        longitude: -118.4912,
      },
      openingHours: "Mo-Fr 09:00-18:00",
      priceRange: "$$",
      image: "https://mayareynoldspsyd.com/images/maya-portrait.jpg",
      sameAs: [],
    },
    {
      "@type": "Person",
      "@id": "https://mayareynoldspsyd.com/#person",
      name: "Maya Reynolds",
      honorificSuffix: "PsyD",
      jobTitle: "Licensed Clinical Psychologist",
      worksFor: { "@id": "https://mayareynoldspsyd.com/#business" },
      image: "https://mayareynoldspsyd.com/images/maya-portrait.jpg",
    },
  ],
};

// ---------------------------------------------------------------------------
// Page Component
// ---------------------------------------------------------------------------
export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#f7f4ef] text-[#30302d]">
      {/* Structured Data */}
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ------------------------------------------------------------------ */}
      {/* Navigation                                                          */}
      {/* ------------------------------------------------------------------ */}
      <header className="w-full border-b border-[#ded9d0] bg-[#f7f4ef] sticky top-0 z-50">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">

          {/* Logo */}
          <a
            href="#hero"
            className="font-serif text-2xl tracking-wide text-[#30302d]"
            aria-label="Maya Reynolds, PsyD — home"
          >
            Maya Reynolds, PsyD
          </a>

          {/* Desktop Navigation */}
          <nav aria-label="Primary navigation" className="hidden items-center gap-10 md:flex">
            <a
              href="#about"
              className="text-sm tracking-wide transition hover:text-[#756b60]"
            >
              About
            </a>

            <a
              href="#services"
              className="text-sm tracking-wide transition hover:text-[#756b60]"
            >
              Services
            </a>

            <a
              href="#office"
              className="text-sm tracking-wide transition hover:text-[#756b60]"
            >
              Our Office
            </a>

            <a
              href="#faq"
              className="text-sm tracking-wide transition hover:text-[#756b60]"
            >
              FAQ
            </a>

            <a
              href="#contact"
              className="rounded-full bg-[#30302d] px-6 py-3 text-sm text-white transition hover:bg-[#4a4945]"
            >
              Book an Appointment
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            id="mobile-menu-toggle"
            className="rounded-full border border-[#cfc9c0] px-4 py-2 text-sm md:hidden"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
          >
            {mobileMenuOpen ? "Close" : "Menu"}
          </button>
        </div>

        {/* Mobile Menu Drawer */}
        {mobileMenuOpen && (
          <nav
            id="mobile-menu"
            aria-label="Mobile navigation"
            className="border-t border-[#ded9d0] bg-[#f7f4ef] md:hidden"
          >
            <div className="flex flex-col divide-y divide-[#ede8e1] px-6">
              {[
                { href: "#about", label: "About" },
                { href: "#services", label: "Services" },
                { href: "#office", label: "Our Office" },
                { href: "#faq", label: "FAQ" },
              ].map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  className="py-4 text-sm tracking-wide transition hover:text-[#756b60]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {label}
                </a>
              ))}
              <a
                href="#contact"
                className="my-4 inline-flex items-center justify-center rounded-full bg-[#30302d] px-7 py-4 text-sm font-medium text-white transition hover:bg-[#4a4945]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Book an Appointment
              </a>
            </div>
          </nav>
        )}
      </header>


      {/* ------------------------------------------------------------------ */}
      {/* Hero Section                                                        */}
      {/* ------------------------------------------------------------------ */}
      <section
        id="hero"
        aria-labelledby="hero-heading"
        className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:px-10 lg:py-24"
      >
        {/* Hero Text */}
        <div className="max-w-2xl">
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.25em] text-[#756b60]">
            THERAPY FOR ADULTS IN SANTA MONICA &amp; ACROSS CALIFORNIA
          </p>

          <h1
            id="hero-heading"
            className="font-serif text-5xl leading-[1.05] tracking-tight text-[#30302d] sm:text-6xl lg:text-7xl"
          >
            You don&apos;t have to keep
            <span className="block italic">
              holding everything together.
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-8 text-[#625f59] sm:text-lg">
            Warm, collaborative therapy for adults navigating anxiety, panic,
            trauma, burnout, and the pressure to keep everything together.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-[#30302d] px-7 py-4 text-sm font-medium text-white transition hover:bg-[#4a4945]"
            >
              Schedule a Consultation
            </a>

            <a
              href="#about"
              className="inline-flex items-center justify-center rounded-full border border-[#aaa39a] px-7 py-4 text-sm font-medium text-[#30302d] transition hover:bg-[#ebe6df]"
            >
              Learn More
            </a>
          </div>

          <p className="mt-6 text-xs leading-6 text-[#817b73]">
            In-person therapy in Santa Monica · Secure telehealth throughout
            California
          </p>
        </div>

        {/* Hero Image */}
        <div className="relative">
          <div className="overflow-hidden rounded-[2rem]">
            <img
              src="/images/office-1.jpg"
              alt="Warm and welcoming therapy office with natural light"
              width={720}
              height={480}
              className="h-[360px] w-full object-cover transition duration-500 hover:scale-105"
              loading="eager"
              fetchPriority="high"
            />
          </div>

          {/* Small floating card */}
          <div className="absolute bottom-6 left-6 max-w-[260px] rounded-2xl bg-[#f7f4ef]/95 p-5 shadow-lg backdrop-blur-sm">
            <p className="font-serif text-xl leading-tight">
              A calm space to slow down, reconnect, and feel understood.
            </p>
          </div>
        </div>
      </section>


      {/* ------------------------------------------------------------------ */}
      {/* Introduction strip                                                  */}
      {/* ------------------------------------------------------------------ */}
      <section
        aria-label="Introduction"
        className="border-y border-[#ded9d0] bg-[#eee9e1]"
      >
        <div className="mx-auto max-w-7xl px-6 py-10 lg:px-10">
          <p className="text-center font-serif text-2xl leading-relaxed text-[#403e39] sm:text-3xl">
            Therapy can be a place to understand what you&apos;re carrying —
            and find a more sustainable way forward.
          </p>
        </div>
      </section>


      {/* ------------------------------------------------------------------ */}
      {/* Who I Work With                                                     */}
      {/* ------------------------------------------------------------------ */}
      <section
        id="about"
        aria-labelledby="about-heading"
        className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28"
      >
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">

          {/* Section Heading */}
          <div>
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.25em] text-[#756b60]">
              Who I Work With
            </p>

            <h2
              id="about-heading"
              className="font-serif text-4xl leading-tight text-[#30302d] sm:text-5xl"
            >
              You can be doing well on the outside and still need support.
            </h2>
          </div>

          {/* Section Copy */}
          <div className="max-w-2xl">
            <p className="text-lg leading-8 text-[#625f59]">
              Many of my clients are thoughtful, capable, and high-achieving.
              They may be functioning well in their careers and relationships,
              while privately feeling exhausted, overwhelmed, or stuck in
              patterns of worry and overthinking.
            </p>

            <p className="mt-6 text-lg leading-8 text-[#625f59]">
              Therapy can offer a space to slow down, understand what is
              happening beneath the surface, and develop more sustainable ways
              of living.
            </p>
          </div>
        </div>


        {/* Services Cards */}
        <div
          id="services"
          className="mt-16 grid gap-6 md:grid-cols-3"
        >

          {/* Card 1 */}
          <article className="rounded-[1.5rem] border border-[#d9d3ca] bg-[#f3eee7] p-8">
            <div
              aria-hidden="true"
              className="mb-10 flex h-12 w-12 items-center justify-center rounded-full border border-[#bdb5aa] font-serif text-xl"
            >
              01
            </div>

            <h3 className="font-serif text-3xl text-[#30302d]">
              Anxiety &amp; Panic
            </h3>

            <p className="mt-5 leading-7 text-[#625f59]">
              Support for constant worry, racing thoughts, panic, tension,
              difficulty sleeping, and the feeling that you are always bracing
              for something to go wrong.
            </p>

            <a
              href="#contact"
              className="mt-7 inline-block text-sm font-medium underline underline-offset-4 hover:text-[#756b60]"
            >
              Explore therapy
            </a>
          </article>


          {/* Card 2 */}
          <article className="rounded-[1.5rem] border border-[#d9d3ca] bg-[#f3eee7] p-8">
            <div
              aria-hidden="true"
              className="mb-10 flex h-12 w-12 items-center justify-center rounded-full border border-[#bdb5aa] font-serif text-xl"
            >
              02
            </div>

            <h3 className="font-serif text-3xl text-[#30302d]">
              Trauma &amp; EMDR
            </h3>

            <p className="mt-5 leading-7 text-[#625f59]">
              Carefully paced trauma therapy focused on safety, stabilization,
              regulation, and understanding how earlier experiences may still
              affect your relationships and sense of self.
            </p>

            <a
              href="#contact"
              className="mt-7 inline-block text-sm font-medium underline underline-offset-4 hover:text-[#756b60]"
            >
              Explore therapy
            </a>
          </article>


          {/* Card 3 */}
          <article className="rounded-[1.5rem] border border-[#d9d3ca] bg-[#f3eee7] p-8">
            <div
              aria-hidden="true"
              className="mb-10 flex h-12 w-12 items-center justify-center rounded-full border border-[#bdb5aa] font-serif text-xl"
            >
              03
            </div>

            <h3 className="font-serif text-3xl text-[#30302d]">
              Burnout &amp; Perfectionism
            </h3>

            <p className="mt-5 leading-7 text-[#625f59]">
              A space for professionals, entrepreneurs, and creatives who feel
              disconnected from themselves after years of pushing through stress
              and high internal pressure.
            </p>

            <a
              href="#contact"
              className="mt-7 inline-block text-sm font-medium underline underline-offset-4 hover:text-[#756b60]"
            >
              Explore therapy
            </a>
          </article>

        </div>
      </section>


      {/* ------------------------------------------------------------------ */}
      {/* How I Work                                                          */}
      {/* ------------------------------------------------------------------ */}
      <section
        aria-labelledby="how-i-work-heading"
        className="bg-[#e9e4dc]"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:px-10 lg:py-28">

          {/* Image */}
          <div className="overflow-hidden rounded-[2rem]">
            <img
              src="/images/office-2.jpg"
              alt="Comfortable therapy office seating area"
              width={720}
              height={480}
              className="h-[360px] w-full object-cover transition duration-500 hover:scale-105"
              loading="lazy"
            />
          </div>

          {/* Text */}
          <div className="max-w-xl">
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.25em] text-[#756b60]">
              How I Work
            </p>

            <h2
              id="how-i-work-heading"
              className="font-serif text-4xl leading-tight text-[#30302d] sm:text-5xl"
            >
              Practical tools, with space for depth and reflection.
            </h2>

            <p className="mt-7 text-lg leading-8 text-[#625f59]">
              I take a warm, collaborative, and grounded approach to therapy.
              Sessions are structured enough to feel supportive while still
              leaving room to slow down and explore what is underneath the
              surface.
            </p>

            <p className="mt-6 text-lg leading-8 text-[#625f59]">
              I integrate evidence-based approaches including cognitive
              behavioral therapy, EMDR, mindfulness-based practices, and
              body-oriented techniques.
            </p>

            <p className="mt-6 text-lg leading-8 text-[#625f59]">
              Together, we can work toward greater insight, resilience,
              emotional regulation, and a stronger relationship with yourself.
            </p>

            <a
              href="#about"
              className="mt-8 inline-flex rounded-full bg-[#30302d] px-7 py-4 text-sm font-medium text-white transition hover:bg-[#4a4945]"
            >
              Learn More About My Approach
            </a>
          </div>

        </div>
      </section>


      {/* ------------------------------------------------------------------ */}
      {/* Our Office                                                          */}
      {/* ------------------------------------------------------------------ */}
      <section
        id="office"
        aria-labelledby="office-heading"
        className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28"
      >
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

          {/* Office Information */}
          <div className="max-w-xl">
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.25em] text-[#756b60]">
              Our Office
            </p>

            <h2
              id="office-heading"
              className="font-serif text-4xl leading-tight text-[#30302d] sm:text-5xl"
            >
              A quiet place to slow down and feel at ease.
            </h2>

            <p className="mt-7 text-lg leading-8 text-[#625f59]">
              My Santa Monica office is designed to feel calm, private, and
              grounding. Natural light, comfortable furnishings, and an
              uncluttered environment create space to settle in and focus on
              the work of therapy.
            </p>

            <p className="mt-6 text-lg leading-8 text-[#625f59]">
              I offer both in-person therapy from my Santa Monica office and
              secure telehealth sessions for clients located throughout
              California.
            </p>

            <address className="mt-8 border-l border-[#aaa39a] pl-6 not-italic">
              <p className="text-sm uppercase tracking-[0.15em] text-[#756b60]">
                Location
              </p>

              <p className="mt-2 font-serif text-xl text-[#30302d]">
                123th Street 45 W
                <br />
                Santa Monica, CA 90401
              </p>
            </address>

            <div className="mt-7 flex flex-wrap gap-3">
              <span className="rounded-full border border-[#c9c2b8] px-5 py-2 text-sm">
                In-person therapy
              </span>

              <span className="rounded-full border border-[#c9c2b8] px-5 py-2 text-sm">
                Secure telehealth
              </span>

              <span className="rounded-full border border-[#c9c2b8] px-5 py-2 text-sm">
                California
              </span>
            </div>
          </div>


          {/* Office Images */}
          <div className="grid gap-5 sm:grid-cols-2">

            <div className="overflow-hidden rounded-[2rem] sm:translate-y-8">
              <img
                src="/images/office-1.jpg"
                alt="Warm and welcoming therapy office"
                width={480}
                height={360}
                className="h-[360px] w-full object-cover transition duration-500 hover:scale-105"
                loading="lazy"
              />
            </div>

            <div className="overflow-hidden rounded-[2rem]">
              <img
                src="/images/office-2.jpg"
                alt="Private and comfortable therapy office"
                width={480}
                height={360}
                className="h-[360px] w-full object-cover transition duration-500 hover:scale-105"
                loading="lazy"
              />
            </div>

          </div>

        </div>
      </section>


      {/* ------------------------------------------------------------------ */}
      {/* About Dr. Maya                                                      */}
      {/* ------------------------------------------------------------------ */}
      <section
        id="about-dr-maya"
        aria-labelledby="about-maya-heading"
        className="bg-[#f3eee7]"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-10 lg:py-28">

          {/* Portrait */}
          <div className="mx-auto w-full max-w-md">
            <div className="overflow-hidden rounded-[2rem]">
              <img
                src="/images/maya-portrait.jpg"
                alt="Dr. Maya Reynolds, Licensed Clinical Psychologist"
                width={480}
                height={520}
                className="h-[520px] w-full object-cover"
                loading="lazy"
              />
            </div>

            <div className="mt-5">
              <p className="font-serif text-2xl text-[#30302d]">
                Dr. Maya Reynolds, PsyD
              </p>

              <p className="mt-1 text-sm text-[#756b60]">
                Licensed Clinical Psychologist
              </p>
            </div>
          </div>


          {/* About Text */}
          <div className="max-w-2xl">
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.25em] text-[#756b60]">
              About Dr. Maya
            </p>

            <h2
              id="about-maya-heading"
              className="font-serif text-4xl leading-tight text-[#30302d] sm:text-5xl"
            >
              A warm, collaborative space for meaningful change.
            </h2>

            <p className="mt-7 text-lg leading-8 text-[#625f59]">
              I&apos;m a licensed clinical psychologist based in Santa Monica,
              California, offering therapy for adults who feel overwhelmed by
              anxiety, stress, or the lingering effects of past experiences.
            </p>

            <p className="mt-6 text-lg leading-8 text-[#625f59]">
              Many of the people I work with are high-achieving, thoughtful,
              and self-aware—but internally feel exhausted, stuck in
              overthinking, or emotionally on edge.
            </p>

            <p className="mt-6 text-lg leading-8 text-[#625f59]">
              My work often focuses on anxiety, panic, trauma, and burnout. I
              also support people navigating perfectionism, high internal
              pressure, and the impact of earlier life experiences on their
              relationships, confidence, and sense of safety.
            </p>

            <p className="mt-6 text-lg leading-8 text-[#625f59]">
              I believe therapy works best when clients feel respected,
              understood, and actively involved in the process. My goal is not
              just symptom relief, but helping clients develop insight,
              resilience, and a stronger relationship with themselves over time.
            </p>

            {/* Approach Tags */}
            <div className="mt-8 flex flex-wrap gap-3" aria-label="Therapy approaches used">
              <span className="rounded-full border border-[#c9c2b8] px-5 py-2 text-sm">CBT</span>
              <span className="rounded-full border border-[#c9c2b8] px-5 py-2 text-sm">EMDR</span>
              <span className="rounded-full border border-[#c9c2b8] px-5 py-2 text-sm">Mindfulness</span>
              <span className="rounded-full border border-[#c9c2b8] px-5 py-2 text-sm">Body-oriented techniques</span>
            </div>
          </div>

        </div>
      </section>


      {/* ------------------------------------------------------------------ */}
      {/* FAQ                                                                 */}
      {/* ------------------------------------------------------------------ */}
      <section
        id="faq"
        aria-labelledby="faq-heading"
        className="mx-auto max-w-5xl px-6 py-20 lg:py-28"
      >
        <div className="text-center">
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.25em] text-[#756b60]">
            Frequently Asked Questions
          </p>

          <h2
            id="faq-heading"
            className="font-serif text-4xl leading-tight text-[#30302d] sm:text-5xl"
          >
            A few things you may be wondering.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#625f59]">
            Starting therapy can bring up questions. Here are a few common
            things to know before taking the next step.
          </p>
        </div>

        <div className="mt-14 divide-y divide-[#d9d3ca] border-y border-[#d9d3ca]">

          <details className="group py-7">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-serif text-xl text-[#30302d] sm:text-2xl">
              Do you offer in-person and telehealth sessions?
              <span className="text-2xl transition-transform group-open:rotate-45" aria-hidden="true">+</span>
            </summary>
            <p className="mt-5 max-w-3xl leading-7 text-[#625f59]">
              Yes. I offer in-person therapy from my Santa Monica office and
              secure telehealth sessions for clients located throughout
              California.
            </p>
          </details>

          <details className="group py-7">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-serif text-xl text-[#30302d] sm:text-2xl">
              Who do you work with?
              <span className="text-2xl transition-transform group-open:rotate-45" aria-hidden="true">+</span>
            </summary>
            <p className="mt-5 max-w-3xl leading-7 text-[#625f59]">
              I work with adults, including professionals, entrepreneurs, and
              creatives who may be experiencing anxiety, panic, trauma,
              burnout, perfectionism, or high internal pressure.
            </p>
          </details>

          <details className="group py-7">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-serif text-xl text-[#30302d] sm:text-2xl">
              What approaches do you use?
              <span className="text-2xl transition-transform group-open:rotate-45" aria-hidden="true">+</span>
            </summary>
            <p className="mt-5 max-w-3xl leading-7 text-[#625f59]">
              My approach integrates evidence-based methods including
              cognitive-behavioral therapy (CBT), EMDR, mindfulness-based
              practices, and body-oriented techniques.
            </p>
          </details>

          <details className="group py-7">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-serif text-xl text-[#30302d] sm:text-2xl">
              How do you approach trauma therapy?
              <span className="text-2xl transition-transform group-open:rotate-45" aria-hidden="true">+</span>
            </summary>
            <p className="mt-5 max-w-3xl leading-7 text-[#625f59]">
              Trauma work is paced carefully, with an emphasis on safety,
              stabilization, and helping clients feel more regulated in their
              daily lives—not just during sessions.
            </p>
          </details>

          <details className="group py-7">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-serif text-xl text-[#30302d] sm:text-2xl">
              What happens when I reach out?
              <span className="text-2xl transition-transform group-open:rotate-45" aria-hidden="true">+</span>
            </summary>
            <p className="mt-5 max-w-3xl leading-7 text-[#625f59]">
              Reaching out is simply the first step toward finding out whether
              therapy feels like the right fit. You can use the appointment
              button below to begin the conversation.
            </p>
          </details>

        </div>
      </section>


      {/* ------------------------------------------------------------------ */}
      {/* Contact / Appointment CTA                                           */}
      {/* ------------------------------------------------------------------ */}
      <section
        id="contact"
        aria-labelledby="contact-heading"
        className="bg-[#30302d] text-[#f7f4ef]"
      >
        <div className="mx-auto max-w-5xl px-6 py-20 text-center lg:px-10 lg:py-28">

          <p className="mb-5 text-xs font-medium uppercase tracking-[0.25em] text-[#c9c2b8]">
            Take the Next Step
          </p>

          <h2
            id="contact-heading"
            className="mx-auto max-w-3xl font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl"
          >
            You don&apos;t have to figure everything out on your own.
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-[#d4d0c9]">
            If you&apos;re looking for a therapist who combines practical tools
            with depth-oriented work, I may be a good fit. Let&apos;s begin
            with a conversation.
          </p>

          <a
            href="mailto:maya@mayareynoldspsyd.com"
            className="mt-9 inline-flex rounded-full bg-[#f7f4ef] px-8 py-4 text-sm font-medium text-[#30302d] transition hover:bg-[#e7e1d8]"
          >
            Book an Appointment
          </a>

        </div>
      </section>


      {/* ------------------------------------------------------------------ */}
      {/* Footer                                                              */}
      {/* ------------------------------------------------------------------ */}
      <footer className="bg-[#242422] text-[#d4d0c9]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 lg:grid-cols-3 lg:px-10">

          <div>
            <p className="font-serif text-2xl text-[#f7f4ef]">
              Maya Reynolds, PsyD
            </p>

            <p className="mt-3 max-w-sm text-sm leading-6">
              Licensed Clinical Psychologist offering warm, grounded therapy
              for adults in Santa Monica and throughout California.
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[#aaa39a]">
              Office
            </p>

            <address className="mt-3 text-sm leading-7 not-italic">
              123th Street 45 W
              <br />
              Santa Monica, CA 90401
            </address>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[#aaa39a]">
              Availability
            </p>

            <p className="mt-3 text-sm leading-7">
              In-person therapy
              <br />
              Secure telehealth throughout California
            </p>
          </div>

        </div>

        <div className="border-t border-[#454541]">
          <div className="mx-auto max-w-7xl px-6 py-5 text-xs text-[#918d86] lg:px-10">
            <p>© 2026 Maya Reynolds, PsyD. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}