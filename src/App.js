import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import StudentLoginPage from "./pages/StudentLoginPage/StudentLoginPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/studentlogin" exact element={<StudentLoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
