import createSchema from "part:@sanity/base/schema-creator";

import schemaTypes from "all:part:@sanity/base/schema-type";

export default createSchema({
  name: "default",

  types: schemaTypes.concat([
    {
      name: "author",
      type: "document",
      title: "Author",
      fields: [
        {
          name: "name",
          type: "string",
          title: "Name",
        },
        {
          name: "avatar",
          type: "image",
          title: "Avatar",
        },
      ],
    },
    {
      name: "blog",
      type: "document",
      title: "Blog",
      fields: [
        {
          name: "title",
          type: "string",
          title: "Title",
        },
        {
          name: "subtitle",
          type: "string",
          title: "Subtitle",
        },
        {
          name: "coverImage",
          title: "Cover Image",
          type: "image",
        },
        {
          name: "date",
          title: "Date",
          type: "datetime",
        },
        {
          name: "author",
          type: "reference",
          title: "Author",
          to: [{ type: "author" }],
        },
        {
          name: "slug",
          type: "slug",
          title: "Slug",
        },
      ],
    },
  ]),
});
