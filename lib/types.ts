// Base interface for common properties
export interface Base {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
}

// Interface for the Image reference
export interface ImageRef {
  _ref: string;
  _type: string;
}

// Interface for the Image
export interface Image {
  _type: string;
  asset: ImageRef;
}

// Interface for the ImageDivider
export interface ImageDivider extends Base {
  image: Image;
  sectionName: string;
}

// Interface for the OpeningTimes
export interface OpeningTimes {
  weekdays: string;
  weekends: string;
}

// Interface for the Span
export interface Span {
  _key: string;
  _type: string;
  marks: any[];
  text: string;
}

// Interface for the Block
export interface Block {
  _key: string;
  _type: string;
  children: Span[];
  markDefs: any[];
  style: string;
}

// Interface for the OurStory
export interface OurStory extends Base {
  openingTimes: OpeningTimes;
  paragraphs: Block[];
  secondSubSection: string;
  subHeading: string;
}

// Interface for the MenuItem
export interface MenuItem {
  _key: string;
  heading: string;
  subHeading: string;
}

// Interface for the MenuCategory
export interface MenuCategory extends Base {
  category: string;
  image: Image;
  menuItems: MenuItem[];
}

export interface Sports {
  _id: string;
  heading: string;
  subHeading: string;
  date: string;
  image: any; // Replace with the specific type for your image, if needed
}

export interface Beer extends Base {
  alcoholVolume: string;
  bitterness: string;
  description: string;
  hops: string[];
  image: Image;
  malts: string[];
  secondImage: Image;
  title: string;
  type: string;
}
