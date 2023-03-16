import { defineField, defineType } from "sanity";

export default defineType({
  name: "imageDivider",
  title: "Image Divider",
  type: "document",
  fields: [
    defineField({
      name: "sectionName",
      title: "Section Name",
      type: "string",
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
  ],
});
