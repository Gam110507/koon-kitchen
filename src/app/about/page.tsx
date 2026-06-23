import Image from "next/image";
import Link from "next/link";
import FadeUp from "@/components/FadeUp";

export const metadata = {
  title: "About — Koon Kitchen",
};

export default function AboutPage() {
  return (
    <main className="pt-[100px]">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center px-6 py-[120px]">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHmivel7AT8JGREUyy_aksmaf7tKo1LL5Nd_EQICrFiCv8gMWBwQPw-l_KnxzhVf2Uh7YJUaEdqa3DWRraI97re44AeEpiStw3qJrw_kbo-Xvw-QP5SzxXGW0mjoiVqc2xTTYWYjqXrUK1fWt9W5c0SMFyNYHVW2n7jC7OHHW4KDI35JxgHHmHecUGCZ4k_EaDrbloFGqN5sJDsiOW0l9ISL73lex-xJEdzi4GFmn66w_2m7h1jsuz3sk7i9Y4ceZOSoPuiQz7mHA"
            alt="Fine dining restaurant interior"
            fill
            style={{ objectFit: "cover" }}
            className="opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <FadeUp>
            <h1 className="font-display text-[48px] md:text-[72px] leading-[1.2] md:leading-[1.1] md:tracking-[-0.02em] font-bold text-on-background mb-4">
              เรื่องราวของเรา
            </h1>
            <p className="font-display text-[24px] leading-[1.4] font-semibold text-tertiary mb-8 italic">
              Our Story
            </p>
            <div className="w-24 h-[1px] bg-tertiary/50 mx-auto mb-8" />
          </FadeUp>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="px-6 py-[120px] max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        <FadeUp className="md:col-span-5">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAT475cpTuVgN_i6UrRoDPC4AipwSVmok0jKX4K8SCXgou_WrDxal2t1qCV1rjYF3VzGSLeMuh8xFGqiA1CQL1wvMOs5vsPxdCEs3On44dSyuQPUoX_9ZKiQA3xfgJru3JdusepI8IfRlIuiDCrdb_quBu1MU2G_mR6V3_6FyjW-69fS1z7Gy5g1G1US77NYuuW4lcvUGhl8a_Je1oIH9sQWydqgZzFnHfi34SQI5z7wJqrz5lBkzD1NHXR_4dl17Lhzxn0wsfgLoM"
            alt="Chef plating a modern Thai fusion dish"
            width={600}
            height={600}
            className="w-full h-[600px] object-cover rounded-lg shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 border border-white/10"
          />
        </FadeUp>
        <FadeUp className="md:col-span-6 md:col-start-7 space-y-8">
          <p className="font-body text-[18px] leading-[1.8] text-on-surface-variant">
            At Koon Kitchen, we believe that true culinary excellence is born at
            the intersection of deep-rooted heritage and fearless innovation. Our
            journey began with a simple desire: to elevate traditional Thai
            flavors into a contemporary fine-dining experience without losing the
            soul of the cuisine.
          </p>
          <p className="font-body text-[16px] leading-[1.6] text-on-surface-variant">
            ทุกจานที่เสิร์ฟคือการเดินทาง... We meticulously source the finest
            local ingredients and apply modern techniques to classic recipes
            passed down through generations. The result is &ldquo;Atmospheric
            Fusion&rdquo; — an intimate, sophisticated dining experience where
            every bite tells a story of passion, precision, and respect for our
            cultural roots.
          </p>
        </FadeUp>
      </section>

      {/* Core Values Section */}
      <section className="px-6 py-[120px] bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <FadeUp>
            <div className="text-center mb-[80px]">
              <h2 className="font-display text-[40px] leading-[1.3] font-semibold text-on-background">
                ปรัชญาของเรา
              </h2>
              <p className="font-body text-[16px] leading-[1.6] text-tertiary mt-2">
                Our Core Values
              </p>
            </div>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "nutrition",
                title: "วัตถุดิบคุณภาพ",
                subtitle: "Quality Ingredients",
              },
              {
                icon: "restaurant",
                title: "ฝีมือเชฟ",
                subtitle: "Chef's Craft",
              },
              {
                icon: "auto_awesome",
                title: "ประสบการณ์",
                subtitle: "Experience",
              },
              {
                icon: "diversity_1",
                title: "ครอบครัว",
                subtitle: "Family",
              },
            ].map((card) => (
              <FadeUp key={card.icon}>
                <div className="glass-panel p-8 rounded-xl text-center group hover:-translate-y-2 transition-transform duration-300">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-surface-container flex items-center justify-center group-hover:bg-tertiary/10 transition-colors">
                    <span className="material-symbols-outlined text-tertiary text-3xl">
                      {card.icon}
                    </span>
                  </div>
                  <h3 className="font-display text-[24px] leading-[1.4] font-semibold text-on-background mb-2">
                    {card.title}
                  </h3>
                  <p className="font-body text-[16px] leading-[1.6] text-on-surface-variant">
                    {card.subtitle}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-[120px] flex flex-col items-center justify-center text-center">
        <FadeUp>
          <h2 className="font-display text-[40px] leading-[1.3] font-semibold text-on-background mb-4">
            สัมผัสประสบการณ์แห่งรสชาติ
          </h2>
          <p className="font-body text-[18px] leading-[1.8] text-on-surface-variant mb-8 max-w-2xl">
            Join us for an unforgettable evening where every detail is crafted to
            perfection.
          </p>
          <Link
            href="/reservation"
            className="bg-[#C75B39] text-white px-10 py-4 rounded-[0.125rem] font-body text-[18px] leading-[1.8] font-medium transition-all duration-300 btn-glow hover:scale-105 inline-block"
          >
            Book a Table
          </Link>
        </FadeUp>
      </section>
    </main>
  );
}
