import logo from './logo.svg';
import './App.css';
import Greet from './greet'
import Greeting from './Greeting'
import GreetClass from './GreetClass';
function App() {

  const oneHandler=()=>{
    alert("First clicked");
  }
  const secondHandler=()=>{
    alert("second clicked");
  }
  return (
    <div className="App">
     Hello to react
     <Greeting name="Code" handleClick={oneHandler} value="Submit"/>
     <Greeting name="John" value="Send"  handleClick={secondHandler}/>

<GreetClass name="Sample"/>

    

    </div>
  );
}

export default App;
