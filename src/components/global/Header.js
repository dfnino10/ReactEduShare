import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './css/Header.css';
import logo from "./images/logo.svg";

class Header extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        items: PropTypes.array.isRequired
    };

    render() {
        const {title , items} = this.props;
        return (
            <div className="Header">
                <div className="Logo">
                    <img src={logo} alt="logo"/>
                    <h2>{title}</h2>
                    <ul className="Menu">
                        {items && items.map((item, key) => <li key={key}>{item.title}</li>)}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Header;
