import React from "react";
import { connect } from "react-redux";
import { Collapse} from 'reactstrap';
import Swal from 'sweetalert2';
import ReactJson from 'react-json-view'
// const si = require('systeminformation');
import 'babel-polyfill';

import axios from "axios";
// Custom Components
import Utils from '../utils'
import TronLinkGuide from './components/TronLinkGuide';

import Section from "./components/Section";
import Blockchain from "./components/Blockchain";

import DataVisualization from "./components/DataVisualization";
import DropzoneComponent from "react-dropzone-component";

// Material-UI
import { deepOrange500 } from "material-ui/styles/colors";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import RaisedButton from "material-ui/RaisedButton";

// Font
import Paper from "material-ui/Paper";

import buttonBackground from "../_constants/images/buttonBackground.png";
import tronLOGO from "../_constants/images/tronLogo2.png";
import viewButton from "../_constants/images/viewButton2.png";
import viewButtonResumeBlockchain from "../_constants/images/viewresumeblockchain2.png";
import viewButtonClosed from "../_constants/images/viewButtonClosed2.png";
import viewBlockchainSubmissionsButton from "../_constants/images/viewBlockchainSubmissions.png";
import Loadable from 'react-loading-overlay';
import {
  TextValidator,
  ValidatorForm,
} from "react-material-ui-form-validator";
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";
import IconButton from 'material-ui/IconButton';
import FaTimesCircle from "react-icons/lib/fa/times-circle";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Drawer from '@material-ui/core/Drawer';
const FOUNDATION_ADDRESS = 'TWiWt5SEDzaEqS6kE5gandWMNfxR2B5xzg';
////////////////////////////////////////////////////////////////////////////////////
const contractAddress = 'TY4q76Ex7QQ3W6yZ5hGs5mugwn5dy4iJPp';   /// testnet
//const contractAddress = 'TRQNHzA8tTPVmrQsiZXbxFt7rfLdYsgt1F';   /// mainnet
//THJKK4NUXqkdriKxef6xkUtp4eyQc258QP

// Theme
const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500
  }
});

const dottedContainer = {
  position: "relative",
  border: "1px solid #C62634",
  borderRadius: "25px",
  padding: "50px",

  margin: "10px 0",
  overflow: "hidden",
  color: "#fff !important",

};
const dottedContainerStep3 = {
  position: "relative",
  border: "1px solid #C62634",
  borderRadius: "25px",
  padding: "25px 0px",

  margin: "10px 0",
  overflow: "hidden",
  color: "#fff !important",

};
const dottedContainer1 = {
  position: "relative",
  border: "1px solid #FFAA3B",
  borderRadius: "25px",
  padding: "50px",
  margin: "10px 0",
  overflow: "hidden",
  color: "#fff !important",

};

const labelStyle = {
  color: "#FFFFFF",
  position: "absolute",
  top: "-40px",
  fontSize: "18px",
  marginBottom: "5px",
};

const inputStyle = {
  backgroundColor: "rgba(1,1,1,0.1) !important",
  borderRadius: "10px",
  padding: "0 10px",
  color: "#000" ,
  zIndex: "200",
  marginBottom: "10px",

  // textAlign: "right"
};


const hintStyle = {
  zIndex: "200",
left: "10px",
marginBottom:"10px",
color:"#000",
};

const underlineStyle = {
  display: "none"
};

const iconStyle = {
  fontSize: "14px",
  position: "absolute",
  top: "17px",
  right: "10px",
  color: "#009dd6",
  cursor: "pointer",
};

const styles = {

resumeTableCell:{
  fontSize: "24px",
  color: "#FFFFFF",
},
resumeTableCellSmall:{
  fontSize: "16px",
  color: "#FFFFFF",
},
resumeTableCellFirst:{
  fontSize: "24px",
  color: "#FFFFFF",
},
  resumeTable:{
    fontSize: "24px",
    color: "#C62634",
  },
  paperStyle: {
    position: "relative",
    marginTop: "10%",
    width: "100%",
    display: "inline-block",
    backgroundColor: "rgba(0,0,0,.26)",
    opacity: "75%",
    borderStyle: "solid",
    borderColor: "#C62634",
    borderWidth: "1px"
  },
  roundedButton: {
     margin: "0 auto",
     color: "white",
   
    position: "relative",
    height: "100%",
    bordeRadius: "25px ",
    padding: "10px 50px",
    boxShadow: "0px",
    backgroundColor: "#C62634",
  },
  buttonDiv:{
    left: "-25px",
    color: "white",
    backgroundColor: "#C62634",
    borderRadius: "25px",

  },
  roundedButton2: {
    marginLeft: "20%",
    marginRight: "25px",
    minWidth: "50px",
    position: "relative",
  },
  resumeBlockchainButton: {
    marginLeft: "25px",
    minWidth: "50px",
    position: "relative",
   
  },
  resumeBlockchainButtonOpen: {
    marginLeft: "25px",
    minWidth: "50px",
    position: "relative",
    marginBottom: "13px",
   
  },
  roundedButtonOverlay: {
    
  },
  headingStyle: {
    fontSize: "24px",
    color: "#FFFFFF",
    fontWeight: "500",
    textAlign: "center",
  },
   subheadingStyle: {
    margin: "10px 0px",
    fontSize: "22px",
    color: "#FFFFFF",
    fontWeight: "200",
    textAlign: "center",
  },
  paragraphStyle: {
   fontSize: "16px",
   marginTop: "10px",
    textAlign: "center",
    color: "#fff",
  },
  paragraphStyleUnderlined:{
     fontSize: "16px",
   marginTop: "10px",
    textAlign: "center",
    color: "#fff",
    textDecoration: "underline",
  },
  paragraphStyleUnderlinedBig:{
     fontSize: "32px",
   marginTop: "25px",
    textAlign: "center",
    color: "#00ADF3",
    textDecoration: "underline",
  },
  linkStyle: {
    textDecoration: "underline",
    color: "#00ADF3 !important",
  },
  linkedInIcon: {
    position: "relative",

    display: "inline-block",

    margin: "2.0em 0 1.5em 0",
    paddingLeftt: "45px"
  },
  drawer:{
    width: "350px",
    backgroundColor: "rgba(0,0,0,0.5)",
    zIndex: "90000",

  },
  drawerPaper:{
    width: "350px",
    backgroundColor: "rgba(0,0,0,0.5)"
  }
};
function timeConverter(timestamp){
  var a = new Date(timestamp);
  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hour = a.getHours();
  var min = a.getMinutes();
  var sec = a.getSeconds();
  var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
  return time;
};


class InstyBeta extends React.Component {
  constructor(props) {
   
    super(props);

    this.state = {
      userCount: 0,
      resumeCount: 0,
      resumeIDArray: [],
      resumeTableOpen: false,
      resumeTable: [],
       tronWeb: {
          installed: false,
          loggedIn: false
      },
      resumeBlockChainObject: {},
      dialogOpen: false,
        instyData: {},
        resumeID: '',
        resumeTimestamp: '',
        resumeScore: '',
     
     showToolTip: false,
      analyzeButtonDisabled: true,
      loading: false,
      formData: {
        JobDescription: '',
      },
      loadingMessage: 'Uploading and Scoring Resume(s)...',
      resumeFiles:{},
      resumeCheck: false,
      resumesAdded: false,
       buttonState: '',
       collapseArrays: [],

    };
        
        this.componentConfig = {
      iconFiletypes: [".pdf"],
      showFiletypeIcon: true,
      postUrl: '/FileUploadHandler'
    };

    this.djsConfig = {
     autoProcessQueue: false,
     parallelUploads: 10,
      uploadMultiple: true,
      paramName: "myFiles",
      addRemoveLinks: true,
      params: {
        name: "testfile"
      },
      maxFiles: 1,
      dictDefaultMessage: "PDF/Doc/Docx/Txt",
      acceptedFiles: ".pdf,.doc,.docx,.txt"
    };
    this.resumeIDStored = React.createRef();

    this.eventHandlers = {
      // This one receives the dropzone object as the first parameter
      // and can be used to additional work with the dropzone.js
      // object
      init: dropzone => {
        this.initCallback(dropzone);
      },
      // All of these receive the event as first parameter:
      drop: this.onFileDrop(),
      dragstart: null,
      dragend: null,
      dragenter: null,
      dragover: null,
      dragleave: null,
      // All of these receive the file as first parameter:
      addedfile: file => {
        this.addedFileCallback(file);
      },
      
      thumbnail: null,
      error:(response,serverResponse) => {
        this.fileUploadedError(response,serverResponse);
      },
      processing: null,
      uploadprogress: null,
      sending: null,
      success: (response,serverResponse) => {
        this.fileUploadedSuccess(response,serverResponse);
      },
      complete: response => {
        this.fileUploadedComplete(response);
      },
      canceled: null,
      maxfilesreached: null,
      maxfilesexceeded: null,
      // All of these receive a list of files as first parameter
      // and are only called if the uploadMultiple option
      // in djsConfig is true:
      processingmultiple: null,
      sendingmultiple: null,
      successmultiple: null,
      completemultiple: null,
      canceledmultiple: null,
      // Special Events
      totaluploadprogress: null,
      reset: input => {this.uploadReset()},
      queuecomplete: null
    };

    this.convertLanguages = this.convertLanguages.bind(this);
     this.onFileDrop = this.onFileDrop.bind(this);
     this.onDrop = this.onDrop.bind(this);
     this.addedFileCallback = this.addedFileCallback.bind(this);
     this.fileUploadedSuccess = this.fileUploadedSuccess.bind(this);
     this.removedFileCallback = this.removedFileCallback.bind(this);
     this.uploadReset = this.uploadReset.bind(this);
     this.initCallback = this.initCallback.bind(this);
     this.handleChange = this.handleChange.bind(this);
     this.handleSubmit = this.handleSubmit.bind(this);
     this.handleFileSubmit = this.handleFileSubmit.bind(this);
     this.fileUploadedComplete = this.fileUploadedComplete.bind(this);
     this.handleResumes = this.handleResumes.bind(this);
     this.fileUploadedError = this.fileUploadedError.bind(this);
     this.sortResumes = this.sortResumes.bind(this);
     this.Comparator = this.Comparator.bind(this);
     this.median = this.median.bind(this);
     this.handleCollapse = this.handleCollapse.bind(this);
     this.mouseOverHandler = this.mouseOverHandler.bind(this);
     this.mouseMoveHandler = this.mouseMoveHandler.bind(this);
     this.mouseOutHandler = this.mouseOutHandler.bind(this);
     this.createTooltip = this.createTooltip.bind(this);
     this.testFrontEndInstyBeta = this.testFrontEndInstyBeta.bind(this);
     this.handlePostSuccess = this.handlePostSuccess.bind(this);
     this.onGetResume = this.onGetResume.bind(this);
     this.onGetResumes = this.onGetResumes.bind(this);
     this.onSubmitResumes = this.onSubmitResumes.bind(this);
     this.TronHelperFunction = this.TronHelperFunction.bind(this);
     this.submitResumeUpload = this.submitResumeUpload.bind(this);
     this.submitDataToTron = this.submitDataToTron.bind(this);
     this.handleDialogClose = this.handleDialogClose.bind(this);
     this.tryGetResume = this.tryGetResume.bind(this);
     this.removeResumeID = this.removeResumeID.bind(this);
     this.onGetUserCount = this.onGetUserCount.bind(this);
  }

 initCallback (dropzone) {
    this.setState({myDropZone: dropzone});
}

async componentDidMount() {


   console.log("component did mount");
    await new Promise(resolve => {
        const tronWebState = {
            installed: !!window.tronWeb,
            loggedIn: window.tronWeb && window.tronWeb.ready
        };

        if(tronWebState.installed) {
            this.setState({
                tronWeb:
                tronWebState
            });

            return resolve();
        }

        let tries = 0;

        const timer = setInterval(() => {
            if(tries >= 10) {
                const TRONGRID_API = 'https://api.trongrid.io';

                window.tronWeb = new TronWeb(
                    TRONGRID_API,
                    TRONGRID_API,
                    TRONGRID_API
                );

                this.setState({
                    tronWeb: {
                        installed: false,
                        loggedIn: false
                    }
                });

                clearInterval(timer);
                return resolve();
            }

            tronWebState.installed = !!window.tronWeb;
            tronWebState.loggedIn = window.tronWeb && window.tronWeb.ready;

            if(!tronWebState.installed)
                return tries++;

            this.setState({
                tronWeb: tronWebState
            });

            resolve();
        }, 100);
    });

    if(!this.state.tronWeb.loggedIn) {
        // Set default address (foundation address) used for contract calls
        // Directly overwrites the address object as TronLink disabled the
        // function call
        window.tronWeb.defaultAddress = {
            hex: window.tronWeb.address.toHex(FOUNDATION_ADDRESS),
            base58: FOUNDATION_ADDRESS
        };

        window.tronWeb.on('addressChanged', () => {
            if(this.state.tronWeb.loggedIn)
                return;

            this.setState({
                tronWeb: {
                    installed: true,
                    loggedIn: true
                }
            });
        });
    }
    await Utils.setTronWeb(window.tronWeb, contractAddress);

    this.onGetUserCount();
}



mouseOverHandler(d, e) {
    this.setState({
      showToolTip: true,
      top: e.y,
      left: e.x,
      value: d.value,
      key: d.data.key});
  }
   mouseMoveHandler(e) {
    if (this.state.showToolTip) {
      this.setState({top: e.y, left: e.x});
    }
  }
  mouseOutHandler() {
    this.setState({showToolTip: false});
  }

  createTooltip() {
    if (this.state.showToolTip) {
      return (
        <ToolTip
          top={this.state.top}
          left={this.state.left}
        >
          The value of {this.state.key} is {this.state.value}
        </ToolTip>
      );
    }
    return false;
  }

  convertLanguages(langs) {
    var newLangs = [];
    var emptyLang = {};

    langs.map((item, index) => {
      emptyLang = {
        LanguageType: item.Name,
        Level: item.Level
      };

      newLangs.push(emptyLang);
    });

    return newLangs;
  }

  async onGetResume(event) {
    console.log("checking event for onGetResume", event.target.id);
    console.log("checking ongetresume resumeID", this.state.resumeIDArray[event.target.id]);
    const resume = await Utils.contract.getResume(this.state.resumeIDArray[event.target.id]).call();

    var resumeBlockchainObject = {};

    console.log("checking resume object", resume);
    resumeBlockchainObject["ResumeID"] = resume["resumeID"];
    resumeBlockchainObject["Job Title"] = resume["jobTitle"];
    resumeBlockchainObject["Score"] = parseInt(resume["score"]["_hex"])/100;
    resumeBlockchainObject["Timestamp"] = timeConverter(parseInt(resume["timestamp"]["_hex"]));
    //console.log(resume);
    await this.setState({resumeBlockChainObject: resumeBlockchainObject});
    await this.setState({dialogOpen: true});
  }

async tryGetResume(resumeID,repetitions){

  var self = this;
  var index = 0;

  var interval = setInterval(async function () {

    if (index++ < repetitions){

      await Utils.contract.getResume(resumeID).call()
      .then(res => {
        Swal({
          title: 'Resume Processing Succeeded',
          type: 'success',
          background: "rgb(198,38,52)",
           confirmButtonColor: '#C62634',


  backdrop: "rgba(0,0,123,0.4)center left no-repeat",
  
      });
      console.log("async call went through", index);
      console.log("checking result", res);
      self.handlePostSuccess(self.state.instyData);
      clearInterval(interval);

      }).catch(err => {
        self.setState({loadingMessage: 'Error in tryGetResume' + index});

        console.log("checking error in trygetresume", err);
        
      })

    }
    else{
      clearInterval(interval);
      self.setState({loading: false});
      Swal({
          title: 'Resume Processing Failed.  Please Try again.',
          type: 'error',
          background: "rgb(198,38,52)",
           confirmButtonColor: '#C62634',
           backdrop: "rgba(0,0,123,0.4)center left no-repeat",

      });
    }
}, 3000);




}


  async onSubmitResumes(resumeID, jobTitle, score) {
    var self = this;
    //console.log("checking math", (Math.floor(score * 100) ));
   await Utils.contract.processResumes(resumeID, jobTitle, (Math.floor(score * 100) ) , new Date().getTime()).send({
      shouldPollResponse: false,
      callValue: 0
  }).then(res => {
      self.tryGetResume(resumeID,20);
    }).catch(err => {
      self.setState({loading: false});
      console.log("checking error for onSubmitResumes", err);
      Swal({
          title: 'Resume Processing Failed.  Please Try again.',
          type: 'error',

      });
    })
}


onFileDrop() {
    //console.log("checking onFileDrop");
  }
  uploadReset(){
    //console.log("got to upload reset");
     this.setState({analyzeButtonDisabled: true});
  }

   onDrop(acceptedFiles, rejectedFiles) {
    // do stuff with files...

    //this.setState({ files: acceptedFiles });
  }
  
  addedFileCallback(file) {
    //console.log("checking file", file);
    this.setState({ analyzeButtonDisabled: false });
  }
 fileUploadedSuccess(serverResponse) {
    
      //console.log("checking result from uploadhandler response from server", serverResponse);

      if (serverResponse === 'Limit Exceded'){

         this.setState({loadingMessage: 'You have exceded your daily limit of 10 server calls.'});
          setTimeout(
        function() {
            this.setState({loading: false});
        }
        .bind(this),
        6000
        );

      }
      else if (serverResponse === 'Error'){

         this.setState({loadingMessage: 'Sorry, we are unable to process this resume. Please try again, or upload a different resume.'});
          setTimeout(
        function() {
            this.setState({loading: false});
        }
        .bind(this),
        6000
        );

      }

      else{
            this.handleResumes(serverResponse);
             if (this.state.myDropZone){ 

                 this.state.myDropZone.removeFile( this.state.myDropZone.getQueuedFiles()[0]);
             }

      this.setState({loading: false});
      this.setState({resumeCheck: true});
      }
     
    }
   

  fileUploadedComplete(response,serverResponse) { 
  }

  fileUploadedError(response,serverResponse) {
    //console.log("checking result from uploadhandler due to error", serverResponse);

      this.setState({loadingMessage: 'Sorry, we are unable to process this resume. Please try again, or upload a different resume.'});
      setTimeout(
    function() {
        this.setState({loading: false});
    }
    .bind(this),
    6000
);
  }

  removedFileCallback(file) {
    const resumeFiles = this.state.resumeFiles;
    //console.log("checking file when about to remove", file);
    if (file["status"] === 'success'){
    
      var temp = file["name"];
      delete resumeFiles[temp];

      if (Object.keys(resumeFiles).length > 0)

        this.setState({resumeFiles});
      else
        this.setState({resumeFiles, resumeCheck: false});
    } else {
      //console.log("got to else in removedfilecallback, heres the result", file.currentTarget.name);
       var temp = file.currentTarget.name;


      delete resumeFiles[temp];

      if (Object.keys(resumeFiles).length > 0)

        this.setState({resumeFiles});
      else
        this.setState({resumeFiles, resumeCheck: false});

    }
    //this.setState({resumeFiles});
  }

  handleSubmit(){
    //console.log("tried to submit");
    const formData = this.state.formData.JobDescription;
    this.setState({ loading: true, loadingMessage: 'Uploading and Scoring your resume...'});
    this.setState({ analyzeButtonDisabled: true });
   
      this.handleFileSubmit();
  }

  handlePostSuccess(data){
    if (data["Code"] == 429){
      //Limit exceded from server
      this.fileUploadedSuccess('Limit Exceded');
    } else if(data["Code"] == 200){
      this.fileUploadedSuccess(data["Data"]);
    } else {
      this.fileUploadedSuccess('Error');
    }
  }

  handleFileSubmit(){
     //console.log("got to handle file submit");
    if (this.state.myDropZone){     
      if (this.state.myDropZone.getQueuedFiles().length > 0 ) {
      
        var fileArray =  this.state.myDropZone.getQueuedFiles();
        //console.log("looking at files",fileArray);

        this.TronHelperFunction();
      } else this.setState({ loading: false });
    } else {
      //console.log("got to handle else");
       this.setState({ loading: false });
    }
  }
  handleFormErrors(errors){
    //console.log("there were errors here", errors);
  }

  handleChange(event){
    const { formData } = this.state;
    formData[event.target.name] = event.target.value;
    this.setState({formData});
  }

handleResumes(resumes){
  const {resumeFiles} = this.state;
  var collapse = [];

  //console.log("check on resumes first", resumes);

var index = 0;
      for (var key in resumes){
        collapse[index] = false;
        resumeFiles[key] = resumes[key];
        index++;
      }

    this.setState({resumeFiles});
    this.setState({collapseArrays: collapse});
    this.onGetUserCount();

   this.setState({resumesAdded: true});
    
}

getColor(number){
 if (number >= 65)
    return '#1D24AC';
  else if( number < 65 && number >= 40)
    return '#F0C91E';
  else if(number < 40)
    return '#C62634';
    else 
      return '#1D24AC';
}

 Comparator(a, b) {
   if (a[1]["total"] > b[1]["total"]) return -1;
   if (a[1]["total"] < b[1]["total"]) return 1;
   return 0;
 }

 median(numbers) {
    return numbers[Math.floor((numbers.length - 1) / 2)];
}

sortResumes(resumes){

//console.log("in sortResumes checking sorted resumes", sortedResumes);

  return resumes;
}

handleCollapse(event){

event.preventDefault();

//console.log("heres the event for view breakdown click", event.target.id);

const collapseArrays = this.state.collapseArrays;

collapseArrays[event.target.id] = !collapseArrays[event.target.id];

this.setState({collapseArrays: collapseArrays});
}

TronHelperFunction(){
//this.testFrontEndInstyBeta();

this.submitResumeUpload()
}

async submitResumeUpload(){
   var form = new FormData();
    var self = this;
    var fileArray = this.state.myDropZone.getQueuedFiles();
    form.append('resumefile', fileArray[0]);
    //console.log("checking file", fileArray[0]);

    await axios ("http://18.206.187.45:8080/resumeupload",{
            method: 'post',
            data:  form,
            //headers: { "Content-Type": "application/json" }
    })
      
      .then(function (response) {
        //console.log("heres the response from /resumeupload", response);
        
        if(response["status"]  == 200){
          //console.log("sucessfull call to /resumeupload");
         // console.log("response data for /resumeupload", response.data);
          self.setState({resumeID : response.data["Data"]});

         

          //console.log("checking state tron", self.state.resumeID);
          self.testFrontEndInstyBeta();
            }
      })
      .catch(function (error) {
        //console.log('error in /resumeupload ', error);
        console.log("error on front end insty response",response);
        self.setState({loadingMessage: 'Sorry, we are unable to process this resume. Please try again, or upload a different resume.'});
          setTimeout(
        function() {
            self.setState({loading: false});
        }
        .bind(self),
        6000
        );
      });
}

  async testFrontEndInstyBeta(myfiles){
    var data = new FormData();

   var fileArray = this.state.myDropZone.getQueuedFiles();

 

      data.append("myfiles", fileArray[0], fileArray[0]["name"]);
    
    data.append("JD",this.state.formData.JobDescription);

   var self=this;

    

   await axios({
    method: 'post',
    url: 'http://18.206.187.45:8080/instybeta',
    data: data,
    headers: {
      "Content-type": "multipart/form-data",
    }
    })
    .then(function (response) {
        //handle success
       // console.log("here is front end insty response",response);
       //console.log("sucessfull call to /instybeta");
        const {resumeIDArray} = self.state;

          resumeIDArray.push(self.state.resumeID);
          self.setState({resumeIDArray: resumeIDArray});
        self.setState({instyData: response.data});
        self.setState({loadingMessage: "Your resume was scored.  Now it is being processed through the blockchain."})
        
        self.submitDataToTron(response.data);
    })
    .catch(function (response) {
        //handle error
        console.log("error on front end insty response",response);
         //self.removeResumeID();
        self.setState({loadingMessage: 'Sorry, we are unable to process this resume. Please try again, or upload a different resume.'});
          setTimeout(
        function() {
            self.setState({loading: false});
        }
        .bind(self),
        6000
        );

         
    });
  }




  async submitDataToTron(resumeData){
  
    


    for (var key in resumeData["Data"]){
      this.setState({resumeScore: resumeData["Data"][key]["total"]});
      }

    //console.log("checking TRON values from state in function submitDataToTron", " resumeID: ",this.state.resumeID," resumeScore: ", this.state.formData.JobDescription, this.state.resumeScore, " resumeTimestamp: ", this.state.resumeTimestamp);


    // make Submit call to tron here
    await this.onSubmitResumes(this.state.resumeID, this.state.formData.JobDescription.toString(), this.state.resumeScore)
    //and then call this function once that is complete:
     
    
  }

handleDialogClose() {
    this.setState({ dialogOpen: false,resumeTableOpen:false});
  };
   async onGetResumes() {
   //await console.log(tronWeb)
   //const reses = await Utils.contract.resumeMapping(window.tronWeb.defaultAddress.hex).call();
    //console.log(reses)
    this.setState({loading: true, loadingMessage: "Loading Table..."});
   const resumeCountHex = await Utils.contract.getResumeCount().call()
   const resumeCount = parseInt(resumeCountHex._hex)
   const resumeInfo = [];
   for (var i =0; i < resumeCount; i++) {
    resumeInfo.push(await Utils.contract.getResumeByIndex(i).call())
   }
   console.log(resumeInfo)

   this.setState({resumeTable: resumeInfo,resumeTableOpen: true, loading: false, loadingMessage: "Loading..."});
  }
removeResumeID(){

  console.log("got to remove resumeID")
  const {resumeIDArray} = this.state;

  var newResumeIDArray = resumeIDArray.pop();

  this.setState({resumeIDArray: newResumeIDArray});

  return;
}
async onGetUserCount() {
    const userountHex = await Utils.contract.getUserCount().call()
    const userCount = parseInt(userountHex._hex);
    console.log('Total Users: ', userCount )
    let resumeCountInfo = 0;
    // if (userCount > 0){
    for (var i =0; i < userCount; i++) {
      let resumeCount = await Utils.contract.getResumeCountByAddress(i).call();
      resumeCountInfo += parseInt(resumeCount._hex);
    }

  // } else{
  //      let resumeCount = await Utils.contract.getResumeCountByAddress(0).call();
  //     resumeCountInfo += parseInt(resumeCount._hex);
  //   }
    console.log('Total Resumes: ', resumeCountInfo)

    this.setState({userCount: userCount, resumeCount: resumeCountInfo});
   }

  render() {
    const {formData} = this.state;
    const {resumeFiles} = this.state;

    const collapseArrays = this.state.collapseArrays;

    return (
      <div style={{}}>
        { (!this.state.tronWeb.installed || !this.state.tronWeb.loggedIn) || (this.state.dialogOpen || this.state.resumeTableOpen)?
         (<Dialog
          PaperProps={{
           style: { backgroundColor: 'rgba(0,0,0,.75)',boxShadow: 'none',maxHeight: '700px'},
            }}
          open={(!this.state.tronWeb.installed || !this.state.tronWeb.loggedIn) || (this.state.dialogOpen || this.state.resumeTableOpen)}
          fullWidth={false}
          maxWidth="lg"
           disableBackdropClick={(!this.state.tronWeb.installed || !this.state.tronWeb.loggedIn)}
        disableEscapeKeyDown={(!this.state.tronWeb.installed || !this.state.tronWeb.loggedIn)}
          onClose={this.handleDialogClose}
          aria-labelledby="form-dialog-title"
        >
        
          
          <DialogContent >
           {
            (!this.state.tronWeb.installed || !this.state.tronWeb.loggedIn) ? (
            this.state.tronWeb.installed? (<TronLinkGuide installed />) : (<TronLinkGuide />)
          )



            : this.state.resumeTableOpen? 

            (

            <Table style={styles.resumeTable}>
              <TableHead>
                <TableRow>
                  <TableCell style={styles.resumeTable}>ResumeID</TableCell>
                  <TableCell style={styles.resumeTable} >Job Title</TableCell>
                  <TableCell style={styles.resumeTable} >Score</TableCell>
                  <TableCell style={styles.resumeTable} >Timestamp</TableCell>
            
                </TableRow>
              </TableHead>
              <TableBody>
                  {this.state.resumeTable.length > 0 ? this.state.resumeTable.map( (row,index) => {
    
                      return (
                <TableRow key={index}>
                  <TableCell component="th" style={styles.resumeTableCellFirst} scope="row">
                    {row[0]}
                  </TableCell>
                  <TableCell style={styles.resumeTableCell} >{row[1]}</TableCell>
                  <TableCell style={styles.resumeTableCell}>{parseInt(row[2]["_hex"])/100}</TableCell>
                  <TableCell style={styles.resumeTableCell} >{ timeConverter(parseInt(row[3]["_hex"]))}</TableCell>
                </TableRow>
                      );
                  }): (<div></div>)}
                </TableBody>
            </Table>

            )   : (<ReactJson displayDataTypes={false}  theme="tomorrow" src={this.state.resumeBlockChainObject} />)}
          </DialogContent>
       
          </Dialog>) : <div> </div>}

        <MuiThemeProvider muiTheme={muiTheme}>
        <Loadable
        active={this.state.loading}
        spinner
        text={this.state.loadingMessage}
        >
        <Drawer
          PaperProps={{
           style: { backgroundColor: 'transparent',boxShadow: 'none',width: "175px", overflow: "none"},
            }}
        variant="permanent"
       
        anchor="left"
      >

      <div style={{marginTop: "100%"}}>

        <div className="box">
          <div className="container">
            <span className="number">{this.state.userCount}</span>
            <br />
            {this.state.userCount > 1 ? "Users" : "User"}
          </div>
          <div className="fill speed4" style={{background: "#C62634 "}}></div>
        </div> 
  
      <div className="box" style={{marginTop: "-5px"}}>
        <div className="container">
          <span className="number">{this.state.resumeCount}</span>
          <br />
         {this.state.resumeCount > 1 ? "Resumes" : "Resume"}
        </div>
        <div className="fill speed4" style={{background : "#11020A"}}></div>
      </div>
   
 
    </div>
      </Drawer>
        <ValidatorForm
                ref="form"
                onSubmit={this.handleSubmit}
                onError={errors => this.handleFormErrors(errors)}
              >
          <Section containerSize={100}>
           
          </Section>

          <Section
            containerSize={1}
            style={{
              background: "linear-gradient(180deg, rgba(64,8,5,1) 0%, rgba(17,2,10,1) 100%, rgba(17,2,10,1) 100%)",
             
              paddingBottom: "5%"
            }}
          >
            <Paper style={styles.paperStyle} zDepth={5}>
              <Section
                containerSize={100}
                style={{
                  marginTop: "30px",
                  marginBottom: "30px",
                  color: "#009dd6"
                }}/>
              
                <Section
                containerSize={1}
               
                style={{marginBottom: "10px"}}>
                
                <div className="row" style={{marginLeft: "25%", marginTop: "25px", marginBottom: "25px"}}>
                  <div className="col-md-4" >
                    <img src={tronLOGO} />
                  </div>
                </div> 

                  <div className="col-md-6" style={{ marginLeft: "25%"}}>

                        <h6 style={styles.headingStyle}> InstyMatch  </h6>
                      
                        <h6 style={styles.subheadingStyle}> Simple, impartial, decentralized and lightning-fast. </h6>

                        <p style={{marginTop: "25px", textAlign: "center", fontSize: "16px", color: "#fff", fontWeight: "100"}}> InstyMatch is a Tron Dapp that finds a correlation score between a job description and a resume. </p>
                        <p style={{fontSize: "16px", marginTop: "20px",textAlign: "center",color: "#fff",fontWeight: "100"}}> If you're a candidate, rate your resume against the competition of candidates in the blockchain.  If you're a recruiter or employer, upload resumes to compare the candidates for a position you need to fill, and access previous resume submissions in the blockchain.</p>
                  
                        <p style={{ fontSize: "16px",marginTop: "20px", textAlign: "center",color: "#fff",fontWeight: "100"}}> InstyMatch is limited to 10 scoring requests per day.</p>
                       

                        



                 
                  </div> 
                 <div className="col-md-10" style={{ marginLeft: "10%", marginTop: "25px"}}>
                     <Section
                       containerSize={1}
                      style={{
                      background: "url(" + buttonBackground + ") repeat-x",
                      backgroundSize: "850px 100px",
                      padding: "0px 0px"
                      }} >  

                        <RaisedButton
                        disabledBackgroundColor="rgba(0,0,0,0);"
                        target="_blank"
                        label="Find Out More Here!"
                        href="https://www.myjobtank.com"
                        rounded="true"
                        buttonStyle={{margin: "0 auto", color: "white", position: "relative",height: "100%",bordeRadius: "25px ", padding: "10px 30px", boxShadow: "0px",backgroundColor: "#C62634",}}
                        labelColor="#fff"
                        style={{marginLeft:"32.5%", marginTop: "25px",marginBottom: "25px",color: "white",backgroundColor: "#C62634",borderRadius: "25px",}}
                        overlayStyle={styles.roundedButtonOverlay}
                        disableTouchRipple={true}
                      />
                    </Section>
                  </div>
                  <div className="col-md-6" style={{ marginLeft: "25%", marginTop: "25px"}}>
                     <a style={{marginLeft: "25%", marginTop: "25px"}} 
                     onClick={(event) => {event.preventDefault()
                        this.onGetResumes() }  } target="_blank"> 
                        <img 
                             
                          src={viewBlockchainSubmissionsButton}/>
                      </a>
                  </div>

                 
                
              </Section> 
              
              <Section
                containerSize={1}
                heading="Step 1."
                style={{marginBottom: "20px"}}
                subHeading="Provide Job Title (at least 10 characters)." >
                    <div style={dottedContainer} className="col-12 scores-dotted-container">
                      <label style={labelStyle}>Job Title</label>
                      <TextValidator
                         autoComplete="off"
                          rows={2}
                          rowsMax={2}
                          name="JobDescription"
                          value={formData.JobDescription}
                          onChange={this.handleChange}
                          fullWidth={true}
                          className="text-field"
                          inputStyle={inputStyle}
                          autoFocus={true}
                          underlineFocusStyle={underlineStyle}
                          underlineStyle={underlineStyle}
                          
                          style={{
                            fontSize: "14px",
                            color:"#fff",
                          }}
                          validators={["required", "minStringLength:10"]}
                          errorMessages={[
                            "this field is required",
                            "Please enter at least 10 characters"
                          ]}/>
                  </div>
              </Section> 
              
              <Section
                style={{paddingBottom: "50px"}}
                containerSize={1}
                heading="Step 2."
                subHeading="Upload resume." >
                <div  style={dottedContainer} className="col-md-12 insty-step2-dotted-container">
                    <div   className="col-md-12 insty-step2-box">
                    <DropzoneComponent
                      config={this.componentConfig}
                      eventHandlers={this.eventHandlers}
                      djsConfig={this.djsConfig}
                    />
                    </div>
                  </div>  
                 
                 

              </Section> 
              {
                  !this.state.analyzeButtonDisabled &&
              <Section style={{ marginBottom: "5%", marginTop: "2.5%", }} className="insty-submit-button-container">
                <div  style={{marginLeft: "41.3%"}} className="col-md-1  analyze-button-container">
                 
                  <RaisedButton
                    disabledBackgroundColor="rgba(0,0,0,0);"
                    onClick={this.getInfo}
                    label="Submit"
                    type="submit"
                    rounded="true"
                    buttonStyle={styles.roundedButton}
                    labelColor="#fff"
                    style={styles.buttonDiv}
                    overlayStyle={styles.roundedButtonOverlay}
                    disableTouchRipple={true}
                  />
                </div>
              </Section>}
              { this.state.resumeCheck &&

                <div>

                 <Section
                 style={{ marginBottom: "5%",}}
                containerSize={1}
                 heading="Step 3."
                subHeading="Here are the results of your resume's..."
                score={true}
                headingStyle={{
                    fontSize: "20px",
                    fontWeight: "400",
                    color: "#FFFFFF",
                    marginBottom: "30px",
                    
                  }}
               
                >
                <div  style={dottedContainerStep3} className="col-md-12 data-visualize-container ">
                  { 
                   this.sortResumes(

                      Object.keys(resumeFiles).map(function(key) 
                        {
                         //console.log("resumeFiles size", resumeFiles.length);
                          return [key, resumeFiles[key]];
                        })

                    )
                   .map((item, index) => (
                  <div style={{margin:"40px 15px"}} key={index} className="score-row row">
                    
                      <div style={{marginBottom:"2%"}} className="col-md-10">
                       <label style={labelStyle}> {item[1]["total"]} / 100</label>
                     <Progress percent={item[1]["total"] } style={{overflowWrap: "break-word",}} status="success"  theme={{success: {symbol: item[0], color: this.getColor(item[1]["total"])}}}/>
                      </div>
                     
                      <div style={{ marginTop: "1.5%"}} className="col-md-12 view-score-breakdown">
                          <span>
                              <a style={styles.roundedButton2}> <img id={index}
                            onClick={this.handleCollapse}
                             className="view-score-breakdown-button" src={this.state.collapseArrays[index]?viewButton:viewButtonClosed}/> </a> 


                             <a style={this.state.collapseArrays[index]?styles.resumeBlockchainButtonOpen:styles.resumeBlockchainButton }> <img id={index}
                            onClick={(event) => {event.preventDefault()
                                                                this.onGetResume(event) }  }
                                                                style={this.state.collapseArrays[index]?styles.resumeBlockchainButtonOpen:styles.resumeBlockchainButton }
                                                                 className="view-score-breakdown-button" src={viewButtonResumeBlockchain}/>   </a>
                          </span>
                            <Collapse isOpen={this.state.collapseArrays[index]}>
                               
                                 { this.state.collapseArrays[index] &&

                                  <DataVisualization
                                  data={item}
                                  id={index}
                                  fileName={item[0]}/>
         
                                 }

                            </Collapse>
                      </div>
                    </div>
                    ))


                  }
                    

                  </div>
   
              </Section> 

               

              </div>
            }
            </Paper>
          </Section>
           </ValidatorForm>
           </Loadable>
        </MuiThemeProvider>
        
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { loggingIn } = state.authentication;

  return {
    loggingIn,
 
  };
}

const connectedInstyBeta = connect(mapStateToProps)(InstyBeta);
export { connectedInstyBeta as InstyBeta };
