import React, { Component } from 'react';

const nounImg = {
    "jett": ["Jett Wang", "jett.png"],
    "htmlcss": ["HTML CSS", "htmlcss.svg"],
    "boostrap": ["BootstrapCSS", "boostrap.png"],
    "sass" : ["SaSS","sass.png"],
    "jquery" : ["jQuery","jquery.png"],
    "react" : ["ReactJS","react.png"],
    "sketch" : ["Sketch","sketch.png"],
    "photoshop" : ["Photoshop","photoshop.png"],
    "illustrator" : ["Illustrator","illustrator.png"],
    "indesign" : ["Indesign","indesign.png"],
    "origami" : ["Origami Studio","origami.png"],
    "flinto" : ["Flinto","flinto.jpg"],
    "invision" : ["Invision","invision.jpg"],
    "marvel" : ["Marvel","marvelapp.png"],
    "pop" : ["POP","pop.png"],
    "omni" : ["Omnigraffle","omni.png"],
    "wix" : ["Wix","wix.png"],
    "weebly" : ["Weebly","weebly.png"],
    "webflow" : ["Webflow","webflow.jpg"],
    "squarespace" : ["Squarespace","squarespace.svg"],
    "firebase" : ["FirebaseDB","firebase."]
    
}

export class Noun extends Component {
    render(){
    	return(
    		<span><img className="noun" src={"/src/img/noun/"+ nounImg[this.props.name][1]} alt="" />
    		{nounImg[this.props.name][0]}</span>
    	)
    }
}