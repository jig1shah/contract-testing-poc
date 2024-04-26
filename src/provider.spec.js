const { Verifier } = require("@pact-foundation/pact");

describe("Pact Verification", () => {
  it("validates the expectations of ProductService", () => {
    const opts = {
      logLevel: "INFO",
      providerBaseUrl: "https://develop.aje.aj-harbinger.com",
      provider: "AjApiService",
      providerVersion: "1.0.0",
      providerVersionBranch: "test",
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
