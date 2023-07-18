import React from "react";

 const Child1 = ({changeOption}) =>{

    function display(){
        changeOption("Option 1")
    }

    return(
        <div className="child1">
            <h2>Child Component 1</h2>
            <button onClick={display}>Option 1</button>
        </div>
    )
 }

export default Child1;