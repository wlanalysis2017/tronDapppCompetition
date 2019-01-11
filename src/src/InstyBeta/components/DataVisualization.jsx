import React, { Component } from "react";
import {PieChart, Legend} from 'react-easy-chart';
import Pie from './Pie';
  const colors = ['#43A19E', '#7B43A1', '#F2317A', '#FF9824', '#58CF6C'];
  const data =[5, 12, 8, 3, 10];
import Section from "./Section";
import IconButton from 'material-ui/IconButton';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';
import { BarChart, CartesianGrid,XAxis,YAxis,Tooltip,Bar,ResponsiveContainer,Label} from 'recharts';
import FaQuestionCircle from "react-icons/lib/fa/question-circle";
import FaCircle from "react-icons/lib/fa/circle";
const linkedInIcon ={

  };
  const negativeMargin = {
    marginTop: "-4px",
  };
const chartHeadingStyle = {
  fontSize: "14px",
  fontWeight: "400",
  color: "#FFFFFF",
  marginBottom: "20px",
  marginTop: "10px",
};
const chartHeadingStyleDistribution = {
  fontSize: "14px",
  fontWeight: "400",
  color: "#FFFFFF",
  marginBottom: "25px",
  marginTop: "0px",
  marginLeft: "60px",
};

const chartLegendStyle = {

  marginTop: "12px",
  fontSize: "10px",
  fontWeight: "100",
  color: "#009dd6",

};
const chartLegendStaticStyle = {

  marginLeft: "1px",
  marginTop: "17px",
  fontSize: "14px",
  fontWeight: "100",
  color: "#FFFFFF",

};
const chartLegendDynamicStyle = {
  marginLeft: "1px",
  marginTop: "17px",
  fontSize: "14px",
  fontWeight: "100",
  color: "#FFFFFF",

};
const toolTipStyles = {
 marginLeft: "25px",
 color:  "#009dd6",
 fontWeight: "400",
};

const containerStyle = {
  maxWidth: "100%",
  position: "relative",
  zIndex: "100"
};
const containerStyle2 = {
  maxWidth: "75%",
  position: "relative",
  zIndex: "100"
};

const headingStyle = {
  fontSize: "20px",
  fontWeight: "400",
  color: "#009dd6",
  marginBottom: "30px"
};
const subHeadingStyle = {
  marginLeft:"10px",
  fontSize: "14px",
  fontWeight: "400",
  color: "#009dd6",
  marginBottom: "30px"
};

const dottedContainer = {
  

  padding: "10px 0px 30px",
  margin: "10px 0",
 
};
const customStyle = {
    '.legend': {
      marginTop: '2%',
     
      backgroundColor: '#f9f9f9',
      border: '1px solid #e5e5e5',
      borderRadius: '12px',
      fontSize: '0.8em',
      maxWidth: '100%',
      maxHeight: '100%',
      padding: '12px'
    }
  };

 const defaultStyles = {
    '.legend': {
      'list-style': 'none',
      margin: 0,
      padding: 0
    },
    '.legend li': {
      display: 'block',
      lineHeight: '24px',
      marginRight: '24px',
      marginBottom: '6px',
      paddingLeft: '24px',
      position: 'relative'
    },
    '.legend li.horizontal': {
      display: 'inline-block'
    },
    '.legend .icon': {
      width: '12px',
      height: '12px',
      background: 'red',
      borderRadius: '6px',
      position: 'absolute',
      left: '0',
      top: '50%',
      marginTop: '-6px'
    }
  };
  const config = [
    
    {color: '#13326B'},
    {color: '#9B9B9B'},
     {color: '#C62634'},
      {color: '#623999'},
       {color: '#BF2152'},
  ];

  const chartOptions = {
  //Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
  scaleBeginAtZero : true,

  //Boolean - Whether grid lines are shown across the chart
  scaleShowGridLines : true,

  //String - Colour of the grid lines
  scaleGridLineColor : "rgba(0,0,0,.05)",

  //Number - Width of the grid lines
  scaleGridLineWidth : 1,

  //Boolean - Whether to show horizontal lines (except X axis)
  scaleShowHorizontalLines: true,

  //Boolean - Whether to show vertical lines (except Y axis)
  scaleShowVerticalLines: true,

  //Boolean - If there is a stroke on each bar
  barShowStroke : true,

  //Number - Pixel width of the bar stroke
  barStrokeWidth : 2,

  //Number - Spacing between each of the X value sets
  barValueSpacing : 5,

  //Number - Spacing between data sets within X values
  barDatasetSpacing : 1,
  
}



class DataVisualization extends Component {

   constructor(props) {
    super(props);

    // reset login status

    //var cleanData = this.cleanData(this.props.data);

    

    var pieData = this.makePieData(this.props.data);
    var barData = this.makeBarData(this.props.data);

    var config = this.makeConfigData(pieData);


    this.state = {
      data: this.props.data.length > 0 ? pieData : [{}],
      config: this.props.data.length > 0 ? config : [{}],



     barData: this.props.data.length > 0 ? barData : [{}],

      
    };

    this.mouseOverHandler = this.mouseOverHandler.bind(this);
    this.createTooltip = this.createTooltip.bind(this);
    this.cleanData = this.cleanData.bind(this);
    this.makePieData = this.makePieData.bind(this);
    this.makeBarData = this.makeBarData.bind(this);
 
  }

  makeConfigData(data){
    var config = [];

    console.log("initial check on config data", data);

    data.forEach(function(element){
      console.log("checking element", element);
      config.push({color: element['color']})
    });

    return config;

     
  }
  makePieData(data){
    var returnData = [];

    console.log("checking data coming into makePieData", data);

     Object.keys(data[1]).map(function(key) 
                        {
                         
                        if (key == "dist_github"){
                          if(data[1][key] <= 0) {

                            
                            null
                          }
                          else{ 
                            console.log("got to Github");

                            returnData.push({ key: data[1][key] + '%', value: data[1][key], color: '#9B9B9B', name:'Github' })
                          }
                        }
                        else if (key == "dist_educ"){
                          if(data[1][key] <= 0) {

                            
                            null
                          }
                          else{ 
                            console.log("got to Education");
                            returnData.push({ key: data[1][key] + '%', value: data[1][key], color: '#13326B', name:'Education' })
                          }
                        }
                        else if (key == "dist_sim"){
                          if(data[1][key] <= 0) {

                            
                            null
                          }
                          else{ 
                            console.log("got to Similarity");

                            returnData.push({ key: data[1][key] + '%', value: data[1][key], color: '#C62634', name:'Similarity To JD' })
                          }
                        }
                        else if (key == "dist_skill"){
                          if(data[1][key] <= 0) {

                            
                            null
                          }
                          else{ 
                            console.log("got to Skills");

                            returnData.push({ key: data[1][key] + '%', value: data[1][key], color: '#623999', name:'Skill'})
                          }
                        }
                        else if (key == "dist_work"){
                          if(data[1][key] <= 0) {

                            
                            null
                          }
                          else{ 
                            console.log("got to Work Experience");
                            returnData.push({ key: data[1][key] + '%', value: data[1][key], color: '#BF2152', name:'Work Experience' })
                          }
                        }


                        
                        });

     console.log("checking returndata", returnData);

     return returnData;


  }

  makeBarData(data){
    var returnData = [];

    console.log("checking data coming into makeBarData", data);

     Object.keys(data[1]).map(function(key) 
                        {
                         
                        if (key == "dist_github"){
                          if(data[1][key] <= 0) {

                            
                            null
                          }
                          else{ 

                            returnData.push({ name: 'Github', dynamic: data[1]["dynamic_github"], static: data[1]["static_github"], })
                          }
                        }
                        else if (key == "dist_educ"){
                          if(data[1][key] <= 0) {

                            
                            null
                          }
                          else{ 

                            returnData.push({ name: 'Education', dynamic: data[1]["dynamic_educ"], static: data[1]["static_educ"], })
                          }
                        }
                        else if (key == "dist_sim"){
                          if(data[1][key] <= 0) {

                            
                            null
                          }
                          else{ 

                            returnData.push({ name: 'Similarity to JD', dynamic: data[1]["dynamic_sim"], static: data[1]["static_sim"] })
                          }
                        }
                        else if (key == "dist_skill"){
                          if(data[1][key] <= 0) {

                            
                            null
                          }
                          else{ 

                            returnData.push({ name: 'Skills', dynamic: data[1]["dynamic_skill"], static: data[1]["static_skill"] })
                          }
                        }
                        else if (key == "dist_work"){
                          if(data[1][key] <= 0) {

                            
                            null
                          }
                          else{ 

                            returnData.push({ name: 'Experience', dynamic: data[1]["dynamic_work"],static: data[1]["static_work"] })
                          }
                        }


                        
                        });

     console.log("checking returndata barchart", returnData);

     return returnData;


  }


  cleanData(data){

    var newData = data.slice();
    //console.log("heres the data coming into cleanData", newData);

    Object.keys(newData[1]).map(function(key) 
                        {
                         
                         if (data[1][key] <= 0){
                         // console.log("Checking Object[KEY]", data[1][key]);
                         
                          delete newData[1][key];
                          //console.log("checking data after clean", newData);
                         }
                        })

    

    return newData;


  }

  componentDidMount() {
 
  }

  mouseOverHandler(d, e) {
    this.setState({
      showToolTip: true,
      top: e.y,
      left: e.x,
      value: d.value,
      key: d.data.name});
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
        <h3
          style={toolTipStyles}
        
        >
           {this.state.key} : {this.state.value}% of Total Score 
        </h3>
      );
    }

    else{
      return (
        <h3
        style={toolTipStyles}
         
        >
          Total Score: {this.props.data[1]["total"]}
        </h3>
      );

    }
    return false;
  }


  render() {
    let tooltip;

    tooltip = this.createTooltip();

    return (

 
      
      <div className="data-visualize-container" style={dottedContainer}>

      
      

   
     <div className="row" >

     

      <div className="col-md-4" style={{marginRight: "0px", minWidth: "300px"}}>
      <Section
                
                heading=" "
                
                style={{margin: "10px"}}
                
                >
           <div className="row">
      
        
                
                    <h4 style={chartHeadingStyleDistribution} className="chart-graph-label">  Distribution of the Total Score </h4>
                 
             </div>

                
       <PieChart
                                      mouseOverHandler={this.mouseOverHandler}
                                      mouseOutHandler={this.mouseOutHandler.bind(this)}
                                      mouseMoveHandler={this.mouseMoveHandler.bind(this)}
                                      size={250}
                                      innerHoleSize={125}
                                      data={this.state.data}
                                      labels
                                      styles={{
                                      '.chart_lines': {
                                        strokeWidth: 0
                                      },
                                      '.chart_text': {
                                        color: 'white',
                                        fontFamily: 'Roboto, sans-serif',
                                        fontSize: '1.25em',
                                        fill: '#333'
                                      },
                                      '.pie-chart-label':{
                                        fontWeight: "400",
                                        fontSize: '12px !important',
                                        color: 'white !important',
                                        fill: 'white !important',
                                      },
                                    }}
          />
         
     
            </Section>
        </div>

        <div className="col-md-2" style={{marginTop:"7.5%", minWidth: "150px"}}> 
           <Legend
          
            data={this.state.data}
            dataId={'name'}
            config={this.state.config}
            styles={customStyle}
            
          />
          </div>
   
         
   
        <div className="col-md-6 score-analysis-container" style={{marginRight: "0px !important"}} >
         <Section
                
                heading=" "
                
                >
           
          <div className="row">
           <div className="col-md-1"></div>
          <div className="col-md-4">
      
        
                
                    <h4 style={chartHeadingStyle} className="chart-graph-label"> Score Analysis </h4>
                 
             </div>
            <div className="col-md-7 score-analysis-tooltip"> 


               
                      <div className="col-md-2" style={negativeMargin}>
                          <IconButton  tooltipPosition="top-left"  tooltipStyles={{fontSize:"14px",}} tooltip="Resume score based purely on resume content.">
                                <FaQuestionCircle
                              style={linkedInIcon}
                              color="#C62634"
                              size={20}
                            />
                          </IconButton>
                        </div>

                        
                      <div className="col-md-1"  style={negativeMargin}>
                         <h4 style={chartLegendStaticStyle}> Static </h4>
                      </div>

                       <div className="col-md-2" style={negativeMargin}>
                          <IconButton  tooltipPosition="top-left"  tooltipStyles={{fontSize:"14px",}} tooltip="Resume score based on Job Description.">
                                <FaQuestionCircle
                              style={linkedInIcon}
                              color="#FFFFFF"
                              size={20}
                            />
                          </IconButton>
                        </div>

                      
                      <div className="col-md-1" style={{marginLeft: "-3px", marginTop: "-4px"}}>
                         <h4 style={chartLegendDynamicStyle}> Dynamic </h4>
                      </div>
                 
                 
                 
              </div>
         </div>
        <ResponsiveContainer width="95%" height={250}>

            <BarChart width={500} height={250} data={this.state.barData}>
                <CartesianGrid vertical={false} />
                <XAxis dataKey="name" >
                
                </XAxis>
               <YAxis  axisLine={false} label={{ value: 'Percentage', angle: -90, offset: 2 }}/>
                <Tooltip labelStyle={{color: "white", }} contentStyle={{backgroundColor: "rgba(0,0,0,.85)"}}/>
                
            <Bar dataKey="dynamic" fill="#FFFFFF" />
            <Bar dataKey="static" fill="#C62634" />
               
              </BarChart>
       </ResponsiveContainer>
         </Section>
        </div>
   

        <div className="col-md-1"> </div>
                                       
    

      
      </div>

      

      </div>

    );
  }
}

export default DataVisualization;
