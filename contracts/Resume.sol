pragma solidity ^0.4.23;

contract Resume {

  mapping(bytes32 => ResumeInfo) resumes;
  struct ResumeInfo {
    string resumeID;
    string jobTitle; 
    uint128 score;
    uint128 timestamp;
  }

  function processResumes(string resumeID, string jobTitle, uint128 score, uint128 timestamp) public  {
    resumes[keccak256(resumeID)] = ResumeInfo(resumeID, jobTitle, score, timestamp);
  }

  function getResume(string id) public view returns (string resumeID, string jobTitle, uint128 score, uint128 timestamp) {
    ResumeInfo memory r = resumes[keccak256(id)];
    return (r.resumeID, r.jobTitle, r.score, r.timestamp);
  } 

}
