import React from 'react';


class Accordian extends React.Component {

    static defaultProps = {
        sections: []
    }

    state = {
        currentTab: 0
    }

    renderButtons = ()=> {
        const myButtons = this.props.sections.map((section,index)=> {
            return(
                <li key={index}>
                    <button onClick={()=>{this.changeState(index)}} >{section.name}</button>
                    { index === this.state.currentTab ? this.renderContent(index) : null }
                </li>
            )
        })

        return myButtons;
    }

    renderContent = (index)=> {
        return (
            <div>
                <p>{this.props.sections[index].content}</p>
                <img src={this.props.sections[index].avatar} alt="sonic gifs" />
            </div>
        )
    }

    changeState = (index)=> {
        console.log(index);
        this.setState({
            currentTab: index
        })
    }

    render() {

        return(
            <div>
                <ul>
                    {this.props.sections.length ? this.renderButtons() : null }
                </ul>
            </div>
        )
    }
}


export default Accordian;