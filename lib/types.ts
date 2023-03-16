export interface ImageDivider {
  _id: string;
  sectionName: string;
  image: any; // Replace with the specific type for your image, if needed
}

export interface OurStory {
  _id: string;
  subHeading: string;
  paragraphs: any[];
  secondSubSection: string;
  openingTimes: {
    weekdays: string;
    weekends: string;
  };
}

export interface MenuItem {
  heading: string;
  subHeading: string;
}

export interface MenuCategory {
  _id: string;
  category: string;
  image: any; // Replace with the specific type for your image, if needed
  menuItems: MenuItem[];
}

export interface Sports {
  _id: string;
  heading: string;
  subHeading: string;
  date: string;
  image: any; // Replace with the specific type for your image, if needed
}
