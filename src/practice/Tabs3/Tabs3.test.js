import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Tabs3 from './Tabs3';


describe('TestSuite: Tabs3 component', ()=> {
    const tabs = [{name:'Sonic', content: 'Fastest thing Alive', avatar: "https://b7.pngbarn.com/png/547/724/sonic-the-hedgehog-2-sonic-3d-sonic-mania-sonic-cd-sonic-the-hedgehog-png-clip-art.png"}, {name:'Tails', content: 'Loyal and Hyper-intelligent Flying Fox', avatar: "https://vignette.wikia.nocookie.net/crystal-crossover/images/c/cb/ManiaTailsFront.png/revision/latest?cb=20180805022514"}, {name:'Amy', content: 'Sonics Biggest Fan. Hammer-weilding Pink Hedgehog', avatar: 'https://b7.pngbarn.com/png/319/82/amy-rose-sonic-colors-sonic-chaos-sonic-cd-knuckles-the-echidna-sonic-the-hedgehog-png-clip-art.png'}, {name:'Robotnik', content: 'Crazed Genius, obsessed with robotisizing all life and ridding the world of Sonic'}, {name:'Shadow', content: 'Sonics adversary. Created by Robotnik to become the ultimate lifeform'}, {name:'Sally', content: 'Rightful Princess of Mobius and one of the Leaders in the Freedom Fighters against Robotnik. Sonics Best friend.'}];

    it('SMOKE: renders without crashing', ()=> {
        const div = document.createElement('div');
        ReactDOM.render(<Tabs3 />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('Snap1: renders empty given no tabs', ()=> {
        const wrapper = shallow(<Tabs3/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('Snap2: renders first tab by default', ()=> {
        const wrapper = shallow(<Tabs3 tabs={tabs}/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('Snap3: closes first tab and opens 3rd tab', ()=> {
        const wrapper = shallow(<Tabs3 tabs={tabs} />);
        wrapper.find('button').at(2).simulate('click'); //tranversing the wrapper and clicking the button at index#2 (third button)
        expect(toJson(wrapper)).toMatchSnapshot();
    })

})