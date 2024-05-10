const axios = require("axios");

const {
  PactV3,
  MatchersV3,
} = require("@pact-foundation/pact");

const { like } = MatchersV3;

const provider = new PactV3({
  consumer: "ExpectedGQLResult",
  provider: "ActualGQLResult",
  dir: "pacts",
});

describe("API Pact test", () => {
    test("Verify Article Contract", async () => {
      await provider.addInteraction({
        states: [{ description: "Verify Article" }],
        uponReceiving: "Get Article",
        withRequest: {
          method: "GET",
          path: "/graphql",
          query: {
            "wp-site": "aje",
            operationName: "ArchipelagoSingleArticleQuery",
            variables:
              '{"name":"1-ta-a-indonesias-tiktok-sellers-do-roaring-trading-in-hijab-handbags-2-36","postType":"post","preview":""}',
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
                    content: like("<p>On Saturday, October 7, Noura* went to work as usual early in the morning at the hospital in Israel where she’s been employed for more than two years.Forhe first time, the government took advantage of 2019’s financial management law, which allows for up to a three-year budget. H</p>\n<ul>\n<li>Killed: At least 2,808</li>\n</ul>\n<ol>\n<li>Zah</li>\n</ol>\n<ul>\n<li><a href=\"https://www.youtube.com/\">https://ww.youtube.com/</a></li>\n<li><a href=\"https://www.facebook.com/\">https://www.facebook.com/</a></li>\n<li><a href=\"https://www.twitter.com/\">https://www.twitter.com</a></li>\n</ul>\n<blockquote><p><a href=\"https://www.youtube.com/\">https://www.youtube.com/</a></p></blockquote>\n<p>This is the end of blockquote with URL.</p>\n<p>&nbsp;</p>\n<p><a href=\"https://www.instagram.com/\">https://www.instagram.com</a></p>\n<p>Youtube Embed by Link</p>\n<p>&nbsp;</p>\n<p>Brightcove video 2:</p>\n<p>Image 2:</p>\n<p><img decoding=\"async\" loading=\"lazy\" class=\"alignleft size-arc-image-770 wp-image-2843660\" src=\"/wp-content/uploads/2024/05/image-1714950175.jpg?w=770&#038;resize=770%2C433\" alt=\"alt text of Featured Image\" width=\"770\" height=\"433\" srcset=\"/wp-content/uploads/2024/05/image-1714950175.jpg 1920w, /wp-content/uploads/2024/05/image-1714950175.jpg 300w, /wp-content/uploads/2024/05/image-1714950175.jpg 768w, /wp-content/uploads/2024/05/image-1714950175.jpg 1024w, /wp-content/uploads/2024/05/image-1714950175.jpg 1536w, /wp-content/uploads/2024/05/image-1714950175.jpg 770w, /wp-content/uploads/2024/05/image-1714950175.jpg 1170w, /wp-content/uploads/2024/05/image-1714950175.jpg 270w, /wp-content/uploads/2024/05/image-1714950175.jpg 730w, /wp-content/uploads/2024/05/image-1714950175.jpg 1366w, /wp-content/uploads/2024/05/image-1714950175.jpg 1568w\" sizes=\"(max-width: 770px) 100vw, 770px\" data-recalc-dims=\"1\" /></p>\n<p>&nbsp;</p>\n<p>&nbsp;</p>\n"),
                    subheading: like("1% Defending champions England are among the teams most likely to stop hosts & favourites India the number 1 from lifting the trophy"),
                    id: like("2843863"),
                    title: like("contract test 1% TA A Indonesia’s TikTok sellers do roaring trading in hija"),
                    excerpt: like("1% SUM A Indonesia’s TikTok Shop ban reveals mixed feelings on e-commerce revolution & online seller say it is misguided"),
                    date: like("2024-05-07T02:22:16"),
                    link: like("/news/2024/5/7/1-ta-a-indonesias-tiktok-sellers-do-roaring-trading-in-hijab-handbags-2-36"),
                    isBreaking: like(false),
                    isLive: like(false),
                    shortUrl: like("https://aje.io/1kkrxk"),
                    proxyShortUrl: like("https://aje.io/k6tbaw"),
                    isDeveloping: like(false),
                    externalUrl: like(null),
                    replacementHeadline: like("1% RH A England look to spoil under pressure India’s Cricket WorldCup party"),
                    postType: like("post"),
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
                                    __typename: like("AvatarURLs")
                                },
                                {
                                    size: like("48"),
                                    url: like(""),
                                    __typename: like("AvatarURLs")
                                },
                                {
                                    size: like("96"),
                                    url: like(""),
                                    __typename: like("AvatarURLs")
                                }
                            ],
                            jobTitle: like(""),
                            linked_nicename: like(null),
                            __typename: like("User")
                        },
                        {
                            id: like("917772"),
                            name: like("Marwan Bishara"),
                            link: like("/author/marwan_bishara_201132512858571875"),
                            description: like("Marwan Bishara is an author who writes extensively on global politics and is widely regarded as a leading authority on US foreign policy, the Middle East and international strategic affairs. He was previously a professor of International Relations at the American University of Paris."),
                            slug: like("marwan_bishara_201132512858571875"),
                            twitter: like("https://twitter.com/MarwanBishara"),
                            facebook: like(""),
                            avatars: [
                                {
                                    size: like("24"),
                                    url: like("/wp-content/uploads/2019/04/a30cce93f88c42cbb31e48adbcfc19d1_6.jpeg?resize=24%2C24"),
                                    __typename: like("AvatarURLs")
                                },
                                {
                                    size: like("48"),
                                    url: like("/wp-content/uploads/2019/04/a30cce93f88c42cbb31e48adbcfc19d1_6.jpeg?resize=48%2C48"),
                                    __typename: like("AvatarURLs")
                                },
                                {
                                    size: like("96"),
                                    url: like("/wp-content/uploads/2019/04/a30cce93f88c42cbb31e48adbcfc19d1_6.jpeg?resize=96%2C96"),
                                    __typename: like("AvatarURLs")
                                }
                            ],
                            jobTitle: like("Senior political analyst at Al Jazeera."),
                            linked_nicename: like(""),
                            __typename: like("User")
                        }
                    ],
                    __typename: like("Post"),
                    featuredImage: {
                        id: like("2843931"),
                        sourceUrl: like("/wp-content/uploads/2024/05/image-1715060916.jpg"),
                        credit: like(""),
                        caption: like(""),
                        alt: like("alt text of Image"),
                        width: like(1920),
                        height: like(1080),
                        __typename: like("Media"),
                        itemNumber: like("")
                    },
                    source: [
                        {
                            name: like("Al Jazeera"),
                            featuredTaxonomy: like(false),
                            featuredTaxonomyImage: like(null),
                            featuredActionLink: like(""),
                            featuredSourceLink: like(""),
                            __typename: like("Category")
                        }
                    ],
                    postLabel: [
                        {
                            name: like("Editorial"),
                            featuredTaxonomy: like(false),
                            featuredTaxonomyImage: like(null),
                            featuredActionLink: like(""),
                            __typename: like("Category")
                        }
                    ],
                    verticalFeaturedImage: like(null),
                    outsideImage: {
                        id: like("2843846"),
                        sourceUrl: like("/wp-content/uploads/2024/05/image-1715039077.jpg"),
                        credit: like(""),
                        caption: like(""),
                        alt: like("alt text of Image"),
                        width: like(1920),
                        height: like(1080),
                        __typename: like("Media")
                    },
                    galleryMedia: like([]),
                    galleryImagesCount: like(null),
                    showAuthor: like(true),
                    writeInAuthor: like("Susan D'Souza"),
                    authorTagline: like("Contract testing"),
                    themeMode: like(null),
                    writeInCoAuthor: {
                        name: like("Susan D'Souza"),
                        order: like("1"),
                        __typename: like("WriteInAuthor")
                    },
                    correctionText: like("On Saturday, October 7, Noura* went to work as usual early in the morning at the hospital in Israel where she’s been employed for more than two years.\r\nFor the first time, the government took advantage of 2019’s financial management law, which allows for up to a three-year budget. H2\r\nIraq has not only been slow at passing budgets, but three out of the past nine years also saw no budget passed at all – in 2014, 2020 & 2022. H3\r\nAlthough there is only half a year ."),
                    correctionDate: like("2024-05-07T00:00:00"),
                    updatedDate: like(""),
                    displayPublishDate: like(true),
                    modified_gmt: like("2024-05-07T06:02:48"),
                    hasElectionBanner: like(false),
                    primaryCategoryTerm: like("news"),
                    primaryCategoryTermName: like("News"),
                    primaryTagsTermName: like("Brexit"),
                    primaryTagsTerm: like("brexit"),
                    featuredCaption: like(""),
                    featuredYoutube: like(""),
                    featuredDataWrapperIframe: like(""),
                    socialMediaImage: {
                        sourceUrl: like("/wp-content/uploads/2024/05/image-1715060916.jpg"),
                        credit: like(""),
                        caption: like(""),
                        width: like(1920),
                        height: like(1080),
                        sizes: [
                            {
                                crop: like("arc-image-1800"),
                                width: like(1800),
                                height: like(1080),
                                url: like("/wp-content/uploads/2024/05/image-1715060916.jpg?resize=1800%2C1080"),
                                cropRectangle: like(null),
                                __typename: like("MediaSize")
                            },
                            {
                                crop: like("arc-image-1200-630"),
                                width: like(1200),
                                height: like(630),
                                url: like("/wp-content/uploads/2024/05/image-1715060916.jpg?resize=1200%2C630"),
                                cropRectangle: like(null),
                                __typename: like("MediaSize")
                            },
                            {
                                crop: like("full"),
                                width: like(1920),
                                height: like(1080),
                                url: like("/wp-content/uploads/2024/05/image-1715060916.jpg?fit=1920%2C1080"),
                                cropRectangle: like(null),
                                __typename: like("MediaSize")
                            }
                        ],
                        __typename: like("Media")
                    },
                    programs: like([]),
                    video: {
                        id: like("6352451647112"),
                        duration: like("05:48"),
                        name: like("Palestinians flee Khan Younis and Deir el-Balah after Israel orders Rafah evacuation"),
                        accountId: like("665003303001"),
                        playerId: like("6tKQRAx7lu"),
                        __typename: like("Video")
                    },
                    categories: [
                        {
                            title: like(""),
                            slug: like("news"),
                            link: like("/news/"),
                            name: like("News"),
                            homePageEvent: like(false),
                            customNavigation: like(null),
                            displayCustomNavigationOnArticles: like(false),
                            customNavigationBrandingImg: like(""),
                            __typename: like("Category")
                        }
                    ],
                    internalTaxonomies: like([]),
                    internalReporting: [
                        {
                            title: like("Make me Feel"),
                            slug: like("make-me-feel"),
                            __typename: like("Category")
                        }
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
                            __typename: like("Tag")
                        }
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
                            __typename: like("Category")
                        }
                    ],
                    series: like([]),
                    relatedArticles: [
                        {
                            id: like("2843835"),
                            title: like("1% TA LB3 Indonesia’s TikTok sellers do roaring trading in hijab & handbags"),
                            replacementHeadline: like("1% RH LB3 England look to spoil under pressure India’s Cricket WorldCup par"),
                            excerpt: like("1% Sum LB3 Indonesia’s TikTok Shop ban reveals mixed feelings on e-commerce revolution & online seller say it is misguid"),
                            link: like("/news/liveblog/2024/5/6/1-ta-lb3-indonesias-tiktok-sellers-do-roaring-trading-in-hijab-handbags-25"),
                            date: like("2024-05-06T23:38:15"),
                            showAuthor: like(true),
                            writeInAuthor: like(""),
                            writeInCoAuthor: {
                                name: like(""),
                                order: like("1"),
                                __typename: like("WriteInAuthor")
                            },
                            postType: like("liveblog"),
                            externalUrl: like(null),
                            content: like("<p>The leader of Polands governing party and a partner in its governing coalition announced an agreement late on Wednesday to postpone Sundays presidential election, without setting a new date for the poll.Jaroslaw Kaczynski, head of the ruling Law and Justice party, and Jaroslaw Gowin, leader of a small party in the conservative coalition, announced in a joint statement that they had agreed to cancel Sundays vote and set a new date. More: Polish presidential election in chaos with four days to go As most European elections are called off, Poland pushes ahead Tusk urges Poles to boycott election out of decency They called their decision a solution that will guarantee Poles the opportunity to participate in democratic elections. The decision brought some clarity to a chaotic situation that left Poles uncertain about whether they would be casting votes this weekend. The May 10 date had been set months ago, but the coronavirus pandemic and a government-ordered lockdown threw preparations into disarray.</p>\n<p>Bitter fighting between the conservative governing party and its political opponents kept them from agreeing on an alternative. The governing party had sought to stick to the election date by making it a postal vote, but proper legislation was still not approved. Many in Poland voiced concerns that such a vote organised at short notice might not be conducted property or meet democratic standards for fairness.</p>\n<p>A disagreement between Kaczynski and Gowin had also created a impasse that had threatened to cause an larger political crisis. Their joint statement suggested the crisis had been averted. Under their plan, after Sunday the Supreme Court will declare the election void because it does not happen, and then parliament Speaker Elzbieta Witek will announce a new presidential election to be held on the first possible date. Under a constitutionally dictated timeline, the last possible date for the presidential election in 2020 would be on May 23. But they said they would amend legislation regulating elections in 2020, which might suggest a later date. The vote will be conducted by postal ballot.</p>\n<p>The Law and Justice party is backing the reelection bid by President Andrzej Duda, whose five-year term expires on August 6. Duda leads in opinion polls, well ahead of the nine other candidates. Adam Bielan, the campaign spokesman for Duda, told private broadcaster TVN24 that he expected a new election to be held in late June or early July. Other politicians said it could be held as late as the end of July before Dudas term expires. The legislation passed the lower house of parliament last month but the senate took a month to debate it, then rejected it on Tuesday. The bill returned to the lower house, but there was no time left before Sunday to prepare the ballots and have postal workers deliver them to voters.</p>\n<p>&nbsp;</p>\n"),
                            programs: like([]),
                            __typename: like("Post"),
                            video: {
                                id: like("6352421860112"),
                                duration: like("01:21"),
                                __typename: like("Video")
                            },
                            featuredImage: {
                                id: like("2843564"),
                                sourceUrl: like("/wp-content/uploads/2024/05/image-1714864764.jpg"),
                                credit: like(""),
                                caption: like(""),
                                alt: like("alt text of Gallry Image"),
                                width: like(1920),
                                height: like(1080),
                                __typename: like("Media")
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
                                            __typename: like("AvatarURLs")
                                        },
                                        {
                                            size: like("48"),
                                            url: like(""),
                                            __typename: like("AvatarURLs")
                                        },
                                        {
                                            size: like("96"),
                                            url: like(""),
                                            __typename: like("AvatarURLs")
                                        }
                                    ],
                                    jobTitle: like(""),
                                    linked_nicename: like(null),
                                    __typename: like("User")
                                },
                                {
                                    id: like("917772"),
                                    name: like("Marwan Bishara"),
                                    link: like("/author/marwan_bishara_201132512858571875"),
                                    description: like("Marwan Bishara is an author who writes extensively on global politics and is widely regarded as a leading authority on US foreign policy, the Middle East and international strategic affairs. He was previously a professor of International Relations at the American University of Paris."),
                                    slug: like("marwan_bishara_201132512858571875"),
                                    twitter: like("https://twitter.com/MarwanBishara"),
                                    facebook: like(""),
                                    avatars: [
                                        {
                                            size: like("24"),
                                            url: like("/wp-content/uploads/2019/04/a30cce93f88c42cbb31e48adbcfc19d1_6.jpeg?resize=24%2C24"),
                                            __typename: like("AvatarURLs")
                                        },
                                        {
                                            size: like("48"),
                                            url: like("/wp-content/uploads/2019/04/a30cce93f88c42cbb31e48adbcfc19d1_6.jpeg?resize=48%2C48"),
                                            __typename: like("AvatarURLs")
                                        },
                                        {
                                            size: like("96"),
                                            url: like("/wp-content/uploads/2019/04/a30cce93f88c42cbb31e48adbcfc19d1_6.jpeg?resize=96%2C96"),
                                            __typename: like("AvatarURLs")
                                        }
                                    ],
                                    jobTitle: like("Senior political analyst at Al Jazeera."),
                                    linked_nicename: like(""),
                                    __typename: like("User")
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
                                            __typename: like("AvatarURLs")
                                        },
                                        {
                                            size: like("48"),
                                            url: like("/wp-content/uploads/2011/09/2011915144718387734_8.jpeg?resize=48%2C48"),
                                            __typename: like("AvatarURLs")
                                        },
                                        {
                                            size: like("96"),
                                            url: like("/wp-content/uploads/2011/09/2011915144718387734_8.jpeg?resize=96%2C96"),
                                            __typename: like("AvatarURLs")
                                        }
                                    ],
                                    jobTitle: like("Ryan Luckey is co-founder of the Comun Tierra Project, which documents ecological projects in Latin America."),
                                    linked_nicename: like(""),
                                    __typename: like("User")
                                }
                            ],
                            outsideImage: {
                                id: like("2843564"),
                                sourceUrl: like("/wp-content/uploads/2024/05/image-1714864764.jpg"),
                                credit: like(""),
                                caption: like(""),
                                alt: like("alt text of Gallry Image"),
                                width: like(1920),
                                height: like(1080),
                                __typename: like("Media")
                            }
                        }
                    ],
                    moreOnWidgetArticles: [
                        {
                            title: like("1% TA A3 EM: SC, Vm, Om with Most Used Fields"),
                            link: like("/news/2024/5/6/1-ta-a3-em-sc-vm-om-with-most-used-fields-40"),
                            externalUrl: like(null),
                            postType: like("post"),
                            replacementHeadline: like("1% RH A3 EM: SC, Vm, Om with Most Used Fields"),
                            __typename: like("Post")
                        }
                    ],
                    explainerWidget: {
                        title: like(""),
                        posts: like([]),
                        termTitle: like(""),
                        termLink: like(""),
                        __typename: like("ExplainerWidget")
                    },
                    longform: like(null),
                    sponsorTax: like([]),
                    who: like([]),
                    homePageEvent: like(false),
                    sponsorshipType: like(null),
                    sponsorHeaderBarText: like(null),
                    sponsorFooterBarText: like(null),
                    hideSponsorHeaderBarText: like(null),
                    hideSponsorFooterBarText: like(null)
                }
            }
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
                '{"name":"1-ta-a-indonesias-tiktok-sellers-do-roaring-trading-in-hijab-handbags-2-36","postType":"post","preview":""}',
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
                content: "<p>On Saturday, October 7, Noura* went to work as usual early in the morning at the hospital in Israel where she’s been employed for more than two years.Forhe first time, the government took advantage of 2019’s financial management law, which allows for up to a three-year budget. H</p>\n<ul>\n<li>Killed: At least 2,808</li>\n</ul>\n<ol>\n<li>Zah</li>\n</ol>\n<ul>\n<li><a href=\"https://www.youtube.com/\">https://ww.youtube.com/</a></li>\n<li><a href=\"https://www.facebook.com/\">https://www.facebook.com/</a></li>\n<li><a href=\"https://www.twitter.com/\">https://www.twitter.com</a></li>\n</ul>\n<blockquote><p><a href=\"https://www.youtube.com/\">https://www.youtube.com/</a></p></blockquote>\n<p>This is the end of blockquote with URL.</p>\n<p>&nbsp;</p>\n<p><a href=\"https://www.instagram.com/\">https://www.instagram.com</a></p>\n<p>Youtube Embed by Link</p>\n<p>&nbsp;</p>\n<p>Brightcove video 2:</p>\n<p>Image 2:</p>\n<p><img decoding=\"async\" loading=\"lazy\" class=\"alignleft size-arc-image-770 wp-image-2843660\" src=\"/wp-content/uploads/2024/05/image-1714950175.jpg?w=770&#038;resize=770%2C433\" alt=\"alt text of Featured Image\" width=\"770\" height=\"433\" srcset=\"/wp-content/uploads/2024/05/image-1714950175.jpg 1920w, /wp-content/uploads/2024/05/image-1714950175.jpg 300w, /wp-content/uploads/2024/05/image-1714950175.jpg 768w, /wp-content/uploads/2024/05/image-1714950175.jpg 1024w, /wp-content/uploads/2024/05/image-1714950175.jpg 1536w, /wp-content/uploads/2024/05/image-1714950175.jpg 770w, /wp-content/uploads/2024/05/image-1714950175.jpg 1170w, /wp-content/uploads/2024/05/image-1714950175.jpg 270w, /wp-content/uploads/2024/05/image-1714950175.jpg 730w, /wp-content/uploads/2024/05/image-1714950175.jpg 1366w, /wp-content/uploads/2024/05/image-1714950175.jpg 1568w\" sizes=\"(max-width: 770px) 100vw, 770px\" data-recalc-dims=\"1\" /></p>\n<p>&nbsp;</p>\n<p>&nbsp;</p>\n",
                subheading: "1% Defending champions England are among the teams most likely to stop hosts & favourites India the number 1 from lifting the trophy",
                id: "2843863",
                title: "contract test 1% TA A Indonesia’s TikTok sellers do roaring trading in hija",
                excerpt: "1% SUM A Indonesia’s TikTok Shop ban reveals mixed feelings on e-commerce revolution & online seller say it is misguided",
                date: "2024-05-07T02:22:16",
                link: "/news/2024/5/7/1-ta-a-indonesias-tiktok-sellers-do-roaring-trading-in-hijab-handbags-2-36",
                isBreaking: false,
                isLive: false,
                shortUrl: "https://aje.io/1kkrxk",
                proxyShortUrl: "https://aje.io/k6tbaw",
                isDeveloping: false,
                externalUrl: null,
                replacementHeadline: "1% RH A England look to spoil under pressure India’s Cricket WorldCup party",
                postType: "post",
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
                                __typename: "AvatarURLs"
                            },
                            {
                                size: "48",
                                url: "",
                                __typename: "AvatarURLs"
                            },
                            {
                                size: "96",
                                url: "",
                                __typename: "AvatarURLs"
                            }
                        ],
                        jobTitle: "",
                        linked_nicename: null,
                        __typename: "User"
                    },
                    {
                        id: "917772",
                        name: "Marwan Bishara",
                        link: "/author/marwan_bishara_201132512858571875",
                        description: "Marwan Bishara is an author who writes extensively on global politics and is widely regarded as a leading authority on US foreign policy, the Middle East and international strategic affairs. He was previously a professor of International Relations at the American University of Paris.",
                        slug: "marwan_bishara_201132512858571875",
                        twitter: "https://twitter.com/MarwanBishara",
                        facebook: "",
                        avatars: [
                            {
                                size: "24",
                                url: "/wp-content/uploads/2019/04/a30cce93f88c42cbb31e48adbcfc19d1_6.jpeg?resize=24%2C24",
                                __typename: "AvatarURLs"
                            },
                            {
                                size: "48",
                                url: "/wp-content/uploads/2019/04/a30cce93f88c42cbb31e48adbcfc19d1_6.jpeg?resize=48%2C48",
                                __typename: "AvatarURLs"
                            },
                            {
                                size: "96",
                                url: "/wp-content/uploads/2019/04/a30cce93f88c42cbb31e48adbcfc19d1_6.jpeg?resize=96%2C96",
                                __typename: "AvatarURLs"
                            }
                        ],
                        jobTitle: "Senior political analyst at Al Jazeera.",
                        linked_nicename: "",
                        __typename: "User"
                    }
                ],
                __typename: "Post",
                featuredImage: {
                    id: "2843931",
                    sourceUrl: "/wp-content/uploads/2024/05/image-1715060916.jpg",
                    credit: "",
                    caption: "",
                    alt: "alt text of Image",
                    width: 1920,
                    height: 1080,
                    __typename: "Media",
                    itemNumber: ""
                },
                source: [
                    {
                        name: "Al Jazeera",
                        featuredTaxonomy: false,
                        featuredTaxonomyImage: null,
                        featuredActionLink: "",
                        featuredSourceLink: "",
                        __typename: "Category"
                    }
                ],
                postLabel: [
                    {
                        name: "Editorial",
                        featuredTaxonomy: false,
                        featuredTaxonomyImage: null,
                        featuredActionLink: "",
                        __typename: "Category"
                    }
                ],
                verticalFeaturedImage: null,
                outsideImage: {
                    id: "2843846",
                    sourceUrl: "/wp-content/uploads/2024/05/image-1715039077.jpg",
                    credit: "",
                    caption: "",
                    alt: "alt text of Image",
                    width: 1920,
                    height: 1080,
                    __typename: "Media"
                },
                galleryMedia: [],
                galleryImagesCount: null,
                showAuthor: true,
                writeInAuthor: "Susan D'Souza",
                authorTagline: "Contract testing",
                themeMode: null,
                writeInCoAuthor: {
                    name: "Susan D'Souza",
                    order: "1",
                    __typename: "WriteInAuthor"
                },
                correctionText: "On Saturday, October 7, Noura* went to work as usual early in the morning at the hospital in Israel where she’s been employed for more than two years.\r\nFor the first time, the government took advantage of 2019’s financial management law, which allows for up to a three-year budget. H2\r\nIraq has not only been slow at passing budgets, but three out of the past nine years also saw no budget passed at all – in 2014, 2020 & 2022. H3\r\nAlthough there is only half a year .",
                correctionDate: "2024-05-07T00:00:00",
                updatedDate: "",
                displayPublishDate: true,
                modified_gmt: "2024-05-07T06:02:48",
                hasElectionBanner: false,
                primaryCategoryTerm: "news",
                primaryCategoryTermName: "News",
                primaryTagsTermName: "Brexit",
                primaryTagsTerm: "brexit",
                featuredCaption: "",
                featuredYoutube: "",
                featuredDataWrapperIframe: "",
                socialMediaImage: {
                    sourceUrl: "/wp-content/uploads/2024/05/image-1715060916.jpg",
                    credit: "",
                    caption: "",
                    width: 1920,
                    height: 1080,
                    sizes: [
                        {
                            crop: "arc-image-1800",
                            width: 1800,
                            height: 1080,
                            url: "/wp-content/uploads/2024/05/image-1715060916.jpg?resize=1800%2C1080",
                            cropRectangle: null,
                            __typename: "MediaSize"
                        },
                        {
                            crop: "arc-image-1200-630",
                            width: 1200,
                            height: 630,
                            url: "/wp-content/uploads/2024/05/image-1715060916.jpg?resize=1200%2C630",
                            cropRectangle: null,
                            __typename: "MediaSize"
                        },
                        {
                            crop: "full",
                            width: 1920,
                            height: 1080,
                            url: "/wp-content/uploads/2024/05/image-1715060916.jpg?fit=1920%2C1080",
                            cropRectangle: null,
                            __typename: "MediaSize"
                        }
                    ],
                    __typename: "Media"
                },
                programs: [],
                video: {
                    id: "6352451647112",
                    duration: "05:48",
                    name: "Palestinians flee Khan Younis and Deir el-Balah after Israel orders Rafah evacuation",
                    accountId: "665003303001",
                    playerId: "6tKQRAx7lu",
                    __typename: "Video"
                },
                categories: [
                    {
                        title: "",
                        slug: "news",
                        link: "/news/",
                        name: "News",
                        homePageEvent: false,
                        customNavigation: null,
                        displayCustomNavigationOnArticles: false,
                        customNavigationBrandingImg: "",
                        __typename: "Category"
                    }
                ],
                internalTaxonomies: [],
                internalReporting: [
                    {
                        title: "Make me Feel",
                        slug: "make-me-feel",
                        __typename: "Category"
                    }
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
                        __typename: "Tag"
                    }
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
                        __typename: "Category"
                    }
                ],
                series: [],
                relatedArticles: [
                    {
                        id: "2843835",
                        title: "1% TA LB3 Indonesia’s TikTok sellers do roaring trading in hijab & handbags",
                        replacementHeadline: "1% RH LB3 England look to spoil under pressure India’s Cricket WorldCup par",
                        excerpt: "1% Sum LB3 Indonesia’s TikTok Shop ban reveals mixed feelings on e-commerce revolution & online seller say it is misguid",
                        link: "/news/liveblog/2024/5/6/1-ta-lb3-indonesias-tiktok-sellers-do-roaring-trading-in-hijab-handbags-25",
                        date: "2024-05-06T23:38:15",
                        showAuthor: true,
                        writeInAuthor: "",
                        writeInCoAuthor: {
                            name: "",
                            order: "1",
                            __typename: "WriteInAuthor"
                        },
                        postType: "liveblog",
                        externalUrl: null,
                        content: "<p>The leader of Polands governing party and a partner in its governing coalition announced an agreement late on Wednesday to postpone Sundays presidential election, without setting a new date for the poll.Jaroslaw Kaczynski, head of the ruling Law and Justice party, and Jaroslaw Gowin, leader of a small party in the conservative coalition, announced in a joint statement that they had agreed to cancel Sundays vote and set a new date. More: Polish presidential election in chaos with four days to go As most European elections are called off, Poland pushes ahead Tusk urges Poles to boycott election out of decency They called their decision a solution that will guarantee Poles the opportunity to participate in democratic elections. The decision brought some clarity to a chaotic situation that left Poles uncertain about whether they would be casting votes this weekend. The May 10 date had been set months ago, but the coronavirus pandemic and a government-ordered lockdown threw preparations into disarray.</p>\n<p>Bitter fighting between the conservative governing party and its political opponents kept them from agreeing on an alternative. The governing party had sought to stick to the election date by making it a postal vote, but proper legislation was still not approved. Many in Poland voiced concerns that such a vote organised at short notice might not be conducted property or meet democratic standards for fairness.</p>\n<p>A disagreement between Kaczynski and Gowin had also created a impasse that had threatened to cause an larger political crisis. Their joint statement suggested the crisis had been averted. Under their plan, after Sunday the Supreme Court will declare the election void because it does not happen, and then parliament Speaker Elzbieta Witek will announce a new presidential election to be held on the first possible date. Under a constitutionally dictated timeline, the last possible date for the presidential election in 2020 would be on May 23. But they said they would amend legislation regulating elections in 2020, which might suggest a later date. The vote will be conducted by postal ballot.</p>\n<p>The Law and Justice party is backing the reelection bid by President Andrzej Duda, whose five-year term expires on August 6. Duda leads in opinion polls, well ahead of the nine other candidates. Adam Bielan, the campaign spokesman for Duda, told private broadcaster TVN24 that he expected a new election to be held in late June or early July. Other politicians said it could be held as late as the end of July before Dudas term expires. The legislation passed the lower house of parliament last month but the senate took a month to debate it, then rejected it on Tuesday. The bill returned to the lower house, but there was no time left before Sunday to prepare the ballots and have postal workers deliver them to voters.</p>\n<p>&nbsp;</p>\n",
                        programs: [],
                        __typename: "Post",
                        video: {
                            id: "6352421860112",
                            duration: "01:21",
                            __typename: "Video"
                        },
                        featuredImage: {
                            id: "2843564",
                            sourceUrl: "/wp-content/uploads/2024/05/image-1714864764.jpg",
                            credit: "",
                            caption: "",
                            alt: "alt text of Gallry Image",
                            width: 1920,
                            height: 1080,
                            __typename: "Media"
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
                                        __typename: "AvatarURLs"
                                    },
                                    {
                                        size: "48",
                                        url: "",
                                        __typename: "AvatarURLs"
                                    },
                                    {
                                        size: "96",
                                        url: "",
                                        __typename: "AvatarURLs"
                                    }
                                ],
                                jobTitle: "",
                                linked_nicename: null,
                                __typename: "User"
                            },
                            {
                                id: "917772",
                                name: "Marwan Bishara",
                                link: "/author/marwan_bishara_201132512858571875",
                                description: "Marwan Bishara is an author who writes extensively on global politics and is widely regarded as a leading authority on US foreign policy, the Middle East and international strategic affairs. He was previously a professor of International Relations at the American University of Paris.",
                                slug: "marwan_bishara_201132512858571875",
                                twitter: "https://twitter.com/MarwanBishara",
                                facebook: "",
                                avatars: [
                                    {
                                        size: "24",
                                        url: "/wp-content/uploads/2019/04/a30cce93f88c42cbb31e48adbcfc19d1_6.jpeg?resize=24%2C24",
                                        __typename: "AvatarURLs"
                                    },
                                    {
                                        size: "48",
                                        url: "/wp-content/uploads/2019/04/a30cce93f88c42cbb31e48adbcfc19d1_6.jpeg?resize=48%2C48",
                                        __typename: "AvatarURLs"
                                    },
                                    {
                                        size: "96",
                                        url: "/wp-content/uploads/2019/04/a30cce93f88c42cbb31e48adbcfc19d1_6.jpeg?resize=96%2C96",
                                        __typename: "AvatarURLs"
                                    }
                                ],
                                jobTitle: "Senior political analyst at Al Jazeera.",
                                linked_nicename: "",
                                __typename: "User"
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
                                        __typename: "AvatarURLs"
                                    },
                                    {
                                        size: "48",
                                        url: "/wp-content/uploads/2011/09/2011915144718387734_8.jpeg?resize=48%2C48",
                                        __typename: "AvatarURLs"
                                    },
                                    {
                                        size: "96",
                                        url: "/wp-content/uploads/2011/09/2011915144718387734_8.jpeg?resize=96%2C96",
                                        __typename: "AvatarURLs"
                                    }
                                ],
                                jobTitle: "Ryan Luckey is co-founder of the Comun Tierra Project, which documents ecological projects in Latin America.",
                                linked_nicename: "",
                                __typename: "User"
                            }
                        ],
                        outsideImage: {
                            id: "2843564",
                            sourceUrl: "/wp-content/uploads/2024/05/image-1714864764.jpg",
                            credit: "",
                            caption: "",
                            alt: "alt text of Gallry Image",
                            width: 1920,
                            height: 1080,
                            __typename: "Media"
                        }
                    }
                ],
                moreOnWidgetArticles: [
                    {
                        title: "1% TA A3 EM: SC, Vm, Om with Most Used Fields",
                        link: "/news/2024/5/6/1-ta-a3-em-sc-vm-om-with-most-used-fields-40",
                        externalUrl: null,
                        postType: "post",
                        replacementHeadline: "1% RH A3 EM: SC, Vm, Om with Most Used Fields",
                        __typename: "Post"
                    }
                ],
                explainerWidget: {
                    title: "",
                    posts: [],
                    termTitle: "",
                    termLink: "",
                    __typename: "ExplainerWidget"
                },
                longform: null,
                sponsorTax: [],
                who: [],
                homePageEvent: false,
                sponsorshipType: null,
                sponsorHeaderBarText: null,
                sponsorFooterBarText: null,
                hideSponsorHeaderBarText: null,
                hideSponsorFooterBarText: null
            }
        },
        });
      });
    });  
  });
