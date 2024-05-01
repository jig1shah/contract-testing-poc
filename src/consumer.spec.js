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
  describe("Getting Breaking News", () => {
    test("Test 1 Breaking News Exists For Website", async () => {
      await provider.addInteraction({
        states: [{ description: "Breaking News Exists For Website" }],
        uponReceiving: "Get All Breaking News For Website",
        withRequest: {
          method: "GET",
          path: "/graphql",
          query: {
            "wp-site": "aje",
            operationName: "ArchipelagoBreakingTickerQuery",
            variables: "{}",
            extensions: "{}",
          },
          headers: {
            "wp-site": "aje",
          }
        },
        willRespondWith: {
          status: 200,
          headers: {
            "Content-Type": "application/json; charset=utf-8",
          },
          body: {
            data: {
              breakingNews: {
                post: like("2840262"),
                tickerTitle: like("breaking"),
                tickerText: like([
                  "New topics",
                  "New breaking news",
                  "New update",
                ]),
                modified: like("2024-04-23 08:25:30"),
                link: like(
                  "/news/2024/4/21/mass-grave-with-50-bodies-found-in-khan-younis-hlstyleguide-2"
                ),
                __typename: like("BreakingNews"),
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
              operationName: "ArchipelagoBreakingTickerQuery",
              variables: "{}",
              extensions: "{}",
            },
            headers: {
              "wp-site": "aje",
            }
          })
          .then((r) => r.data);

        expect(news).toStrictEqual({
          data: {
            breakingNews: {
              post: "2840262",
              tickerTitle: "breaking",
              tickerText: ["New topics", "New breaking news", "New update"],
              modified: "2024-04-23 08:25:30",
              link: "/news/2024/4/21/mass-grave-with-50-bodies-found-in-khan-younis-hlstyleguide-2",
              __typename: "BreakingNews",
            },
          },
        });
      });
    });

    test("Test 2 Without add operationName Breaking News Exists For Website", async () => {
      await provider.addInteraction({
        states: [{ description: "Breaking News Exists For Website" }],
        uponReceiving: "Get All Breaking News For Website",
        withRequest: {
          method: "GET",
          path: "/graphql",
          query: {
            "wp-site": "aje",
            variables: "{}",
            extensions: "{}",
          },
          headers: {
            "wp-site": "aje",
          },
        },
        willRespondWith: {
          status: 400,
        },
      });

      await provider.executeTest(async (mockService) => {
        // Request to moke server
        await expect(() => {
          return axios
            .get(`${mockService.url}/graphql`, {
              params: {
                "wp-site": "aje",
                variables: "{}",
                extensions: "{}",
              },
              headers: {
                "wp-site": "aje",
              },
            })
            .then((r) => r.data);
        }).rejects.toThrow("Request failed with status code 400");        
      });
    });
  });
});
