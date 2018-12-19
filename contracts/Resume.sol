pragma solidity ^0.4.23;

contract Resume {
  event resumesProcessed(uint128 resumeID, uint128 score, uint128 timestamp); 

  function processResumes(uint128 resumeID, uint128 score, uint128 timestamp) public  {
    emit resumesProcessed(resumeID, score, timestamp);
  }
}
