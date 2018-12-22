pragma solidity ^0.4.23;

contract Resume {

  mapping(uint => ResumeInfo) resumes;
  struct ResumeInfo {
    uint128 resumeID;
    uint128 score;
    uint128 timestamp;
  }

  function processResumes(uint128 resumeID, uint128 score, uint128 timestamp) public  {
    resumes[resumeID] = ResumeInfo(resumeID, score, timestamp);
  }

  function getResume(uint128 id) public view returns (uint128 resumeID, uint128 score, uint128 timestamp) {
    ResumeInfo memory r = resumes[id];
    return (r.resumeID, r.score, r.timestamp);
} 

}
