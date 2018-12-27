pragma solidity ^0.4.23;

contract Resume {

  mapping(bytes32 => ResumeInfo) resumes;
  struct ResumeInfo {
    string resumeID;
    uint128 score;
    uint128 timestamp;
  }

  function processResumes(string resumeID, uint128 score, uint128 timestamp) public  {
    resumes[keccak256(resumeID)] = ResumeInfo(resumeID, score, timestamp);
  }

  function getResume(string id) public view returns (string resumeID, uint128 score, uint128 timestamp) {
    ResumeInfo memory r = resumes[keccak256(id)];
    return (r.resumeID, r.score, r.timestamp);
  } 

}
