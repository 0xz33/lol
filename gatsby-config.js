module.exports = {
  siteMetadata: {
    title: 'z33.lol',
    description: 'z33.lol',
  },
  plugins: [
    'gatsby-plugin-image',
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          quality: 100,
          formats: ['auto', 'webp', 'avif'],
          placeholder: 'blurred',
        },
      },
    },

    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
              backgroundColor: `transparent`,
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: { name: 'writing', path: `${__dirname}/writing` },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: { name: 'work', path: `${__dirname}/work` },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
              backgroundColor: `transparent`,
              borderRadius: '24px',
            },
          },
        ],
        // defaultLayouts: {
        //   default: require.resolve('./src/layouts/PostLayout.js'),
        // },
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `IBM+Plex+Mono\:300,400,500,600,700,800`, // you can also specify font weights and styles
        ],
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-styled-components',
    'babel-plugin-styled-components',
  ],
};
