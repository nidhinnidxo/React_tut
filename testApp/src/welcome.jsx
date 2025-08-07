import React from "react";

function Welcome(props) {

  function greet(){
    alert(`welcome ${props.name}!`);
  }
  return (
    <div className="welcome">
      <button class = "welcome_button" onClick={greet}>Say Hello</button>
    </div>
  );
}

export default Welcome;
