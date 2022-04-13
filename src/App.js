import logo from "./logo.svg";
import "./App.css";
import MultiStepForm from "./Components/MultiStepForm";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MultiStepForm />
        {/* <CheckForm /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
