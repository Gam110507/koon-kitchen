import FadeUp from "@/components/FadeUp";

export const metadata = {
  title: "Accessibility — Koon Kitchen",
};

export default function AccessibilityPage() {
  return (
    <main className="pt-[120px] pb-[120px]">
      <div className="max-w-4xl mx-auto px-6">
        <FadeUp>
          <h1 className="font-display text-[40px] md:text-[56px] leading-[1.2] font-bold text-on-background mb-2">
            Accessibility
          </h1>
          <p className="font-body text-[16px] leading-[1.6] text-tertiary mb-4">
            การเข้าถึง
          </p>
          <div className="w-24 h-[1px] bg-tertiary/50 mb-10" />
        </FadeUp>

        <FadeUp className="space-y-8">
          <p className="font-body text-[16px] leading-[1.8] text-on-surface-variant">
            Koon Kitchen is committed to ensuring that our website and dining
            experience are accessible to all guests, including those with
            disabilities. We continually work to improve the usability of our
            digital and physical spaces.
          </p>

          <section className="space-y-3">
            <h2 className="font-display text-[24px] leading-[1.4] font-semibold text-on-background">
              Our Commitment
            </h2>
            <p className="font-body text-[16px] leading-[1.8] text-on-surface-variant">
              We strive to meet WCAG 2.1 guidelines, providing keyboard
              navigation, sufficient colour contrast, and descriptive text for
              images wherever possible.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-[24px] leading-[1.4] font-semibold text-on-background">
              In-Restaurant Access
            </h2>
            <p className="font-body text-[16px] leading-[1.8] text-on-surface-variant">
              Our restaurant offers wheelchair-accessible entrances and seating.
              Please let us know of any special requirements when making your
              reservation so we can prepare accordingly.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-[24px] leading-[1.4] font-semibold text-on-background">
              Feedback
            </h2>
            <p className="font-body text-[16px] leading-[1.8] text-on-surface-variant">
              We welcome your feedback on the accessibility of our website and
              services. Please{" "}
              <a href="/contact" className="text-[#C75B39] hover:underline">
                contact us
              </a>{" "}
              with any suggestions or concerns.
            </p>
          </section>
        </FadeUp>
      </div>
    </main>
  );
}
