import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './css/Header.css';
import logo from "./images/edushareLogo.png";

class Header extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired
    };

    render() {
        const {title} = this.props;
        return (
            <div className="Header">
                <div className="Logo">
                    <img src={logo} alt="logo"/>
                </div>
                <div className="Name">
                    <h2>{title}</h2>
                </div>
            </div>
        );
    }
}

export default Header;
