import { defineField, defineType } from "sanity";

export const postType = defineType({
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Título",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
    }),
    defineField({
      name: "image",
      type: "image",
      fields: [
        defineField({
          name: "alt",
          type: "string",
        }),
      ],
      options: {
        hotspot: {
          previews: [
            { title: "2:1", aspectRatio: 2 / 1 },
            { title: "4:3", aspectRatio: 4 / 3 },
            { title: "16:9", aspectRatio: 16 / 9 },
          ],
        },
      },
    }),
    defineField({
      name: "content",
      title: "Conteúdo",
      type: "array",
      of: [{ type: "block" }],
    }),
  ],
});
