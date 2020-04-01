import React from 'react';
import ReactDOM from 'react-dom';
import DemonymResults from './DemonymResults';

describe('TestSuite: DemonymResults Component', ()=> {
    it('SMOKE: renders without crashing', ()=> {
        const div = document.createElement('div');
        ReactDOM.render(<DemonymResults/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    

});