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
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
        web: [
          {
            name: `Inter`,
            file: `https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800&display=swap`,
          },
        ],
      },
    },
    // {
    //   resolve: `gatsby-plugin-google-fonts`,
    //   options: {
    //     fonts: [
    //       `Roboto Condensed`,
    //       `sans-serif\:400`, // you can also specify font weights and styles
    //     ],
    //     display: "swap",
    //   },
    // },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sass",
  ],
};
