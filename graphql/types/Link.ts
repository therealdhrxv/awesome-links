import { builder } from "../builder";

builder.prismaObject("Link", {
  fields: (t) => ({
    id: t.exposeID("id"),
    title: t.exposeString("title"),
    url: t.exposeString("url"),
    description: t.exposeString("description"),
    imageUrl: t.exposeString("imageUrl"),
    category: t.exposeString("category"),
    users: t.relation("users"),
  }),
});
