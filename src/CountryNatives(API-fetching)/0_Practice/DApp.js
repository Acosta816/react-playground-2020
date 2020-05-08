import React from 'react';
import Selector from './Selector/Selector';
import Demo from './Demo/Demo';


class DApp extends React.Component {

    constructor(props){
        super(props);
        console.log('constructor: component created')
        this.state = {
            countries: [],
            selected: null
        }
    }

    componentDidMount(){
        console.log('componentDidMount: component just mounted...following code will only execute once per mount, not for each render.');

        fetch('https://country.register.gov.uk/records.json?page-size=5000')
        .then(data=> {
            if(data.ok){
                return data.json();
            }
            throw new Error(`fetch went awry.. ${Error}`);
        })
        .then(dataJson=> {
            console.log(dataJson);
            const countriesArray = Object.keys(dataJson).map(count=> {
                return (
                    {citizen: dataJson[count].item[0]['citizen-names'], country: dataJson[count].item[0].name}
                )
            });
            console.log(countriesArray);

            this.setState({
                countries: countriesArray
            })

        })
        .catch(err=> {
            console.log(err.message);
            
        })

    }

    handleSelect = (value)=> {
        console.log(value);
        console.log(value.split(','));
        const valueArray = value.split(',');
        const selected = {
            citizen: valueArray[0],
            country: valueArray[1]
        }

        this.setState({
            selected
        });
    }

    render() {

        return (
            <div>
                dApp
                <Selector countries={this.state.countries} cbSelected={this.handleSelect} />
                <Demo selected={this.state.selected} />
            </div>
        )
    }
}


export default DApp;