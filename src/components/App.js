
import React from "react";
import './../styles/App.css';

const App = () => {
  let [option,setOption] = useState("")
    

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
