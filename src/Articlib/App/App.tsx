import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { HomePage } from "../Pages/Home/HomePage";
import { Navbar } from "../Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

function App(): JSX.Element {
  return (
    <div className="App">
      <Navbar />
      <HomePage />
    </div>
  );
}

export default App;
