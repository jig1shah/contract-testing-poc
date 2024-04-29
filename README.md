## Pre-requisite
1. [VS Code](https://code.visualstudio.com/)
2. [Node.js](https://nodejs.org/) + [npm](https://www.npmjs.com/)

## How to Setup Project
1. Clone the project from the GitHub Repo: [contract-testing-poc](https://github.com/jig1shah/contract-testing-poc.git)
2. Execute the following command in the root folder:
    ```bash
    yarn
    ```
3. Sign up on Pactflow.
4. Add the "broker-base-url" in `package.json` in the "test:publish" command from Setting==> API Tokens of pactflow
5. Add the "broker-token" in `package.json` from the Settings==> API Tokens of Pactflow(Use only Read/write token).

## How to Execute Project
1. Generate pact file by executing the following command:
    ```bash
    yarn test:consumer
    ```
2. Publish pact file on Pactflow by executing:
    ```bash
    yarn test:publish
    ```
3. Verify published file by executing:
    ```bash
    yarn test:provider
    ```
