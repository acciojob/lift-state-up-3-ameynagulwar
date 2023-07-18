
import React,{useState} from "react";
import './../styles/App.css';
import Child1 from "./Child1.js";
import Child2 from "./Child2.js";

const App = () => {
  let [option,setOption] = useState("")
    console.log(option)

    return (
        <div className="parent">
            <h1>Parent Components</h1>
            <Child1 changeOption={setOption}/>
            <Child2 changeOption={setOption}/>
            <p>Selected Option: {option}</p>
        </div>
    )
}

export default App
