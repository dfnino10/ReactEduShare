import React, {Component} from 'react';
import './global/css/Header.css';

//Components
import Header from './global/Header'
import Content from './global/Content'
import Footer from './global/Footer'

//Data
import items from '../data/menu';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header title = "EduSHare" items={items}/>
                <Content/>
                <Footer copyright= "&copy; EduShare 2017"/>
            </div>
        );
    }
}

export default App;
