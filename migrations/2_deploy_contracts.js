var Migrations = artifacts.require("./Migrations.sol");
var Resume = artifacts.require("./Resume.sol");
module.exports = function(deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(Resume);
};
