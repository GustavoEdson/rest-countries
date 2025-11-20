import "./App.css";
import { Card } from "./components/Card";
import { Input } from "./components/Input";
import { Nav } from "./components/Nav";
import { Select } from "./components/Select";
import { Home } from "./page";
import { callApi } from "./util/api";

function App() {
  return (
    <>
      <Nav />
      <Input />
      <Select />
      <Home />
    </>
  );
}

export default App;
