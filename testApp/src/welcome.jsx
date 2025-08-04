import React from "react";

function Welcome(props) {

  function greet(){
    alert(`welcome ${props.name}!`);
  }
  return (
    <div>
      <button onClick={greet}>say welcome</button>
    </div>
  );
}

export default Welcome;
