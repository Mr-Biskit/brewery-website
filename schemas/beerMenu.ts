import { defineField, defineType } from "sanity";

export default defineType({
  name: "beer",
  title: "Beer",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
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
    defineField({
      name: "secondImage",
      title: "Second Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "type",
      title: "Type",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "hops",
      title: "Hops",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "malts",
      title: "Malts",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "alcoholVolume",
      title: "Alcohol Volume",
      type: "string",
    }),
    defineField({
      name: "bitterness",
      title: "Bitterness",
      type: "string",
    }),
  ],
});
