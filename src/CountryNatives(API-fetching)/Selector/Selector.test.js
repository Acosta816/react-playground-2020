import React from 'react';
import ReactDOM from 'react-dom';
import Selector from './Selector';


describe('TestSuite: Selector Component', ()=> {

    it('SMOKE: renders without crashing', ()=> {
        const div = document.createElement('div');
        ReactDOM.render(<Selector/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });


});

