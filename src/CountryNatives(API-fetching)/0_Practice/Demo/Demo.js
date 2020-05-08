import React from 'react';


class Demo extends React.Component {

    render() {

        return (

            <div>
                { this.props.selected ? <h3>A {this.props.selected.citizen} comes from {this.props.selected.country}</h3> : "Select a Country above" }
            </div>
        )
    }
}

export default Demo;