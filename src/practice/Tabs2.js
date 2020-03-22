import React from 'react';


class Tabs2 extends React.Component {

    static defaultProps = {
        tabs: []
    }

    state = {
        currentIndex: [0]
    }

    renderButtons = ()=> {
        const myButtons = this.props.tabs.map((tab,index)=> {
            return (
                <button onClick={()=> {this.handleClick(index)}} key={index}>{tab.name}</button>
            )
        })

        return myButtons;
    };

    renderContent = ()=> {
        const currentTab = this.props.tabs[this.state.currentIndex];
        return (
            <div>
                <h2>{currentTab.content}</h2>
                <img src={currentTab.avatar} alt="sonic chars"></img>
            </div>
            )
    }

    handleClick = (index)=> {
        console.log(index);
        this.setState({
            currentIndex: index
        })
    }

    render() {

        return(
            <div>
                {this.renderButtons()}
                {this.props.tabs.length ? this.renderContent(): null}
            </div>
        )
    }
}


export default Tabs2;