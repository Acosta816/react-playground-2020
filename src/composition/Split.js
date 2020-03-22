import React from 'react'; //can now use JSX
import './Split.css';


function Split(props) {
    //place variables above the return statement...
    const variableClassName = `split ${props.className}`; //this is not JSX so we must use JS template literals
    // const myStyle = { flex: props.flexBasis };    You can also use a variable which looks cleaner.
    return (
        //The "style" prop takes an {object} that you pass into it and injects it as inline syleing.
        <div className={variableClassName} style={{ flex: props.flexBasis }}>
            {props.children}
        </div>
    )
}

export default Split;
