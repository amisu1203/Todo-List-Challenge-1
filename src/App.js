import "./App.css";
import Done from "./components/Done";
import Header from "./components/Header";
import Working from "./components/Working";

function App() {
  return (
    <div className="App">
      <Header />
      <Working />
      <Done />
    </div>
  );
}

export default App;
