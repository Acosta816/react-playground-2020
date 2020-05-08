import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Accordian2 from './Accordian2';
import Accordian from '../Accordian/Accordian';


describe('TestSuite: Accordian2 component:', ()=> {
    const sections = [{name:'Sonic', content: 'Fastest thing Alive', avatar: "https://media2.giphy.com/media/K3B3v1IUkroE8/giphy.gif?cid=790b7611a0141074eddd3986bac2408e78aa2c9921709e38&rid=giphy.gif"}, {name:'Tails', content: 'Loyal and Hyper-intelligent Flying Fox', avatar: "https://66.media.tumblr.com/a2b506d774c4840d65527670dd77076e/tumblr_pc8gylOts11qjztgpo1_400.gifv"}, {name:'Amy', content: 'Sonics Biggest Fan. Hammer-weilding Pink Hedgehog', avatar: 'https://appstickers-cdn.appadvice.com/454316134/827794092/56d7cab123afdb67c732b5ceb21206ef-1.gif'}, {name:'Robotnik', content: 'Crazed Genius, obsessed with robotisizing all life and ridding the world of Sonic', avatar: 'https://thumbs.gfycat.com/RepentantPepperyBangeltiger.webp'}, {name:'Shadow', content: 'Sonics adversary. Created by Robotnik to become the ultimate lifeform', avatar: "https://pa1.narvii.com/6495/a59913f75290d830cfb61f2651917c6b2ce3400b_hq.gif"}, {name:'Sally', content: 'Rightful Princess of Mobius and one of the Leaders in the Freedom Fighters against Robotnik. Sonics Best friend.', avatar: "https://thumbs.gfycat.com/TiredFlakyBlesbok-max-1mb.gif"}];

    it('SMOKE: renders without crashing', ()=> {
        const div = document.createElement('div');
        ReactDOM.render(<Accordian/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('Snap1: renders empty with no sections prop', ()=> {
        const wrapper = shallow(<Accordian2 />);
        expect(toJson(wrapper)).toMatchSnapshot();
    })

    it('Snap2: closes first section and opens third section', ()=> {
        const wrapper = shallow(<Accordian2 sections={sections}/>);
        console.log(wrapper.find('button').at(2).debug());
        wrapper.find('button').at(2).simulate('click');
        expect(toJson(wrapper)).toMatchSnapshot();
    })

})