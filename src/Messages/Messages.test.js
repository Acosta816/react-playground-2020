import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Messages from './Messages';

describe('TestSuite: Messages Component', ()=> {

    it('SMOKE: should render without crashing', ()=> {
        const div = document.createElement('div');
    
        ReactDOM.render(<Messages />, div);
    
        ReactDOM.unmountComponentAtNode(div);
    });
    
    it('SNAPSHOT#01: renders the UI as expected compared to the saved shot', ()=> {
    
        //Render the component and create a human-readable JSON file.
        const tree = renderer.create( <Messages name="Messages" unread={4} /> ).toJSON();
    
        //Compare rendered component to the saved version of that component.
        expect(tree).toMatchSnapshot();
    })
    
    it('SNAPSHOT#02: renders the UI as expected with no unreads', () => {
        const tree = renderer
          .create(<Messages name="Messages" unread={0}/>)
          .toJSON();
        expect(tree).toMatchSnapshot();  
      });
});

