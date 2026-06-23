import FadeUp from "@/components/FadeUp";

export const metadata = {
  title: "Privacy Policy — Koon Kitchen",
};

export default function PrivacyPage() {
  return (
    <main className="pt-[120px] pb-[120px]">
      <div className="max-w-4xl mx-auto px-6">
        <FadeUp>
          <h1 className="font-display text-[40px] md:text-[56px] leading-[1.2] font-bold text-on-background mb-2">
            Privacy Policy
          </h1>
          <p className="font-body text-[16px] leading-[1.6] text-tertiary mb-4">
            นโยบายความเป็นส่วนตัว
          </p>
          <div className="w-24 h-[1px] bg-tertiary/50 mb-10" />
        </FadeUp>

        <FadeUp className="space-y-8">
          <p className="font-body text-[16px] leading-[1.8] text-on-surface-variant">
            At Koon Kitchen, we respect your privacy and are committed to
            protecting the personal information you share with us. This Privacy
            Policy explains how we collect, use, and safeguard your data when you
            visit our website or make a reservation.
          </p>

          <section className="space-y-3">
            <h2 className="font-display text-[24px] leading-[1.4] font-semibold text-on-background">
              Information We Collect
            </h2>
            <p className="font-body text-[16px] leading-[1.8] text-on-surface-variant">
              We may collect your name, contact details, and reservation
              preferences when you book a table or contact us. We also collect
              anonymous usage data to improve your browsing experience.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-[24px] leading-[1.4] font-semibold text-on-background">
              How We Use Your Information
            </h2>
            <p className="font-body text-[16px] leading-[1.8] text-on-surface-variant">
              Your information is used solely to manage reservations, respond to
              enquiries, and enhance the quality of our service. We never sell
              your personal data to third parties.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-[24px] leading-[1.4] font-semibold text-on-background">
              Contact Us
            </h2>
            <p className="font-body text-[16px] leading-[1.8] text-on-surface-variant">
              If you have any questions about this Privacy Policy, please reach
              out to us via our{" "}
              <a href="/contact" className="text-[#C75B39] hover:underline">
                contact page
              </a>
              .
            </p>
          </section>
        </FadeUp>
      </div>
    </main>
  );
}
