/**
 * @type {import('gatsby').GatsbyConfig}
 */


require('dotenv').config();

module.exports = {
  pathPrefix: `/taxi-home-app`,
  // siteMetadata:= サイト全体で使用するメタデータを定義するために使われます。
  // サイトのタイトル、説明、著者などの一般的な情報を含むことが多いです。GraphQLクエリを通じてサイトのどこからでもアクセスできます。
  siteMetadata: {
    title: `ワ・タクシー`,
    description: `タクシーで簡単に帰ろう`,
    image: `assets/brand.png`,
    siteUrl: `https://riotamoriya.github.io/taxi-home-app/`,
    type: `website`,
    keywords: `タクシー・バック, 3terms-news`, 
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `ワ・タクシー`,
        short_name: `ワ・タクシー`,
        description: `タクシーで簡単に帰ろう`,
        lang: `ja`,
        display: `browser`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        icon: 'src/assets/brand.png',
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,// 追加
      options: {
        siteUrl: `https://riotamoriya.github.io/taxi-home-app/`,
        stripQueryString: true,
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt', // 追加
      options: {
        host: 'https://riotamoriya.github.io/taxi-home-app/',
        policy: [{ userAgent: '*', disallow: '/' }]
      }
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["fawe"],  // 控えておいた、測定IDを記載します。
        pluginConfig: {
          head: true  // headタグに記載されるようにコンフィグを設定します。
        }
      }
    },
    
    "gatsby-plugin-sass",
    
  ]
};