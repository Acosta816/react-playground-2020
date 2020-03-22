import React from 'react';


class RouletteGun extends React.Component {

    static defaultProps = {
        deathChamber: 5
    }

    state = {
        chamber: null,
        spinningTheChamber: false,
        word: 'Pull the trigger to see if you live...',
    }

    handleClick = ()=> {

        this.setState({
            spinningTheChamber: true
        })


        setTimeout(()=> {
            let randomNum = ~~(Math.random() * 8) + 1; //you can Math.floor() numbers using the '~~' operator. It's a shorthand for.. "Math.floor(Math.random() * 8) + 1"
            console.log(randomNum);
            console.log(`SPIN STOPPED at ${randomNum}`)
            this.setState({
                spinningTheChamber: false,
                chamber: randomNum,
                word: randomNum === this.props.deathChamber ? 'BANG!!!!' : `you're safe...`
            })

        }, 3000)
        
        
    }

    render(){
        return(
            <div>
                {!this.state.spinningTheChamber ? <h2>{this.state.word}</h2> :<h2>Spinning the chamber and pulling the trigger!...</h2> }
                <button onClick={this.handleClick}>PUSH</button>
            </div>
        )
    }
}


export default RouletteGun;