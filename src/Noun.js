import React, { Component } from 'react';

const nounImg = {
          "jett": ["Jett Wang", "jett.png"],
          "htmlcss": ["HTML CSS", "htmlcss.svg"],
          "boostrap": ["BootstrapCSS", "boostrap.png"]
      }

export class Noun extends Component {
    render(){
    	return(
    		<span><img className="noun" src={"/src/img/noun/"+ nounImg[this.props.name][1]} alt="" />
    		{nounImg[this.props.name][0]}</span>
    	)
    }
}