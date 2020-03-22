import React from 'react';


class TheDate extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            theTimeNow: new Date(),
            foo: 'foo',
            hello: 'Hello, world!',
            list: [1,2,3],
            obj: { nested: 'object', yes: true },
            firstName: 'David',
            lastName: 'Acosta',
        }//end of state
        console.log('constructor() called');
    } //end of constructor

    componentDidMount() {
        console.log('componentDidMount() called');
        this.interval = setInterval( ()=> {
            this.setState({
                theTimeNow: new Date()
            })
            console.log('tick');
        }, 1000)

    } //end of componentDidMount

    componentWillUnmount() {
        console.log('componentWillUnmount() called');
        clearInterval(this.interval);
    }


    render() {
        console.log('render() called');
        console.log(this.state);
        return (
            <div>{this.state.theTimeNow.toLocaleString()}</div>
        )
    }
}

export default TheDate;