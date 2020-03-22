import React from 'react';
import ReactDOM from 'react-dom';
import Tabs2 from './Tabs2';
import renderer from 'react-test-renderer';// installed separately 
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json'; // installed separately 

/*
    📷 Snapshots  x3
*/

describe('TestSuite: Tabs2 Component', ()=> {
    //setup any variables here:
    const tabs = [{name:'Sonic', content: 'Fastest thing Alive', avatar: "https://b7.pngbarn.com/png/547/724/sonic-the-hedgehog-2-sonic-3d-sonic-mania-sonic-cd-sonic-the-hedgehog-png-clip-art.png"}, {name:'Tails', content: 'Loyal and Hyper-intelligent Flying Fox', avatar: "https://vignette.wikia.nocookie.net/crystal-crossover/images/c/cb/ManiaTailsFront.png/revision/latest?cb=20180805022514"}, {name:'Amy', content: 'Sonics Biggest Fan. Hammer-weilding Pink Hedgehog', avatar: 'https://b7.pngbarn.com/png/319/82/amy-rose-sonic-colors-sonic-chaos-sonic-cd-knuckles-the-echidna-sonic-the-hedgehog-png-clip-art.png'}, {name:'Robotnik', content: 'Crazed Genius, obsessed with robotisizing all life and ridding the world of Sonic'}, {name:'Shadow', content: 'Sonics adversary. Created by Robotnik to become the ultimate lifeform'}, {name:'Sally', content: 'Rightful Princess of Mobius and one of the Leaders in the Freedom Fighters against Robotnik. Sonics Best friend.'}];

    it('Smoke: renders without crashing', ()=> {
        const div = document.createElement('div');

        ReactDOM.render(<Tabs2 />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('📷Snapshot: renders empty given no tabs props', ()=> {
        //wrap your component in an enzyme shallow wrapper where it's children wont be present.
        const enzWrapper = shallow(<Tabs2/>);
        //in order for Jest's Snapshots to work with the enzyme wrapper, we need to convert it to Json format using a method called toJson() from the 'enzyme-to-json' library installed separately .
        // like so... toJson(enzWrapper);
        // then we simply Jest snapshot test it like before and pass in Json(enzwrapper) instead of tree...
        expect(toJson(enzWrapper)).toMatchSnapshot();
    })


    it('📷Snapshot: renders the first tab by default', ()=> {
        const enzWrapper = shallow(<Tabs2 tabs={tabs}/>);
        expect(toJson(enzWrapper)).toMatchSnapshot();
    })

    /********We are REPLACING react-test-renderer code with enzyme code since enzyme also renders when we create the shallow wrapper. The expect().toMatchSnapshot() is JEST btw so we will still use that code to create .snap files (snapshots). */
    
    // it('Snapshot: renders the first tab by default', ()=> {

    //     //create tree and mount the <Tabs/> with props in it.. <Tabs tabs={tabs}/>
    //     const tree = renderer.create(<Tabs2 tabs={tabs} />);

    //     //this statement is the test and it's also generating a snapshot with the last bit.
    //     expect(tree).toMatchSnapshot();

    // });

    it('📷Snapshot: closes the first tab and opens ANY clicked tab', ()=> {
        //create the enzyme wrapper with props loaded.
        const enzWrapper = shallow(<Tabs2 tabs={tabs} />);
        //Next: traverse to one of the buttons to simulate a physical click...

        //This .debug() shows the HTML for the current wrapper's .find() selection.
        //  console.log(enzWrapper.find('button').debug() would show all buttons.
        //  console.log(enzWrapper.find('button').at(2).debug())  would show just the button at index#2 which is the 3rd button.
        console.log(enzWrapper.find('button').at(2).debug())

        //Traverse to the "3rd" button at index 2 and Simulate a Click!
        enzWrapper.find('button').at(2).simulate('click');

        //Make a Json version of the above simulation and pass it over to Jest's expect() testing so Jest can compare it to the snapshot it's about to take with toMatchSnapshot()📷
        expect(toJson(enzWrapper)).toMatchSnapshot();


    })

})