pragma solidity ^0.4.0;

contract Resume {
  event resumesProcessed(uint resumeID, ufixed score, uint16 timestamp); 

  function _processResumes(uint resumeID, ufixed score, uint16 timestamp) private  {
    emit resumesProcessed(resumeID, score, timestamp);
  }
}
