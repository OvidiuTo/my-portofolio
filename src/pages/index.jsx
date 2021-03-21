import React from 'react';
import {Link} from 'react-router-dom';
import './page.scss';
const MainPage = () =>{
    return(
        <div className="hmp">
            <ul>
                <li><Link to ="/todo"><a>TodoApp</a></Link></li>
                <li><Link to ="/about-me"><a>About Me</a></Link></li>
            </ul>
            <h1 className="hmp-title">My e-Portofolio</h1>
            <small>Main Page</small>
        </div>
    );
}

export default MainPage;