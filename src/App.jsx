import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "./pages/Layout";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Today />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
