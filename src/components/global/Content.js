import React, {Component} from 'react';
import './css/Content.css';

class Content extends Component {
    constructor() {
        super();

        this.state = {
            count: 0,
            numero1: 0,
            numero2: 0,
            resultado: 0
        };
        this.handleCountClick = this.handleCountClick.bind(this);
        this.handleResultClick = this.handleResultClick.bind(this);
        this.handleInputChanged = this.handleInputChanged.bind(this);
    };

    handleCountClick(e) {
        if (e.target.id === "add") {
            this.setState({
                count: this.state.count + 1
            });
        }
        else if (e.target.id === "subtract") {
            this.setState({
                count: this.state.count - 1
            });
        }
        else if (e.target.id === "Reset") {
            this.setState({
                count: 0
            });
        }
    }

    handleResultClick(e) {
        this.setState({
            resultado: this.state.numero1+ this.state.numero2
        });
    }

    handleInputChanged(e) {
        if (e.target.id === "numero1")
            this.setState({
                numero1: Number(e.target.value)
            });
        else
            this.setState({
                numero2: Number(e.target.value)
            });
    }

    render() {
        return (
            <div className="Content">
                <h2>Counter: {this.state.count}</h2>

                <p>
                    <button id="add" onClick={this.handleCountClick}>+</button>
                    <button id="subtract" onClick={this.handleCountClick}>-</button>
                    <button id="Reset" onClick={this.handleCountClick}>reset</button>
                </p>

                <h2>Calculadora</h2>
                <p>
                    <input id="numero1" type="number" value={this.state.numero1} onChange={this.handleInputChanged}/>
                    +
                    <input id="numero2" type="number" value={this.state.numero2} onChange={this.handleInputChanged}/>

                    <button id="resultado" onClick={this.handleResultClick}>=</button>
                    {this.state.resultado}
                </p>
            </div>
        );
    }
}

export default Content;
