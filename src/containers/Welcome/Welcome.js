import React, {Component} from 'react';
import '../style.css';
import {headerLogo} from '../../assets/imgs/index';

class Welcome extends Component {

handleButtonClick = () => {
    this.props.history.push(`/home`);
}

render() {
    return(
        <div id="index-container">
        <div id="index-header">
                <img src={headerLogo} alt="Daniel Garbosa"/>
                <h1>Daniel Garbosa</h1>
                <button onClick={this.handleButtonClick}>Know Me More</button>
        </div>
        </div>
    )
}

};

export default Welcome;
