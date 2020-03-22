import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('SMOKE: should render without crashing', ()=> {
    const div = document.createElement('div'); //create a mounting element for the App to mount onto to.

    ReactDOM.render(<App />, div); //mount the App onto the div. This is the actual test. If something is awry, it will fail here.

    ReactDOM.unmountComponentAtNode(div); //clean up the code. Unmount it.


})