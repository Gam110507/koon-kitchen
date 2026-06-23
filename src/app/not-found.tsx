import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="text-8xl font-display font-bold text-terracotta mb-4">404</div>
        <h1 className="text-2xl font-display font-semibold text-on-surface mb-2">
          Page Not Found
        </h1>
        <p className="text-on-surface-variant mb-8">
          The page you are looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block bg-terracotta text-white px-8 py-3 rounded-full font-medium hover:shadow-lg hover:shadow-terracotta/30 transition-all duration-300"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
