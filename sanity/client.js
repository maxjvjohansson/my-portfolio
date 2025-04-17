import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "dy5926ae",
  dataset: "production",
  apiVersion: "2025-04-17",
  useCdn: false,
});
