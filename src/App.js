import { Routes, Route } from 'react-router-dom';
import './App.css';
import Detail from './components/Detail';
import Header from './components/Header';
import Home from './components/Home';
import { Loading } from './components/Loading';
import Login from './components/Login';

function App() {
  const loggedIn = window.localStorage.getItem("isLoggedIn");
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={loggedIn? <Home/> :<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
