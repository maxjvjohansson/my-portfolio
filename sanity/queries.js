import { client } from "./client.js";
import { groq } from "next-sanity";

export async function getProjects() {
  return client.fetch(
    groq`*[_type == "project"]{
      _id,
      title,
      "slug": slug.current, 
      "image": image.asset->url,
      description,
      project,
      github,
    }`
  );
}
