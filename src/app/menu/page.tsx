"use client";

import { useState } from "react";
import Image from "next/image";
import FadeUp from "@/components/FadeUp";

interface MenuItem {
  name: string;
  price: string;
  desc: string;
  category: string;
  badge: string | null;
  image: string;
}

const menuItems: MenuItem[] = [
  {
    name: "Seared Scallop Yum",
    price: "฿450",
    desc: "Hokkaido scallops lightly seared, served with a zesty lemongrass and chili emulsion, micro cilantro, and crispy shallots.",
    category: "Appetizers",
    badge: "Chef's Rec",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDs8xM7LAtMl3M_GysfOA16lqOcj1ZteDdbUTTHy74iPDYVUbPw1fL3fXot-GNTotRAWyNZBXRhxz6Btj98rHTDl4p7Ap9kFAp3NxDlkF7xVJawC9MJhYXc5YHDawUZJYj23rPFI1eHnhIPp4PPOY8YkVww1A2ZPG2qmJSCD6B7h174L7eyV-EX0qrexIZpnARBdnz0xiUVL52o60vGWDUBmT9yjf3urOw6KuKSe0iB1b5ip_HHTY1z5Apw6CBCs1fndmexbH26rh4",
  },
  {
    name: "Wagyu Tom Yum",
    price: "฿680",
    desc: "A rich, aromatic broth featuring premium A5 Wagyu beef slices, galangal, kaffir lime leaves, and an intense chili jam.",
    category: "Main Course",
    badge: "Spicy",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCtijlHBN93UcWgKzHbf7RI9qkUqWnb5S4HuEqgJjC0zsNwMavnMt2JRvymi5Xc2gKGchoP15itR8dqnUdeW1jDk4plPxjX-LKvIxnJoRuVxUAoNcAceyNYwpue86Nar5QpiE0RueBPBnQloeOqUePks4nKWJaYjLjMDc8jHa6giy-ez9XAMqDhUGNauIRBuSkD16U4DHtNmMecW58g36yPD2Kz-pZ5BBKpzc7S4UfDpdD7AhRQfOu-q8LYUcxOpvhzoPkC05SBnrI",
  },
  {
    name: "Signature Pad Thai",
    price: "฿380",
    desc: "Classic rice noodles tossed in a house-made tamarind glaze, wrapped in a delicate egg net, served with tiger prawns.",
    category: "Main Course",
    badge: null,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD9pOG-Rp-Y5ou1oc9izhbzVHSl0rReWMLR7R-_9Z3Q-ztQ5L3fhL5ZSyHNEyepHIPmTLm-YuUc_LkgNXCplhdot2J_7BhOiTSTiL-wvzBRgORWoWBLeyT55Kw1519n27dF1q_x3LGxnuKG7T3ZsgpQqvKCKnBuRTXtK9cKXL2LAdhY4nNLUwlOHXQVKNqGAXWXDx50pMFznffEGmcjgi2syetKgdGBU4o9s2sDXUVCXhYxCbM2zmO-aDs5EksfzhoZFzEiIbC7rGs",
  },
  {
    name: "Mango Sticky Rice",
    price: "฿250",
    desc: "Deconstructed presentation with pandan-infused sticky rice, ripe Nam Dok Mai mango, and a smoked coconut cream.",
    category: "Desserts",
    badge: null,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB0f77JFNPAx6QG8ArpmaAcF8OW5WtYNdF6ujL5KN53s_3kAl6h8UrsLg0Tzi268Eqjq6qDB1DrqXC0VawdyyvcUaS_fBYa3ARdeJMSyvI_VFiFBDeoVrHTes0-5urahgPBTjXIwkFEe6b5t-dV1ZPRObySph8Oh2U88ijFgV3kKIk-yK7hKqZtNugLwfR9hzwf6wmEYYvmaWsC6-N2LO4j5CzQoyrBiEMrxggkff0wXcbEK_fG6obE2jVeD56-SrwK-lWsVLWja6g",
  },
  {
    name: "Lemongrass Prawn Ceviche",
    price: "฿390",
    desc: "Fresh tiger prawns cured in lime and lemongrass, tossed with green mango, Thai basil, and toasted coconut.",
    category: "Appetizers",
    badge: null,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDM9AczLZxO9jP2GtFtIiVWXq5A4GF4ucqRw60kIxPTZ1W-SFWZhLJwmzwZg5MTxSKq67cvbPNuM5U-9TPaRbF_N-73CDrN_YCBK_0z3wNclt2G3JpuBWCiOFoYq968BViRczm5IIpPjiTdxFjHSMK-x-NJjKUWYiHB9pBMecy2czks0LzwBdIiYWwogPhOu-vFnBiQElbMvn8fAXdUFh2Hcd8db7x50mwHKH7YjVMN0RyunZLZwYUozEo2bMTonvjmegUbyhCtUIU",
  },
  {
    name: "Thai Basil Mojito",
    price: "฿220",
    desc: "Fresh Thai basil muddled with lime, rum, and a hint of lemongrass syrup. A refreshing fusion cocktail.",
    category: "Drinks",
    badge: "New",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCq1eie1M2fYGzkCBbc3UqB5sqzbAOpYSoiSH0ZABaa0Q6tr8PQHMA6AYbSQOOikpA3AnYEnjjAuNh6aFrzVl047uuIvYl-MYIVdpBlbCVWp5NLMCb2OLWPTkCqFhLshl6diQo2DAwocOlQ6_DVhLYwrOiod92kxCRO8j5SnYbf5_s8CVofdaeQktbp2w8ops-vmMMwLiCxJo_Db75G_nPwqBl1u2chlAFVi3m_hLQhe03umjX8f9GabkDK8Edt9VIVb8q03UfYo",
  },
  {
    name: "Massaman Lamb Shank",
    price: "฿890",
    desc: "Slow-braised lamb shank in aromatic Massaman curry, served with crispy roti and pickled shallots.",
    category: "Fusion",
    badge: "Chef's Rec",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC3iX2B5J9YD7YTN04Bp-1um2kx-IjCi0Pe5qdiY-xn0Qdp5nw6-AUKjfY8Hj4qUTof9Ga3Yp7SfGSyscFLiCWKNxBJM6WlkR5ocd2g29lETAX9U0EXwXlkO6iMd7wfeY5IBYRLEl_yZHI_NNdxW07Y4c3U8Qg1OVA5ZHixgFuSJaD5XqevFV9MTUp7CIKuSCplWfTFcwElBLcULw2N9IjnogtoLfS_OrlAb4uwm5DybDw-w1u9TpmD0dvoxnmlnR4K9v1cBx1lUR8",
  },
  {
    name: "Coconut Lemongrass Soup",
    price: "฿320",
    desc: "Creamy coconut broth infused with lemongrass, galangal, and fresh herbs, topped with crispy garlic.",
    category: "Appetizers",
    badge: null,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCtijlHBN93UcWgKzHbf7RI9qkUqWnb5S4HuEqgJjC0zsNwMavnMt2JRvymi5Xc2gKGchoP15itR8dqnUdeW1jDk4plPxjX-LKvIxnJoRuVxUAoNcAceyNYwpue86Nar5QpiE0RueBPBnQloeOqUePks4nKWJaYjLjMDc8jHa6giy-ez9XAMqDhUGNauIRBuSkD16U4DHtNmMecW58g36yPD2Kz-pZ5BBKpzc7S4UfDpdD7AhRQfOu-q8LYUcxOpvhzoPkC05SBnrI",
  },
  {
    name: "Pandan Crème Brûlée",
    price: "฿280",
    desc: "Classic crème brûlée infused with pandan leaf essence, torched to a perfect caramelized crust.",
    category: "Desserts",
    badge: null,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB0f77JFNPAx6QG8ArpmaAcF8OW5WtYNdF6ujL5KN53s_3kAl6h8UrsLg0Tzi268Eqjq6qDB1DrqXC0VawdyyvcUaS_fBYa3ARdeJMSyvI_VFiFBDeoVrHTes0-5urahgPBTjXIwkFEe6b5t-dV1ZPRObySph8Oh2U88ijFgV3kKIk-yK7hKqZtNugLwfR9hzwf6wmEYYvmaWsC6-N2LO4j5CzQoyrBiEMrxggkff0wXcbEK_fG6obE2jVeD56-SrwK-lWsVLWja6g",
  },
];

const categories = [
  "All",
  "Appetizers",
  "Main Course",
  "Fusion",
  "Desserts",
  "Drinks",
];

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems =
    activeCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  return (
    <section className="bg-background min-h-screen">
      {/* Header Section */}
      <div className="pt-32 pb-[80px]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <FadeUp>
            <h1 className="font-display text-[48px] md:text-[72px] leading-[1.2] md:leading-[1.1] md:tracking-[-0.02em] font-bold text-on-background mb-4">
              เมนูอาหาร
            </h1>
          </FadeUp>
          <FadeUp>
            <p className="font-body text-[18px] leading-[1.8] text-on-surface-variant max-w-2xl mx-auto">
              สำรวจเมนูที่คัดสรรอย่างพิถีพิถัน ผสมผสานรสชาติไทยดั้งเดิมกับเทคนิคการทำอาหารสมัยใหม่
            </p>
          </FadeUp>
        </div>
      </div>

      {/* Category Filter */}
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <div className="flex overflow-x-auto scrollbar-hide py-4 gap-4 border-b border-white/5">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`whitespace-nowrap px-6 py-2 rounded-full font-body text-[16px] transition-all duration-300 ${
                activeCategory === category
                  ? "bg-terracotta text-white hover:shadow-[0_0_15px_rgba(199,91,57,0.2)]"
                  : "border border-outline-variant text-on-surface-variant hover:border-tertiary hover:text-tertiary"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Menu Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-[120px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <FadeUp key={item.name}>
              <div className="bg-surface-container rounded-[0.25rem] border border-white/10 overflow-hidden menu-card flex flex-col h-full group relative">
                {/* Badge */}
                {item.badge && (
                  <span
                    className={`absolute top-4 right-4 z-10 shadow-lg backdrop-blur-sm bg-opacity-90 font-body text-[12px] leading-[1] tracking-[0.1em] font-semibold px-3 py-1 rounded-full ${
                      item.badge === "New"
                        ? "bg-terracotta text-white"
                        : "bg-tertiary text-on-tertiary"
                    }`}
                  >
                    {item.badge}
                  </span>
                )}

                {/* Image */}
                <div className="h-64 overflow-hidden relative">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-container to-transparent opacity-80" />
                </div>

                {/* Content */}
                <div className="p-6 flex-grow flex flex-col justify-between relative z-10 -mt-12 bg-surface-container/80 backdrop-blur-md rounded-t-[0.5rem]">
                  <div>
                    <div className="flex justify-between items-baseline mb-2">
                      <h3 className="font-display text-[24px] leading-[1.4] font-semibold text-on-background">
                        {item.name}
                      </h3>
                      <span className="font-body text-[18px] text-tertiary transition-transform duration-300 group-hover:scale-110 ml-4 shrink-0">
                        {item.price}
                      </span>
                    </div>
                    <p className="text-on-surface-variant text-[16px] line-clamp-3 mb-4">
                      {item.desc}
                    </p>
                  </div>

                  {/* Category Label */}
                  <div className="mt-auto pt-4 border-t border-white/5">
                    <span className="text-[12px] leading-[1] tracking-[0.1em] font-semibold text-on-surface-variant uppercase tracking-widest">
                      {item.category}
                    </span>
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
