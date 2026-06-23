import Link from "next/link";

const legalLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
  { href: "/accessibility", label: "Accessibility" },
];

export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest border-t border-outline-variant/20 pt-[120px] pb-[24px]">
      <div className="max-w-7xl mx-auto px-[24px] grid grid-cols-1 md:grid-cols-3 gap-[24px]">
        {/* Column 1: Brand */}
        <div>
          <h2 className="font-display text-[40px] leading-[1.3] font-semibold text-tertiary mb-4">
            Koon Kitchen
          </h2>
          <p className="text-on-surface-variant text-sm">
            &copy; {new Date().getFullYear()} Koon Kitchen. All rights reserved.
          </p>
        </div>

        {/* Column 2: Legal */}
        <div>
          <h3 className="text-[12px] leading-[1] tracking-[0.1em] font-semibold uppercase text-on-background mb-4">
            Legal
          </h3>
          <ul className="space-y-3">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-on-surface-variant hover:text-secondary transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Social */}
        <div>
          <h3 className="text-[12px] leading-[1] tracking-[0.1em] font-semibold uppercase text-on-background mb-4">
            Social
          </h3>
          <ul className="space-y-3">
            <li>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-on-surface-variant hover:text-secondary transition-colors"
              >
                {/* Instagram icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="5" />
                  <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
                </svg>
                <span>Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://koonkitchen.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-on-surface-variant hover:text-secondary transition-colors"
              >
                {/* Globe / website icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
                <span>Website</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
