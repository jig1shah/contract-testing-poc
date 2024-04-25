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
      pactBrokerUrl: "https://dhr.pactflow.io",
      pactBrokerToken: "4Rnq-z9s2xtkEv44ACBfhQ",
      publishVerificationResult: true,
      requestFilter: (req, res, next) => {
        req.headers["Postman-Token"] = `54dac58e-403d-4f8a-ab04-5b58a870e85f`;
        req.headers["Accept"] = `*/*`;
        req.headers["Accept-Encoding"] = `gzip, deflate, br`;
        req.headers["Host"] = `develop.aje.aj-harbinger.com`;

        next();
      },
    };

    return new Verifier(opts).verifyProvider().then((output) => {
      console.log(output);
    });
  });
});
