var Resume = artifacts.require("./Resume.sol");
contract('Resume', function(accounts) {
	it("call method _processResumes", function() {
	    Test.deployed().then(function(instance) {
		  return instance.call('_processResumes');
		}).then(function(result) {
		  assert.equal("method _processResumes()", result[0], "is not call method g");
	    });
	});
});
