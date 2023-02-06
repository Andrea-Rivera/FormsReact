import MainForm from "./components/pages/MainForm";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <h1>Forms</h1>
      <p>
        The submit button will only be activated once the user has entered the
        input correctly.
      </p>
      <MainForm />
    </div>
  );
};

export default App;
