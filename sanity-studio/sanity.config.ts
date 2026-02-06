import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";
import { deskStructure } from "./deskStructure";

export default defineConfig({
  name: "brightolive",
  title: "BrightOlive CMS",

  projectId: "8i61ocow",
  dataset: "production",

  plugins: [
    structureTool({
      structure: deskStructure,
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
});
