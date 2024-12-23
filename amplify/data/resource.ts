import { type ClientSchema, a, defineData } from "@aws-amplify/backend";
import { generateClient } from "aws-amplify/data";

const schema = a.schema({
  Product: a
  .model({
    id: a.string(),
    title: a.string(),
    description: a.string(),
    price: a.float(),
    imageUrls: a.string().array(),
    category: a.string(),
    stock: a.float(),
    rating: a.float(),
    userId: a.string(),
    reviews: a.string().array(),
    publish: a.boolean(),
    totalSales: a.float().default(0),
    unitsSold: a.float().default(0),
    viewCount: a.float().default(0),
    averageTimeViewed: a.float().default(0),
    clickThroughRate: a.float().default(0),
    lastPurchasedAt: a.date(),

    createdAt: a.date().default(() => new Date()),
    updatedAt: a.date().default(() => new Date()),
  })
  .authorization((allow) => [allow.publicApiKey()]),

  User: a
  .model({
    id: a.string(),
    name: a.string(),
    email: a.string(),
    phone: a.string(),
    avatar: a.string(),
    createdAt: a.date(),
    updatedAt: a.date(),
  })
  .authorization((allow) => [allow.publicApiKey()]),

  Order: a
  .model({
    id: a.string(),
    userId: a.string(),
    product_id: a.string(),
    totalPrice: a.float(),
    status: a.string(),
    createdAt: a.date(),
    updatedAt: a.date(),
  })
  .authorization((allow) => [allow.publicApiKey()]),

});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "apiKey",
    // API Key is used for a.allow.public() rules
    apiKeyAuthorizationMode: {
      expiresInDays: 30,
    },
  },
});

export const client = generateClient<Schema>();