module.exports = {
  siteMetadata: {
    title: `Imperva`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "EJhfGxN7HAeLjDrMct-swLdNm7cHO9v35_IK67NSGmQ",
        spaceId: "ef8cemvlx1ab",
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Roboto Condensed`,
          `sans-serif\:400`, // you can also specify font weights and styles
        ],
        display: "swap",
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sass",
  ],
};
