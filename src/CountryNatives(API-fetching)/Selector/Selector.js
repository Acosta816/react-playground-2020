import React from 'react';
import './Selector.css';


class Selector extends React.Component {

    handleChange = (value)=> {
        if(value === "None"){
            return null
        }
        const myArray = value.split(",");
        const selected = {country: myArray[0], citizen: myArray[1]};
        console.log(selected);
        this.props.cbHandleSelected(selected);
        
    }

    renderOptions = ()=> {
        const allOptions = this.props.stateCountries.map((country,index) => {
            return(
                <option key={index} value={[country.name, country.citizen]}>{country.name}</option>
            )
            
        })
        return allOptions;
    }

    render() {
        

        return(
            <div className="Selector">

                <form>
                    <label htmlFor="country">Select a Country: </label>
                    <select id="country" name="country" onChange={(e)=> {this.handleChange(e.target.value)}}>
                        <option value="None" >Select one...</option>
                        {this.renderOptions()}
                    </select>
                </form>

            </div>
        )
    }
}

Selector.defaultProps = {
    stateCountries: []
};

export default Selector;