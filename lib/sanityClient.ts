import { SanityClient } from "@sanity/client";
import { createClient } from "next-sanity";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION;

const client: SanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
});

export default client;
