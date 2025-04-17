import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./sanity/schemaTypes";
import { visionTool } from "@sanity/vision";

export default defineConfig({
  name: "default",
  title: "My Portfolio",

  basePath: "/studio",
  projectId: "dy5926ae",
  dataset: "production",

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
});
