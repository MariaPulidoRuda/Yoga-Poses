import "./App.css";
import { Outlet } from "react-router-dom"
import Nav from "./components/Nav";
//import Poses from "./components/pages/Poses"

import './components/Nav.css'


function App() {
  return <div>
  <>
  <header><Nav /></header>
 
<main><Outlet /></main>
</>
  </div>
  
}
export default App;
