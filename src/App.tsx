import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import Header from "./components/shared/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/:email?" element={<HomeScreen />} />
      </Routes>
    </div>
  );
}

export default App;
