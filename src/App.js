import React from 'react';
import Split from './composition/Split';
import Tooltip from './composition/Tooltip';
import Messages from './Messages/Messages';
import './App.css';

class App extends React.Component {
  render() {
     //making 2 instances of <Tooltip> out here to showcase assigning JSX to Javascript variables and then injecting them as JSX template {variables}..
    /*Tooltip "color=pink" prop: So this is similar to the flexBasis for the <Split>. "color" is really "props.color" inside of <Tooltip> sourcecode. 
      We set it up as a variable basically, so that it can accept whatever value it's give here in the instance and that value gets stamped into the     style={{ color: props.color }}      code in the source-code */
    
    const firstTooltip = (
      <Tooltip message="Hi, this is message#1" color="pink"> 
        easter egg#1
      </Tooltip>
    )
  
    const secondTooltip = (
      <Tooltip message="Hi, this is message#2">
        Egg mensaje numero Dos
      </Tooltip>
    )
  
    const thirdTooltip = (
      <Tooltip message="Pompis Pie!" color="#00adff">
        Secret here...
      </Tooltip>
    )
  
    return (
      <main className='App'>
        
        <Split className="left" flexBasis={2}>                            {/* This flexBasis is a little tricky and requires style={} attribute in the <Split> source code so that it can accept it here  */}
          #1: This is the ({firstTooltip}) content of the Split component module ({thirdTooltip}) thing yo!
          <Tooltip message="Secret message bubble" color="red">                        {/*Creating an instance of Tooltip directly inside the App */}
            Hover over me
          </Tooltip>
        </Split>
  
        <Split className="right">
          #2: This is the second ({secondTooltip}) instance of the Split component module thing braaaa.
        </Split>

        <Messages name="Messages" unread={0}></Messages>
        <Messages name="Notifications" unread={10}></Messages>
  
      </main>
    );
  }
 
}

export default App; //Default Export: exporting the "App" module so that it can be imported into the index.js. (this differs from named exports)
