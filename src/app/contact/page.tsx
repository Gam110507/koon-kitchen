import Link from "next/link";
import FadeUp from "@/components/FadeUp";

export const metadata = {
  title: "Contact — Koon Kitchen",
};

export default function ContactPage() {
  return (
    <main className="flex-grow pt-[120px] pb-[120px]">
      {/* Hero Section */}
      <section className="px-6 max-w-7xl mx-auto text-center mb-[80px]">
        <FadeUp>
          <h1 className="font-display text-[72px] leading-[1.1] tracking-[-0.02em] font-bold text-on-background mb-4">
            Get in Touch
          </h1>
          <p className="font-body text-[18px] leading-[1.8] text-on-surface-variant max-w-2xl mx-auto">
            Whether you&apos;re planning a special evening, a private event, or
            simply have a question about our menu, we&apos;re here to assist
            you.
          </p>
        </FadeUp>
      </section>

      {/* Bento Grid Layout */}
      <section className="px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 mb-[120px]">
        {/* Contact Cards Cluster (Left 5 Cols) */}
        <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4 h-full">
          {/* Phone */}
          <FadeUp>
            <div className="border border-white/5 bg-white/5 rounded-lg p-8 flex flex-col items-start justify-center h-full min-h-[180px] transition-all duration-300 hover:border-tertiary/30">
              <span
                className="material-symbols-outlined text-tertiary mb-4"
                style={{ fontSize: 32 }}
              >
                call
              </span>
              <h3 className="font-body text-[12px] leading-[1] tracking-[0.1em] font-semibold text-on-surface-variant mb-2 uppercase tracking-widest">
                Phone
              </h3>
              <p className="font-body text-[18px] leading-[1.8] text-on-background">
                +66 2 123 4567
              </p>
            </div>
          </FadeUp>

          {/* Email */}
          <FadeUp>
            <div className="border border-white/5 bg-white/5 rounded-lg p-8 flex flex-col items-start justify-center h-full min-h-[180px] transition-all duration-300 hover:border-tertiary/30">
              <span
                className="material-symbols-outlined text-tertiary mb-4"
                style={{ fontSize: 32 }}
              >
                mail
              </span>
              <h3 className="font-body text-[12px] leading-[1] tracking-[0.1em] font-semibold text-on-surface-variant mb-2 uppercase tracking-widest">
                Email
              </h3>
              <p className="font-body text-[16px] leading-[1.6] text-on-background break-all">
                hello@koonkitchen.com
              </p>
            </div>
          </FadeUp>

          {/* Address (spans 2 cols) */}
          <FadeUp className="sm:col-span-2">
            <div className="border border-white/5 bg-white/5 rounded-lg p-8 flex flex-col items-start justify-center h-full min-h-[180px] transition-all duration-300 hover:border-tertiary/30">
              <span
                className="material-symbols-outlined text-tertiary mb-4"
                style={{ fontSize: 32 }}
              >
                location_on
              </span>
              <h3 className="font-body text-[12px] leading-[1] tracking-[0.1em] font-semibold text-on-surface-variant mb-2 uppercase tracking-widest">
                Address
              </h3>
              <p className="font-body text-[18px] leading-[1.8] text-on-background max-w-sm">
                123 Sukhumvit Soi 55, Khlong Toei, Bangkok 10110, Thailand
              </p>
            </div>
          </FadeUp>

          {/* Line Official (spans 2 cols) */}
          <FadeUp className="sm:col-span-2">
            <div className="border border-white/5 bg-white/5 rounded-lg p-8 flex flex-col items-start justify-center h-full min-h-[120px] transition-all duration-300 hover:border-tertiary/30">
              <span
                className="material-symbols-outlined text-tertiary mb-4"
                style={{ fontSize: 32 }}
              >
                chat
              </span>
              <h3 className="font-body text-[12px] leading-[1] tracking-[0.1em] font-semibold text-on-surface-variant mb-2 uppercase tracking-widest">
                Line Official
              </h3>
              <p className="font-body text-[18px] leading-[1.8] text-on-background">
                @koonkitchen
              </p>
            </div>
          </FadeUp>
        </div>

        {/* Map Visual (Right 7 Cols) */}
        <FadeUp className="lg:col-span-7">
          <div className="relative rounded-lg overflow-hidden glass-panel min-h-[400px] h-full group">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.5184187729605!2d100.5858!3d13.7258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29d5e1c7f5f8d%3A0x8a5c9c8a9c2b8f6b!2sSukhumvit%20Rd%2C%20Khlong%20Toei%2C%20Bangkok!5e0!3m2!1sen!2sth!4v1"
              width="100%"
              height="100%"
              style={{ minHeight: 400, filter: "grayscale(100%) invert(90%) hue-rotate(180deg)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Koon Kitchen location on Google Maps"
              className="absolute inset-0 w-full h-full transition-all duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent flex items-end p-8 pointer-events-none">
              <a
                href="https://maps.google.com/?q=Sukhumvit+Soi+55+Bangkok+Thailand"
                target="_blank"
                rel="noopener noreferrer"
                className="pointer-events-auto inline-flex items-center gap-2 px-6 py-3 border border-tertiary/50 text-tertiary font-body text-[12px] leading-[1] tracking-[0.1em] font-semibold uppercase tracking-widest rounded hover:bg-tertiary/10 transition-colors backdrop-blur-sm"
              >
                <span
                  className="material-symbols-outlined"
                  style={{ fontSize: 18 }}
                >
                  directions
                </span>
                Open in Google Maps
              </a>
            </div>
          </div>
        </FadeUp>
      </section>

      {/* Secondary Information Section */}
      <section className="px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Opening Hours */}
        <FadeUp>
          <div className="glass-panel rounded-lg p-8 md:p-12">
            <h2 className="font-display text-[40px] leading-[1.3] font-semibold text-on-background mb-8 border-b border-white/10 pb-2">
              Opening Hours
            </h2>
            <ul className="space-y-2 font-body text-[16px] leading-[1.6]">
              <li className="flex justify-between items-center py-2 border-b border-white/5">
                <span className="text-on-surface-variant">
                  Tuesday - Sunday
                </span>
                <span className="text-on-background">5:00 PM - 11:00 PM</span>
              </li>
              <li className="flex justify-between items-center py-2 border-b border-white/5">
                <span className="text-on-surface-variant">Monday</span>
                <span className="text-on-background">Closed</span>
              </li>
            </ul>
          </div>
        </FadeUp>

        {/* Private Events CTA */}
        <FadeUp>
          <div className="rounded-lg p-8 md:p-12 relative overflow-hidden group bg-gradient-to-br from-secondary-container/80 to-surface-container-highest border border-secondary/20">
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-tertiary/10 rounded-full blur-3xl group-hover:bg-tertiary/20 transition-all duration-700" />
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <h2 className="font-display text-[40px] leading-[1.3] font-semibold text-white mb-2">
                  Private Events
                </h2>
                <p className="font-body text-[16px] leading-[1.6] text-white/80 mb-8 max-w-sm">
                  Looking to host a gathering? Our dining spaces are available
                  for exclusive bookings. Contact our events team for tailored
                  menus and arrangements.
                </p>
              </div>
              <div>
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-secondary-container font-body text-[12px] leading-[1] tracking-[0.1em] font-semibold uppercase tracking-widest rounded hover:bg-tertiary transition-colors duration-300"
                >
                  Inquire Now
                  <span
                    className="material-symbols-outlined"
                    style={{ fontSize: 18 }}
                  >
                    arrow_forward
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </FadeUp>
      </section>

      {/* Mobile FAB */}
      <div className="fixed bottom-6 right-6 z-50 md:hidden">
        <button className="w-14 h-14 bg-secondary-container text-white rounded-full shadow-[0_0_20px_rgba(129,40,9,0.4)] flex items-center justify-center hover:scale-105 transition-transform duration-300">
          <span className="material-symbols-outlined" style={{ fontSize: 24 }}>
            calendar_today
          </span>
        </button>
      </div>
    </main>
  );
}
