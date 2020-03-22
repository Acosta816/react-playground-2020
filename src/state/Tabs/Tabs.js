import React from 'react';
import './Tabs.css';


class Tabs extends React.Component {

    static defaultProps = {
        tabs: []
    }

    state = {
        currentIndex: 0
    }

    //On an event handler, if you plan on passing a value through to a method, you must place it into an "anonumous arrow function" like so... ()=> {this.handleClick(juice)}
    //and of course all of this inside the onClick={}  ...so it'll look like this... onClick={ ()=> {this.handleClick(apples)} }
    renderButtons = ()=> {
        const tabsButtons = this.props.tabs.map((tab,index)=> {
            return <button onClick={()=> {this.handleClick(index)}} key={index}>{tab.name}</button>
        });

        return tabsButtons;
    }

    renderContent = ()=> {
        const currentTab = this.props.tabs[this.state.currentIndex];
        
        return (
            <div className='content'>
                {currentTab.content}
                <img className="avatar" src={currentTab.avatar} alt="sonic characters" />
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
        console.log(this.props.tabs);

        //Below you may have noticed that the method calls have the parens at the end like so... "this.renderButtons()"  
        //But when we called class arrow methods in eventHandlers we didnt need to add the (parens). Well this is because with event handlers, 
        //we are NOT calling it on the spot inside the handler when we type it in. It's just a reference to it, a painting of it. The 'onClick' code then
        //finds the actual method, wherever it is that you declard it, and then activates it. All we are doing is inserting a variable tag basically. 
        //We are just passing the variable name of the method like so.. onClick={this.renderButtons}   exactly like an argument. The (parens) signify a call on the spot.
        return(
            <div>
                {this.renderButtons()}
                {this.props.tabs.length ? this.renderContent() : null}
                
            </div>
        )
    }
}

export default Tabs;