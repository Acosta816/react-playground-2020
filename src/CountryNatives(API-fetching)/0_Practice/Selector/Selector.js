import React from 'react';



class Selector extends React.Component {
    static defaultProps = {
        countries: []
    }

    renderOptions = ()=> {
        const countryOptions = this.props.countries.map((country,index)=> {
            return <option id={country} key={index} value={[country.citizen,country.country]}>{country.country}</option>
        });

        return countryOptions;
    }

    render() {

        return(
            <form>
                <label htmlFor="countrySelector">Select a Country</label>
                <select id="countrySelector" name="countrySelector" onChange={(e)=> {this.props.cbSelected(e.target.value)}}>
                    <option value="None">Select one...</option>
                    {this.renderOptions()}
                </select>
            </form>
        )

    }

}

export default Selector;