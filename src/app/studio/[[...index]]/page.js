"use client";

import { NextStudio } from "next-sanity/studio";
import defineConfig from "../../../../sanity.config";

const config = defineConfig;

export default function StudioPage() {
  return <NextStudio config={config} />;
}
