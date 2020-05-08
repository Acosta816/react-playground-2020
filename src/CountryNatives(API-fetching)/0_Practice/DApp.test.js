import React from 'react';
import ReactDOM from 'react-dom';
import DApp from './DApp';


describe('TestSuite: DApp Component', ()=> {

    it('SMOKE: renders without crashing', ()=> {
        const div = document.createElement('div');
        ReactDOM.render(<DApp />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

})