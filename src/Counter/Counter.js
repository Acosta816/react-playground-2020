import React from 'react';
import ReactDOM from 'react-dom';

//***NOTE: EVENT HANDLERS are showcased in here along with "Arrow Function Class Methods" to fix "this." issue when using in event handlers.

class Counter extends React.Component {

    static defaultProps = {
        step: 1,
        count: 10
    }

    state = {
        count: 0,
        tick: 'TICK',
        tock: 'TOCK',
        limit: this.props.count
    };

    //Because we are in a class-level component, we dont actually need to proclaim the keyword "function" before writing our functions, pretty cool :D
    //HOWEVER, in order to call this function inside an event handler, we must create an "arrow function class method" myMethod = ()=> { ..code goes here.. } and to call it, you simply supply "this.myMethod" with no parens.
    //The reason we have to assign the name of the function to the arrow function is so that React knows that when we say "this." it knows that "this" is referring to this class instance. Otherwise it'll say that "this" has a value of undefined.
    handleButtonClick = ()=> {
        this.setState({
            count: this.state.count + this.props.step
        })
    }




    render() {
        return(
            <div>
                <p>The current count: {this.state.count}</p>
                <button onClick={this.handleButtonClick}>PUSH</button>
                <h2>{this.state.count % 2 === 0 ? this.state.tick : this.state.tock}</h2>
                <h3>{this.state.limit}</h3>
            </div>
        )
    }
}

export default Counter;