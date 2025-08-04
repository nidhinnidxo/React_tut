import React from "react";

function InputHandler(props) {
  const [name, setName] = React.useState("");
  const [greeting, setGreeting] = React.useState("");

  const handleGreet = () => {
    if (name.trim() !== "") {
      const newGreeting = `Hello ${name}!, welcome to React.`;
      setGreeting(newGreeting);
      alert(newGreeting);
      setName(""); // Clear the input field after greeting
    } else {
      alert("Please enter a name.");
    }
  };

  return (
    <div>
      
    <input
      type="text"
      value={name}
      onChange={(e) => setName(e.target.value)}
      placeholder="Enter your name"
    />
    <div>
      <button onClick={handleGreet}>message</button>
    </div>
    </div>
  );
}

export default InputHandler;
