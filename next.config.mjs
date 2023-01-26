/** @type {import('next').NextConfig} */

import WithMDX from "@next/mdx";
import toc from "@jsdevtools/rehype-toc";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrism from "rehype-prism-plus";
import remarkCodeSandBox from "remark-codesandbox";
import remarkGfm from "remark-gfm";
import remarkHint from "remark-hint";
import rehypeSlug from "rehype-slug";

const withMDX = WithMDX({
  extension: /\.mdx?$/,
  options: {
    // If you use remark-gfm, you'll need to use next.config.mjs
    // as the package is ESM only
    // https://github.com/remarkjs/remark-gfm#install
    remarkPlugins: [
      [remarkCodeSandBox],
      [remarkGfm],
      [remarkHint],
    ],
    rehypePlugins: [
      [
        rehypeAutolinkHeadings,
        {
          behavior: "wrap",
          test: ["h1", "h2", "h3"],
        },
      ],
      rehypeSlug,
      // must under `rehypeAutolinkHeadings` and `rehypeSlug`
      [
        toc,
        {
          nav: true,
          headings: ["h1", "h2", "h3"],
          
        },
      ],
      [rehypePrism],
    ],
    // If you use `MDXProvider`, uncomment the following line.
    providerImportSource: "@mdx-js/react",
  },
});

const nextConfig = {
  // Configure pageExtensions to include md and mdx
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  // Optionally, add any other Next.js config below
  reactStrictMode: true,
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },
};

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
