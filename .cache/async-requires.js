// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-pages-about-tsx": () => import("../src/pages/about.tsx" /* webpackChunkName: "component---src-pages-about-tsx" */),
  "component---src-pages-index-tsx": () => import("../src/pages/index.tsx" /* webpackChunkName: "component---src-pages-index-tsx" */)
}

