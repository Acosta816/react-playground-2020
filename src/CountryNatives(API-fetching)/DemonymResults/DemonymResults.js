import React from 'react';
import './DemonymResults.css';


function DemonymResults(props) {

    const { selected } = props;
    console.log(selected);

    return (
        <div className="DemonymResults">
            {selected ? `A ${selected.citizen} comes from ${selected.country}`: <div>^^ Select a Country above to see what their inhabitants are called ^^</div>}
        </div>
    )
}

export default DemonymResults;

DemonymResults.defaultProps = {
    selected: {}
};
