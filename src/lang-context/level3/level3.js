import React from 'react';
import Level4 from '../Level4/Level4';
import './level3.css';

class Level3 extends React.Component {

    render() {

        return(

            <div className="level3">
                <h3>level 3</h3>
                <Level4 />
            </div>
        )
    }
}

export default Level3;