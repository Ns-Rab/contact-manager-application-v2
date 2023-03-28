
import './App.css';
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import SignUp from './components/SignUp/SignUp';
import NotFound from './components/NotFound/NotFound';
import Login from './components/Login/Login';



function App() {
  return ( <div className="App">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={ <SignUp/> } />
      <Route path="/login" element={ <Login/> } />
      <Route path="*" element={<NotFound />} />

    
    </Routes>
  </div>);
};

export default App;
