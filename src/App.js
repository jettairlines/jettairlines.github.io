import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Noun } from './Noun';


class App extends Component {



    // name: name of variable
    // getNoun(name){
    //     return <img className="noun" src="public/src/img/noun/"{nounImg.name[1]} alt=""></img>;
    // }

    // src: string, img name
    // set: string, img set name
    // workImg(src,set){
    //     return <a href="public/src/img/work/"+{src} data-lightbox={set}><img className="work" src="src/img/work/"+{src} alt={src}></a>
    // }


    render(){
        return(<div>
            <div><img id="logo" src="src/img/jwhy.svg" /></div>
            <h1><span>Hello</span>, I’m <Noun name="jett" />.</h1>
            <h2>I’m a UX <span>Designer</span> & <span>Developer</span>.</h2>
            <p>I do web & mobile design and front end development. I have experiences in freelance, start ups & corporates. I am a motivated <span>self-starter</span> and <span>fast learner</span> who thrives on <span>complexity</span> & <span>flexiblility</span>.</p>
            <p>Things I&rsquo;ve learned:</p>
            <ul>
                <li> <Noun name="htmlcss" /> / BoostrapCSS / SaSS / jQuery</li>
                <li> Sketch / Photoshop / Illustrator / Indesign</li>
                <li> Origami Studio / Flinto / Invision / Marvel / POP / Omnigraffle</li>
                <li> Wix / Weebly / Webflow / Squarespace</li>
            </ul>
        </div>
        );
    }
}

export default App;
