import React from 'react';
import './DemonymApp.css';
import Selector from './Selector/Selector';
import DemonymResults from './DemonymResults/DemonymResults';


class DemonymApp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            countries: [],
            selected: null,
        };
    };

    componentDidMount() {
        console.log('Component just mounted, will fetch data from API next...');

        fetch('https://country.register.gov.uk/records.json?page-size=5000')
        .then(res=> {
            
                if(!res.ok) {
                    console.log('An error occured with the fetch');
                    throw new Error('SOMETHING HAPPENED WITH FETCH!!!!!!! AHHHHHH :O');
                }
                return res.json();
        })
        .then(resJson=> {
            console.log(resJson);
            console.log('finished fetching data and console logging it. Next: map over data and console log just the country objects with name and demonym');
            let newArray = Object.keys(resJson).map((country,index)=> {
                    return {name: resJson[country].item[0].name , citizen: resJson[country].item[0]['citizen-names']};
            });
            console.log(newArray);

            this.setState({
                countries: newArray
            })

        })
        .catch(err=> {
            console.log("Handling the error here...", err);
            this.setState({
                appError: err.message
            })
        })
        

    }

    handleSelector = (selected)=> {
        console.log(selected);
        //When the state property and the value are called the same thing, you dont have to do this... selected: selected
        this.setState({
            selected
        })
    }

    render() {

        return (
            <div className="DemonymApp">
                <header>
                    <h1>DemonymApp</h1>
                </header>
                <main>
                    {this.state.appError ? <h3>WARNING: Failed fetching the data from server: {this.state.appError}</h3>: null}
                    <Selector stateCountries={this.state.countries} cbHandleSelected={this.handleSelector} />
                    <DemonymResults selected={this.state.selected} />
                </main>

            </div>
        )
    }
}


export default DemonymApp;