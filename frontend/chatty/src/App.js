import "./App.css";
import { useState, useEffect } from "react";
import io from "socket.io-client";
import { nanoid } from "nanoid";
//connecting with server
const socket = io.connect("https://localhost:5000");
function App() {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Chatty app</h1>
        <form>
          <input
            type="text"
            name="chat"
            placeholder="send text"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          ></input>
          <button type="submit">send</button>
        </form>
      </header>
    </div>
  );
}

export default App;
