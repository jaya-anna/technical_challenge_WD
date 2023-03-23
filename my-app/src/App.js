import './App.css';
import {Routes, Route} from "react-router-dom";
import Phones from "./pages/Phones";
import PhoneDetails from './pages/PhoneDetails';

function App() {
  return (
    <div className="App">
<Routes>
<Route path='/' element={<Phones/>}/>
<Route path='/:phoneId' element={<PhoneDetails/>}/>
</Routes>
    </div>
  );
}

export default App;
