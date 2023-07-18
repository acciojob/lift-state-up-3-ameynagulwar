import React from "react";

const Child2 = ({changeOption}) => {

    // function show(){
    //     changeOption("Option 2")
    // }

    return(
        <div className="child2">
            <h2>Child Component 2</h2>
            <button onClick={() => changeOption("Option 2")}>Option 2</button>
        </div>
    )
}

export default Child2;