// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-blog-post-tsx": () => import("../src/templates/blog-post.tsx" /* webpackChunkName: "component---src-templates-blog-post-tsx" */),
  "component---src-pages-about-tsx": () => import("../src/pages/about.tsx" /* webpackChunkName: "component---src-pages-about-tsx" */),
  "component---src-pages-contact-tsx": () => import("../src/pages/contact.tsx" /* webpackChunkName: "component---src-pages-contact-tsx" */),
  "component---src-pages-index-tsx": () => import("../src/pages/index.tsx" /* webpackChunkName: "component---src-pages-index-tsx" */),
  "component---src-pages-projects-tsx": () => import("../src/pages/projects.tsx" /* webpackChunkName: "component---src-pages-projects-tsx" */)
}

