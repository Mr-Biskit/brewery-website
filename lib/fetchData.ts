import sanityClient from "./sanityClient";
import { ImageDivider } from "./types";

export async function getImageDividers(): Promise<ImageDivider[]> {
  const query = `*[_type == "imageDivider"]`;
  const imageDividers = await sanityClient.fetch(query);
  return imageDividers;
}
