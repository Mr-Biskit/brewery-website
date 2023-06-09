import { defineField, defineType } from "sanity";

export default defineType({
  name: "sports",
  title: "Sports",
  type: "document",
  fields: [
    defineField({
      name: "firstParagraph",
      title: "First Paragraph",
      type: "string",
    }),
    defineField({
      name: "secondParagraph",
      title: "Second Paragraph",
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
