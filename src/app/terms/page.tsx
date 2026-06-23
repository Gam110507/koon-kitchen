import FadeUp from "@/components/FadeUp";

export const metadata = {
  title: "Terms of Service — Koon Kitchen",
};

export default function TermsPage() {
  return (
    <main className="pt-[120px] pb-[120px]">
      <div className="max-w-4xl mx-auto px-6">
        <FadeUp>
          <h1 className="font-display text-[40px] md:text-[56px] leading-[1.2] font-bold text-on-background mb-2">
            Terms of Service
          </h1>
          <p className="font-body text-[16px] leading-[1.6] text-tertiary mb-4">
            ข้อกำหนดการให้บริการ
          </p>
          <div className="w-24 h-[1px] bg-tertiary/50 mb-10" />
        </FadeUp>

        <FadeUp className="space-y-8">
          <p className="font-body text-[16px] leading-[1.8] text-on-surface-variant">
            Welcome to Koon Kitchen. By accessing our website and using our
            services, you agree to the following terms and conditions. Please
            read them carefully.
          </p>

          <section className="space-y-3">
            <h2 className="font-display text-[24px] leading-[1.4] font-semibold text-on-background">
              Reservations
            </h2>
            <p className="font-body text-[16px] leading-[1.8] text-on-surface-variant">
              Reservations are subject to availability. We kindly ask that you
              notify us in advance of any changes or cancellations so we may
              accommodate other guests.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-[24px] leading-[1.4] font-semibold text-on-background">
              Use of Our Website
            </h2>
            <p className="font-body text-[16px] leading-[1.8] text-on-surface-variant">
              All content on this site, including text, images, and branding, is
              the property of Koon Kitchen and may not be reproduced without our
              written permission.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-[24px] leading-[1.4] font-semibold text-on-background">
              Limitation of Liability
            </h2>
            <p className="font-body text-[16px] leading-[1.8] text-on-surface-variant">
              Koon Kitchen is not liable for any indirect or incidental damages
              arising from the use of our website or services, to the fullest
              extent permitted by law.
            </p>
          </section>
        </FadeUp>
      </div>
    </main>
  );
}
