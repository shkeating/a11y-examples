// astro.config.mjs
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

export default defineConfig({
  site: "https://shkeating.github.io",
  base: process.env.NODE_ENV === 'production' ? '/a11y-examples' : '/',
  integrations: [
    starlight({
      title: "a11y-examples",
      customCss: ["./src/styles/global.css"],
      components: {
        Banner: './src/components/PrintHeader.astro',
      },
      social: [
        {
          label: "repo link",
          icon: "github",
          href: "https://github.com/shkeating/a11y-examples",
        },
      ],
      sidebar: [
  {
    label: 'Tables',
    autogenerate: { directory: 'tables' },
  },
  {
    label: 'Page Regions',
    autogenerate: { directory: 'page-regions' },
  },
  {
    label: 'Labels',
    autogenerate: { directory: 'labels' },
  },
  {
    label: 'Headings',
    link: '/headings/', // Links directly to the index.mdx file you just created
  },
],
    }),
  ],
});
