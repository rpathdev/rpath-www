import {
  defineConfig,
  resolveSiteDataByRoute,
  type HeadConfig,
} from "vitepress";
import { groupIconMdPlugin } from "vitepress-plugin-group-icons";

const siteUrl = "https://rpath.dev";
const currentVersion = "v0.1.0";
const ogImage = `${siteUrl}/og.png`;
const siteDescription =
  "Refresh your shell PATH and environment without restarting.";
const deSiteDescription =
  "Aktualisiere deinen Shell-PATH und deine Umgebung ohne Neustart.";

const englishGuide = [
  { text: "Overview", link: "/guide/" },
  { text: "Installation", link: "/guide/installation" },
  { text: "Quick Start", link: "/guide/quick-start" },
  { text: "Shell Wrappers", link: "/guide/shell-wrappers" },
  { text: "PATH Planning", link: "/guide/path-planning" },
  { text: "Snapshots & Versions", link: "/guide/snapshots-and-versions" },
  { text: "Integrations", link: "/guide/integrations" },
  { text: "Troubleshooting", link: "/guide/troubleshooting" },
];

const germanGuide = [
  { text: "Überblick", link: "/de/guide/" },
  { text: "Installation", link: "/de/guide/installation" },
  { text: "Schnellstart", link: "/de/guide/quick-start" },
  { text: "Shell-Wrapper", link: "/de/guide/shell-wrappers" },
  { text: "PATH-Planung", link: "/de/guide/path-planning" },
  {
    text: "Snapshots & Versionen",
    link: "/de/guide/snapshots-and-versions",
  },
  { text: "Integrationen", link: "/de/guide/integrations" },
  { text: "Fehlerbehebung", link: "/de/guide/troubleshooting" },
];

const englishReference = [
  { text: "Commands", link: "/reference/commands" },
  { text: "JSON Output", link: "/reference/json" },
];

const germanReference = [
  { text: "Befehle", link: "/de/reference/commands" },
  { text: "JSON-Ausgabe", link: "/de/reference/json" },
];

export default defineConfig({
  rewrites: {
    "en/:rest*": ":rest*",
  },
  title: "rpath",
  titleTemplate: ":title | rpath Docs",
  description: siteDescription,
  lang: "en-US",
  lastUpdated: false,
  cleanUrls: true,
  sitemap: { hostname: siteUrl },
  appearance: false,
  markdown: {
    lineNumbers: true,
    config(md) {
      const fence = md.renderer.rules.fence!;
      md.renderer.rules.fence = function (tokens, idx, options, env, self) {
        const locale = (env as any).locale || "en";
        const codeCopyButtonTitle =
          locale === "de" ? "Code kopieren" : "Copy code";
        return fence(tokens, idx, options, env, self).replace(
          '<button title="Copy Code" class="copy"></button>',
          `<button title="${codeCopyButtonTitle}" class="copy"></button>`,
        );
      };
      md.use(groupIconMdPlugin);
    },
  },
  head: [
    ["link", { rel: "icon", type: "image/png", href: "/logo.png" }],
    ["link", { rel: "apple-touch-icon", href: "/logo.png" }],
    ["link", { rel: "manifest", href: "/site.webmanifest" }],
    ["meta", { name: "theme-color", content: "#00D0B0" }],
    ["meta", { name: "color-scheme", content: "dark" }],
    ["meta", { name: "author", content: "ByJonas" }],
    ["meta", { name: "robots", content: "index, follow" }],
    [
      "meta",
      {
        name: "keywords",
        content:
          "rpath, PATH refresh, environment variables, shell PATH, terminal, CLI, PowerShell, bash, zsh, fish, developer tools",
      },
    ],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:site_name", content: "rpath" }],
    ["meta", { property: "og:image", content: ogImage }],
    ["meta", { property: "og:image:width", content: "1920" }],
    ["meta", { property: "og:image:height", content: "1080" }],
    [
      "meta",
      { property: "og:image:alt", content: "rpath - refresh your environment" },
    ],
    ["meta", { property: "og:url", content: `${siteUrl}/` }],
    ["meta", { name: "twitter:card", content: "summary_large_image" }],
    ["meta", { name: "twitter:image", content: ogImage }],
    [
      "script",
      {},
      `try{
        localStorage.setItem('vitepress-theme-appearance','dark');
        document.documentElement.classList.add('dark');
      }catch(e){}`,
    ],
    [
      "script",
      { type: "application/ld+json" },
      JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "rpath Docs",
        url: siteUrl,
        description: siteDescription,
        inLanguage: ["en-US", "de-DE"],
        publisher: {
          "@type": "Person",
          name: "ByJonas",
          url: "https://www.byjonas.dev",
        },
      }),
    ],
  ],
  themeConfig: {
    logo: "/logo.png",
    editLink: {
      pattern: "https://github.com/builtbyjonas/rpath/edit/main/www/:path",
      text: "Edit this page on GitHub",
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/builtbyjonas/rpath" },
    ],
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright (c) 2026 ByJonas and rpath contributors",
    },
    search: { provider: "local" },
  },
  locales: {
    root: {
      label: "English",
      lang: "en-US",
      title: "rpath",
      description: siteDescription,
      themeConfig: {
        nav: [
          { text: "Guide", link: "/guide/", activeMatch: "/guide/" },
          {
            text: "Reference",
            link: "/reference/commands",
            activeMatch: "/reference/",
          },
          { text: "Security", link: "/security" },
          {
            text: currentVersion,
            items: [
              {
                text: "Changelog",
                link: "https://github.com/builtbyjonas/rpath/blob/main/CHANGELOG.md",
              },
              {
                text: "Roadmap",
                link: "https://github.com/builtbyjonas/rpath/blob/main/ROADMAP.md",
              },
              {
                text: "Releases",
                link: "https://github.com/builtbyjonas/rpath/releases",
              },
            ],
          },
        ],
        sidebar: {
          "/guide/": [
            {
              text: "Guide",
              collapsed: false,
              items: englishGuide,
            },
          ],
          "/reference/": [
            {
              text: "Reference",
              collapsed: false,
              items: englishReference,
            },
          ],
        },
      },
    },
    de: {
      label: "Deutsch",
      lang: "de-DE",
      title: "rpath",
      description: deSiteDescription,
      themeConfig: {
        nav: [
          { text: "Anleitung", link: "/de/guide/", activeMatch: "/de/guide/" },
          {
            text: "Referenz",
            link: "/de/reference/commands",
            activeMatch: "/de/reference/",
          },
          { text: "Sicherheit", link: "/de/security" },
          {
            text: currentVersion,
            items: [
              {
                text: "Changelog",
                link: "https://github.com/builtbyjonas/rpath/blob/main/CHANGELOG.md",
              },
              {
                text: "Roadmap",
                link: "https://github.com/builtbyjonas/rpath/blob/main/ROADMAP.md",
              },
              {
                text: "Releases",
                link: "https://github.com/builtbyjonas/rpath/releases",
              },
            ],
          },
        ],
        sidebar: {
          "/de/guide/": [
            {
              text: "Anleitung",
              collapsed: false,
              items: germanGuide,
            },
          ],
          "/de/reference/": [
            {
              text: "Referenz",
              collapsed: false,
              items: germanReference,
            },
          ],
        },
        editLink: {
          pattern: "https://github.com/builtbyjonas/rpath/edit/main/www/:path",
          text: "Diese Seite auf GitHub bearbeiten",
        },
      },
    },
  },
  transformPageData(pageData, ctx) {
    const site = resolveSiteDataByRoute(
      ctx.siteConfig.site,
      pageData.relativePath,
    );
    const route = routeFromRelativePath(pageData.relativePath);
    const canonicalUrl = `${siteUrl}${route}`;
    const alternateRoute = alternateRouteFor(route);
    const isGerman = route.startsWith("/de/");
    const locale = isGerman ? "de_DE" : "en_US";
    const alternateLocale = isGerman ? "en_US" : "de_DE";
    const title = pageData.title || site.title;
    const fullTitle =
      title === "rpath" ? "rpath Docs" : `${title} | rpath Docs`;
    const description =
      pageData.description ||
      pageData.frontmatter.description ||
      site.description;
    const jsonLd =
      route === "/" || route === "/de/"
        ? softwareApplicationJsonLd(canonicalUrl, description)
        : techArticleJsonLd(fullTitle, description, canonicalUrl, site.lang);

    ((pageData.frontmatter.head ??= []) as HeadConfig[]).push(
      ["link", { rel: "canonical", href: canonicalUrl }],
      [
        "link",
        {
          rel: "alternate",
          hreflang: isGerman ? "de-DE" : "en-US",
          href: canonicalUrl,
        },
      ],
      [
        "link",
        {
          rel: "alternate",
          hreflang: isGerman ? "en-US" : "de-DE",
          href: `${siteUrl}${alternateRoute}`,
        },
      ],
      [
        "link",
        {
          rel: "alternate",
          hreflang: "x-default",
          href: `${siteUrl}${isGerman ? alternateRoute : route}`,
        },
      ],
      ["meta", { name: "description", content: description }],
      ["meta", { property: "og:locale", content: locale }],
      ["meta", { property: "og:locale:alternate", content: alternateLocale }],
      ["meta", { property: "og:title", content: fullTitle }],
      ["meta", { property: "og:description", content: description }],
      ["meta", { property: "og:url", content: canonicalUrl }],
      ["meta", { property: "og:image", content: ogImage }],
      ["meta", { name: "twitter:title", content: fullTitle }],
      ["meta", { name: "twitter:description", content: description }],
      ["meta", { name: "twitter:image", content: ogImage }],
      [
        "script",
        { type: "application/ld+json" },
        JSON.stringify(jsonLd),
      ],
    );
  },
});

function routeFromRelativePath(relativePath: string) {
  let path = relativePath.replace(/\\/g, "/").replace(/\.md$/, "");
  if (path.startsWith("en/")) {
    path = path.slice(3);
  }
  if (path === "index") {
    return "/";
  }
  if (path === "de/index") {
    return "/de/";
  }
  if (path.endsWith("/index")) {
    return `/${path.slice(0, -"index".length)}`;
  }
  return `/${path}`;
}

function alternateRouteFor(route: string) {
  if (route === "/") {
    return "/de/";
  }
  if (route === "/de/") {
    return "/";
  }
  if (route.startsWith("/de/")) {
    return route.slice(3);
  }
  return `/de${route}`;
}

function softwareApplicationJsonLd(url: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "rpath",
    url,
    description,
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Windows, macOS, Linux",
    softwareVersion: currentVersion,
    programmingLanguage: "Rust",
    license: "https://github.com/builtbyjonas/rpath/blob/main/LICENSE",
    codeRepository: "https://github.com/builtbyjonas/rpath",
    author: {
      "@type": "Person",
      name: "ByJonas",
      url: "https://www.byjonas.dev",
    },
  };
}

function techArticleJsonLd(
  headline: string,
  description: string,
  url: string,
  language: string,
) {
  return {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline,
    description,
    url,
    inLanguage: language,
    about: "rpath PATH refresh CLI",
    author: {
      "@type": "Person",
      name: "ByJonas",
      url: "https://www.byjonas.dev",
    },
    publisher: {
      "@type": "Person",
      name: "ByJonas",
      url: "https://www.byjonas.dev",
    },
    isPartOf: {
      "@type": "WebSite",
      name: "rpath Docs",
      url: siteUrl,
    },
  };
}
