import { SanityClient } from "@sanity/client";
import { createClient } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION;

const client: SanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});

export default client;

export const urlFor = (source: any) =>
  createImageUrlBuilder(client).image(source);
