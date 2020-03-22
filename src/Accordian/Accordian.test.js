import React from 'react';
import ReactDOM from 'react-dom';
import Accordian from './Accordian';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('TestSuite: Accordian Component', ()=> {

    //declare all test variables here
    const sections = [{name:'Sonic', content: 'Fastest thing Alive', avatar: "https://media2.giphy.com/media/K3B3v1IUkroE8/giphy.gif?cid=790b7611a0141074eddd3986bac2408e78aa2c9921709e38&rid=giphy.gif"}, {name:'Tails', content: 'Loyal and Hyper-intelligent Flying Fox', avatar: "https://66.media.tumblr.com/a2b506d774c4840d65527670dd77076e/tumblr_pc8gylOts11qjztgpo1_400.gifv"}, {name:'Amy', content: 'Sonics Biggest Fan. Hammer-weilding Pink Hedgehog', avatar: 'https://appstickers-cdn.appadvice.com/454316134/827794092/56d7cab123afdb67c732b5ceb21206ef-1.gif'}, {name:'Robotnik', content: 'Crazed Genius, obsessed with robotisizing all life and ridding the world of Sonic', avatar: 'https://thumbs.gfycat.com/RepentantPepperyBangeltiger.webp'}, {name:'Shadow', content: 'Sonics adversary. Created by Robotnik to become the ultimate lifeform'}, {name:'Sally', content: 'Rightful Princess of Mobius and one of the Leaders in the Freedom Fighters against Robotnik. Sonics Best friend.'}];

    it('Smoke: renders without crashing', ()=> {
        const div = document.createElement('div');

        ReactDOM.render(<Accordian />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('Snapshot: should render empty, given no sections prop', ()=> {
        const enzWrapper = shallow(<Accordian />);
        expect(toJson(enzWrapper)).toMatchSnapshot();
    })

    it('Snapshot: should render with first tab open', ()=> {
        const enzWrapper = shallow(<Accordian sections={sections} />);
        expect(toJson(enzWrapper)).toMatchSnapshot();
    });

    it('Snapshot: should close first tab and open 4th tab when 4th button is clicked on', ()=> {
        const enzWrapper = shallow(<Accordian sections={sections}/>);

        enzWrapper.find('button').at(3).simulate('click');

        expect(toJson(enzWrapper)).toMatchSnapshot();
    })

    it('Snapshot: should close first tab and open 2nd tab when 2nd button is clicked on', ()=> {
        const enzWrapper = shallow(<Accordian sections={sections}/>);

        enzWrapper.find('button').at(1).simulate('click');

        expect(toJson(enzWrapper)).toMatchSnapshot();
    })



})