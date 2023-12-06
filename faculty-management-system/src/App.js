import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Structure/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/:type" />
          <Route path="/:type/:ty" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
