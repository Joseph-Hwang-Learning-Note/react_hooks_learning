import './App.css';
import React, { useState } from "react";
import useInput from "./hooks/useInput";
import useTabs from "./hooks/useTabs";
import useTitle from "./hooks/useTitle";
import useClick from "./hooks/useClick";
import useConfirm from "./hooks/useConfirm";
import usePreventLeave from "./hooks/usePreventLeave";
import useBeforeLeave from "./hooks/useBeforeLeave";
import useFadeIn from './hooks/useFadeIn';


const content = [
  {
    tab:"Section 1",
    content:"I'm the content of the Section 1"
  },
  {
    tab:"Section 2",
    content:"I'm the content of the Section 2"
  }
];


const App = () => {

  const constraints = (value) => {
    return !value.includes("@");
  }
  const name = useInput("Mr.",constraints);

  const { currentItem, changeItem } = useTabs(0,content);

  const titleUpdater = useTitle("Loading...")
  setTimeout(() => titleUpdater("Home"),5000)

  // place for useTitle

  const onClick = () => {
    console.log("clicked!");
  }
  const title = useClick(onClick);

  const deleteWord = () => {
    console.log("Deleting the word");
  }
  const abort =()=>{
    console.log("Aborted");
  }
  const confirmDelete = useConfirm("Are you sure?",deleteWord,abort);

  const {enablePrevent, disablePrevent} = usePreventLeave();

  const begForLife = () => console.log("pls don't leave");
  useBeforeLeave(begForLife);

  const fadeInH1 = useFadeIn(1.5,0.5);

  return (
    <div>
      <div className="useState">
        <h1>useState</h1>
        <p>Changes the state of something</p>

          <div className="useInput">
          <h2>useInput</h2>
          <input placeholder="Name" {...name} /><br></br>
          </div>

          <div className="useTabs">
            <h2>useTabs</h2>
              {content.map((section,index) => {
              return <button onClick={() => changeItem(index)}>{section.tab}</button>
            })}
            <div>{currentItem.content}</div>
          </div>
      </div>


      <div className="useEffect">
        <h2>useEffect</h2>
        <p>Do the role of componetDidMount/DidUpdate/WillUnmount
          when got no dependencies, 
          and componetDidMount/DidUpdate when got dependencies
        </p>

        <div className="useTitle">
          <h2>useTitle</h2>
          <p>title goes to "Home" at 5 seconds later</p>
        </div>

        <div className="useClick">
          <h2>useClick</h2>
          <p>Click the button and check the console!</p>
            <button ref={title}>Click here!</button>
        </div>

        <div className="useConfirm">
          <h2>useConfirm</h2>
          <p>Click the button, confirm or abort alert, and check the console!</p>
          <button onClick={confirmDelete}>Delete the world</button>
        </div>

        <div className="usePreventLeave">
          <h2>usePreventLeave</h2>
          <button onClick={enablePrevent}>Protect</button>
          <button onClick={disablePrevent}>Unprotect</button>
        </div>

        <div className="useBeforeLeave">
          <h2>useBeforeLeave</h2>
          <p>let your mouse cursor out of the screen 
            and check what happens at the console. 
            (clientY is less of equal than 0)</p>
        </div>

        <div className="useFadeIn">
          <h2>useFadeIn</h2>
          <p>Hello! will fade in with duration of 1.5s and delay of 0.5s</p>
          <h3 {...fadeInH1}>Hello!</h3>
        </div>

      </div>
    </div>
    

  );
};

// class AppUgly extends React.Component {
//   state = {
//     item:1
//   }
//   render() {
//     const {item} = this.state;
//     return(
//       <div>
//       <h1>item: {item}</h1>
//       <button onClick={this.incrementItem}>Increment</button>
//       <button onClick={this.decrementItem}>Decrement</button>
//     </div>
//     )
//   }
//   incrementItem= () => {
//     this.setState(state => {
//       return {
//         item:state.item +1
//       };
//     });
//   };
//   decrementItem= () => {
//     this.setState(state => {
//       return {
//         item:state.item =1
//       };
//     });
//   };
// }

export default App;
