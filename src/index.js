import React from 'react'; //creating a variable named "React" (name is irrevlivent/of our choosing) and assigning it's value to equal the 'react' directory folder residing in node_modules.
import ReactDOM from 'react-dom'; //Since this file is the only one needing the ReactDOM.render() method, it's the only place needing ReactDOM imported. The other modules only return content, they don't render it.
import './index.css'; //This is a different kind of import that is basically equivilent to linking enabled by "Webpack" allowing us to imort a CSS file into a .js file and use it's styles like we would in an HTML file.
import App from './App'; //relative import: must provide a dot-slash ./path relative to the index.js file. Otherwise, Javascript will look in the node_modules folder by default. Suffice to say, it requires an explicit export(named or default) statement from the module being exported.

import TheDate from './state/TheDate';
import Counter from './Counter/Counter';
import HelloWorld from './State-Drills/HelloWorld';
import Bomb from './State-Drills/Bomb';
import RouletteGun from './State-Drills/RouletteGun';
import Tabs from './state/Tabs/Tabs';
import Tabs2 from '../src/practice/Tabs2';
import Accordian from './Accordian/Accordian';

// ReactDOM.render(<App />, document.getElementById('root'));

// ReactDOM.render(<TheDate />, document.getElementById('root'));

// ReactDOM.render(<Counter />, document.getElementById('root'));

// ReactDOM.render(<HelloWorld />, document.getElementById('root'));

// ReactDOM.render(<Bomb />, document.getElementById('root'));

// ReactDOM.render(<RouletteGun />, document.getElementById('root'));

const tabs = [{name:'Sonic', content: 'Fastest thing Alive', avatar: "https://b7.pngbarn.com/png/547/724/sonic-the-hedgehog-2-sonic-3d-sonic-mania-sonic-cd-sonic-the-hedgehog-png-clip-art.png"}, {name:'Tails', content: 'Loyal and Hyper-intelligent Flying Fox', avatar: "https://vignette.wikia.nocookie.net/crystal-crossover/images/c/cb/ManiaTailsFront.png/revision/latest?cb=20180805022514"}, {name:'Amy', content: 'Sonics Biggest Fan. Hammer-weilding Pink Hedgehog', avatar: 'https://b7.pngbarn.com/png/319/82/amy-rose-sonic-colors-sonic-chaos-sonic-cd-knuckles-the-echidna-sonic-the-hedgehog-png-clip-art.png'}, {name:'Robotnik', content: 'Crazed Genius, obsessed with robotisizing all life and ridding the world of Sonic'}, {name:'Shadow', content: 'Sonics adversary. Created by Robotnik to become the ultimate lifeform'}, {name:'Sally', content: 'Rightful Princess of Mobius and one of the Leaders in the Freedom Fighters against Robotnik. Sonics Best friend.'}];

const sections = [{name:'Sonic', content: 'Fastest thing Alive', avatar: "https://media2.giphy.com/media/K3B3v1IUkroE8/giphy.gif?cid=790b7611a0141074eddd3986bac2408e78aa2c9921709e38&rid=giphy.gif"}, {name:'Tails', content: 'Loyal and Hyper-intelligent Flying Fox', avatar: "https://66.media.tumblr.com/a2b506d774c4840d65527670dd77076e/tumblr_pc8gylOts11qjztgpo1_400.gifv"}, {name:'Amy', content: 'Sonics Biggest Fan. Hammer-weilding Pink Hedgehog', avatar: 'https://appstickers-cdn.appadvice.com/454316134/827794092/56d7cab123afdb67c732b5ceb21206ef-1.gif'}, {name:'Robotnik', content: 'Crazed Genius, obsessed with robotisizing all life and ridding the world of Sonic', avatar: 'https://thumbs.gfycat.com/RepentantPepperyBangeltiger.webp'}, {name:'Shadow', content: 'Sonics adversary. Created by Robotnik to become the ultimate lifeform'}, {name:'Sally', content: 'Rightful Princess of Mobius and one of the Leaders in the Freedom Fighters against Robotnik. Sonics Best friend.'}];


// ReactDOM.render(<Tabs  tabs={tabs}/>, document.getElementById('root'));
// ReactDOM.render(<Tabs2 tabs={tabs} />, document.getElementById('root'));

ReactDOM.render(<Accordian sections={sections} />, document.getElementById('root'));
