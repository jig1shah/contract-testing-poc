const { Verifier } = require("@pact-foundation/pact");

describe("Article Verification", () => {
  it("Verify Article Contract", () => {
    const opts = {
      logLevel: "INFO",
      providerBaseUrl: "https://staging.aje.aj-harbinger.com",
      provider: "ActualGQLResult",
      providerVersion: "1.0.0",
      consumerVersionSelectors: [
        {
          latest: true,
        },
      ],
      pactBrokerUrl: "https://al20jazeera.pactflow.io",
      pactBrokerToken: "pqUDksFukt0CRI9gGoYUUQ",
      publishVerificationResult: true,
    };

    return new Verifier(opts).verifyProvider().then((output) => {
      console.log(output);
    });
  });
});
