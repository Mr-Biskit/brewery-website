import { defineField, defineType } from "sanity";

export default defineType({
  name: "ourStory",
  title: "Our Story",
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
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "secondSubSection",
      title: "Second Sub Section",
      type: "string",
    }),
    defineField({
      name: "openingTimes",
      title: "Opening Times",
      type: "object",
      fields: [
        defineField({
          name: "weekdays",
          title: "Weekdays",
          type: "string",
        }),
        defineField({
          name: "weekends",
          title: "Weekends",
          type: "string",
        }),
      ],
    }),
  ],
});
