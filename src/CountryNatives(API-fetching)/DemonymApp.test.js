import React from 'react';
import ReactDOM from 'react-dom';
import DemonymApp from './DemonymApp';


describe('TestSuite: DemonymApp Component', ()=> {

    it('SMOKE: renders without crashing', ()=> {
        const div = document.createElement('div');
        ReactDOM.render(<DemonymApp />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

});