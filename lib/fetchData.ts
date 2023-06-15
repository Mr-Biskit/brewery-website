import sanityClient from "./sanityClient";
import { ImageDivider, MenuCategory, Beer, Post } from "./types";

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

export async function getBeer(): Promise<Beer[]> {
  const query = `*[_type == "beer"]`;
  const beer = await sanityClient.fetch(query);
  return beer;
}

export async function getPosts(): Promise<Post[]> {
  const query = `
    *[_type == "post"]{
      ...,
      description,
      categories[]->{
        title
      }
    }
  `;
  const posts = await sanityClient.fetch(query);
  return posts;
}
