import React from 'react';
import './Tabs3.css';


class Tabs3 extends React.Component {

    static defaultProps = {
        tabs: [{name: "potatoe"}]
    }

    constructor(props){
        super(props);
        this.state= {
            currentTab: this.props.tabs[0]
        }
    }

//================================================================================class-level functions BEGIN================================

    renderButtons = ()=> {
        const buttonsArray= this.props.tabs.map((tab,index)=> {
            return(
                <button type="button" key={index} onClick={(e)=>{this.handleButton(e)}}>
                    {tab.name}
                </button>
            )
        });

        return buttonsArray;

    }

    renderCurrentTab = ()=> {
        const {currentTab} = this.state;
        return (
            <div className="current-tab">
                <h1>{currentTab.name}</h1>
                <img className="avatar" src={currentTab.avatar} alt={currentTab.content}/>
            </div>
        )
    }

    handleButton =(e)=> {
        
        const currentTab = this.props.tabs.find(tab=> tab.name === e.target.innerText);
        console.log(currentTab);

        this.setState({
            currentTab
        })
    }

//================================================================================class-level functions END================================


    render() {

        return(
            <div>
                {this.renderButtons()}
                {this.renderCurrentTab()}
            </div>
        )
    }
}

export default Tabs3;