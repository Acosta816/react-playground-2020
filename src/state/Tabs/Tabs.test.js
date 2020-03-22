import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import Tabs from './Tabs';


describe('🦾TestSuite: Tabs Component', ()=> {
    //variables for below tests
    const tabsProp = [{name:'Sonic', content: 'Fastest thing Alive'}, {name:'Tails', content: 'Loyal and Hyper-intelligent Flying Fox'}, {name:'Amy', content: 'Sonics Biggest Fan. Hammer-weilding Pink Hedgehog'}, {name:'Robotnik', content: 'Crazed Genius, obsessed with robotisizing all life and ridding the world of Sonic'}, {name:'Shadow', content: 'Sonics adversary. Created by Robotnik to become the ultimate lifeform'}, {name:'Sally', content: 'Rightful Princess of Mobius and one of the Leaders in the Freedom Fighters against Robotnik. Sonics Best friend.'}];


    it('🔥SMOKE: renders without errors', ()=> {
        const div = document.createElement('div');

        ReactDOM.render(<Tabs/>, div);

        ReactDOM.unmountComponentAtNode(div);

    });

    it('📷EnzSnap#01: renders empty given no tabs props passed in', () => {
        const wrapper = shallow(<Tabs />);
        expect(toJSON(wrapper)).toMatchSnapshot();
    });

    it('📷EnzSnap#02: renders first tab by default', ()=> {
        const wrapper = shallow(<Tabs tabs={tabsProp} />)
        expect(toJSON(wrapper)).toMatchSnapshot();
    });

    //Enzyme exports a method called "shallow" which allows you to wrap your isolated component is a 'jquery-like' wrapper to render the component by itself.
    //This is known as shallow-rendering (rendering just the component without the children). This was difficult to do before enzyme. once the wrapper is created, we reference that 
    //wrapper to do different thing with it like traverse the component to find perhaps a certain button using css selector just like jquery, like so... wrapper.find('button').at(1).simulate('click');
    //We found the 'button' at index#1 and simulated a 'click' on that button.

    it('🦠💥EnzEvent#01: closes first tab and opens any clicked tab', ()=> {
        const wrapper= shallow(<Tabs tabs={tabsProp} />); 
        wrapper.find('button').at(1).simulate('click');
        expect(toJSON(wrapper)).toMatchSnapshot();

        console.log('>>> WRAPPER <<<');
        console.log(wrapper.debug());
        console.log('>>> FIND(BUTTON) <<<');
        console.log(wrapper.find('button').at(1).debug());
    })



})