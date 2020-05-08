import React from 'react';
import Level3 from '../level3/level3';
import './level2.css'


class Level2 extends React.Component {

    render() {

        return(
            <div className="level2">
                <h2>level 2</h2>
                <Level3 />
            </div>
        )
    }
}


export default Level2;