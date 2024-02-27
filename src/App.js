
import './App.css';

import { BrowserRouter,Link,Outlet } from 'react-router-dom';
import CustomRoutes from './cusRoutes';
import { vowels } from './parameter';


function App() {
let name="puneeth";
console.log(vowels("hello"));
 
  return (
    <BrowserRouter>
      <Link to={`/college/${name}`}><button>User data</button></Link>
      <CustomRoutes></CustomRoutes>
      <Outlet></Outlet>
    </BrowserRouter>
  );
}

export default App;
