const axios = require("axios");

const {
  PactV3,
  MatchersV3,
  SpecificationVersion,
} = require("@pact-foundation/pact");

const { like } = MatchersV3;

const provider = new PactV3({
  consumer: "AjFrontendWebsite",
  provider: "AjApiService",
  dir: "pacts",
  spec: SpecificationVersion.SPECIFICATION_VERSION_V2,
});

describe("API Pact test", () => {
  describe("Getting Data from GQL", () => {
    // test("Breaking News Exists For Website", async () => {
    //   await provider.addInteraction({
    //     states: [{ description: "Breaking News Exists For Website" }],
    //     uponReceiving: "Get All Breaking News For Website",
    //     withRequest: {
    //       method: "GET",
    //       path: "/graphql",
    //       query: {
    //         "wp-site": "aje",
    //         operationName: "ArchipelagoBreakingTickerQuery",
    //         variables: "{}",
    //         extensions: "{}",
    //       },
    //       headers: {
    //         "wp-site": "aje",
    //       }
    //     },
    //     willRespondWith: {
    //       status: 200,
    //       headers: {
    //         "Content-Type": "application/json; charset=utf-8",
    //       },
    //       body: {
    //         data: {
    //           breakingNews: {
    //             post: like("2840262"),
    //             tickerTitle: like("breaking"),
    //             tickerText: like([
    //               "New topics",
    //               "New breaking news",
    //               "New update",
    //             ]),
    //             modified: like("2024-04-23 08:25:30"),
    //             link: like(
    //               "/news/2024/4/21/mass-grave-with-50-bodies-found-in-khan-younis-hlstyleguide-2"
    //             ),
    //             __typename: like("BreakingNews"),
    //           },
    //         },
    //       },
    //     },
    //   });

    //   await provider.executeTest(async (mockService) => {
    //     // Request to moke server
    //     const news = await axios
    //       .get(`${mockService.url}/graphql`, {
    //         params: {
    //           "wp-site": "aje",
    //           operationName: "ArchipelagoBreakingTickerQuery",
    //           variables: "{}",
    //           extensions: "{}",
    //         },
    //         headers: {
    //           "wp-site": "aje",
    //         }
    //       })
    //       .then((r) => r.data);

    //     expect(news).toStrictEqual({
    //       data: {
    //         breakingNews: {
    //           post: "2840262",
    //           tickerTitle: "breaking",
    //           tickerText: ["New topics", "New breaking news", "New update"],
    //           modified: "2024-04-23 08:25:30",
    //           link: "/news/2024/4/21/mass-grave-with-50-bodies-found-in-khan-younis-hlstyleguide-2",
    //           __typename: "BreakingNews",
    //         },
    //       },
    //     });
    //   });
    // });

    test("Article Exists For Website", async () => {
      await provider.addInteraction({
        states: [{ description: "Article Exists For Website" }],
        uponReceiving: "Get All Article For Website",
        withRequest: {
          method: "GET",
          path: "/graphql",
          query: {
            "wp-site": "aje",
            operationName: "ArchipelagoSingleArticleQuery",
            variables:
              '{"name":"1-ta-op2-indonesias-tiktok-sellers-do-roaring-trading-in-hijab-handbags-16","postType":"opinion","preview":""}',
            extensions: "{}",
          },
          headers: {
            "wp-site": "aje",
          },
        },
        willRespondWith: {
          status: 200,
          headers: {
            "Content-Type": "application/json; charset=utf-8",
          },
          body: {
            data: {
              article: {
                content: like("abc"),
                subheading:
                like("1% Defending champions England are among the teams most likely to stop hosts & favourites India the number 1 from lifting the trophy"),
                id: like("2842438"),
                title:
                like("1% TA OP2 Indonesia’s TikTok sellers do roaring trading in hijab & handbags"),
                excerpt:
                like("1% SUM OP2 Indonesia’s TikTok Shop ban reveals mixed feelings on e-commerce revolution & online seller say it is misguid"),
                date: like("2024-04-28T00:25:39"),
                link: like("/opinions/2024/4/28/1-ta-op2-indonesias-tiktok-sellers-do-roaring-trading-in-hijab-handbags-16"),
                isBreaking: like(null),
                isLive: like(null),
                shortUrl: like("https://aje.io/yzg6gu"),
                proxyShortUrl: like("https://aje.io/f5lmiz"),
                isDeveloping: like(null),
                externalUrl: like(null),
                replacementHeadline:
                like("1% RH OP2 England look to spoil under pressure India’s Cricket WorldCup par"),
                postType: like("opinion"),
                author: [
                  {
                    id: like("561"),
                    name: like("ajeAutoChiefEditor"),
                    link: like("/author/ajeAutoChiefEditor"),
                    description: like(""),
                    slug: like("ajeAutoChiefEditor"),
                    twitter: like(""),
                    facebook: like(""),
                    avatars: [
                      {
                        size: like("24"),
                        url: like(""),
                        __typename: like("AvatarURLs"),
                      },
                      {
                        size: like("48"),
                        url: like(""),
                        __typename: like("AvatarURLs"),
                      },
                      {
                        size: like("96"),
                        url: like(""),
                        __typename: like("AvatarURLs"),
                      },
                    ],
                    jobTitle: like(""),
                    linked_nicename: like(null),
                    __typename: like("User"),
                  },
                  {
                    id: like("917772"),
                    name: like("Marwan Bishara"),
                    link: like("/author/marwan_bishara_201132512858571875"),
                    description:
                    like("Marwan Bishara is an author who writes extensively on global politics and is widely regarded as a leading authority on US foreign policy, the Middle East and international strategic affairs. He was previously a professor of International Relations at the American University of Paris."),
                    slug: like("marwan_bishara_201132512858571875"),
                    twitter: like("https://twitter.com/MarwanBishara"),
                    facebook: like(""),
                    avatars: [
                      {
                        size: like("24"),
                        url: like("/wp-content/uploads/2019/04/a30cce93f88c42cbb31e48adbcfc19d1_6.jpeg?resize=24%2C24"),
                        __typename: like("AvatarURLs"),
                      },
                      {
                        size: like("48"),
                        url: like("/wp-content/uploads/2019/04/a30cce93f88c42cbb31e48adbcfc19d1_6.jpeg?resize=48%2C48"),
                        __typename: like("AvatarURLs"),
                      },
                      {
                        size: like("96"),
                        url: like("/wp-content/uploads/2019/04/a30cce93f88c42cbb31e48adbcfc19d1_6.jpeg?resize=96%2C96"),
                        __typename: like("AvatarURLs"),
                      },
                    ],
                    jobTitle: like("Senior political analyst at Al Jazeera."),
                    linked_nicename: like(""),
                    __typename: like("User"),
                  },
                ],
                __typename: like("Post"),
                featuredImage: {
                  id: like("2842162"),
                  sourceUrl: like("/wp-content/uploads/2024/04/image-1714226966.jpg"),
                  credit: like(""),
                  caption: like(""),
                  alt: like("alt text of Image"),
                  width: like(1920),
                  height: like(1056),
                  __typename: like("Media"),
                  itemNumber: like(""),
                },
                source: [],
                postLabel: [],
                verticalFeaturedImage: null,
                outsideImage: {
                  id: like("2842162"),
                  sourceUrl: like("/wp-content/uploads/2024/04/image-1714226966.jpg"),
                  credit: like(""),
                  caption: like(""),
                  alt: like("alt text of Image"),
                  width: like(1920),
                  height: like(1056),
                  __typename: like("Media"),
                },
                galleryMedia: like([]),
                galleryImagesCount: like(null),
                showAuthor: like(true),
                writeInAuthor: like(""),
                authorTagline: like(null),
                themeMode: like(null),
                writeInCoAuthor: {
                  name: like(""),
                  order: like("1"),
                  __typename: like("WriteInAuthor"),
                },
                correctionText: like(null),
                correctionDate: like(null),
                updatedDate: like(""),
                displayPublishDate: like(true),
                modified_gmt: like("2024-04-28T00:25:39"),
                hasElectionBanner: like(false),
                primaryCategoryTerm: like("opinions"),
                primaryCategoryTermName: like("Opinions"),
                primaryTagsTermName: like("Brexit"),
                primaryTagsTerm: like("brexit"),
                featuredCaption: like(""),
                featuredYoutube: like("https://www.youtube.com/watch?v=u4fc9ahU8Cg"),
                featuredDataWrapperIframe: like(""),
                socialMediaImage: {
                  sourceUrl: like("/wp-content/uploads/2024/04/image-1714226966.jpg"),
                  credit: like(""),
                  caption: like(""),
                  width: like(1920),
                  height: like(1056),
                  // sizes: like([
                  //   {
                  //     crop: like("arc-image-1800"),
                  //     width: like(1800),
                  //     height: like(1056),
                  //     url: like("/wp-content/uploads/2024/04/image-1714226966.jpg?resize=1800%2C1056"),
                  //     ropRectangle: like(null),
                  //     __typename: like("MediaSize"),
                  //   },
                  //   {
                  //     crop: like("arc-image-1200-630"),
                  //     width: like(1200),
                  //     height: like(630),
                  //     url: like("/wp-content/uploads/2024/04/image-1714226966.jpg?resize=1200%2C630"),
                  //     cropRectangle: like(null),
                  //     __typename: like("MediaSize"),
                  //   },
                  //   {
                  //     crop: like("full"),
                  //     width: like(1920),
                  //     height: like(1056),
                  //     url: like("/wp-content/uploads/2024/04/image-1714226966.jpg?fit=1920%2C1056"),
                  //     cropRectangle: like(null),
                  //     __typename: like("MediaSize"),
                  //   },
                  // ]),
                  __typename: like("Media"),
                },
                programs: like([]),
                video: {
                  id: like(""),
                  duration: like(""),
                  name: like(""),
                  accountId: like(""),
                  playerId: like(""),
                  __typename: like("Video"),
                },
                categories: like([
                  {
                    title: like(""),
                    slug: like("opinions"),
                    link: like("/opinions/"),
                    name: like("Opinions"),
                    homePageEvent: like(false),
                    customNavigation: like(null),
                    displayCustomNavigationOnArticles: like(false),
                    customNavigationBrandingImg: like(""),
                    __typename: like("Category"),
                  },
                ]),
                internalTaxonomies: like([]),
                internalReporting: [
                  {
                    title: like("Take me deeper"),
                    slug: like("take-me-deeper"),
                    __typename: like("Category"),
                  },
                ],
                midan: like([]),
                tags: [
                  {
                    title: like("Brexit"),
                    slug: like("brexit"),
                    link: like("/tag/brexit/"),
                    homePageEvent: like(false),
                    customNavigation: like(null),
                    displayCustomNavigationOnArticles: like(false),
                    customNavigationBrandingImg: like(""),
                    __typename: like("Tag"),
                  },
                ],
                trending: like([]),
                where: [
                  {
                    title: like("Africa"),
                    slug: like("africa"),
                    link: like("/where/africa/"),
                    customNavigation: like(null),
                    displayCustomNavigationOnArticles: like(false),
                    customNavigationBrandingImg: like(""),
                    __typename: like("Category"),
                  },
                ],
                series: like([]),
                relatedArticles: [
                  {
                    id: like("2842331"),
                    title:
                    like("1% TA OP4 Indonesia’s TikTok sellers do roaring trading in hijab & handbags"),
                    replacementHeadline:
                    like("1% RH OP4 England look to spoil under pressure India’s Cricket WorldCup par"),
                    excerpt:
                    like("1% SUM OP4 Indonesia’s TikTok Shop ban reveals mixed feelings on e-commerce revolution & online seller say it is misguid"),
                    link: like("/opinions/2024/4/27/1-ta-op4-indonesias-tiktok-sellers-do-roaring-trading-in-hijab-handbags-13"),
                    date: like("2024-04-27T18:43:33"),
                    showAuthor: like(true),
                    writeInAuthor: like(""),
                    writeInCoAuthor: {
                      name: like(""),
                      order: like("1"),
                      __typename: like("WriteInAuthor"),
                    },
                    postType: like("opinion"),
                    externalUrl: like(null),
                    content:
                      like("<p>The leader of Polands governing party and a partner in its governing coalition announced an agreement late on Wednesday to postpone Sundays presidential election, without setting a new date for the poll.Jaroslaw Kaczynski, head of the ruling Law and Justice party, and Jaroslaw Gowin, leader of a small party in the conservative coalition, announced in a joint statement that they had agreed to cancel Sundays vote and set a new date. More: Polish presidential election in chaos with four days to go As most European elections are called off, Poland pushes ahead Tusk urges Poles to boycott election out of decency They called their decision a solution that will guarantee Poles the opportunity to participate in democratic elections. The decision brought some clarity to a chaotic situation that left Poles uncertain about whether they would be casting votes this weekend. The May 10 date had been set months ago, but the coronavirus pandemic and a government-ordered lockdown threw preparations into disarray.</p>\n<p>Bitter fighting between the conservative governing party and its political opponents kept them from agreeing on an alternative. The governing party had sought to stick to the election date by making it a postal vote, but proper legislation was still not approved. Many in Poland voiced concerns that such a vote organised at short notice might not be conducted property or meet democratic standards for fairness.</p>\n<p>A disagreement between Kaczynski and Gowin had also created a impasse that had threatened to cause an larger political crisis. Their joint statement suggested the crisis had been averted. Under their plan, after Sunday the Supreme Court will declare the election void because it does not happen, and then parliament Speaker Elzbieta Witek will announce a new presidential election to be held on the first possible date. Under a constitutionally dictated timeline, the last possible date for the presidential election in 2020 would be on May 23. But they said they would amend legislation regulating elections in 2020, which might suggest a later date. The vote will be conducted by postal ballot.</p>\n<p>The Law and Justice party is backing the reelection bid by President Andrzej Duda, whose five-year term expires on August 6. Duda leads in opinion polls, well ahead of the nine other candidates. Adam Bielan, the campaign spokesman for Duda, told private broadcaster TVN24 that he expected a new election to be held in late June or early July. Other politicians said it could be held as late as the end of July before Dudas term expires. The legislation passed the lower house of parliament last month but the senate took a month to debate it, then rejected it on Tuesday. The bill returned to the lower house, but there was no time left before Sunday to prepare the ballots and have postal workers deliver them to voters.</p>\n<p>&nbsp;</p>\n"),
                    programs: like([]),
                    __typename: like("Post"),
                    video: {
                      id: like(""),
                      duration: like(""),
                      __typename: like("Video"),
                    },
                    featuredImage: {
                      id: like("2842140"),
                      sourceUrl:
                      like("/wp-content/uploads/2024/04/images-1714124970.webp"),
                      credit: like(""),
                      caption: like(""),
                      alt: like("alt text of Featured Image"),
                      width: like(770),
                      height: like(513),
                      __typename: like("Media"),
                    },
                    author: [
                      {
                        id: like("561"),
                        name: like("ajeAutoChiefEditor"),
                        link: like("/author/ajeAutoChiefEditor"),
                        description: like(""),
                        slug: like("ajeAutoChiefEditor"),
                        twitter: like(""),
                        facebook: like(""),
                        avatars: [
                          {
                            size: like("24"),
                            url: like(""),
                            __typename: like("AvatarURLs"),
                          },
                          {
                            size: like("48"),
                            url: like(""),
                            __typename: like("AvatarURLs"),
                          },
                          {
                            size: like("96"),
                            url: like(""),
                            __typename: like("AvatarURLs"),
                          },
                        ],
                        jobTitle: like(""),
                        linked_nicename: like(null),
                        __typename: like("User"),
                      },
                      {
                        id: like("917772"),
                        name: like("Marwan Bishara"),
                        link: like("/author/marwan_bishara_201132512858571875"),
                        description:
                        like("Marwan Bishara is an author who writes extensively on global politics and is widely regarded as a leading authority on US foreign policy, the Middle East and international strategic affairs. He was previously a professor of International Relations at the American University of Paris."),
                        slug: like("marwan_bishara_201132512858571875"),
                        twitter: like("https://twitter.com/MarwanBishara"),
                        facebook: like(""),
                        avatars: [
                          {
                            size: like("24"),
                            url: like("/wp-content/uploads/2019/04/a30cce93f88c42cbb31e48adbcfc19d1_6.jpeg?resize=24%2C24"),
                            __typename: like("AvatarURLs"),
                          },
                          {
                            size: like("48"),
                            url: like("/wp-content/uploads/2019/04/a30cce93f88c42cbb31e48adbcfc19d1_6.jpeg?resize=48%2C48"),
                            __typename: like("AvatarURLs"),
                          },
                          {
                            size: like("96"),
                            url: like("/wp-content/uploads/2019/04/a30cce93f88c42cbb31e48adbcfc19d1_6.jpeg?resize=96%2C96"),
                            __typename: like("AvatarURLs"),
                          },
                        ],
                        jobTitle: like("Senior political analyst at Al Jazeera."),
                        linked_nicename: like(""),
                        __typename: like("User"),
                      },
                    ],
                    outsideImage: {
                      id: like("2842140"),
                      sourceUrl:
                      like("/wp-content/uploads/2024/04/images-1714124970.webp"),
                      credit: like(""),
                      caption: like(""),
                      alt: like("alt text of Featured Image"),
                      width: like(770),
                      height: like(513),
                      __typename: like("Media"),
                    },
                  },
                  {
                    id: like("2842371"),
                    title:
                    like("1% TA OP4 Indonesia’s TikTok sellers do roaring trading in hijab & handbags"),
                    replacementHeadline:
                    like("1% RH OP4 England look to spoil under pressure India’s Cricket WorldCup par"),
                    excerpt:
                    like("1% SUM OP4 Indonesia’s TikTok Shop ban reveals mixed feelings on e-commerce revolution & online seller say it is misguid"),
                    link: like("/opinions/2024/4/27/1-ta-op4-indonesias-tiktok-sellers-do-roaring-trading-in-hijab-handbags-14"),
                    date: like("2024-04-27T23:07:11"),
                    showAuthor: like(true),
                    writeInAuthor: like(""),
                    writeInCoAuthor: {
                      name: like(""),
                      order: like("1"),
                      __typename: like("WriteInAuthor"),
                    },
                    postType: like("opinion"),
                    externalUrl: like(null),
                    content:
                      like("<p>The leader of Polands governing party and a partner in its governing coalition announced an agreement late on Wednesday to postpone Sundays presidential election, without setting a new date for the poll.Jaroslaw Kaczynski, head of the ruling Law and Justice party, and Jaroslaw Gowin, leader of a small party in the conservative coalition, announced in a joint statement that they had agreed to cancel Sundays vote and set a new date. More: Polish presidential election in chaos with four days to go As most European elections are called off, Poland pushes ahead Tusk urges Poles to boycott election out of decency They called their decision a solution that will guarantee Poles the opportunity to participate in democratic elections. The decision brought some clarity to a chaotic situation that left Poles uncertain about whether they would be casting votes this weekend. The May 10 date had been set months ago, but the coronavirus pandemic and a government-ordered lockdown threw preparations into disarray.</p>\n<p>Bitter fighting between the conservative governing party and its political opponents kept them from agreeing on an alternative. The governing party had sought to stick to the election date by making it a postal vote, but proper legislation was still not approved. Many in Poland voiced concerns that such a vote organised at short notice might not be conducted property or meet democratic standards for fairness.</p>\n<p>A disagreement between Kaczynski and Gowin had also created a impasse that had threatened to cause an larger political crisis. Their joint statement suggested the crisis had been averted. Under their plan, after Sunday the Supreme Court will declare the election void because it does not happen, and then parliament Speaker Elzbieta Witek will announce a new presidential election to be held on the first possible date. Under a constitutionally dictated timeline, the last possible date for the presidential election in 2020 would be on May 23. But they said they would amend legislation regulating elections in 2020, which might suggest a later date. The vote will be conducted by postal ballot.</p>\n<p>The Law and Justice party is backing the reelection bid by President Andrzej Duda, whose five-year term expires on August 6. Duda leads in opinion polls, well ahead of the nine other candidates. Adam Bielan, the campaign spokesman for Duda, told private broadcaster TVN24 that he expected a new election to be held in late June or early July. Other politicians said it could be held as late as the end of July before Dudas term expires. The legislation passed the lower house of parliament last month but the senate took a month to debate it, then rejected it on Tuesday. The bill returned to the lower house, but there was no time left before Sunday to prepare the ballots and have postal workers deliver them to voters.</p>\n<p>&nbsp;</p>\n"),
                    programs: like([]),
                    __typename: like("Post"),
                    video: {
                      id: like(""),
                      duration: like(""),
                      __typename: like("Video"),
                    },
                    featuredImage: {
                      id: like("2842162"),
                      sourceUrl:
                      like("/wp-content/uploads/2024/04/image-1714226966.jpg"),
                      credit: like(""),
                      caption: like(""),
                      alt: like("alt text of Image"),
                      width: like(1920),
                      height: like(1056),
                      __typename: like("Media"),
                    },
                    author: [
                      {
                        id: like("561"),
                        name: like("ajeAutoChiefEditor"),
                        link: like("/author/ajeAutoChiefEditor"),
                        description: like(""),
                        slug: like("ajeAutoChiefEditor"),
                        twitter: like(""),
                        facebook: like(""),
                        avatars: [
                          {
                            size: like("24"),
                            url: like(""),
                            __typename: like("AvatarURLs"),
                          },
                          {
                            size: like("48"),
                            url: like(""),
                            __typename: like("AvatarURLs"),
                          },
                          {
                            size: like("96"),
                            url: like(""),
                            __typename: like("AvatarURLs"),
                          },
                        ],
                        jobTitle: like(""),
                        linked_nicename: like(null),
                        __typename: like("User"),
                      },
                      {
                        id: like("917772"),
                        name: like("Marwan Bishara"),
                        link: like("/author/marwan_bishara_201132512858571875"),
                        description:
                        like("Marwan Bishara is an author who writes extensively on global politics and is widely regarded as a leading authority on US foreign policy, the Middle East and international strategic affairs. He was previously a professor of International Relations at the American University of Paris."),
                        slug: like("marwan_bishara_201132512858571875"),
                        twitter: like("https://twitter.com/MarwanBishara"),
                        facebook: like(""),
                        avatars: [
                          {
                            size: like("24"),
                            url: like("/wp-content/uploads/2019/04/a30cce93f88c42cbb31e48adbcfc19d1_6.jpeg?resize=24%2C24"),
                            __typename: like("AvatarURLs"),
                          },
                          {
                            size: like("48"),
                            url: like("/wp-content/uploads/2019/04/a30cce93f88c42cbb31e48adbcfc19d1_6.jpeg?resize=48%2C48"),
                            __typename: like("AvatarURLs"),
                          },
                          {
                            size: like("96"),
                            url: like("/wp-content/uploads/2019/04/a30cce93f88c42cbb31e48adbcfc19d1_6.jpeg?resize=96%2C96"),
                            __typename: like("AvatarURLs"),
                          },
                        ],
                        jobTitle: like("Senior political analyst at Al Jazeera."),
                        linked_nicename: like(""),
                        __typename: like("User"),
                      },
                    ],
                    outsideImage: {
                      id: like("2842162"),
                      sourceUrl:
                      like("/wp-content/uploads/2024/04/image-1714226966.jpg"),
                      credit: like(""),
                      caption: like(""),
                      alt: like("alt text of Image"),
                      width: like(1920),
                      height: like(1056),
                      __typename: like("Media"),
                    },
                  },
                  {
                    id: like("2842392"),
                    title:
                    like("1% TA OP1 Indonesia’s TikTok sellers do roaring trading in hijab & handbags"),
                    replacementHeadline:
                    like("1% RH OP1 England look to spoil under pressure India’s Cricket WorldCup par"),
                    excerpt:
                    like("1% SUM OP1 Indonesia’s TikTok Shop ban reveals mixed feelings on e-commerce revolution & online seller say it is misguid"),
                    link: like("/opinions/2024/4/28/1-ta-op1-indonesias-tiktok-sellers-do-roaring-trading-in-hijab-handbags-16"),
                    date: like("2024-04-28T00:05:32"),
                    showAuthor: like(true),
                    writeInAuthor: like(""),
                    writeInCoAuthor: {
                      name: like(""),
                      order: like("1"),
                      __typename: like("WriteInAuthor"),
                    },
                    postType: like("opinion"),
                    externalUrl: like(null),
                    content:
                      like("<p>The leader of Polands governing party and a partner in its governing coalition announced an agreement late on Wednesday to postpone Sundays presidential election, without setting a new date for the poll.Jaroslaw Kaczynski, head of the ruling Law and Justice party, and Jaroslaw Gowin, leader of a small party in the conservative coalition, announced in a joint statement that they had agreed to cancel Sundays vote and set a new date. More: Polish presidential election in chaos with four days to go As most European elections are called off, Poland pushes ahead Tusk urges Poles to boycott election out of decency They called their decision a solution that will guarantee Poles the opportunity to participate in democratic elections. The decision brought some clarity to a chaotic situation that left Poles uncertain about whether they would be casting votes this weekend. The May 10 date had been set months ago, but the coronavirus pandemic and a government-ordered lockdown threw preparations into disarray.</p>\n<p>Bitter fighting between the conservative governing party and its political opponents kept them from agreeing on an alternative. The governing party had sought to stick to the election date by making it a postal vote, but proper legislation was still not approved. Many in Poland voiced concerns that such a vote organised at short notice might not be conducted property or meet democratic standards for fairness.</p>\n<p>A disagreement between Kaczynski and Gowin had also created a impasse that had threatened to cause an larger political crisis. Their joint statement suggested the crisis had been averted. Under their plan, after Sunday the Supreme Court will declare the election void because it does not happen, and then parliament Speaker Elzbieta Witek will announce a new presidential election to be held on the first possible date. Under a constitutionally dictated timeline, the last possible date for the presidential election in 2020 would be on May 23. But they said they would amend legislation regulating elections in 2020, which might suggest a later date. The vote will be conducted by postal ballot.</p>\n<p>The Law and Justice party is backing the reelection bid by President Andrzej Duda, whose five-year term expires on August 6. Duda leads in opinion polls, well ahead of the nine other candidates. Adam Bielan, the campaign spokesman for Duda, told private broadcaster TVN24 that he expected a new election to be held in late June or early July. Other politicians said it could be held as late as the end of July before Dudas term expires. The legislation passed the lower house of parliament last month but the senate took a month to debate it, then rejected it on Tuesday. The bill returned to the lower house, but there was no time left before Sunday to prepare the ballots and have postal workers deliver them to voters.</p>\n<p>&nbsp;</p>\n"),
                    programs: like([]),
                    __typename: like("Post"),
                    video: {
                      id: like("6351872379112"),
                      duration: like("02:32"),
                      __typename: like("Video"),
                    },
                    featuredImage: {
                      id: like("2842342"),
                      sourceUrl:
                      like("/wp-content/uploads/2024/04/image-1714257592.jpg"),
                      credit: like(""),
                      caption: like(""),
                      alt: like("alt text of Gallry Image"),
                      width: like(1920),
                      height: like(1080),
                      __typename: like("Media"),
                    },
                    author: [
                      {
                        id: like("561"),
                        name: like("ajeAutoChiefEditor"),
                        link: like("/author/ajeAutoChiefEditor"),
                        description: like(""),
                        slug: like("ajeAutoChiefEditor"),
                        twitter: like(""),
                        facebook: like(""),
                        avatars: [
                          {
                            size: like("24"),
                            url: like(""),
                            __typename: like("AvatarURLs"),
                          },
                          {
                            size: like("48"),
                            url: like(""),
                            __typename: like("AvatarURLs"),
                          },
                          {
                            size: like("96"),
                            url: like(""),
                            __typename: like("AvatarURLs"),
                          },
                        ],
                        jobTitle: like(""),
                        linked_nicename: like(null),
                        __typename: like("User"),
                      },
                      {
                        id: like("917772"),
                        name: like("Marwan Bishara"),
                        link: like("/author/marwan_bishara_201132512858571875"),
                        description:
                        like("Marwan Bishara is an author who writes extensively on global politics and is widely regarded as a leading authority on US foreign policy, the Middle East and international strategic affairs. He was previously a professor of International Relations at the American University of Paris."),
                        slug: like("marwan_bishara_201132512858571875"),
                        twitter: like("https://twitter.com/MarwanBishara"),
                        facebook: like(""),
                        avatars: [
                          {
                            size: like("24"),
                            url: like("/wp-content/uploads/2019/04/a30cce93f88c42cbb31e48adbcfc19d1_6.jpeg?resize=24%2C24"),
                            __typename: like("AvatarURLs"),
                          },
                          {
                            size: like("48"),
                            url: like("/wp-content/uploads/2019/04/a30cce93f88c42cbb31e48adbcfc19d1_6.jpeg?resize=48%2C48"),
                            __typename: like("AvatarURLs"),
                          },
                          {
                            size: like("96"),
                            url: like("/wp-content/uploads/2019/04/a30cce93f88c42cbb31e48adbcfc19d1_6.jpeg?resize=96%2C96"),
                            __typename: like("AvatarURLs"),
                          },
                        ],
                        jobTitle: like("Senior political analyst at Al Jazeera."),
                        linked_nicename: like(""),
                        __typename: like("User"),
                      },
                    ],
                    outsideImage: {
                      id: like("2842342"),
                      sourceUrl:
                      like("/wp-content/uploads/2024/04/image-1714257592.jpg"),
                      credit: like(""),
                      caption: like(""),
                      alt: like("alt text of Gallry Image"),
                      width: like(1920),
                      height: like(1080),
                      __typename: like("Media"),
                    },
                  },
                  {
                    id: like("2842391"),
                    title:
                    like("1% TA OP Indonesia’s TikTok sellers do roaring trading in hijab & handbags"),
                    replacementHeadline:
                    like("1% RH OP England look to spoil under pressure India’s Cricket WorldCup part"),
                    excerpt:
                    like("1% SUM OP Indonesia’s TikTok Shop ban reveals mixed feelings on e-commerce revolution & online seller say it is misguide"),
                    link: like("/opinions/2024/4/28/1-ta-op-indonesias-tiktok-sellers-do-roaring-trading-in-hijab-handbags-16"),
                    date: like("2024-04-28T00:10:06"),
                    showAuthor: like(true),
                    writeInAuthor: like(""),
                    writeInCoAuthor: {
                      name: like(""),
                      order: like("1"),
                      __typename: like("WriteInAuthor"),
                    },
                    postType: like("opinion"),
                    externalUrl: like(null),
                    content:
                      like('<p>The leader of Polands governing party and a partner in its governing coalition announced an agreement late on Wednesday to postpone Sundays presidential election, without setting a new date for the poll.Jaroslaw Kaczynski, head of the ruling Law and Justice party, and Jaroslaw Gowin, leader of a small party in the conservative coalition, announced in a joint statement that they had agreed to cancel Sundays vote and set a new date. More: Polish presidential election in chaos with four days to go As most European elections are called off, Poland pushes ahead Tusk urges Poles to boycott election out of decency They called their decision a solution that will guarantee Poles the opportunity to participate in democratic elections. The decision brought some clarity to a chaotic situation that left Poles uncertain about whether they would be casting votes this weekend. The May 10 date had been set months ago, but the coronavirus pandemic and a government-ordered lockdown threw preparations into disarray.</p>\n<p>Bitter fighting between the conservative governing party and its political opponents kept them from agreeing on an alternative. The governing party had sought to stick to the election date by making it a postal vote, but proper legislation was still not approved. Many in Poland voiced concerns that such a vote organised at short notice might not be conducted property or meet democratic standards for fairness.</p>\n<p>A disagreement between Kaczynski and Gowin had also created a impasse that had threatened to cause an larger political crisis. Their joint statement suggested the crisis had been averted. Under their plan, after Sunday the Supreme Court will declare the election void because it does not happen, and then parliament Speaker Elzbieta Witek will announce a new presidential election to be held on the first possible date. Under a constitutionally dictated timeline, the last possible date for the presidential election in 2020 would be on May 23. But they said they would amend legislation regulating elections in 2020, which might suggest a later date. The vote will be conducted by postal ballot.</p>\n<p>The Law and Justice party is backing the reelection bid by President Andrzej Duda, whose five-year term expires on August 6. Duda leads in opinion polls, well ahead of the nine other candidates. Adam Bielan, the campaign spokesman for Duda, told private broadcaster TVN24 that he expected a new election to be held in late June or early July. Other politicians said it could be held as late as the end of July before Dudas term expires. The legislation passed the lower house of parliament last month but the senate took a month to debate it, then rejected it on Tuesday. The bill returned to the lower house, but there was no time left before Sunday to prepare the ballots and have postal workers deliver them to voters.</p>\n<p><span class="article-time"><time datetime="2024-04-28 00:04:29" title="2024-04-28 00:04:29">28 Apr 2024 - 00:04 GMT</time></span></p>\n<h2 id="for-the-first-time-the-government-took-advantage-of-2019-s-financial-management-law-which-allows-for-up-to-a-three-year-budget-h2">For the first time, the government took advantage of 2019’s financial management law, which allows for up to a three-year budget. H2</h2>\n<h3>Iraq has not only been slow at passing budgets, but three out of the past nine years also saw no budget passed at all – in 2014, 2020 &amp; 2022. H3</h3>\n<h4>Although there is only half a year left to spend the 2023 budget. H4</h4>\n<p><strong>there is the reassurance that the next two years will be covered, guaranteeing the government a budget until the next federal elections in late 2025 &amp; for provincial council elections scheduled for this year. B</strong></p>\n<p><em>The federal budget also allows the government to fund local investment projects &amp; hire hundreds of thousands of public sector employees, which reflects positively on the prime minister and his governing coalition. I</em></p>\n<ul>\n<li>Killed: At least 2,808</li>\n<li>Injured: At least 10,859</li>\n<li>A local radio station interviewed her on her visit.</li>\n</ul>\n<ol>\n<li>Zaher said people were increasingly “afraid to speak Arabic” in public.</li>\n<li>Keeping her head down is what Noura usually does too, she said.</li>\n<li>“This time, it was my mistake that I replied.”</li>\n</ol>\n<ul>\n<li><a href="https://www.youtube.com/">https://www.youtube.com/</a></li>\n<li><a href="https://www.facebook.com/">https://www.facebook.com/</a></li>\n<li><a href="https://www.twitter.com/">https://www.twitter.com/</a></li>\n</ul>\n<ol>\n<li><a href="https://www.youtube.com/">https://www.youtube.com/</a></li>\n<li><a href="https://www.facebook.com/">https://www.facebook.com/</a></li>\n<li><a href="https://www.twitter.com/">https://www.twitter.com/</a></li>\n</ol>\n<ul class="spaced-bullet-spacing">\n<li><a href="https://www.youtube.com/">https://www.youtube.com/</a></li>\n<li><a href="https://www.facebook.com/">https://www.facebook.com/</a></li>\n<li><a href="https://www.twitter.com/">https://www.twitter.com/</a></li>\n</ul>\n<blockquote><p>Iraq is a country that already struggles with an overburdened public sector of at least 4.5 million employees.</p></blockquote>\n<p>This is the end of blockquote. Below is the blockquote with URL</p>\n<blockquote><p><a href="https://www.youtube.com/">https://www.youtube.com/</a></p></blockquote>\n<p>This is the end of blockquote with URL.</p>\n<blockquote>\n<p >\n\t\t\t\tGovernment offices are overcrowded and disorganised, slowing bureaucracy down further. Big hiring this year will also burden future governments with pensions.\t\t\t</p>\n<p class="quote-author">\n\t\t\t\t<span class="screen-reader-text">by</span>&nbsp;O&#039;Keefe editor\t\t\t</p>\n</blockquote>\n<hr />\n<p>Brightcove video 1:</p>\n<p>&nbsp;</p>\n<p>\t\t<!-- Start of Brightcove Player --></p>\n<div style="display: block; position: relative; min-width: 0px; max-width: 770px;">\n<div style="padding-top: 56%; " data-bc="true">\n\t\t\t\t\t<video\n\t\t\t\t\t\t\tdata-video-id="6351900821112" data-account="665003303001"\n\t\t\t\t\t\t\tdata-player="6tKQRAx7lu"\n\t\t\t\t\t\t\tdata-usage="cms:wordpress:6.3.4:2.1.3:javascript"\n\t\t\t\t\t\t\tdata-embed="default" class="video-js"\n\t\t\t\t\t\t\tcontrols data-duration="1:56"   \t\t\t\t\t\t\tstyle="width: 100%; height: 100%; position: absolute; top: 0; bottom: 0; right: 0; left: 0;"><br />\n\t\t\t\t\t</video></p>\n<p>\t\t\t\t\t<script async defer src="https://players.brightcove.net/665003303001/6tKQRAx7lu_default/index.min.js"></script>\n\t\t\t\t</div>\n</p></div>\n<p>\t\t<!-- End of Brightcove Player --></p>\n<p>This is end of video one. New video will be added below</p>\n<p>Inserted link:</p>\n<p><a href="https://www.instagram.com/">https://www.instagram.com/</a></p>\n<p>Brightcove video 2:</p>\n<p>\t\t<!-- Start of Brightcove Player --></p>\n<div style="display: block; position: relative; min-width: 0px; max-width: 770px;">\n<div style="padding-top: 56%; " data-bc="true">\n\t\t\t\t\t<video\n\t\t\t\t\t\t\tdata-video-id="6351900821112" data-account="665003303001"\n\t\t\t\t\t\t\tdata-player="6tKQRAx7lu"\n\t\t\t\t\t\t\tdata-usage="cms:wordpress:6.3.4:2.1.3:javascript"\n\t\t\t\t\t\t\tdata-embed="default" class="video-js"\n\t\t\t\t\t\t\tcontrols data-duration="1:56"   \t\t\t\t\t\t\tstyle="width: 100%; height: 100%; position: absolute; top: 0; bottom: 0; right: 0; left: 0;"><br />\n\t\t\t\t\t</video></p>\n<p>\t\t\t\t\t<script async defer src="https://players.brightcove.net/665003303001/6tKQRAx7lu_default/index.min.js"></script>\n\t\t\t\t</div>\n</p></div>\n<p>\t\t<!-- End of Brightcove Player --></p>\n<p>Image 2:</p>\n<figure id="attachment_2839633" aria-describedby="caption-attachment-2839633" style="width: 770px" class="wp-caption alignleft"><img decoding="async" loading="lazy" class="size-arc-image-770 wp-image-2839633" src="/wp-content/uploads/2024/04/AFP__20220309__324R8ZM__v1__HighRes__RussiaUkraineConflictBusinessSanction-1-1713246796.jpg?w=770&#038;resize=770%2C512" alt="coca cola" width="770" height="512" srcset="/wp-content/uploads/2024/04/AFP__20220309__324R8ZM__v1__HighRes__RussiaUkraineConflictBusinessSanction-1-1713246796.jpg 6048w, /wp-content/uploads/2024/04/AFP__20220309__324R8ZM__v1__HighRes__RussiaUkraineConflictBusinessSanction-1-1713246796.jpg 300w, /wp-content/uploads/2024/04/AFP__20220309__324R8ZM__v1__HighRes__RussiaUkraineConflictBusinessSanction-1-1713246796.jpg 768w, /wp-content/uploads/2024/04/AFP__20220309__324R8ZM__v1__HighRes__RussiaUkraineConflictBusinessSanction-1-1713246796.jpg 1024w, /wp-content/uploads/2024/04/AFP__20220309__324R8ZM__v1__HighRes__RussiaUkraineConflictBusinessSanction-1-1713246796.jpg 1536w, /wp-content/uploads/2024/04/AFP__20220309__324R8ZM__v1__HighRes__RussiaUkraineConflictBusinessSanction-1-1713246796.jpg 2048w, /wp-content/uploads/2024/04/AFP__20220309__324R8ZM__v1__HighRes__RussiaUkraineConflictBusinessSanction-1-1713246796.jpg 1170w, /wp-content/uploads/2024/04/AFP__20220309__324R8ZM__v1__HighRes__RussiaUkraineConflictBusinessSanction-1-1713246796.jpg 770w, /wp-content/uploads/2024/04/AFP__20220309__324R8ZM__v1__HighRes__RussiaUkraineConflictBusinessSanction-1-1713246796.jpg 570w, /wp-content/uploads/2024/04/AFP__20220309__324R8ZM__v1__HighRes__RussiaUkraineConflictBusinessSanction-1-1713246796.jpg 375w, /wp-content/uploads/2024/04/AFP__20220309__324R8ZM__v1__HighRes__RussiaUkraineConflictBusinessSanction-1-1713246796.jpg 270w, /wp-content/uploads/2024/04/AFP__20220309__324R8ZM__v1__HighRes__RussiaUkraineConflictBusinessSanction-1-1713246796.jpg 170w, /wp-content/uploads/2024/04/AFP__20220309__324R8ZM__v1__HighRes__RussiaUkraineConflictBusinessSanction-1-1713246796.jpg 140w, /wp-content/uploads/2024/04/AFP__20220309__324R8ZM__v1__HighRes__RussiaUkraineConflictBusinessSanction-1-1713246796.jpg 120w, /wp-content/uploads/2024/04/AFP__20220309__324R8ZM__v1__HighRes__RussiaUkraineConflictBusinessSanction-1-1713246796.jpg 1568w, /wp-content/uploads/2024/04/AFP__20220309__324R8ZM__v1__HighRes__RussiaUkraineConflictBusinessSanction-1-1713246796.jpg?w=2310 2310w" sizes="(max-width: 770px) 100vw, 770px" data-recalc-dims="1" /><figcaption id="caption-attachment-2839633" class="wp-caption-text">A bottle of Coca Cola is pictured in front of St. Basil&#8217;s Cathedral in central Moscow on March 9, 2022. McDonald&#8217;s, Coca-Cola and Starbucks on March 8, 2022 bowed to public pressure and suspended their operations in Russia, joining the international corporate chorus of outrage over Moscow&#8217;s invasion of Ukraine. Several of these companies, symbols of American cultural influence in the world, have been the subject of boycott calls on social media as investors have also begun to ask questions about their presence. (Photo by AFP) (AFP)</figcaption></figure>\n<p>&nbsp;</p>\n<p>Iraq’s political elite, which formed after the removal of Saddam Hussein in 2003, operates as though the country can still afford this set-up, and it does so for political gain.</p>\n<p>Image 1:</p>\n<p><img decoding="async" loading="lazy" class="aligncenter size-arc-image-770 wp-image-2838580" src="/wp-content/uploads/2024/04/Interactive_TrumpCases_April-15_2024_INTERACTIVE-Donald-Trump-criminals-cases-tracker-1713187138.jpg?w=770&#038;resize=770%2C770" alt="Donald Trump\'s criminal cases tracker" width="770" height="770" srcset="/wp-content/uploads/2024/04/Interactive_TrumpCases_April-15_2024_INTERACTIVE-Donald-Trump-criminals-cases-tracker-1713187138.jpg 2251w, /wp-content/uploads/2024/04/Interactive_TrumpCases_April-15_2024_INTERACTIVE-Donald-Trump-criminals-cases-tracker-1713187138.jpg 150w, /wp-content/uploads/2024/04/Interactive_TrumpCases_April-15_2024_INTERACTIVE-Donald-Trump-criminals-cases-tracker-1713187138.jpg 300w, /wp-content/uploads/2024/04/Interactive_TrumpCases_April-15_2024_INTERACTIVE-Donald-Trump-criminals-cases-tracker-1713187138.jpg 768w, /wp-content/uploads/2024/04/Interactive_TrumpCases_April-15_2024_INTERACTIVE-Donald-Trump-criminals-cases-tracker-1713187138.jpg 1024w, /wp-content/uploads/2024/04/Interactive_TrumpCases_April-15_2024_INTERACTIVE-Donald-Trump-criminals-cases-tracker-1713187138.jpg 1536w, /wp-content/uploads/2024/04/Interactive_TrumpCases_April-15_2024_INTERACTIVE-Donald-Trump-criminals-cases-tracker-1713187138.jpg 2048w, /wp-content/uploads/2024/04/Interactive_TrumpCases_April-15_2024_INTERACTIVE-Donald-Trump-criminals-cases-tracker-1713187138.jpg 770w, /wp-content/uploads/2024/04/Interactive_TrumpCases_April-15_2024_INTERACTIVE-Donald-Trump-criminals-cases-tracker-1713187138.jpg 1170w, /wp-content/uploads/2024/04/Interactive_TrumpCases_April-15_2024_INTERACTIVE-Donald-Trump-criminals-cases-tracker-1713187138.jpg 75w, /wp-content/uploads/2024/04/Interactive_TrumpCases_April-15_2024_INTERACTIVE-Donald-Trump-criminals-cases-tracker-1713187138.jpg 270w, /wp-content/uploads/2024/04/Interactive_TrumpCases_April-15_2024_INTERACTIVE-Donald-Trump-criminals-cases-tracker-1713187138.jpg 450w, /wp-content/uploads/2024/04/Interactive_TrumpCases_April-15_2024_INTERACTIVE-Donald-Trump-criminals-cases-tracker-1713187138.jpg 120w, /wp-content/uploads/2024/04/Interactive_TrumpCases_April-15_2024_INTERACTIVE-Donald-Trump-criminals-cases-tracker-1713187138.jpg 1800w, /wp-content/uploads/2024/04/Interactive_TrumpCases_April-15_2024_INTERACTIVE-Donald-Trump-criminals-cases-tracker-1713187138.jpg 24w, /wp-content/uploads/2024/04/Interactive_TrumpCases_April-15_2024_INTERACTIVE-Donald-Trump-criminals-cases-tracker-1713187138.jpg 48w, /wp-content/uploads/2024/04/Interactive_TrumpCases_April-15_2024_INTERACTIVE-Donald-Trump-criminals-cases-tracker-1713187138.jpg 96w, /wp-content/uploads/2024/04/Interactive_TrumpCases_April-15_2024_INTERACTIVE-Donald-Trump-criminals-cases-tracker-1713187138.jpg 1568w" sizes="(max-width: 770px) 100vw, 770px" data-recalc-dims="1" /></p>\n<p>&nbsp;</p>\n'),
                    programs: like([]),
                    __typename: like("Post"),
                    video: {
                      id: like(""),
                      duration: like(""),
                      __typename: like("Video"),
                    },
                    featuredImage: {
                      id: like("2842164"),
                      sourceUrl:
                      like("/wp-content/uploads/2024/04/images-1714226966.webp"),
                      credit: like(""),
                      caption: like(""),
                      alt: like("alt text of Featured Image"),
                      width: like(770),
                      height: like(513),
                      __typename: like("Media"),
                    },
                    author: [
                      {
                        id: like("561"),
                        name: like("ajeAutoChiefEditor"),
                        link: like("/author/ajeAutoChiefEditor"),
                        description: like(""),
                        slug: like("ajeAutoChiefEditor"),
                        twitter: like(""),
                        facebook: like(""),
                        avatars: [
                          {
                            size: like("24"),
                            url: like(""),
                            __typename: like("AvatarURLs"),
                          },
                          {
                            size: like("48"),
                            url: like(""),
                            __typename: like("AvatarURLs"),
                          },
                          {
                            size: like("96"),
                            url: like(""),
                            __typename: like("AvatarURLs"),
                          },
                        ],
                        jobTitle: like(""),
                        linked_nicename: like(null),
                        __typename: like("User"),
                      },
                      {
                        id: like("917772"),
                        name: like("Marwan Bishara"),
                        link: like("/author/marwan_bishara_201132512858571875"),
                        description:
                        like("Marwan Bishara is an author who writes extensively on global politics and is widely regarded as a leading authority on US foreign policy, the Middle East and international strategic affairs. He was previously a professor of International Relations at the American University of Paris."),
                        slug: like("marwan_bishara_201132512858571875"),
                        twitter: like("https://twitter.com/MarwanBishara"),
                        facebook: like(""),
                        avatars: [
                          {
                            size: like("24"),
                            url: like("/wp-content/uploads/2019/04/a30cce93f88c42cbb31e48adbcfc19d1_6.jpeg?resize=24%2C24"),
                            __typename: like("AvatarURLs"),
                          },
                          {
                            size: like("48"),
                            url: like("/wp-content/uploads/2019/04/a30cce93f88c42cbb31e48adbcfc19d1_6.jpeg?resize=48%2C48"),
                            __typename: like("AvatarURLs"),
                          },
                          {
                            size: like("96"),
                            url: like("/wp-content/uploads/2019/04/a30cce93f88c42cbb31e48adbcfc19d1_6.jpeg?resize=96%2C96"),
                            __typename: like("AvatarURLs"),
                          },
                        ],
                        jobTitle: like("Senior political analyst at Al Jazeera."),
                        linked_nicename: like(""),
                        __typename: like("User"),
                      },
                      {
                        id: like("921540"),
                        name: like("Ryan Luckey"),
                        link: like("/author/ryan_luckey_201191464138276144"),
                        description: like(""),
                        slug: like("ryan_luckey_201191464138276144"),
                        twitter: like(""),
                        facebook: like(""),
                        avatars: [
                          {
                            size: like("24"),
                            url: like("/wp-content/uploads/2011/09/2011915144718387734_8.jpeg?resize=24%2C24"),
                            __typename: like("AvatarURLs"),
                          },
                          {
                            size: like("48"),
                            url: like("/wp-content/uploads/2011/09/2011915144718387734_8.jpeg?resize=48%2C48"),
                            __typename: like("AvatarURLs"),
                          },
                          {
                            size: like("96"),
                            url: like("/wp-content/uploads/2011/09/2011915144718387734_8.jpeg?resize=96%2C96"),
                            __typename: like("AvatarURLs"),
                          },
                        ],
                        jobTitle:
                        like("Ryan Luckey is co-founder of the Comun Tierra Project, which documents ecological projects in Latin America."),
                        linked_nicename: like(""),
                        __typename: like("User"),
                      },
                    ],
                    outsideImage: {
                      id: like("2842164"),
                      sourceUrl:
                      like("/wp-content/uploads/2024/04/images-1714226966.webp"),
                      credit: like(""),
                      caption: like(""),
                      alt: like("alt text of Featured Image"),
                      width: like(770),
                      height: like(513),
                      __typename: like("Media"),
                    },
                  },
                ],
                moreOnWidgetArticles: [
                  {
                    title:
                    like("1% TA OP4 Indonesia’s TikTok sellers do roaring trading in hijab & handbags"),
                    link: like("/opinions/2024/4/27/1-ta-op4-indonesias-tiktok-sellers-do-roaring-trading-in-hijab-handbags-13"),
                    externalUrl: like(null),
                    postType: like("opinion"),
                    replacementHeadline:
                    like("1% RH OP4 England look to spoil under pressure India’s Cricket WorldCup par"),
                    __typename: like("Post"),
                  },
                  {
                    title:
                    like("1% TA OP4 Indonesia’s TikTok sellers do roaring trading in hijab & handbags"),
                    link: like("/opinions/2024/4/27/1-ta-op4-indonesias-tiktok-sellers-do-roaring-trading-in-hijab-handbags-14"),
                    externalUrl: like(null),
                    postType: like("opinion"),
                    replacementHeadline:
                    like("1% RH OP4 England look to spoil under pressure India’s Cricket WorldCup par"),
                    __typename: like("Post"),
                  },
                  {
                    title:
                    like("1% TA OP1 Indonesia’s TikTok sellers do roaring trading in hijab & handbags"),
                    link: like("/opinions/2024/4/28/1-ta-op1-indonesias-tiktok-sellers-do-roaring-trading-in-hijab-handbags-16"),
                    externalUrl: like(null),
                    postType: like("opinion"),
                    replacementHeadline:
                    like("1% RH OP1 England look to spoil under pressure India’s Cricket WorldCup par"),
                    __typename: like("Post"),
                  },
                  {
                    title:
                    like("1% TA OP Indonesia’s TikTok sellers do roaring trading in hijab & handbags"),
                    link: like("/opinions/2024/4/28/1-ta-op-indonesias-tiktok-sellers-do-roaring-trading-in-hijab-handbags-16"),
                    externalUrl: like(null),
                    postType: like("opinion"),
                    replacementHeadline:
                    like("1% RH OP England look to spoil under pressure India’s Cricket WorldCup part"),
                    __typename: like("Post"),
                  },
                ],
                explainerWidget: {
                  title: like(""),
                  posts: like([]),
                  termTitle: like(""),
                  termLink: like(""),
                  __typename: like("ExplainerWidget"),
                },
                longform: like(null),
                sponsorTax: like([]),
                who: like([]),
                homePageEvent: like(false),
                sponsorshipType: like(null),
                sponsorHeaderBarText: like(null),
                sponsorFooterBarText: like(null),
                hideSponsorHeaderBarText: like(null),
                hideSponsorFooterBarText: like(null),
              },
            },
          },
        },
      });

      await provider.executeTest(async (mockService) => {
        // Request to moke server
        const news = await axios
          .get(`${mockService.url}/graphql`, {
            params: {
              "wp-site": "aje",
              operationName: "ArchipelagoSingleArticleQuery",
              variables:
                '{"name":"1-ta-op2-indonesias-tiktok-sellers-do-roaring-trading-in-hijab-handbags-16","postType":"opinion","preview":""}',
              extensions: "{}",
            },
            headers: {
              "wp-site": "aje",
            },
          })
          .then((r) => r.data);

        expect(news).toStrictEqual({
          data: {
            article: {
              content: "abc",
              subheading:
                "1% Defending champions England are among the teams most likely to stop hosts & favourites India the number 1 from lifting the trophy",
              id: "2842438",
              title:
                "1% TA OP2 Indonesia’s TikTok sellers do roaring trading in hijab & handbags",
              excerpt:
                "1% SUM OP2 Indonesia’s TikTok Shop ban reveals mixed feelings on e-commerce revolution & online seller say it is misguid",
              date: "2024-04-28T00:25:39",
              link: "/opinions/2024/4/28/1-ta-op2-indonesias-tiktok-sellers-do-roaring-trading-in-hijab-handbags-16",
              isBreaking: null,
              isLive: null,
              shortUrl: "https://aje.io/yzg6gu",
              proxyShortUrl: "https://aje.io/f5lmiz",
              isDeveloping: null,
              externalUrl: null,
              replacementHeadline:
                "1% RH OP2 England look to spoil under pressure India’s Cricket WorldCup par",
              postType: "opinion",
              author: [
                {
                  id: "561",
                  name: "ajeAutoChiefEditor",
                  link: "/author/ajeAutoChiefEditor",
                  description: "",
                  slug: "ajeAutoChiefEditor",
                  twitter: "",
                  facebook: "",
                  avatars: [
                    {
                      size: "24",
                      url: "",
                      __typename: "AvatarURLs",
                    },
                    {
                      size: "48",
                      url: "",
                      __typename: "AvatarURLs",
                    },
                    {
                      size: "96",
                      url: "",
                      __typename: "AvatarURLs",
                    },
                  ],
                  jobTitle: "",
                  linked_nicename: null,
                  __typename: "User",
                },
                {
                  id: "917772",
                  name: "Marwan Bishara",
                  link: "/author/marwan_bishara_201132512858571875",
                  description:
                    "Marwan Bishara is an author who writes extensively on global politics and is widely regarded as a leading authority on US foreign policy, the Middle East and international strategic affairs. He was previously a professor of International Relations at the American University of Paris.",
                  slug: "marwan_bishara_201132512858571875",
                  twitter: "https://twitter.com/MarwanBishara",
                  facebook: "",
                  avatars: [
                    {
                      size: "24",
                      url: "/wp-content/uploads/2019/04/a30cce93f88c42cbb31e48adbcfc19d1_6.jpeg?resize=24%2C24",
                      __typename: "AvatarURLs",
                    },
                    {
                      size: "48",
                      url: "/wp-content/uploads/2019/04/a30cce93f88c42cbb31e48adbcfc19d1_6.jpeg?resize=48%2C48",
                      __typename: "AvatarURLs",
                    },
                    {
                      size: "96",
                      url: "/wp-content/uploads/2019/04/a30cce93f88c42cbb31e48adbcfc19d1_6.jpeg?resize=96%2C96",
                      __typename: "AvatarURLs",
                    },
                  ],
                  jobTitle: "Senior political analyst at Al Jazeera.",
                  linked_nicename: "",
                  __typename: "User",
                },
              ],
              __typename: "Post",
              featuredImage: {
                id: "2842162",
                sourceUrl: "/wp-content/uploads/2024/04/image-1714226966.jpg",
                credit: "",
                caption: "",
                alt: "alt text of Image",
                width: 1920,
                height: 1056,
                __typename: "Media",
                itemNumber: "",
              },
              source: [],
              postLabel: [],
              verticalFeaturedImage: null,
              outsideImage: {
                id: "2842162",
                sourceUrl: "/wp-content/uploads/2024/04/image-1714226966.jpg",
                credit: "",
                caption: "",
                alt: "alt text of Image",
                width: 1920,
                height: 1056,
                __typename: "Media",
              },
              galleryMedia: [],
              galleryImagesCount: null,
              showAuthor: true,
              writeInAuthor: "",
              authorTagline: null,
              themeMode: null,
              writeInCoAuthor: {
                name: "",
                order: "1",
                __typename: "WriteInAuthor",
              },
              correctionText: null,
              correctionDate: null,
              updatedDate: "",
              displayPublishDate: true,
              modified_gmt: "2024-04-28T00:25:39",
              hasElectionBanner: false,
              primaryCategoryTerm: "opinions",
              primaryCategoryTermName: "Opinions",
              primaryTagsTermName: "Brexit",
              primaryTagsTerm: "brexit",
              featuredCaption: "",
              featuredYoutube: "https://www.youtube.com/watch?v=u4fc9ahU8Cg",
              featuredDataWrapperIframe: "",
              socialMediaImage: {
                sourceUrl: "/wp-content/uploads/2024/04/image-1714226966.jpg",
                credit: "",
                caption: "",
                width: 1920,
                height: 1056,
                // sizes: [
                //   {
                //     crop: "arc-image-1800",
                //     width: 1800,
                //     height: 1056,
                //     url: "/wp-content/uploads/2024/04/image-1714226966.jpg?resize=1800%2C1056",
                //     ropRectangle: null,
                //     __typename: "MediaSize",
                //   },
                //   {
                //     crop: "arc-image-1200-630",
                //     width: 1200,
                //     height: 630,
                //     url: "/wp-content/uploads/2024/04/image-1714226966.jpg?resize=1200%2C630",
                //     cropRectangle: null,
                //     __typename: "MediaSize",
                //   },
                //   {
                //     crop: "full",
                //     width: 1920,
                //     height: 1056,
                //     url: "/wp-content/uploads/2024/04/image-1714226966.jpg?fit=1920%2C1056",
                //     cropRectangle: null,
                //     __typename: "MediaSize",
                //   },
                // ],
                __typename: "Media",
              },
              programs: [],
              video: {
                id: "",
                duration: "",
                name: "",
                accountId: "",
                playerId: "",
                __typename: "Video",
              },
              categories: [
                {
                  title: "",
                  slug: "opinions",
                  link: "/opinions/",
                  name: "Opinions",
                  homePageEvent: false,
                  customNavigation: null,
                  displayCustomNavigationOnArticles: false,
                  customNavigationBrandingImg: "",
                  __typename: "Category",
                },
              ],
              internalTaxonomies: [],
              internalReporting: [
                {
                  title: "Take me deeper",
                  slug: "take-me-deeper",
                  __typename: "Category",
                },
              ],
              midan: [],
              tags: [
                {
                  title: "Brexit",
                  slug: "brexit",
                  link: "/tag/brexit/",
                  homePageEvent: false,
                  customNavigation: null,
                  displayCustomNavigationOnArticles: false,
                  customNavigationBrandingImg: "",
                  __typename: "Tag",
                },
              ],
              trending: [],
              where: [
                {
                  title: "Africa",
                  slug: "africa",
                  link: "/where/africa/",
                  customNavigation: null,
                  displayCustomNavigationOnArticles: false,
                  customNavigationBrandingImg: "",
                  __typename: "Category",
                },
              ],
              series: [],
              relatedArticles: [
                {
                  id: "2842331",
                  title:
                    "1% TA OP4 Indonesia’s TikTok sellers do roaring trading in hijab & handbags",
                  replacementHeadline:
                    "1% RH OP4 England look to spoil under pressure India’s Cricket WorldCup par",
                  excerpt:
                    "1% SUM OP4 Indonesia’s TikTok Shop ban reveals mixed feelings on e-commerce revolution & online seller say it is misguid",
                  link: "/opinions/2024/4/27/1-ta-op4-indonesias-tiktok-sellers-do-roaring-trading-in-hijab-handbags-13",
                  date: "2024-04-27T18:43:33",
                  showAuthor: true,
                  writeInAuthor: "",
                  writeInCoAuthor: {
                    name: "",
                    order: "1",
                    __typename: "WriteInAuthor",
                  },
                  postType: "opinion",
                  externalUrl: null,
                  content:
                    "<p>The leader of Polands governing party and a partner in its governing coalition announced an agreement late on Wednesday to postpone Sundays presidential election, without setting a new date for the poll.Jaroslaw Kaczynski, head of the ruling Law and Justice party, and Jaroslaw Gowin, leader of a small party in the conservative coalition, announced in a joint statement that they had agreed to cancel Sundays vote and set a new date. More: Polish presidential election in chaos with four days to go As most European elections are called off, Poland pushes ahead Tusk urges Poles to boycott election out of decency They called their decision a solution that will guarantee Poles the opportunity to participate in democratic elections. The decision brought some clarity to a chaotic situation that left Poles uncertain about whether they would be casting votes this weekend. The May 10 date had been set months ago, but the coronavirus pandemic and a government-ordered lockdown threw preparations into disarray.</p>\n<p>Bitter fighting between the conservative governing party and its political opponents kept them from agreeing on an alternative. The governing party had sought to stick to the election date by making it a postal vote, but proper legislation was still not approved. Many in Poland voiced concerns that such a vote organised at short notice might not be conducted property or meet democratic standards for fairness.</p>\n<p>A disagreement between Kaczynski and Gowin had also created a impasse that had threatened to cause an larger political crisis. Their joint statement suggested the crisis had been averted. Under their plan, after Sunday the Supreme Court will declare the election void because it does not happen, and then parliament Speaker Elzbieta Witek will announce a new presidential election to be held on the first possible date. Under a constitutionally dictated timeline, the last possible date for the presidential election in 2020 would be on May 23. But they said they would amend legislation regulating elections in 2020, which might suggest a later date. The vote will be conducted by postal ballot.</p>\n<p>The Law and Justice party is backing the reelection bid by President Andrzej Duda, whose five-year term expires on August 6. Duda leads in opinion polls, well ahead of the nine other candidates. Adam Bielan, the campaign spokesman for Duda, told private broadcaster TVN24 that he expected a new election to be held in late June or early July. Other politicians said it could be held as late as the end of July before Dudas term expires. The legislation passed the lower house of parliament last month but the senate took a month to debate it, then rejected it on Tuesday. The bill returned to the lower house, but there was no time left before Sunday to prepare the ballots and have postal workers deliver them to voters.</p>\n<p>&nbsp;</p>\n",
                  programs: [],
                  __typename: "Post",
                  video: {
                    id: "",
                    duration: "",
                    __typename: "Video",
                  },
                  featuredImage: {
                    id: "2842140",
                    sourceUrl:
                      "/wp-content/uploads/2024/04/images-1714124970.webp",
                    credit: "",
                    caption: "",
                    alt: "alt text of Featured Image",
                    width: 770,
                    height: 513,
                    __typename: "Media",
                  },
                  author: [
                    {
                      id: "561",
                      name: "ajeAutoChiefEditor",
                      link: "/author/ajeAutoChiefEditor",
                      description: "",
                      slug: "ajeAutoChiefEditor",
                      twitter: "",
                      facebook: "",
                      avatars: [
                        {
                          size: "24",
                          url: "",
                          __typename: "AvatarURLs",
                        },
                        {
                          size: "48",
                          url: "",
                          __typename: "AvatarURLs",
                        },
                        {
                          size: "96",
                          url: "",
                          __typename: "AvatarURLs",
                        },
                      ],
                      jobTitle: "",
                      linked_nicename: null,
                      __typename: "User",
                    },
                    {
                      id: "917772",
                      name: "Marwan Bishara",
                      link: "/author/marwan_bishara_201132512858571875",
                      description:
                        "Marwan Bishara is an author who writes extensively on global politics and is widely regarded as a leading authority on US foreign policy, the Middle East and international strategic affairs. He was previously a professor of International Relations at the American University of Paris.",
                      slug: "marwan_bishara_201132512858571875",
                      twitter: "https://twitter.com/MarwanBishara",
                      facebook: "",
                      avatars: [
                        {
                          size: "24",
                          url: "/wp-content/uploads/2019/04/a30cce93f88c42cbb31e48adbcfc19d1_6.jpeg?resize=24%2C24",
                          __typename: "AvatarURLs",
                        },
                        {
                          size: "48",
                          url: "/wp-content/uploads/2019/04/a30cce93f88c42cbb31e48adbcfc19d1_6.jpeg?resize=48%2C48",
                          __typename: "AvatarURLs",
                        },
                        {
                          size: "96",
                          url: "/wp-content/uploads/2019/04/a30cce93f88c42cbb31e48adbcfc19d1_6.jpeg?resize=96%2C96",
                          __typename: "AvatarURLs",
                        },
                      ],
                      jobTitle: "Senior political analyst at Al Jazeera.",
                      linked_nicename: "",
                      __typename: "User",
                    },
                  ],
                  outsideImage: {
                    id: "2842140",
                    sourceUrl:
                      "/wp-content/uploads/2024/04/images-1714124970.webp",
                    credit: "",
                    caption: "",
                    alt: "alt text of Featured Image",
                    width: 770,
                    height: 513,
                    __typename: "Media",
                  },
                },
                {
                  id: "2842371",
                  title:
                    "1% TA OP4 Indonesia’s TikTok sellers do roaring trading in hijab & handbags",
                  replacementHeadline:
                    "1% RH OP4 England look to spoil under pressure India’s Cricket WorldCup par",
                  excerpt:
                    "1% SUM OP4 Indonesia’s TikTok Shop ban reveals mixed feelings on e-commerce revolution & online seller say it is misguid",
                  link: "/opinions/2024/4/27/1-ta-op4-indonesias-tiktok-sellers-do-roaring-trading-in-hijab-handbags-14",
                  date: "2024-04-27T23:07:11",
                  showAuthor: true,
                  writeInAuthor: "",
                  writeInCoAuthor: {
                    name: "",
                    order: "1",
                    __typename: "WriteInAuthor",
                  },
                  postType: "opinion",
                  externalUrl: null,
                  content:
                    "<p>The leader of Polands governing party and a partner in its governing coalition announced an agreement late on Wednesday to postpone Sundays presidential election, without setting a new date for the poll.Jaroslaw Kaczynski, head of the ruling Law and Justice party, and Jaroslaw Gowin, leader of a small party in the conservative coalition, announced in a joint statement that they had agreed to cancel Sundays vote and set a new date. More: Polish presidential election in chaos with four days to go As most European elections are called off, Poland pushes ahead Tusk urges Poles to boycott election out of decency They called their decision a solution that will guarantee Poles the opportunity to participate in democratic elections. The decision brought some clarity to a chaotic situation that left Poles uncertain about whether they would be casting votes this weekend. The May 10 date had been set months ago, but the coronavirus pandemic and a government-ordered lockdown threw preparations into disarray.</p>\n<p>Bitter fighting between the conservative governing party and its political opponents kept them from agreeing on an alternative. The governing party had sought to stick to the election date by making it a postal vote, but proper legislation was still not approved. Many in Poland voiced concerns that such a vote organised at short notice might not be conducted property or meet democratic standards for fairness.</p>\n<p>A disagreement between Kaczynski and Gowin had also created a impasse that had threatened to cause an larger political crisis. Their joint statement suggested the crisis had been averted. Under their plan, after Sunday the Supreme Court will declare the election void because it does not happen, and then parliament Speaker Elzbieta Witek will announce a new presidential election to be held on the first possible date. Under a constitutionally dictated timeline, the last possible date for the presidential election in 2020 would be on May 23. But they said they would amend legislation regulating elections in 2020, which might suggest a later date. The vote will be conducted by postal ballot.</p>\n<p>The Law and Justice party is backing the reelection bid by President Andrzej Duda, whose five-year term expires on August 6. Duda leads in opinion polls, well ahead of the nine other candidates. Adam Bielan, the campaign spokesman for Duda, told private broadcaster TVN24 that he expected a new election to be held in late June or early July. Other politicians said it could be held as late as the end of July before Dudas term expires. The legislation passed the lower house of parliament last month but the senate took a month to debate it, then rejected it on Tuesday. The bill returned to the lower house, but there was no time left before Sunday to prepare the ballots and have postal workers deliver them to voters.</p>\n<p>&nbsp;</p>\n",
                  programs: [],
                  __typename: "Post",
                  video: {
                    id: "",
                    duration: "",
                    __typename: "Video",
                  },
                  featuredImage: {
                    id: "2842162",
                    sourceUrl:
                      "/wp-content/uploads/2024/04/image-1714226966.jpg",
                    credit: "",
                    caption: "",
                    alt: "alt text of Image",
                    width: 1920,
                    height: 1056,
                    __typename: "Media",
                  },
                  author: [
                    {
                      id: "561",
                      name: "ajeAutoChiefEditor",
                      link: "/author/ajeAutoChiefEditor",
                      description: "",
                      slug: "ajeAutoChiefEditor",
                      twitter: "",
                      facebook: "",
                      avatars: [
                        {
                          size: "24",
                          url: "",
                          __typename: "AvatarURLs",
                        },
                        {
                          size: "48",
                          url: "",
                          __typename: "AvatarURLs",
                        },
                        {
                          size: "96",
                          url: "",
                          __typename: "AvatarURLs",
                        },
                      ],
                      jobTitle: "",
                      linked_nicename: null,
                      __typename: "User",
                    },
                    {
                      id: "917772",
                      name: "Marwan Bishara",
                      link: "/author/marwan_bishara_201132512858571875",
                      description:
                        "Marwan Bishara is an author who writes extensively on global politics and is widely regarded as a leading authority on US foreign policy, the Middle East and international strategic affairs. He was previously a professor of International Relations at the American University of Paris.",
                      slug: "marwan_bishara_201132512858571875",
                      twitter: "https://twitter.com/MarwanBishara",
                      facebook: "",
                      avatars: [
                        {
                          size: "24",
                          url: "/wp-content/uploads/2019/04/a30cce93f88c42cbb31e48adbcfc19d1_6.jpeg?resize=24%2C24",
                          __typename: "AvatarURLs",
                        },
                        {
                          size: "48",
                          url: "/wp-content/uploads/2019/04/a30cce93f88c42cbb31e48adbcfc19d1_6.jpeg?resize=48%2C48",
                          __typename: "AvatarURLs",
                        },
                        {
                          size: "96",
                          url: "/wp-content/uploads/2019/04/a30cce93f88c42cbb31e48adbcfc19d1_6.jpeg?resize=96%2C96",
                          __typename: "AvatarURLs",
                        },
                      ],
                      jobTitle: "Senior political analyst at Al Jazeera.",
                      linked_nicename: "",
                      __typename: "User",
                    },
                  ],
                  outsideImage: {
                    id: "2842162",
                    sourceUrl:
                      "/wp-content/uploads/2024/04/image-1714226966.jpg",
                    credit: "",
                    caption: "",
                    alt: "alt text of Image",
                    width: 1920,
                    height: 1056,
                    __typename: "Media",
                  },
                },
                {
                  id: "2842392",
                  title:
                    "1% TA OP1 Indonesia’s TikTok sellers do roaring trading in hijab & handbags",
                  replacementHeadline:
                    "1% RH OP1 England look to spoil under pressure India’s Cricket WorldCup par",
                  excerpt:
                    "1% SUM OP1 Indonesia’s TikTok Shop ban reveals mixed feelings on e-commerce revolution & online seller say it is misguid",
                  link: "/opinions/2024/4/28/1-ta-op1-indonesias-tiktok-sellers-do-roaring-trading-in-hijab-handbags-16",
                  date: "2024-04-28T00:05:32",
                  showAuthor: true,
                  writeInAuthor: "",
                  writeInCoAuthor: {
                    name: "",
                    order: "1",
                    __typename: "WriteInAuthor",
                  },
                  postType: "opinion",
                  externalUrl: null,
                  content:
                    "<p>The leader of Polands governing party and a partner in its governing coalition announced an agreement late on Wednesday to postpone Sundays presidential election, without setting a new date for the poll.Jaroslaw Kaczynski, head of the ruling Law and Justice party, and Jaroslaw Gowin, leader of a small party in the conservative coalition, announced in a joint statement that they had agreed to cancel Sundays vote and set a new date. More: Polish presidential election in chaos with four days to go As most European elections are called off, Poland pushes ahead Tusk urges Poles to boycott election out of decency They called their decision a solution that will guarantee Poles the opportunity to participate in democratic elections. The decision brought some clarity to a chaotic situation that left Poles uncertain about whether they would be casting votes this weekend. The May 10 date had been set months ago, but the coronavirus pandemic and a government-ordered lockdown threw preparations into disarray.</p>\n<p>Bitter fighting between the conservative governing party and its political opponents kept them from agreeing on an alternative. The governing party had sought to stick to the election date by making it a postal vote, but proper legislation was still not approved. Many in Poland voiced concerns that such a vote organised at short notice might not be conducted property or meet democratic standards for fairness.</p>\n<p>A disagreement between Kaczynski and Gowin had also created a impasse that had threatened to cause an larger political crisis. Their joint statement suggested the crisis had been averted. Under their plan, after Sunday the Supreme Court will declare the election void because it does not happen, and then parliament Speaker Elzbieta Witek will announce a new presidential election to be held on the first possible date. Under a constitutionally dictated timeline, the last possible date for the presidential election in 2020 would be on May 23. But they said they would amend legislation regulating elections in 2020, which might suggest a later date. The vote will be conducted by postal ballot.</p>\n<p>The Law and Justice party is backing the reelection bid by President Andrzej Duda, whose five-year term expires on August 6. Duda leads in opinion polls, well ahead of the nine other candidates. Adam Bielan, the campaign spokesman for Duda, told private broadcaster TVN24 that he expected a new election to be held in late June or early July. Other politicians said it could be held as late as the end of July before Dudas term expires. The legislation passed the lower house of parliament last month but the senate took a month to debate it, then rejected it on Tuesday. The bill returned to the lower house, but there was no time left before Sunday to prepare the ballots and have postal workers deliver them to voters.</p>\n<p>&nbsp;</p>\n",
                  programs: [],
                  __typename: "Post",
                  video: {
                    id: "6351872379112",
                    duration: "02:32",
                    __typename: "Video",
                  },
                  featuredImage: {
                    id: "2842342",
                    sourceUrl:
                      "/wp-content/uploads/2024/04/image-1714257592.jpg",
                    credit: "",
                    caption: "",
                    alt: "alt text of Gallry Image",
                    width: 1920,
                    height: 1080,
                    __typename: "Media",
                  },
                  author: [
                    {
                      id: "561",
                      name: "ajeAutoChiefEditor",
                      link: "/author/ajeAutoChiefEditor",
                      description: "",
                      slug: "ajeAutoChiefEditor",
                      twitter: "",
                      facebook: "",
                      avatars: [
                        {
                          size: "24",
                          url: "",
                          __typename: "AvatarURLs",
                        },
                        {
                          size: "48",
                          url: "",
                          __typename: "AvatarURLs",
                        },
                        {
                          size: "96",
                          url: "",
                          __typename: "AvatarURLs",
                        },
                      ],
                      jobTitle: "",
                      linked_nicename: null,
                      __typename: "User",
                    },
                    {
                      id: "917772",
                      name: "Marwan Bishara",
                      link: "/author/marwan_bishara_201132512858571875",
                      description:
                        "Marwan Bishara is an author who writes extensively on global politics and is widely regarded as a leading authority on US foreign policy, the Middle East and international strategic affairs. He was previously a professor of International Relations at the American University of Paris.",
                      slug: "marwan_bishara_201132512858571875",
                      twitter: "https://twitter.com/MarwanBishara",
                      facebook: "",
                      avatars: [
                        {
                          size: "24",
                          url: "/wp-content/uploads/2019/04/a30cce93f88c42cbb31e48adbcfc19d1_6.jpeg?resize=24%2C24",
                          __typename: "AvatarURLs",
                        },
                        {
                          size: "48",
                          url: "/wp-content/uploads/2019/04/a30cce93f88c42cbb31e48adbcfc19d1_6.jpeg?resize=48%2C48",
                          __typename: "AvatarURLs",
                        },
                        {
                          size: "96",
                          url: "/wp-content/uploads/2019/04/a30cce93f88c42cbb31e48adbcfc19d1_6.jpeg?resize=96%2C96",
                          __typename: "AvatarURLs",
                        },
                      ],
                      jobTitle: "Senior political analyst at Al Jazeera.",
                      linked_nicename: "",
                      __typename: "User",
                    },
                  ],
                  outsideImage: {
                    id: "2842342",
                    sourceUrl:
                      "/wp-content/uploads/2024/04/image-1714257592.jpg",
                    credit: "",
                    caption: "",
                    alt: "alt text of Gallry Image",
                    width: 1920,
                    height: 1080,
                    __typename: "Media",
                  },
                },
                {
                  id: "2842391",
                  title:
                    "1% TA OP Indonesia’s TikTok sellers do roaring trading in hijab & handbags",
                  replacementHeadline:
                    "1% RH OP England look to spoil under pressure India’s Cricket WorldCup part",
                  excerpt:
                    "1% SUM OP Indonesia’s TikTok Shop ban reveals mixed feelings on e-commerce revolution & online seller say it is misguide",
                  link: "/opinions/2024/4/28/1-ta-op-indonesias-tiktok-sellers-do-roaring-trading-in-hijab-handbags-16",
                  date: "2024-04-28T00:10:06",
                  showAuthor: true,
                  writeInAuthor: "",
                  writeInCoAuthor: {
                    name: "",
                    order: "1",
                    __typename: "WriteInAuthor",
                  },
                  postType: "opinion",
                  externalUrl: null,
                  content:
                    '<p>The leader of Polands governing party and a partner in its governing coalition announced an agreement late on Wednesday to postpone Sundays presidential election, without setting a new date for the poll.Jaroslaw Kaczynski, head of the ruling Law and Justice party, and Jaroslaw Gowin, leader of a small party in the conservative coalition, announced in a joint statement that they had agreed to cancel Sundays vote and set a new date. More: Polish presidential election in chaos with four days to go As most European elections are called off, Poland pushes ahead Tusk urges Poles to boycott election out of decency They called their decision a solution that will guarantee Poles the opportunity to participate in democratic elections. The decision brought some clarity to a chaotic situation that left Poles uncertain about whether they would be casting votes this weekend. The May 10 date had been set months ago, but the coronavirus pandemic and a government-ordered lockdown threw preparations into disarray.</p>\n<p>Bitter fighting between the conservative governing party and its political opponents kept them from agreeing on an alternative. The governing party had sought to stick to the election date by making it a postal vote, but proper legislation was still not approved. Many in Poland voiced concerns that such a vote organised at short notice might not be conducted property or meet democratic standards for fairness.</p>\n<p>A disagreement between Kaczynski and Gowin had also created a impasse that had threatened to cause an larger political crisis. Their joint statement suggested the crisis had been averted. Under their plan, after Sunday the Supreme Court will declare the election void because it does not happen, and then parliament Speaker Elzbieta Witek will announce a new presidential election to be held on the first possible date. Under a constitutionally dictated timeline, the last possible date for the presidential election in 2020 would be on May 23. But they said they would amend legislation regulating elections in 2020, which might suggest a later date. The vote will be conducted by postal ballot.</p>\n<p>The Law and Justice party is backing the reelection bid by President Andrzej Duda, whose five-year term expires on August 6. Duda leads in opinion polls, well ahead of the nine other candidates. Adam Bielan, the campaign spokesman for Duda, told private broadcaster TVN24 that he expected a new election to be held in late June or early July. Other politicians said it could be held as late as the end of July before Dudas term expires. The legislation passed the lower house of parliament last month but the senate took a month to debate it, then rejected it on Tuesday. The bill returned to the lower house, but there was no time left before Sunday to prepare the ballots and have postal workers deliver them to voters.</p>\n<p><span class="article-time"><time datetime="2024-04-28 00:04:29" title="2024-04-28 00:04:29">28 Apr 2024 - 00:04 GMT</time></span></p>\n<h2 id="for-the-first-time-the-government-took-advantage-of-2019-s-financial-management-law-which-allows-for-up-to-a-three-year-budget-h2">For the first time, the government took advantage of 2019’s financial management law, which allows for up to a three-year budget. H2</h2>\n<h3>Iraq has not only been slow at passing budgets, but three out of the past nine years also saw no budget passed at all – in 2014, 2020 &amp; 2022. H3</h3>\n<h4>Although there is only half a year left to spend the 2023 budget. H4</h4>\n<p><strong>there is the reassurance that the next two years will be covered, guaranteeing the government a budget until the next federal elections in late 2025 &amp; for provincial council elections scheduled for this year. B</strong></p>\n<p><em>The federal budget also allows the government to fund local investment projects &amp; hire hundreds of thousands of public sector employees, which reflects positively on the prime minister and his governing coalition. I</em></p>\n<ul>\n<li>Killed: At least 2,808</li>\n<li>Injured: At least 10,859</li>\n<li>A local radio station interviewed her on her visit.</li>\n</ul>\n<ol>\n<li>Zaher said people were increasingly “afraid to speak Arabic” in public.</li>\n<li>Keeping her head down is what Noura usually does too, she said.</li>\n<li>“This time, it was my mistake that I replied.”</li>\n</ol>\n<ul>\n<li><a href="https://www.youtube.com/">https://www.youtube.com/</a></li>\n<li><a href="https://www.facebook.com/">https://www.facebook.com/</a></li>\n<li><a href="https://www.twitter.com/">https://www.twitter.com/</a></li>\n</ul>\n<ol>\n<li><a href="https://www.youtube.com/">https://www.youtube.com/</a></li>\n<li><a href="https://www.facebook.com/">https://www.facebook.com/</a></li>\n<li><a href="https://www.twitter.com/">https://www.twitter.com/</a></li>\n</ol>\n<ul class="spaced-bullet-spacing">\n<li><a href="https://www.youtube.com/">https://www.youtube.com/</a></li>\n<li><a href="https://www.facebook.com/">https://www.facebook.com/</a></li>\n<li><a href="https://www.twitter.com/">https://www.twitter.com/</a></li>\n</ul>\n<blockquote><p>Iraq is a country that already struggles with an overburdened public sector of at least 4.5 million employees.</p></blockquote>\n<p>This is the end of blockquote. Below is the blockquote with URL</p>\n<blockquote><p><a href="https://www.youtube.com/">https://www.youtube.com/</a></p></blockquote>\n<p>This is the end of blockquote with URL.</p>\n<blockquote>\n<p >\n\t\t\t\tGovernment offices are overcrowded and disorganised, slowing bureaucracy down further. Big hiring this year will also burden future governments with pensions.\t\t\t</p>\n<p class="quote-author">\n\t\t\t\t<span class="screen-reader-text">by</span>&nbsp;O&#039;Keefe editor\t\t\t</p>\n</blockquote>\n<hr />\n<p>Brightcove video 1:</p>\n<p>&nbsp;</p>\n<p>\t\t<!-- Start of Brightcove Player --></p>\n<div style="display: block; position: relative; min-width: 0px; max-width: 770px;">\n<div style="padding-top: 56%; " data-bc="true">\n\t\t\t\t\t<video\n\t\t\t\t\t\t\tdata-video-id="6351900821112" data-account="665003303001"\n\t\t\t\t\t\t\tdata-player="6tKQRAx7lu"\n\t\t\t\t\t\t\tdata-usage="cms:wordpress:6.3.4:2.1.3:javascript"\n\t\t\t\t\t\t\tdata-embed="default" class="video-js"\n\t\t\t\t\t\t\tcontrols data-duration="1:56"   \t\t\t\t\t\t\tstyle="width: 100%; height: 100%; position: absolute; top: 0; bottom: 0; right: 0; left: 0;"><br />\n\t\t\t\t\t</video></p>\n<p>\t\t\t\t\t<script async defer src="https://players.brightcove.net/665003303001/6tKQRAx7lu_default/index.min.js"></script>\n\t\t\t\t</div>\n</p></div>\n<p>\t\t<!-- End of Brightcove Player --></p>\n<p>This is end of video one. New video will be added below</p>\n<p>Inserted link:</p>\n<p><a href="https://www.instagram.com/">https://www.instagram.com/</a></p>\n<p>Brightcove video 2:</p>\n<p>\t\t<!-- Start of Brightcove Player --></p>\n<div style="display: block; position: relative; min-width: 0px; max-width: 770px;">\n<div style="padding-top: 56%; " data-bc="true">\n\t\t\t\t\t<video\n\t\t\t\t\t\t\tdata-video-id="6351900821112" data-account="665003303001"\n\t\t\t\t\t\t\tdata-player="6tKQRAx7lu"\n\t\t\t\t\t\t\tdata-usage="cms:wordpress:6.3.4:2.1.3:javascript"\n\t\t\t\t\t\t\tdata-embed="default" class="video-js"\n\t\t\t\t\t\t\tcontrols data-duration="1:56"   \t\t\t\t\t\t\tstyle="width: 100%; height: 100%; position: absolute; top: 0; bottom: 0; right: 0; left: 0;"><br />\n\t\t\t\t\t</video></p>\n<p>\t\t\t\t\t<script async defer src="https://players.brightcove.net/665003303001/6tKQRAx7lu_default/index.min.js"></script>\n\t\t\t\t</div>\n</p></div>\n<p>\t\t<!-- End of Brightcove Player --></p>\n<p>Image 2:</p>\n<figure id="attachment_2839633" aria-describedby="caption-attachment-2839633" style="width: 770px" class="wp-caption alignleft"><img decoding="async" loading="lazy" class="size-arc-image-770 wp-image-2839633" src="/wp-content/uploads/2024/04/AFP__20220309__324R8ZM__v1__HighRes__RussiaUkraineConflictBusinessSanction-1-1713246796.jpg?w=770&#038;resize=770%2C512" alt="coca cola" width="770" height="512" srcset="/wp-content/uploads/2024/04/AFP__20220309__324R8ZM__v1__HighRes__RussiaUkraineConflictBusinessSanction-1-1713246796.jpg 6048w, /wp-content/uploads/2024/04/AFP__20220309__324R8ZM__v1__HighRes__RussiaUkraineConflictBusinessSanction-1-1713246796.jpg 300w, /wp-content/uploads/2024/04/AFP__20220309__324R8ZM__v1__HighRes__RussiaUkraineConflictBusinessSanction-1-1713246796.jpg 768w, /wp-content/uploads/2024/04/AFP__20220309__324R8ZM__v1__HighRes__RussiaUkraineConflictBusinessSanction-1-1713246796.jpg 1024w, /wp-content/uploads/2024/04/AFP__20220309__324R8ZM__v1__HighRes__RussiaUkraineConflictBusinessSanction-1-1713246796.jpg 1536w, /wp-content/uploads/2024/04/AFP__20220309__324R8ZM__v1__HighRes__RussiaUkraineConflictBusinessSanction-1-1713246796.jpg 2048w, /wp-content/uploads/2024/04/AFP__20220309__324R8ZM__v1__HighRes__RussiaUkraineConflictBusinessSanction-1-1713246796.jpg 1170w, /wp-content/uploads/2024/04/AFP__20220309__324R8ZM__v1__HighRes__RussiaUkraineConflictBusinessSanction-1-1713246796.jpg 770w, /wp-content/uploads/2024/04/AFP__20220309__324R8ZM__v1__HighRes__RussiaUkraineConflictBusinessSanction-1-1713246796.jpg 570w, /wp-content/uploads/2024/04/AFP__20220309__324R8ZM__v1__HighRes__RussiaUkraineConflictBusinessSanction-1-1713246796.jpg 375w, /wp-content/uploads/2024/04/AFP__20220309__324R8ZM__v1__HighRes__RussiaUkraineConflictBusinessSanction-1-1713246796.jpg 270w, /wp-content/uploads/2024/04/AFP__20220309__324R8ZM__v1__HighRes__RussiaUkraineConflictBusinessSanction-1-1713246796.jpg 170w, /wp-content/uploads/2024/04/AFP__20220309__324R8ZM__v1__HighRes__RussiaUkraineConflictBusinessSanction-1-1713246796.jpg 140w, /wp-content/uploads/2024/04/AFP__20220309__324R8ZM__v1__HighRes__RussiaUkraineConflictBusinessSanction-1-1713246796.jpg 120w, /wp-content/uploads/2024/04/AFP__20220309__324R8ZM__v1__HighRes__RussiaUkraineConflictBusinessSanction-1-1713246796.jpg 1568w, /wp-content/uploads/2024/04/AFP__20220309__324R8ZM__v1__HighRes__RussiaUkraineConflictBusinessSanction-1-1713246796.jpg?w=2310 2310w" sizes="(max-width: 770px) 100vw, 770px" data-recalc-dims="1" /><figcaption id="caption-attachment-2839633" class="wp-caption-text">A bottle of Coca Cola is pictured in front of St. Basil&#8217;s Cathedral in central Moscow on March 9, 2022. McDonald&#8217;s, Coca-Cola and Starbucks on March 8, 2022 bowed to public pressure and suspended their operations in Russia, joining the international corporate chorus of outrage over Moscow&#8217;s invasion of Ukraine. Several of these companies, symbols of American cultural influence in the world, have been the subject of boycott calls on social media as investors have also begun to ask questions about their presence. (Photo by AFP) (AFP)</figcaption></figure>\n<p>&nbsp;</p>\n<p>Iraq’s political elite, which formed after the removal of Saddam Hussein in 2003, operates as though the country can still afford this set-up, and it does so for political gain.</p>\n<p>Image 1:</p>\n<p><img decoding="async" loading="lazy" class="aligncenter size-arc-image-770 wp-image-2838580" src="/wp-content/uploads/2024/04/Interactive_TrumpCases_April-15_2024_INTERACTIVE-Donald-Trump-criminals-cases-tracker-1713187138.jpg?w=770&#038;resize=770%2C770" alt="Donald Trump\'s criminal cases tracker" width="770" height="770" srcset="/wp-content/uploads/2024/04/Interactive_TrumpCases_April-15_2024_INTERACTIVE-Donald-Trump-criminals-cases-tracker-1713187138.jpg 2251w, /wp-content/uploads/2024/04/Interactive_TrumpCases_April-15_2024_INTERACTIVE-Donald-Trump-criminals-cases-tracker-1713187138.jpg 150w, /wp-content/uploads/2024/04/Interactive_TrumpCases_April-15_2024_INTERACTIVE-Donald-Trump-criminals-cases-tracker-1713187138.jpg 300w, /wp-content/uploads/2024/04/Interactive_TrumpCases_April-15_2024_INTERACTIVE-Donald-Trump-criminals-cases-tracker-1713187138.jpg 768w, /wp-content/uploads/2024/04/Interactive_TrumpCases_April-15_2024_INTERACTIVE-Donald-Trump-criminals-cases-tracker-1713187138.jpg 1024w, /wp-content/uploads/2024/04/Interactive_TrumpCases_April-15_2024_INTERACTIVE-Donald-Trump-criminals-cases-tracker-1713187138.jpg 1536w, /wp-content/uploads/2024/04/Interactive_TrumpCases_April-15_2024_INTERACTIVE-Donald-Trump-criminals-cases-tracker-1713187138.jpg 2048w, /wp-content/uploads/2024/04/Interactive_TrumpCases_April-15_2024_INTERACTIVE-Donald-Trump-criminals-cases-tracker-1713187138.jpg 770w, /wp-content/uploads/2024/04/Interactive_TrumpCases_April-15_2024_INTERACTIVE-Donald-Trump-criminals-cases-tracker-1713187138.jpg 1170w, /wp-content/uploads/2024/04/Interactive_TrumpCases_April-15_2024_INTERACTIVE-Donald-Trump-criminals-cases-tracker-1713187138.jpg 75w, /wp-content/uploads/2024/04/Interactive_TrumpCases_April-15_2024_INTERACTIVE-Donald-Trump-criminals-cases-tracker-1713187138.jpg 270w, /wp-content/uploads/2024/04/Interactive_TrumpCases_April-15_2024_INTERACTIVE-Donald-Trump-criminals-cases-tracker-1713187138.jpg 450w, /wp-content/uploads/2024/04/Interactive_TrumpCases_April-15_2024_INTERACTIVE-Donald-Trump-criminals-cases-tracker-1713187138.jpg 120w, /wp-content/uploads/2024/04/Interactive_TrumpCases_April-15_2024_INTERACTIVE-Donald-Trump-criminals-cases-tracker-1713187138.jpg 1800w, /wp-content/uploads/2024/04/Interactive_TrumpCases_April-15_2024_INTERACTIVE-Donald-Trump-criminals-cases-tracker-1713187138.jpg 24w, /wp-content/uploads/2024/04/Interactive_TrumpCases_April-15_2024_INTERACTIVE-Donald-Trump-criminals-cases-tracker-1713187138.jpg 48w, /wp-content/uploads/2024/04/Interactive_TrumpCases_April-15_2024_INTERACTIVE-Donald-Trump-criminals-cases-tracker-1713187138.jpg 96w, /wp-content/uploads/2024/04/Interactive_TrumpCases_April-15_2024_INTERACTIVE-Donald-Trump-criminals-cases-tracker-1713187138.jpg 1568w" sizes="(max-width: 770px) 100vw, 770px" data-recalc-dims="1" /></p>\n<p>&nbsp;</p>\n',
                  programs: [],
                  __typename: "Post",
                  video: {
                    id: "",
                    duration: "",
                    __typename: "Video",
                  },
                  featuredImage: {
                    id: "2842164",
                    sourceUrl:
                      "/wp-content/uploads/2024/04/images-1714226966.webp",
                    credit: "",
                    caption: "",
                    alt: "alt text of Featured Image",
                    width: 770,
                    height: 513,
                    __typename: "Media",
                  },
                  author: [
                    {
                      id: "561",
                      name: "ajeAutoChiefEditor",
                      link: "/author/ajeAutoChiefEditor",
                      description: "",
                      slug: "ajeAutoChiefEditor",
                      twitter: "",
                      facebook: "",
                      avatars: [
                        {
                          size: "24",
                          url: "",
                          __typename: "AvatarURLs",
                        },
                        {
                          size: "48",
                          url: "",
                          __typename: "AvatarURLs",
                        },
                        {
                          size: "96",
                          url: "",
                          __typename: "AvatarURLs",
                        },
                      ],
                      jobTitle: "",
                      linked_nicename: null,
                      __typename: "User",
                    },
                    {
                      id: "917772",
                      name: "Marwan Bishara",
                      link: "/author/marwan_bishara_201132512858571875",
                      description:
                        "Marwan Bishara is an author who writes extensively on global politics and is widely regarded as a leading authority on US foreign policy, the Middle East and international strategic affairs. He was previously a professor of International Relations at the American University of Paris.",
                      slug: "marwan_bishara_201132512858571875",
                      twitter: "https://twitter.com/MarwanBishara",
                      facebook: "",
                      avatars: [
                        {
                          size: "24",
                          url: "/wp-content/uploads/2019/04/a30cce93f88c42cbb31e48adbcfc19d1_6.jpeg?resize=24%2C24",
                          __typename: "AvatarURLs",
                        },
                        {
                          size: "48",
                          url: "/wp-content/uploads/2019/04/a30cce93f88c42cbb31e48adbcfc19d1_6.jpeg?resize=48%2C48",
                          __typename: "AvatarURLs",
                        },
                        {
                          size: "96",
                          url: "/wp-content/uploads/2019/04/a30cce93f88c42cbb31e48adbcfc19d1_6.jpeg?resize=96%2C96",
                          __typename: "AvatarURLs",
                        },
                      ],
                      jobTitle: "Senior political analyst at Al Jazeera.",
                      linked_nicename: "",
                      __typename: "User",
                    },
                    {
                      id: "921540",
                      name: "Ryan Luckey",
                      link: "/author/ryan_luckey_201191464138276144",
                      description: "",
                      slug: "ryan_luckey_201191464138276144",
                      twitter: "",
                      facebook: "",
                      avatars: [
                        {
                          size: "24",
                          url: "/wp-content/uploads/2011/09/2011915144718387734_8.jpeg?resize=24%2C24",
                          __typename: "AvatarURLs",
                        },
                        {
                          size: "48",
                          url: "/wp-content/uploads/2011/09/2011915144718387734_8.jpeg?resize=48%2C48",
                          __typename: "AvatarURLs",
                        },
                        {
                          size: "96",
                          url: "/wp-content/uploads/2011/09/2011915144718387734_8.jpeg?resize=96%2C96",
                          __typename: "AvatarURLs",
                        },
                      ],
                      jobTitle:
                        "Ryan Luckey is co-founder of the Comun Tierra Project, which documents ecological projects in Latin America.",
                      linked_nicename: "",
                      __typename: "User",
                    },
                  ],
                  outsideImage: {
                    id: "2842164",
                    sourceUrl:
                      "/wp-content/uploads/2024/04/images-1714226966.webp",
                    credit: "",
                    caption: "",
                    alt: "alt text of Featured Image",
                    width: 770,
                    height: 513,
                    __typename: "Media",
                  },
                },
              ],
              moreOnWidgetArticles: [
                {
                  title:
                    "1% TA OP4 Indonesia’s TikTok sellers do roaring trading in hijab & handbags",
                  link: "/opinions/2024/4/27/1-ta-op4-indonesias-tiktok-sellers-do-roaring-trading-in-hijab-handbags-13",
                  externalUrl: null,
                  postType: "opinion",
                  replacementHeadline:
                    "1% RH OP4 England look to spoil under pressure India’s Cricket WorldCup par",
                  __typename: "Post",
                },
                {
                  title:
                    "1% TA OP4 Indonesia’s TikTok sellers do roaring trading in hijab & handbags",
                  link: "/opinions/2024/4/27/1-ta-op4-indonesias-tiktok-sellers-do-roaring-trading-in-hijab-handbags-14",
                  externalUrl: null,
                  postType: "opinion",
                  replacementHeadline:
                    "1% RH OP4 England look to spoil under pressure India’s Cricket WorldCup par",
                  __typename: "Post",
                },
                {
                  title:
                    "1% TA OP1 Indonesia’s TikTok sellers do roaring trading in hijab & handbags",
                  link: "/opinions/2024/4/28/1-ta-op1-indonesias-tiktok-sellers-do-roaring-trading-in-hijab-handbags-16",
                  externalUrl: null,
                  postType: "opinion",
                  replacementHeadline:
                    "1% RH OP1 England look to spoil under pressure India’s Cricket WorldCup par",
                  __typename: "Post",
                },
                {
                  title:
                    "1% TA OP Indonesia’s TikTok sellers do roaring trading in hijab & handbags",
                  link: "/opinions/2024/4/28/1-ta-op-indonesias-tiktok-sellers-do-roaring-trading-in-hijab-handbags-16",
                  externalUrl: null,
                  postType: "opinion",
                  replacementHeadline:
                    "1% RH OP England look to spoil under pressure India’s Cricket WorldCup part",
                  __typename: "Post",
                },
              ],
              explainerWidget: {
                title: "",
                posts: [],
                termTitle: "",
                termLink: "",
                __typename: "ExplainerWidget",
              },
              longform: null,
              sponsorTax: [],
              who: [],
              homePageEvent: false,
              sponsorshipType: null,
              sponsorHeaderBarText: null,
              sponsorFooterBarText: null,
              hideSponsorHeaderBarText: null,
              hideSponsorFooterBarText: null,
            },
          },
        });
      });
    });
  });
});
