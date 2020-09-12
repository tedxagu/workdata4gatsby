const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-404-tsx": hot(preferDefault(require("/Users/saho/GitHub/workdata4gatsby/src/pages/404.tsx"))),
  "component---src-pages-contact-tsx": hot(preferDefault(require("/Users/saho/GitHub/workdata4gatsby/src/pages/contact.tsx"))),
  "component---src-pages-index-tsx": hot(preferDefault(require("/Users/saho/GitHub/workdata4gatsby/src/pages/index.tsx"))),
  "component---src-templates-basepages-tsx": hot(preferDefault(require("/Users/saho/GitHub/workdata4gatsby/src/templates/basepages.tsx"))),
  "component---src-templates-blog-list-tsx": hot(preferDefault(require("/Users/saho/GitHub/workdata4gatsby/src/templates/blog-list.tsx"))),
  "component---src-templates-blog-tsx": hot(preferDefault(require("/Users/saho/GitHub/workdata4gatsby/src/templates/blog.tsx"))),
  "component---src-templates-portfolio-list-tsx": hot(preferDefault(require("/Users/saho/GitHub/workdata4gatsby/src/templates/portfolio-list.tsx"))),
  "component---src-templates-portfolio-tsx": hot(preferDefault(require("/Users/saho/GitHub/workdata4gatsby/src/templates/portfolio.tsx")))
}

