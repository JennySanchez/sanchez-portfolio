module.exports = {
  pathPrefix: "/sanchez-portfolio",
  assetPrefix: "/sanchez-portfolio",
  siteMetadata: {
    title: "Jenny Hsiao Sanchez",
    description: "Jenny Hsiao Sanchez's portfolio of work as a maker, design thinker, and a professional multidisciplinary Designer.",
    keywords: "Jenny Sanchez, Portfolio, Design, Enterprise Design Thinking",
    lang: "en",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Jenny Hsiao Sanchez Portfolio",
        icon: "src/images/sanchez-favicon.svg",
        short_name: "Jenny Hsiao Sanchez",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#0062ff",
        display: "browser",
      },
    },
    {
        resolve: "gatsby-theme-carbon",
        options: {
            iconPath: "src/images/sanchez-favicon.svg",
            titleType: "prepend",
        }
    }
  ],
};
