import { defineField, defineType } from "sanity";

export default defineType({
  name: "events",
  title: "Event Page",
  type: "document",
  fields: [
    defineField({
      name: "subHeading",
      title: "Sub Heading",
      type: "string",
    }),
    defineField({
      name: "paragraphs",
      title: "Paragraphs",
      type: "string",
    }),
    defineField({
      name: "imageGallery",
      title: "Image Gallery",
      type: "array",
      of: [
        {
          type: "image",
        },
      ],
    }),
  ],
});
