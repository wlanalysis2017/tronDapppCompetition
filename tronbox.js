module.exports = {
    networks: {
      development: {
  // For trontools/quickstart docker image
        privateKey: '',
        consume_user_resource_percent: 30,
        fee_limit: 100000000,
        fullNode: "http://127.0.0.1:8090",
        solidityNode: "http://127.0.0.1:8091",
        eventServer: "http://127.0.0.1:8092",
        network_id: "*"
      },
      shasta: {
        privateKey: '',
        consume_user_resource_percent: 30,
        fee_limit: 100000000,
        fullNode: "https://api.shasta.trongrid.io",
        solidityNode: "https://api.shasta.trongrid.io",
        eventServer: "https://api.shasta.trongrid.io",
        network_id: "*"
      },
      mainnet: {
  // Don't put your private key here, pass it using an env variable, like:
        privateKey: process.env.PK,
        consume_user_resource_percent: 30,
        fee_limit: 100000000,
        fullNode: "https://api.trongrid.io",
        solidityNode: "https://api.trongrid.io",
        eventServer: "https://api.trongrid.io",
        network_id: "*"
      }
    }
  };
  