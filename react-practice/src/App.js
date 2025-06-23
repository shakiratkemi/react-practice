import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import Message from "./components/Message";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      <Counter />
      <Greet name="Farhan" surName="Adeyemi">
        <p>I am five years old</p>
        <p>I am in Lotus Class</p>
      </Greet>
      <Greet name="Faaiz" surName="Adeyemi">
        <p>I am four years old</p>
        <p>I am in Primrose Class</p>
      </Greet>
      <Welcome name="Farhan" surName="Adeyemi" />
      <Welcome name="Faaiz" surName="Adeyemi" />
      <Hello />
      <Message />
    </div>
  );
}

export default App;
