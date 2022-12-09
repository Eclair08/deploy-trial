import logo from './logo.svg';
import { Homepage } from './page/Homepage';
import './App.css';
import {Routes,Route} from "react-router-dom"

function App() {
  const MyRouter = () => {
    return (
    <Routes>
      <Route path="/" element={<Homepage/>}/>
    </Routes>)
}
  return (
    <>
    {/* <Homepage /> */}
    <MyRouter />
    </>
  );
}

export default App;
