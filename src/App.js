import logo from './logo.svg';
import { Homepage } from './page/Homepage';
import { Location } from './component/Location';
import { Pokemon } from './component/Pokemon'
import './App.css';
import {Routes,Route} from "react-router-dom"

function App() {
  const MyRouter = () => {
    return (
      <div>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/location" element={<Location />}/>
        <Route path="/location/:id" element={<Pokemon/>}/>
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
