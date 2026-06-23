"use client";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="text-8xl font-display font-bold text-terracotta mb-4">500</div>
        <h1 className="text-2xl font-display font-semibold text-on-surface mb-2">
          Something went wrong
        </h1>
        <p className="text-on-surface-variant mb-8">
          Please try again or contact us if the problem persists.
        </p>
        <button
          onClick={reset}
          className="bg-terracotta text-white px-8 py-3 rounded-full font-medium hover:shadow-lg hover:shadow-terracotta/30 transition-all duration-300 cursor-pointer"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}