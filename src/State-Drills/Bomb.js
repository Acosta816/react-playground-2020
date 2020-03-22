import React from 'react';




class Bomb extends React.Component {

    static defaultProps = {
        limit: 10
    }

    state = {
        count: 0,
        word: 'TOCK',
    }

    componentDidMount() {
        const myInterval = setInterval(() => {
            this.setState({
                count: this.state.count + 1,
                word: this.state.count % 2 === 0 ? 'TICK' : 'TOCK'
            })
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.myInterval);
        console.log('cleared interval')
    }

    

    render() {
        return(
            <div>
                {this.state.count <= this.props.limit ? <h1>{this.state.word}</h1> : <h1>BOOM!!!</h1>}
                {this.state.count <= this.props.limit? <h2>{this.state.count}</h2> : null}
            </div>
        )
    }
}

export default Bomb;