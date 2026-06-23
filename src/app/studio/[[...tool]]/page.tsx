"use client";

import { NextStudio } from "next-sanity/studio";
import config from "@/sanity/sanity.config";
import { projectId } from "@/sanity/env";

export default function StudioPage() {
  if (!projectId) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-background px-6">
        <div className="max-w-lg text-center">
          <h1 className="font-display text-[36px] leading-[1.2] font-bold text-on-background mb-4">
            Configure Sanity Studio
          </h1>
          <div className="w-24 h-[1px] bg-tertiary/50 mx-auto mb-6" />
          <p className="font-body text-[16px] leading-[1.8] text-on-surface-variant mb-6">
            The CMS is not yet connected. Set the{" "}
            <code className="text-[#C75B39]">NEXT_PUBLIC_SANITY_PROJECT_ID</code>{" "}
            environment variable to enable the Studio.
          </p>
          <p className="font-body text-[14px] leading-[1.6] text-on-surface-variant/70">
            You can find your project ID in your Sanity project settings or by
            running <code className="text-[#C75B39]">npx sanity init</code>.
          </p>
        </div>
      </main>
    );
  }

  return <NextStudio config={config} />;
}
