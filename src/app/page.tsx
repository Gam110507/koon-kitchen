import Image from "next/image";
import Link from "next/link";
import FadeUp from "@/components/FadeUp";

const featuredDishes = [
  {
    name: "Seared Scallop Yum",
    price: "฿450",
    badge: "Chef's Pick",
    badgeStyle: "bg-tertiary text-on-tertiary",
    description:
      "Hokkaido scallops lightly seared, served with a zesty lemongrass and chili emulsion, micro cilantro, and crispy shallots.",
    stars: 4.5,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDM9AczLZxO9jP2GtFtIiVWXq5A4GF4ucqRw60kIxPTZ1W-SFWZhLJwmzwZg5MTxSKq67cvbPNuM5U-9TPaRbF_N-73CDrN_YCBK_0z3wNclt2G3JpuBWCiOFoYq968BViRczm5IIpPjiTdxFjHSMK-x-NJjKUWYiHB9pBMecy2czks0LzwBdIiYWwogPhOu-vFnBiQElbMvn8fAXdUFh2Hcd8db7x50mwHKH7YjVMN0RyunZLZwYUozEo2bMTonvjmegUbyhCtUIU",
  },
  {
    name: "Signature Pad Thai",
    price: "฿380",
    badge: null,
    badgeStyle: "",
    description:
      "Classic rice noodles tossed in a house-made tamarind glaze, wrapped in a delicate egg net, served with tiger prawns.",
    stars: 5,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC3iX2B5J9YD7YTN04Bp-1um2kx-IjCi0Pe5qdiY-xn0Qdp5nw6-AUKjfY8Hj4qUTof9Ga3Yp7SfGSyscFLiCWKNxBJM6WlkR5ocd2g29lETAX9U0EXwXlkO6iMd7wfeY5IBYRLEl_yZHI_NNdxW07Y4c3U8Qg1OVA5ZHixgFuSJaD5XqevFV9MTUp7CIKuSCplWfTFcwElBLcULw2N9IjnogtoLfS_OrlAb4uwm5DybDw-w1u9TpmD0dvoxnmlnR4K9v1cBx1lUR8",
  },
  {
    name: "Mango Sticky Rice",
    price: "฿250",
    badge: "New",
    badgeStyle: "bg-terracotta text-white",
    description:
      "Deconstructed presentation with pandan-infused sticky rice, ripe Nam Dok Mai mango, and a smoked coconut cream.",
    stars: 4,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCq1eie1M2fYGzkCBbc3UqB5sqzbAOpYSoiSH0ZABaa0Q6tr8PQHMA6AYbSQOOikpA3AnYEqEnjjAuNh6aFrzVl047uuIvYl-MYIVdpBlbCVWp5NLMCb2OLWPTkCqFhLshl6diQo2DAwocOlQ6_DVhLYwrOiod92kxCRO8j5SnYbf5_s8CVofdaeQktbp2w8ops-vmMMwLiCxJo_Db75G_nPwqBl1u2chlAFVi3m_hLQhe03umjX8f9GabkDK8Edt9VIVb8q03UfYo",
  },
];

const testimonials = [
  {
    stars: 5,
    quote:
      "An extraordinary dining experience. The flavors are bold yet refined, and every dish tells a story of Thai culinary heritage reimagined.",
    author: "Sarah J.",
    role: "Food Critic",
  },
  {
    stars: 5,
    quote:
      "Koon Kitchen has become my go-to for special occasions. The ambiance, the service, and most importantly, the food — all impeccable.",
    author: "Michael T.",
    role: "Local Guide",
  },
  {
    stars: 4.5,
    quote:
      "The Mango Sticky Rice alone is worth the visit. Creative, delicious, and beautifully presented. A true gem in Bangkok's dining scene.",
    author: "Elena R.",
    role: "Food Enthusiast",
  },
];

function StarRating({ rating }: { rating: number }) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(rating)) {
      stars.push(
        <span
          key={i}
          className="material-symbols-outlined text-tertiary text-sm"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          star
        </span>
      );
    } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
      stars.push(
        <span
          key={i}
          className="material-symbols-outlined text-tertiary text-sm"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          star_half
        </span>
      );
    }
  }
  return <div className="flex text-tertiary">{stars}</div>;
}

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6mHCF1mYw7bGYtI2tJnPWcyqf-aWvd54nOTmMRTDSkrz8tuxWupErYl9cxUFVTI_XVwbLyI_znLtjU5FJl-f6oRuJsbc-0cVZfcekCOprm1KOiTyQDVvnpQj6OhVPxfymkeO_Tzoe9bsVdmj7ln9fNFrT64_Dl8ZkjzGTkwGYUnVy_BG6mHYvyF1BTn6B-7HMhEDa9qskJQ7Qy-yKZLFIslasWtnKhAXWFfowDj0dGJTdgN3SfDMuzzMI08Se4syBd2oXoGA90cE"
            alt="Koon Kitchen hero background"
            fill
            style={{ objectFit: "cover" }}
            className="opacity-40"
            priority
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#141312] via-[#141312]/60 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <FadeUp>
            <p className="font-body text-[12px] leading-[1] tracking-[0.2em] font-semibold text-tertiary mb-6 uppercase">
              Authentic Thai Fusion
            </p>
            <h1 className="font-display text-[48px] md:text-[72px] leading-[1.2] md:leading-[1.1] md:tracking-[-0.02em] font-bold text-gradient-gold">
              รสชาติแห่งความทรงจำ
              <span className="block mt-4 text-3xl md:text-5xl text-on-background font-normal">
                Tastes of Memories
              </span>
            </h1>
            <p className="font-body text-[18px] leading-[1.8] text-on-surface-variant max-w-2xl mx-auto mb-10 mt-6">
              Where traditional Thai recipes meet modern culinary artistry.
              Every dish is a journey through the rich tapestry of Thai flavors,
              crafted with passion and served with soul.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/menu"
                className="btn-terracotta w-full sm:w-auto px-8 py-4 rounded-[0.125rem] font-body font-medium tracking-wide uppercase"
              >
                ดูเมนูอาหาร (Menu)
              </Link>
              <Link
                href="/reservation"
                className="btn-ghost-gold w-full sm:w-auto px-8 py-4 rounded-[0.125rem] font-body font-medium tracking-wide uppercase"
              >
                จองโต๊ะ (Book a Table)
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-[48px] md:py-[80px] border-y border-outline-variant/20 bg-surface-container-lowest relative z-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-outline-variant/20">
          {[
            { number: "10+", label: "Years of Excellence" },
            { number: "50+", label: "Signature Dishes" },
            { number: "500+", label: "Happy Guests" },
          ].map((stat) => (
            <FadeUp key={stat.label} className="pt-8 md:pt-0">
              <div className="font-display text-[48px] leading-[1.2] font-bold text-tertiary mb-2">
                {stat.number}
              </div>
              <div className="font-body text-[12px] leading-[1] tracking-[0.1em] font-semibold text-on-surface-variant uppercase tracking-widest">
                {stat.label}
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="py-[120px] px-6 max-w-7xl mx-auto">
        <FadeUp className="text-center mb-16">
          <p className="font-body text-[12px] leading-[1] tracking-[0.2em] font-semibold text-tertiary mb-6 uppercase">
            Our Recommendations
          </p>
          <h2 className="font-display text-[40px] leading-[1.3] font-semibold text-on-background">
            Featured Dishes
          </h2>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredDishes.map((dish) => (
            <FadeUp key={dish.name}>
              <div className="glass-panel rounded-[0.5rem] overflow-hidden glass-panel-hover transition-all duration-500">
                {/* Image */}
                <div className="h-64 overflow-hidden relative">
                  <Image
                    src={dish.image}
                    alt={dish.name}
                    fill
                    style={{ objectFit: "cover" }}
                    className="hover:scale-105 transition-transform duration-700"
                  />
                  {dish.badge && (
                    <span
                      className={`absolute top-4 right-4 ${dish.badgeStyle} font-body text-[10px] px-3 py-1 rounded-full uppercase tracking-wider font-bold`}
                    >
                      {dish.badge}
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-display text-[24px] leading-[1.4] font-semibold text-on-background">
                      {dish.name}
                    </h3>
                    <span className="text-tertiary font-body text-[18px]">
                      {dish.price}
                    </span>
                  </div>
                  <p className="text-on-surface-variant text-[16px] mb-4 line-clamp-2">
                    {dish.description}
                  </p>
                  <StarRating rating={dish.stars} />
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* About Preview */}
      <section className="py-[120px] bg-surface-container-low relative">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left - Text */}
          <FadeUp className="order-2 md:order-1">
            <p className="font-body text-[12px] leading-[1] tracking-[0.2em] font-semibold text-tertiary mb-6 uppercase">
              Our Story
            </p>
            <h2 className="font-display text-[40px] leading-[1.3] font-semibold text-on-background mb-6">
              A Legacy of Spices
            </h2>
            <p className="text-on-surface-variant mb-6">
              For over a decade, Koon Kitchen has been a sanctuary for those who
              seek the authentic soul of Thai cuisine. Our journey began with a
              simple belief: that food is the most intimate form of storytelling.
            </p>
            <p className="text-on-surface-variant mb-10">
              Every spice we grind, every sauce we simmer, carries the weight of
              generations of culinary wisdom passed down through our family.
              Here, tradition meets innovation in every dish we create.
            </p>
            <Link
              href="/about"
              className="btn-ghost-gold px-8 py-3 rounded-[0.125rem] font-body text-[12px] leading-[1] tracking-[0.1em] font-semibold uppercase"
            >
              Discover Our Story
            </Link>
          </FadeUp>

          {/* Right - Image */}
          <FadeUp className="order-1 md:order-2">
            <div className="relative h-[500px] rounded-[0.5rem] overflow-hidden">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRAXfI9y28PTfzgMGmjMK698n3wEzqbsaI--0dJJhyp0zQRgfl4reF4aTd6xONAOJhKPlYTSi8GejnKgGISER_6hnAv4IO3mhe0V4OCEocPDRgxIPEOskElim0ltf70EkesUwqkjvxWe6GII3KSdqp0HOlM88wHxK8mknjYXqCowls_GkIcJB4sQTBHxATFN0KnEHoQG5UXwYkfh9goez0zdeF0JbjUqBqwGUr14ELgaviRYP_bWAc1q7TjOoX6h-CVzOUFSbGeOw"
                alt="Koon Kitchen interior"
                fill
                style={{ objectFit: "cover" }}
              />
              <div className="absolute inset-0 border border-white/10 rounded-[0.5rem] pointer-events-none" />
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-[120px] px-6 max-w-7xl mx-auto overflow-hidden">
        <FadeUp className="text-center mb-16">
          <p className="font-body text-[12px] leading-[1] tracking-[0.2em] font-semibold text-tertiary mb-6 uppercase">
            What People Say
          </p>
          <h2 className="font-display text-[40px] leading-[1.3] font-semibold text-on-background">
            Guest Experiences
          </h2>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <FadeUp key={testimonial.author}>
              <div className="glass-panel p-8 rounded-[0.5rem] glass-panel-hover transition-all duration-500">
                <StarRating rating={testimonial.stars} />
                <p className="italic text-on-surface-variant mb-6 mt-4">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <p className="font-body text-[12px] leading-[1] tracking-[0.1em] font-semibold text-on-background uppercase">
                  {testimonial.author}{" "}
                  <span className="text-on-surface-variant font-normal">
                    &mdash; {testimonial.role}
                  </span>
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-[80px] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(199,91,57,0.1)] to-[#141312]" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <FadeUp>
            <h2 className="font-display text-[48px] md:text-[40px] leading-[1.2] md:leading-[1.3] font-bold md:font-semibold text-on-background mb-6">
              Reserve Your Table
            </h2>
            <p className="text-on-surface-variant mb-10">
              Join us for an unforgettable evening of authentic Thai flavors.
              Book your table today and let us take you on a culinary journey
              through Thailand.
            </p>
            <Link
              href="/reservation"
              className="btn-terracotta inline-block px-10 py-4 rounded-[0.125rem] text-[12px] leading-[1] tracking-[0.1em] font-semibold uppercase tracking-widest"
            >
              Make a Reservation
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* Info Strip */}
      <section className="border-y border-outline-variant/20 bg-surface py-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <FadeUp>
            <span
              className="material-symbols-outlined text-tertiary text-3xl mb-3 inline-block"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              schedule
            </span>
            <h3 className="font-display text-[18px] font-semibold text-on-background mb-2">
              Opening Hours
            </h3>
            <p className="text-on-surface-variant text-[14px]">
              Tue - Sun: 5:00 PM - 11:00 PM
              <br />
              Closed on Mondays
            </p>
          </FadeUp>

          <FadeUp>
            <span
              className="material-symbols-outlined text-tertiary text-3xl mb-3 inline-block"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              location_on
            </span>
            <h3 className="font-display text-[18px] font-semibold text-on-background mb-2">
              Location
            </h3>
            <p className="text-on-surface-variant text-[14px]">
              123 Sukhumvit Soi 55, Khlong Toei
              <br />
              Bangkok 10110, Thailand
            </p>
          </FadeUp>

          <FadeUp>
            <span
              className="material-symbols-outlined text-tertiary text-3xl mb-3 inline-block"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              call
            </span>
            <h3 className="font-display text-[18px] font-semibold text-on-background mb-2">
              Contact
            </h3>
            <p className="text-on-surface-variant text-[14px]">
              +66 2 123 4567
              <br />
              hello@koonkitchen.com
            </p>
          </FadeUp>
        </div>
      </section>
    </main>
  );
}
