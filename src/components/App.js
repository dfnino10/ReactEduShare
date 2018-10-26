import React, {Component} from 'react';
import PropTypes from 'prop-types';

//Components
import Header from './global/Header'
import SideBar from './global/SideBar'
import Footer from './global/Footer'
import Content from "./global/Content";

//Data
import items from '../data/menu';

class App extends Component {
    static propTyes = {
        children : PropTypes.object.isRequired
    };
    render() {
        const {children} = this.props;
        return (
            <div className="App">
                <Header title = "EduSHare"/>
                <SideBar title = "nombre" items ={items}/>
                <Content body={children}/>
                <Footer copyright= "&copy; EduShare 2017"/>
            </div>
        );
    }
}

export default App;
