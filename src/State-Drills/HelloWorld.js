import React from 'react';




class HelloWorld extends React.Component {
    
    static defaultProps = {

    };

    state = {
        who: 'World'
    };
    
    //Cool thing here is that we don't have to pass anything from the button explicitly, we just need to have that "e" in here but not necessary on the actual button. Like we don't have to do this:     <button onClick={ this.handleClick(e) }>World</button>
    handleClick = (e)=> {
        console.log(e.currentTarget.innerHTML);
        let word = e.currentTarget.innerHTML;

        this.setState({
            who: word
        })

    }

    
    render() {
        return(
            <div>
                <h1>Hello, {this.state.who}!</h1>
                <button onClick={this.handleClick}>World</button>
                <button onClick={this.handleClick}>Friend</button>
                <button onClick={this.handleClick}>React</button>
            </div>
        )
    }
}

export default HelloWorld;