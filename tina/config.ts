import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.GITHUB_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || process.env.HEAD || "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "static",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "pages",
        label: "Pages",
        path: "content/",
        match: {
          include: "*",
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "metaDesc",
            label: "Meta Description",
            required: true,
          },
          {
            type: "string",
            name: "pageHeaderTitle",
            label: "Page Header Title",
          },
          {
            label: "Intro fields",
            name: "intro",
            type: "object",
            fields: [
              {
                label: "Image",
                name: "image",
                type: "string",
              },
              {
                label: "Image alt text",
                name: "imageAlt",
                type: "string",
              },
              {
                label: "Overlay text",
                name: "overlay",
                type: "string",
              },
            ],
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body of page",
            isBody: true,
          },
        ],
      },
      {
        name: "blog",
        label: "Blog Posts",
        path: "content/blog",
        defaultItem: () => {
          return {
            extraStyles: "/scss/post.scss",
            date: new Date().toISOString(),
          };
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "datetime",
            name: "date",
            label: "Date",
            required: true,
          },
          {
            type: "string",
            name: "categories",
            label: "Categories",
            list: true,
          },
          {
            type: "string",
            name: "metaDesc",
            label: "Meta description",
            required: true,
          },
          {
            type: "string",
            name: "excerpt",
            label: "Excerpt",
            required: true,
            ui: {
              component: "textarea",
            },
          },
          {
            type: "string",
            name: "cloudinaryPrimaryImage",
            label: "Primary Image",
            required: true,
          },
          {
            type: "string",
            name: "primaryImageAlt",
            label: "Alt text for Primary Image",
            required: true,
          },
          {
            type: "string",
            name: "socialImage",
            label: "Image for social media",
            required: true,
          },
          {
            type: "string",
            name: "extraStyles",
            label: "Additional CSS styles",
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Post Body",
            isBody: true,
          },
        ],
      },
      {
        name: "services",
        label: "Services",
        path: "content/services",
        defaultItem: () => {
          return {
            extraStyles: "/scss/service-item.scss",
          };
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
        ],
      },
      {
        name: "services_detail",
        label: "Services Detail",
        path: "content/services-detail",
        defaultItem: () => {
          return {
            extraStyles: "/scss/service-item.scss",
          };
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
        ],
      },
      {
        name: "website_creation",
        label: "Website Creation",
        path: "content/website-creation",
        defaultItem: () => {
          return {
            extraStyles: "/scss/service-item.scss",
          };
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
        ],
      },
      {
        name: "work",
        label: "Work",
        path: "content/work",
        defaultItem: () => {
          return {
            extraStyles: "/scss/work-item.scss",
          };
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
        ],
      },
    ],
  },
});
