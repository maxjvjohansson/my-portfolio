import { defineField, defineType } from "sanity";

export const skillType = defineType({
  name: "skills",
  title: "Skills",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Skill Title",
      type: "string",
    }),
    {
      name: "icon",
      title: "Icon",
      type: "image",
    },
  ],
});
