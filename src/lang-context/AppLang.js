import React from 'react';
import { Route } from 'react-router-dom';
import './AppLang.css';
import LanguageContext from './LanguageContext';
import LangControls from './langControls';
import Level2 from './level2/level2';

class AppLang extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lang: window.navigator.language
        }
    }



    handleSetState = (lang)=> {
        this.setState({
            lang
        })
    }



    render() {

        const contextValue = {
            lang: this.state.lang,
            setLang: this.handleSetState,
        }

        return(

            <LanguageContext.Provider value={contextValue}>

                <div className="AppLang">
                    App Context
                    <LangControls handleSetState={this.handleSetState} />
                    <Level2 />
                </div>

            </LanguageContext.Provider>
            
        )
    }
}

export default AppLang;