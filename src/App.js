import logo from './logo.svg';
import { Homepage } from './page/Homepage';
import { Login } from './page/Login'
import { Location } from './component/Location';
import { Pokemon } from './component/Pokemon';
import Fight  from './page/Fight'
import './App.css';
import {Routes,Route} from "react-router-dom"

function App() {
  const MyRouter = () => {
    return (
      <div>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/" element={<Homepage/>} />
        <Route path="/location" element={<Location />}/>
        <Route path="/location/:id" element={<Pokemon/>}/>
        <Route path="/fight" element={<Fight />}/>
      </Routes>
    </div>)
}
  return (
    <>
    {/* <Homepage /> */}
    <MyRouter />
    </>
  );
}

export default App;
