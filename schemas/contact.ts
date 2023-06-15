import { defineField, defineType } from "sanity";

export default defineType({
  name: "Contact",
  title: "Contact Details",
  type: "document",
  fields: [
    defineField({
      name: "address",
      title: "Street Address",
      type: "string",
    }),
    defineField({
      name: "mobile",
      title: "Mobile Number",
      type: "string",
    }),
    defineField({
      name: "email",
      title: "Email Address",
      type: "string",
    }),
  ],
});
