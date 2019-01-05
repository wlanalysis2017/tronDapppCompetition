pragma solidity ^0.4.23;
contract Resume {

  mapping(bytes32 => ResumeInfo) resumes;
  mapping (address=>ResumeInfo[]) public resumeMapping;
  
  struct ResumeInfo {
    string resumeID;
    string jobTitle; 
    uint128 score;
    uint128 timestamp;
  }

  function processResumes(string resumeID, string jobTitle, uint128 score, uint128 timestamp) public  {
    resumes[keccak256(abi.encodePacked(resumeID))] = ResumeInfo(resumeID, jobTitle, score, timestamp);
    resumeMapping[msg.sender].push(ResumeInfo(resumeID, jobTitle, score, timestamp));
  }

  function getResume(string id) public view returns (string resumeID, string jobTitle, uint128 score, uint128 timestamp) {
    ResumeInfo memory r = resumes[keccak256(abi.encodePacked(id))];
    return (r.resumeID, r.jobTitle, r.score, r.timestamp);
  } 

 
  function getResumeCount() public constant returns(uint) {
      return resumeMapping[msg.sender].length;
    }

    function getResumeByIndex(uint index) public constant returns(string, string, uint128, uint128) {
      return (resumeMapping[msg.sender][index].resumeID, resumeMapping[msg.sender][index].jobTitle, resumeMapping[msg.sender][index].score, resumeMapping[msg.sender][index].timestamp);
    }
}