import React, { Component } from "react";
import scoreDistribution from "../../_constants/images/score-distribution2.png";

const containerStyle = {
  maxWidth: "100%",
  position: "relative",
  zIndex: "20"
};
const containerStyle2 = {
  maxWidth: "95%",
  position: "relative",
  zIndex: "20"
};

const containerStyle3 = {
  maxWidth: "95%",
  position: "relative",
  zIndex: "20"
};
const containerStyle4 = {
  maxWidth: "75%",
  position: "relative",
  zIndex: "20"
};

const headingStyle = {
  fontSize: "20px",
  fontWeight: "400",
  color: "#FFFFFF",
  marginBottom: "30px"
};
const subHeadingStyle = {
  display: "inline=block",
  marginLeft:"10px",
  fontSize: "14px",
  fontWeight: "400",
  color: "#FFFFFF",
  marginBottom: "30px"
};

function getContainerStyle(size) {

  if(size == 'a')
      return containerStyle3;
  else if (size == 2){
    return containerStyle4;
  }


  if (size) {
    return containerStyle2;
  } else return containerStyle;
}

class Section extends Component {
  render() {
    return (
      <div style={this.props.style}>
        <section
          style={getContainerStyle(this.props.containerSize)}
          className="container"
        >
          {this.props.heading && this.props.subHeading ? (
            <span>
              <h1 style={this.props.headingStyle ? this.props.headingStyle : headingStyle}>{this.props.heading} 

                <span style={this.props.subHeadingStyle?this.props.subHeadingStyle:subHeadingStyle}>
                    {this.props.subHeading}

                      {this.props.score ? (
                       <img 
                      
                      style={{width: "450px",margin:"2.5% 2.5% 2.5% 15%", height: "auto"}}
                       src={scoreDistribution}
                       className="score-range-image"/>
                    

                      ) : null
              }
                </span>

              </h1>
           
            </span>
          ) : null}

          <div>{this.props.children}</div>
        </section>
      </div>
    );
  }
}

export default Section;
