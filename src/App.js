import logo from './logo.svg';
import { Homepage } from './page/Homepage';
import './App.css';
import {Routes,Route} from "react-router-dom"

function App() {
  const MyRouter = () => {
    return (
      <div className="App">
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="about" element={<div>About</div>} />
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
