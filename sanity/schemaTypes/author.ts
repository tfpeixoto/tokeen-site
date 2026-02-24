import { defineField, defineType } from "sanity";

export const authorType = defineType({
  name: "author",
  title: "Autor",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Nome",
      type: "string",
    }),
    defineField({
      name: "position",
      title: "Cargo",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Descrição",
      type: "text",
    }),
  ],
});
