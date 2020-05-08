import React from 'react';
import langData from '../lang-data';
import './level4.css';
import LanguageContext from '../LanguageContext';


class level4 extends React.Component {

    static contextType = LanguageContext;

    render() {
    
        const lang = langData[this.context.lang] || {} /* We're using an "or an empty object" logic when creating the copy constant with the syntax || {}. This is similar to defaultProps but 
                                                languageSpecificCopy isn't a prop so we can't use defaultProps. Meaning, if we attempt to select a key inside the languageSpecificCopy object that 
                                                doesn't exist, it could return undefined. If copy === undefined then when we attempt to do copy.title and copy.body, our app could throw errors as that
                                                could equate to undefined.title and undefined.body which won't work. The || {} is giving us a safety net to avoid dealing with undefined and instead use 
                                                an empty object in the worst case; {}.title and {}.body won't throw errors if the key doesn't exist in languageSpecificCopy. */
        console.log(this.context.lang);
        return(
            <section className="level4">
                <h2>{lang.title}</h2>
                <p>{lang.body}</p>
                <button onClick={()=>{this.context.setLang('Elven')}}>
                    Elven!
                </button>
            </section>
        )
    }
}

export default level4;