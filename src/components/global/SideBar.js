import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

import './css/SideBar.css';

class SideBar extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        items: PropTypes.array.isRequired
    };

    render() {
        const {title , items} = this.props;
        return (
            <div className="SideBar">
                <div>
                    <h2>{title}</h2>
                    <ul className="Menu">
                        {items && items.map((item, key) => <li key={key}><Link to={item.url}>{item.title}</Link></li>)}
                    </ul>
                </div>
            </div>
        );
    }
}

export default SideBar;
