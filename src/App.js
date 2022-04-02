import logo from './logo.svg';
import './App.css';
import { Form } from './component/form';
import { InfoList } from './component/infoList';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";
import { Nav } from './component/nav';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Nav/>
      
        <Routes>
          <Route exact path="/" element={<><Form/></>}/>
          <Route exact path="/list" element={<><InfoList/></>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
