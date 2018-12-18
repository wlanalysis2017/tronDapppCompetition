pragma solidity ^0.5.1;

contract Resume {
  event resumesProcessed(uint resumeID, uint score, uint16 timestamp); 

  function _processResumes(uint resumeID, uint score, uint16 timestamp) public  {
    emit resumesProcessed(resumeID, score, timestamp);
  }
}
