import React from 'react';
import './Accordian2.css';

class Accordian2 extends React.Component {

    static defaultProps = {
        sections: [{name:"NO SECTIONS FOUND", content: "", avatar: ""}],
        currentSection: {name:"NO SECTIONS FOUND", content: "", avatar: ""}
    }

    constructor(props){
        super(props);
        this.state = {
            sections: [],
            currentSection: this.props.sections[0]
        }
    }

    componentDidMount() {
        this.setState({
            sections: this.props.sections,
        })
    }

    renderContent = ()=> {
        const {currentSection} = this.state;
        return(
            <div className="current-content">
                <img src={currentSection.avatar} alt="content avatar"/>
                <h2>{currentSection.content}</h2>
            </div>
        )
    }

    handleButtonClick = (e)=> {
        const currentSection = this.state.sections.find(section=> section.name === e.target.innerText);
        console.log(currentSection);
        this.setState({
            currentSection
        })
    }



    renderSections = ()=> {
        const sectionsArray = this.props.sections.map((section,index)=> {
            return(
                <li key={index}>
                    <button type="button"  onClick={(e)=> {this.handleButtonClick(e)}}>{section.name}</button>
                    {this.state.currentSection.name === section.name ? this.renderContent() : null}
                </li>
            )
        })

        return sectionsArray;
    }

    render(){
        console.log(this.state)
        return(
            <div>
                {this.renderSections()}
            </div>
        )
    }
}

export default Accordian2;