const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-blog-post-tsx": hot(preferDefault(require("/Users/cassius/Sites/elliotevans.site/src/templates/blog-post.tsx"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/cassius/Sites/elliotevans.site/.cache/dev-404-page.js"))),
  "component---src-pages-about-tsx": hot(preferDefault(require("/Users/cassius/Sites/elliotevans.site/src/pages/about.tsx"))),
  "component---src-pages-contact-tsx": hot(preferDefault(require("/Users/cassius/Sites/elliotevans.site/src/pages/contact.tsx"))),
  "component---src-pages-index-tsx": hot(preferDefault(require("/Users/cassius/Sites/elliotevans.site/src/pages/index.tsx"))),
  "component---src-pages-projects-tsx": hot(preferDefault(require("/Users/cassius/Sites/elliotevans.site/src/pages/projects.tsx")))
}

