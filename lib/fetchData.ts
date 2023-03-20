import sanityClient from "./sanityClient";
import { ImageDivider, MenuCategory } from "./types";

export async function getImageDividers(): Promise<ImageDivider[]> {
  const query = `*[_type == "imageDivider"]`;
  const imageDividers = await sanityClient.fetch(query);
  return imageDividers;
}

export async function getMenuCategory(): Promise<MenuCategory[]> {
  const query = `*[_type == "menuCategory"]`;
  const menuCategory = await sanityClient.fetch(query);
  return menuCategory;
}
