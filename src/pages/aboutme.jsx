import React from 'react';
import {Link} from 'react-router-dom';
import AboutMe from '../components/about-me/About';

const AboutMe = () =>{
    return(
        <div className="todo-background">
            <ul>
            <li><Link to="/"><a>Back</a></Link></li>
            </ul>
        <div>
           <AboutMp/>
        </div>
        </div>
    );
}

export default AboutMe;