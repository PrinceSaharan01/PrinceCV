import './App.css';
import { Routes,Route, HashRouter } from 'react-router-dom';
import Home from './Components/Home';
import Error404 from './Components/Error404';
import prince from "./images/Prince.png"

function App() {
  return (
    <>
    <div className='background-color-layer' style={{backgroundImage:`url(${prince})`}} >
      {/* <h1>Hello</h1> */}
      
    </div>
      <HashRouter>
      <Routes>
        <Route exact path='/' element={<Home></Home>}></Route>
        <Route path='*' element={<Error404></Error404>}></Route>
      </Routes>
      </HashRouter>
    </>
  );
}

export default App;
