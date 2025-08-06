import { useState } from "react";
import "./App.css";
import CounterApp from "./conter-app.jsx";
import Welcome from "./welcome.jsx";



function App() {
 

  // The App component renders the Welcome component and buttons to increment, decrement, and reset the count
  
  return (
    <div>
      <CounterApp />
      <Welcome name="User" />
      
    </div>
    
  )

}

export default App;


